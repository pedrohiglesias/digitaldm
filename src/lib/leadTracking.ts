// Lead tracking utilities for Meta CAPI / GA4 / GTM Server / n8n pipeline.
// Frontend only collects data + dispatches dataLayer + calls n8n webhook.
// Hashing of PII is performed server-side (n8n).

export const N8N_LEAD_WEBHOOK_URL = "https://webhook.dmia.com.br/webhook/digitaldm-lead";

export const WHATSAPP_NUMBER = "554991002472";

const LS_SESSION_ID = "ddm_lead_session_id";
const LS_LANDING_URL = "ddm_landing_page_url";
const COOKIE_FBP = "_fbp";
const COOKIE_FBC = "_fbc";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // RFC4122 v4 fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

export function getLeadSessionId(): string {
  if (typeof window === "undefined") return uuid();
  let id = localStorage.getItem(LS_SESSION_ID) || getCookie(LS_SESSION_ID);
  if (!id) {
    id = uuid();
    try {
      localStorage.setItem(LS_SESSION_ID, id);
    } catch {}
    setCookie(LS_SESSION_ID, id);
  }
  return id;
}

export function getLandingPageUrl(): string {
  if (typeof window === "undefined") return "";
  let url = localStorage.getItem(LS_LANDING_URL) || getCookie(LS_LANDING_URL);
  if (!url) {
    url = window.location.href;
    try {
      localStorage.setItem(LS_LANDING_URL, url);
    } catch {}
    setCookie(LS_LANDING_URL, url);
  }
  return url;
}

export interface TrackingContext {
  lead_session_id: string;
  event_id: string;
  event_time: string;
  page_url: string;
  landing_page_url: string;
  referrer_url: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  gclid: string;
  fbp: string;
  fbc: string;
  user_agent: string;
  form_name: string;
  form_id: string;
  origem_do_lead: string;
  provider: string;
}

export function collectTrackingContext(): TrackingContext {
  const url = typeof window !== "undefined" ? new URL(window.location.href) : null;
  const params = url?.searchParams;
  const get = (k: string) => params?.get(k) || "";

  const fbclid = get("fbclid");
  let fbc = getCookie(COOKIE_FBC) || "";
  if (!fbc && fbclid) {
    fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return {
    lead_session_id: getLeadSessionId(),
    event_id: uuid(),
    event_time: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    landing_page_url: getLandingPageUrl(),
    referrer_url: typeof document !== "undefined" ? document.referrer : "",
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_content: get("utm_content"),
    utm_term: get("utm_term"),
    fbclid,
    gclid: get("gclid"),
    fbp: getCookie(COOKIE_FBP) || "",
    fbc,
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    form_name: "DigitalDM WhatsApp CTA",
    form_id: "digitaldm_whatsapp_cta",
    origem_do_lead: "site_form_to_whatsapp",
    provider: "Site",
  };
}

export function pushDataLayer(event: string, data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export interface WhatsappLeadData {
  nome?: string;
  instagram?: string;
  faturamento_mensal?: string;
  lead_session_id?: string;
}

const FATURAMENTO_LABELS: Record<string, string> = {
  "60k-100k": "R$ 60 mil a R$ 100 mil",
  "100k-250k": "R$ 100 mil a R$ 250 mil",
  "250k-500k": "R$ 250 mil a R$ 500 mil",
  "500k+": "mais de R$ 500 mil",
};

function valueOrFallback(value: string | undefined, fallback = "não informado"): string {
  return value?.trim() || fallback;
}

export function buildWhatsappUrl(lead: WhatsappLeadData): string {
  const instagram = valueOrFallback(lead.instagram);
  const formattedInstagram =
    instagram === "não informado" || instagram.startsWith("@") ? instagram : `@${instagram}`;
  const faturamento =
    FATURAMENTO_LABELS[lead.faturamento_mensal || ""] ||
    valueOrFallback(lead.faturamento_mensal);

  const msg = [
    "Olá, quero saber mais sobre a DigitalDM.",
    "",
    `Meu nome é: ${valueOrFallback(lead.nome)}`,
    `Minha empresa/Instagram é: ${formattedInstagram}`,
    `Faturo por mês: ${faturamento}`,
    "",
    "Quero entender como a DigitalDM pode ajudar minha empresa a alcançar mais resultados com mídia paga, automação e acompanhamento comercial.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export async function sendLeadToWebhook(payload: Record<string, unknown>, timeoutMs = 4000) {
  if (!N8N_LEAD_WEBHOOK_URL) return { ok: false, error: "no_webhook" };
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(N8N_LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
      keepalive: true,
    });
    clearTimeout(t);
    return { ok: res.ok };
  } catch (err) {
    clearTimeout(t);
    // eslint-disable-next-line no-console
    console.warn("[LeadCapture] webhook failed:", err);
    return { ok: false, error: String(err) };
  }
}
