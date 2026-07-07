import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "yahoo.com",
  "yahoo.com.br",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "globo.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
]);

const inputClassName =
  "h-12 rounded-md border-white/10 bg-white text-base text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-primary md:text-base";

const selectTriggerClassName =
  "h-12 rounded-md border-white/10 bg-white text-base text-neutral-950 focus:ring-primary md:text-base [&>span]:text-neutral-950 data-[placeholder]:text-neutral-500";

const selectContentClassName =
  "max-h-[260px] border-neutral-200 bg-white text-neutral-950 shadow-xl [&_[data-radix-select-viewport]]:bg-white";

const selectItemClassName =
  "text-neutral-950 focus:bg-primary/10 focus:text-neutral-950 data-[highlighted]:bg-primary/10";

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
  const rawDigits = value.replace(/\D/g, "");
  const digits = rawDigits.startsWith("55") && rawDigits.length > 11
    ? rawDigits.slice(2, 13)
    : rawDigits.slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function getPhoneError(value: string): string | null {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "Informe seu WhatsApp";
  if (digits.length < 10 || digits.length > 11) {
    return "Informe DDD + telefone. Ex: (27) 99999-9999";
  }
  if (digits.slice(0, 2) === "55") {
    return "Informe o DDD da cidade. Ex: 27 ou 28";
  }
  if (digits.length === 11 && digits[2] !== "9") {
    return "Celular com DDD deve ter 11 dígitos";
  }
  return null;
}

function splitFullName(value: string): { first_name: string; last_name: string; surname: string } {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  const [firstName = "", ...rest] = parts;
  const lastName = rest.join(" ");
  return {
    first_name: firstName,
    last_name: lastName,
    surname: lastName,
  };
}

function getCorporateEmailError(value: string): string | null {
  const email = value.trim().toLowerCase();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) return "Informe um e-mail corporativo válido";
  const domain = email.split("@")[1] || "";
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return "Use seu e-mail corporativo";
  }
  return null;
}

interface FormState {
  nome: string;
  telefone: string;
  email: string;
  instagram: string;
  faturamento_mensal: string;
  segmento: string;
}

