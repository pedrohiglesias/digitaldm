import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight, ShieldCheck } from "lucide-react";
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
} from "@/lib/leadTracking";

const inputClassName =
  "h-12 rounded-lg border-neutral-200 bg-white text-base text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-primary md:text-base";

const selectTriggerClassName =
  "h-12 rounded-lg border-neutral-200 bg-white text-base text-neutral-950 focus:ring-primary md:text-base [&>span]:text-neutral-950 data-[placeholder]:text-neutral-500";

const selectContentClassName =
  "max-h-[260px] border-neutral-200 bg-white text-neutral-950 shadow-xl [&_[data-radix-select-viewport]]:bg-white";

const selectItemClassName =
  "text-neutral-950 focus:bg-primary/10 focus:text-neutral-950 data-[highlighted]:bg-primary/10";

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
  if (digits.length < 10 || digits.length > 11) return "Informe DDD + telefone. Ex: (27) 99999-9999";
  if (digits.slice(0, 2) === "55") return "Informe o DDD da cidade. Ex: 27 ou 28";
  if (digits.length === 11 && digits[2] !== "9") return "Celular com DDD deve ter 11 dígitos";
  return null;
}

function splitFullName(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  const [first_name = "", ...rest] = parts;
  const last_name = rest.join(" ");
  return { first_name, last_name, surname: last_name };
}

