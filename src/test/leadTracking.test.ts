import { describe, expect, it } from "vitest";
import { buildWhatsappUrl, WHATSAPP_NUMBER } from "@/lib/leadTracking";

describe("buildWhatsappUrl", () => {
  it("builds a qualified commercial WhatsApp message from lead data", () => {
    const url = buildWhatsappUrl({
      nome: "Pedro Iglesias",
      instagram: "digitaldm.com.br",
      faturamento_mensal: "100k-250k",
      lead_session_id: "lead-123",
    });

    expect(url).toContain(`https://wa.me/${WHATSAPP_NUMBER}?text=`);

    const message = decodeURIComponent(new URL(url).searchParams.get("text") || "");
    expect(message).toContain("Olá, quero saber mais sobre a DigitalDM.");
    expect(message).toContain("Meu nome é: Pedro Iglesias");
    expect(message).toContain("Minha empresa/Instagram é: @digitaldm.com.br");
    expect(message).toContain("Faturo por mês: R$ 100 mil a R$ 250 mil");
    expect(message).not.toContain("Lead ID");
    expect(message).not.toContain("lead-123");
  });
});
