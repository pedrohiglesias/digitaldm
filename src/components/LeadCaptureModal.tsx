import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  buildWhatsappUrl,
  collectTrackingContext,
  getLeadSessionId,
  pushDataLayer,
  sendLeadToWebhook,
  WHATSAPP_NUMBER,
} from "@/lib/leadTracking";

const OPEN_EVENT = "open-lead-form";

// Match all WhatsApp links pointing to our commercial number.
function isWhatsappCtaLink(el: Element | null): HTMLAnchorElement | null {
  if (!el) return null;
  const a = (el as HTMLElement).closest?.("a") as HTMLAnchorElement | null;
  if (!a) return null;
  const href = a.getAttribute("href") || "";
  if (href.includes(`wa.me/${WHATSAPP_NUMBER}`)) return a;
  if (href.includes("wzap.me/")) return a;
  return null;
}

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

interface FormState {
  nome: string;
  telefone: string;
  email: string;
  instagram: string;
  faturamento_mensal: string;
  consent: boolean;
}

const initial: FormState = {
  nome: "",
  telefone: "",
  email: "",
  instagram: "",
  faturamento_mensal: "",
  consent: true,
};

export function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const openedAt = useRef<number>(0);

  useEffect(() => {
    // Pre-warm session id + landing url
    getLeadSessionId();

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = isWhatsappCtaLink(target);
      if (!a) return;
      // Allow modifier-clicks (open in new tab) to behave normally
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      openModal();
    };

    const onOpenEvent = () => openModal();

    document.addEventListener("click", onClick, true);
    window.addEventListener(OPEN_EVENT, onOpenEvent);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(OPEN_EVENT, onOpenEvent);
    };
  }, []);

  const openModal = () => {
    setOpen(true);
    openedAt.current = Date.now();
    pushDataLayer("form_open", {
      form_id: "digitaldm_whatsapp_cta",
      form_name: "DigitalDM WhatsApp CTA",
      page_url: window.location.href,
    });
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) next.nome = "Informe seu nome";
    const phoneDigits = form.telefone.replace(/\D/g, "");
    if (phoneDigits.length < 10) next.telefone = "Telefone inválido";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email.trim())) next.email = "E-mail inválido";
    if (!form.consent) next.consent = "É necessário autorizar o contato";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const redirectToWhatsapp = (leadSessionId: string) => {
    const url = buildWhatsappUrl(leadSessionId);
    pushDataLayer("whatsapp_redirect", { lead_session_id: leadSessionId, url });
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setForm(initial);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    const tracking = collectTrackingContext();
    const payload = {
      nome: form.nome.trim(),
      telefone: form.telefone.trim(),
      telefone_digits: form.telefone.replace(/\D/g, ""),
      email: form.email.trim().toLowerCase(),
      instagram: form.instagram.trim().replace(/^@/, ""),
      faturamento_mensal: form.faturamento_mensal,
      consent_lgpd: form.consent,
      ...tracking,
    };

    pushDataLayer("form_submit", payload);

    try {
      await sendLeadToWebhook(payload);
    } catch (err) {
      console.warn("[LeadCapture] unexpected error:", err);
    } finally {
      setSubmitting(false);
      redirectToWhatsapp(tracking.lead_session_id);
    }
  };

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Antes de continuar para o WhatsApp</DialogTitle>
          <DialogDescription>
            Preencha rapidamente para nossos especialistas entrarem em contato.
          </DialogDescription>

        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="lc-nome">Nome *</Label>
            <Input
              id="lc-nome"
              autoComplete="name"
              value={form.nome}
              onChange={(e) => upd("nome", e.target.value)}
              placeholder="Seu nome completo"
            />
            {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lc-tel">Telefone / WhatsApp *</Label>
            <Input
              id="lc-tel"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.telefone}
              onChange={(e) => upd("telefone", maskPhone(e.target.value))}
              placeholder="(11) 98888-7777"
            />
            {errors.telefone && <p className="text-xs text-destructive">{errors.telefone}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lc-email">E-mail *</Label>
            <Input
              id="lc-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => upd("email", e.target.value)}
              placeholder="voce@empresa.com"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lc-ig">Instagram</Label>
            <Input
              id="lc-ig"
              value={form.instagram}
              onChange={(e) => upd("instagram", e.target.value)}
              placeholder="@suaempresa"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lc-faturamento">Quanto você fatura por mês?</Label>
            <Select
              value={form.faturamento_mensal}
              onValueChange={(v) => upd("faturamento_mensal", v)}
            >
              <SelectTrigger id="lc-faturamento" className="w-full">
                <SelectValue placeholder="Selecione uma faixa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="60k-100k">R$ 60 mil a R$ 100 mil</SelectItem>
                <SelectItem value="100k-250k">R$ 100 mil a R$ 250 mil</SelectItem>
                <SelectItem value="250k-500k">R$ 250 mil a R$ 500 mil</SelectItem>
                <SelectItem value="500k+">Mais de R$ 500 mil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
            <Checkbox
              checked={form.consent}
              onCheckedChange={(v) => upd("consent", Boolean(v))}
              className="mt-0.5"
            />
            <span>
              Autorizo a Digital DM a entrar em contato e tratar meus dados para atendimento, conforme a LGPD.
            </span>
          </label>
          {errors.consent && <p className="text-xs text-destructive -mt-2">{errors.consent}</p>}

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full rounded-xl"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Continuar para o WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