function getEmailError(value: string): string | null {
  const email = value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Informe um e-mail válido";
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

export function InlineLeadForm({ id = "form-diagnostico" }: { id?: string }) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const openedAt = useRef<number>(Date.now());

  // pre-warm
  getLeadSessionId();

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.nome.trim().split(/\s+/).length < 2) next.nome = "Informe nome e sobrenome";
    const phoneError = getPhoneError(form.telefone);
    if (phoneError) next.telefone = phoneError;
    const emailError = getEmailError(form.email);
    if (emailError) next.email = emailError;
    if (!form.instagram.trim()) next.instagram = "Informe o Instagram da empresa";
    if (!form.faturamento_mensal) next.faturamento_mensal = "Selecione uma faixa de faturamento";
    if (!form.segmento) next.segmento = "Selecione o segmento";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

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
      form_origin: "empresario_inline",
      ...tracking,
    };

    pushDataLayer("form_submit", payload);

    try {
      await sendLeadToWebhook(payload);
    } catch (err) {
      console.warn("[EmpresarioForm] error:", err);
    } finally {
      setSubmitting(false);
      const url = buildWhatsappUrl({
        nome: payload.nome,
        empresa: payload.empresa,
        instagram: payload.instagram,
        faturamento_mensal: payload.faturamento_mensal,
        segmento: payload.segmento,
        lead_session_id: tracking.lead_session_id,
      });
      pushDataLayer("whatsapp_redirect", {
        lead_session_id: tracking.lead_session_id,
        has_prefilled_whatsapp_message: true,
      });
      window.open(url, "_blank", "noopener,noreferrer");
      setForm(initial);
      setErrors({});
    }
  };

  return (
    <div
      id={id}
      className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,120,255,0.35)] ring-1 ring-black/5"
    >
      {/* accent bar */}
      <div className="absolute -top-px left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="mb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Diagnóstico executivo gratuito
        </div>
        <h3 className="mt-3 text-2xl font-bold text-neutral-950 leading-tight">
          Descubra onde seu funil está vazando
        </h3>
        <p className="mt-1 text-sm text-neutral-600">
          Preencha e nosso time envia o diagnóstico do seu funil em até 24h úteis.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            required
            value={form.nome}
            onChange={(e) => upd("nome", e.target.value)}
            placeholder="Qual é o seu nome e sobrenome?"
            aria-label="Nome e sobrenome"
            aria-invalid={Boolean(errors.nome)}
            className={inputClassName}
          />
          {errors.nome && <p className="mt-1 text-xs text-red-600">{errors.nome}</p>}
        </div>

        <div>
          <Input
            type="email"
            required
            value={form.email}
            onChange={(e) => upd("email", e.target.value)}
            placeholder="Qual email da sua empresa?"
            aria-label="Email"
            aria-invalid={Boolean(errors.email)}
            className={inputClassName}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <Input
            required
            value={form.instagram}
            onChange={(e) => upd("instagram", e.target.value)}
            placeholder="Qual o Instagram da sua empresa?"
            aria-label="Instagram"
            aria-invalid={Boolean(errors.instagram)}
            className={inputClassName}
          />
          {errors.instagram && <p className="mt-1 text-xs text-red-600">{errors.instagram}</p>}
        </div>

        <div>
          <div className="flex h-12 overflow-hidden rounded-lg border border-neutral-200 bg-white focus-within:ring-2 focus-within:ring-primary">
            <div className="flex items-center gap-1 border-r border-neutral-200 px-3 text-sm font-semibold text-neutral-800">
              <span aria-hidden>🇧🇷</span>
              <span>+55</span>
            </div>
            <Input
              type="tel"
              inputMode="tel"
              required
              value={form.telefone}
              onChange={(e) => upd("telefone", maskPhone(e.target.value))}
              placeholder="Qual seu telefone?"
              aria-label="Telefone"
              aria-invalid={Boolean(errors.telefone)}
              className="h-full flex-1 rounded-none border-0 bg-white text-base text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-0"
            />
          </div>
          {errors.telefone && <p className="mt-1 text-xs text-red-600">{errors.telefone}</p>}
        </div>

        <div>
          <Select value={form.faturamento_mensal} onValueChange={(v) => upd("faturamento_mensal", v)}>
            <SelectTrigger aria-label="Faturamento mensal" className={selectTriggerClassName}>
              <SelectValue placeholder="Qual o faturamento mensal da sua empresa?" />
            </SelectTrigger>
            <SelectContent side="bottom" sideOffset={6} avoidCollisions={false} className={selectContentClassName}>
              <SelectItem className={selectItemClassName} value="40k-60k">R$ 40 mil a R$ 60 mil</SelectItem>
              <SelectItem className={selectItemClassName} value="60k-100k">R$ 60 mil a R$ 100 mil</SelectItem>
              <SelectItem className={selectItemClassName} value="100k-250k">R$ 100 mil a R$ 250 mil</SelectItem>
              <SelectItem className={selectItemClassName} value="250k-500k">R$ 250 mil a R$ 500 mil</SelectItem>
              <SelectItem className={selectItemClassName} value="500k-1m">R$ 500 mil a R$ 1 milhão</SelectItem>
              <SelectItem className={selectItemClassName} value="1m+">Mais de R$ 1 milhão</SelectItem>
            </SelectContent>
          </Select>
          {errors.faturamento_mensal && <p className="mt-1 text-xs text-red-600">{errors.faturamento_mensal}</p>}
        </div>

        <div>
          <Select value={form.segmento} onValueChange={(v) => upd("segmento", v)}>
            <SelectTrigger aria-label="Segmento" className={selectTriggerClassName}>
              <SelectValue placeholder="Qual o seu segmento?" />
            </SelectTrigger>
            <SelectContent side="bottom" sideOffset={6} avoidCollisions={false} className={selectContentClassName}>
              <SelectItem className={selectItemClassName} value="e-commerce">E-commerce</SelectItem>
              <SelectItem className={selectItemClassName} value="negocios-locais">Negócios Locais</SelectItem>
              <SelectItem className={selectItemClassName} value="clinica-saude">Clínicas</SelectItem>
              <SelectItem className={selectItemClassName} value="moda-feminina">Moda Feminina</SelectItem>
              <SelectItem className={selectItemClassName} value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
          {errors.segmento && <p className="mt-1 text-xs text-red-600">{errors.segmento}</p>}
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-2 min-h-14 w-full whitespace-normal rounded-xl bg-[#16a34a] px-4 py-3 text-center text-[15px] font-bold leading-tight text-white shadow-[0_10px_30px_-6px_rgba(22,163,74,0.55)] hover:bg-[#15803d] sm:text-base"
          disabled={submitting}
        >
          {submitting ? (
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...</>
          ) : (
            <>Receber diagnóstico gratuito do meu funil <ArrowRight className="w-4 h-4 ml-1" /></>
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-neutral-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          Resposta em até 24h úteis · Sem compromisso · LGPD
        </div>
      </form>
    </div>
  );
}