const initial: FormState = {
  nome: "",
  telefone: "",
  email: "",
  instagram: "",
  faturamento_mensal: "",
  segmento: "",
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
    if (form.nome.trim().split(/\s+/).length < 2) next.nome = "Informe nome e sobrenome";
    const phoneError = getPhoneError(form.telefone);
    if (phoneError) next.telefone = phoneError;
    const emailError = getCorporateEmailError(form.email);
    if (emailError) next.email = emailError;
    if (!form.instagram.trim()) next.instagram = "Informe o Instagram da empresa";
    if (!form.faturamento_mensal) {
      next.faturamento_mensal = "Selecione uma faixa de faturamento";
    }
    if (!form.segmento) next.segmento = "Selecione o segmento";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const redirectToWhatsapp = (lead: {
    nome: string;
    empresa: string;
    instagram: string;
    faturamento_mensal: string;
    segmento: string;
    lead_session_id: string;
  }) => {
    const url = buildWhatsappUrl(lead);
    pushDataLayer("whatsapp_redirect", {
      lead_session_id: lead.lead_session_id,
      has_prefilled_whatsapp_message: true,
    });
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
    const phoneDigits = form.telefone.replace(/\D/g, "");
    const nameParts = splitFullName(form.nome);
    const payload = {
      nome: form.nome.trim(),
      ...nameParts,
      telefone: form.telefone.trim(),
      telefone_digits: phoneDigits,
      telefone_e164_digits: `55${phoneDigits}`,
      phone_country_code: "55",
      ddd: phoneDigits.slice(0, 2),
      email: form.email.trim().toLowerCase(),
      instagram: form.instagram.trim(),
      empresa: form.instagram.trim(),
      company_name: form.instagram.trim(),
      faturamento_mensal: form.faturamento_mensal,
      segmento: form.segmento,
      consent_lgpd: true,
      ...tracking,
    };

    pushDataLayer("form_submit", payload);

    try {
      await sendLeadToWebhook(payload);
    } catch (err) {
      console.warn("[LeadCapture] unexpected error:", err);
    } finally {
      setSubmitting(false);
      redirectToWhatsapp({
        nome: payload.nome,
        empresa: payload.empresa,
        instagram: payload.instagram,
        faturamento_mensal: payload.faturamento_mensal,
        segmento: payload.segmento,
        lead_session_id: tracking.lead_session_id,
      });
    }
  };

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-2xl border-white/10 bg-neutral-950 p-6 text-white shadow-2xl sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Fale com um especialista</DialogTitle>
          <DialogDescription className="text-neutral-400">
            Preencha seus dados para conversarmos sobre crescimento com mídia paga, automação e vendas.
          </DialogDescription>

        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div>
            <Input
              id="lc-nome"
              autoComplete="name"
              required
              value={form.nome}
              onChange={(e) => upd("nome", e.target.value)}
              placeholder="Qual é o seu nome e sobrenome?"
              aria-label="Nome e sobrenome"
              aria-invalid={Boolean(errors.nome)}
              className={inputClassName}
            />
            {errors.nome && <p className="mt-1.5 text-xs text-red-400">{errors.nome}</p>}
          </div>

          <div>
            <Input
              id="lc-email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => upd("email", e.target.value)}
              placeholder="Qual email da sua empresa?"
              aria-label="E-mail corporativo"
              aria-invalid={Boolean(errors.email)}
              className={inputClassName}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <Input
              id="lc-empresa"
              autoComplete="url"
              required
              value={form.instagram}
              onChange={(e) => upd("instagram", e.target.value)}
              placeholder="Qual o Instagram da sua empresa?"
              aria-label="Instagram da empresa"
              aria-invalid={Boolean(errors.instagram)}
              className={inputClassName}
            />
            {errors.instagram && <p className="mt-1.5 text-xs text-red-400">{errors.instagram}</p>}
          </div>

          <div>
            <div className="flex h-12 overflow-hidden rounded-md border border-white/10 bg-white focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-neutral-950">
              <div className="flex items-center gap-1 border-r border-neutral-200 px-3 text-sm font-semibold text-neutral-800">
                <span aria-hidden="true">🇧🇷</span>
                <span>+55</span>
              </div>
            <Input
              id="lc-tel"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={form.telefone}
              onChange={(e) => upd("telefone", maskPhone(e.target.value))}
                placeholder="Qual seu telefone?"
                aria-label="Telefone com DDD"
              aria-invalid={Boolean(errors.telefone)}
                className="h-full flex-1 rounded-none border-0 bg-white text-base text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base"
            />
            </div>
            {errors.telefone && <p className="mt-1.5 text-xs text-red-400">{errors.telefone}</p>}
          </div>

          <div>
            <Select
              value={form.faturamento_mensal}
              onValueChange={(v) => upd("faturamento_mensal", v)}
            >
              <SelectTrigger
                id="lc-faturamento"
                aria-label="Faturamento mensal"
                aria-invalid={Boolean(errors.faturamento_mensal)}
                className={selectTriggerClassName}
              >
                <SelectValue placeholder="Qual o faturamento mensal da sua empresa?" />
              </SelectTrigger>
              <SelectContent
                side="bottom"
                sideOffset={6}
                avoidCollisions={false}
                className={selectContentClassName}
              >
                <SelectItem className={selectItemClassName} value="40k-60k">R$ 40 mil a R$ 60 mil</SelectItem>
                <SelectItem className={selectItemClassName} value="60k-100k">R$ 60 mil a R$ 100 mil</SelectItem>
                <SelectItem className={selectItemClassName} value="100k-250k">R$ 100 mil a R$ 250 mil</SelectItem>
                <SelectItem className={selectItemClassName} value="250k-500k">R$ 250 mil a R$ 500 mil</SelectItem>
                <SelectItem className={selectItemClassName} value="500k-1m">R$ 500 mil a R$ 1 milhão</SelectItem>
                <SelectItem className={selectItemClassName} value="1m+">Mais de R$ 1 milhão</SelectItem>
              </SelectContent>
            </Select>
            {errors.faturamento_mensal && (
              <p className="mt-1.5 text-xs text-red-400">{errors.faturamento_mensal}</p>
            )}
          </div>

          <div>
            <Select
              value={form.segmento}
              onValueChange={(v) => upd("segmento", v)}
            >
              <SelectTrigger
                id="lc-segmento"
                aria-label="Segmento"
                aria-invalid={Boolean(errors.segmento)}
                className={selectTriggerClassName}
              >
                <SelectValue placeholder="Qual o seu segmento?" />
              </SelectTrigger>
              <SelectContent
                side="bottom"
                sideOffset={6}
                avoidCollisions={false}
                className={selectContentClassName}
              >
                <SelectItem className={selectItemClassName} value="e-commerce">E-commerce</SelectItem>
                <SelectItem className={selectItemClassName} value="negocios-locais">Negócios Locais</SelectItem>
                <SelectItem className={selectItemClassName} value="clinica-saude">Clínicas</SelectItem>
                <SelectItem className={selectItemClassName} value="moda-feminina">Moda Feminina</SelectItem>
                <SelectItem className={selectItemClassName} value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {errors.segmento && <p className="mt-1.5 text-xs text-red-400">{errors.segmento}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-md bg-primary text-base font-bold text-primary-foreground shadow-[0_0_24px_hsla(210,100%,55%,0.28)] hover:bg-primary/90 hover:shadow-[0_0_32px_hsla(210,100%,55%,0.42)]"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Falar com especialista
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
