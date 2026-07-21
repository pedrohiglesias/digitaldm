import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-digitaldm.png";
import ceo from "@/assets/ceo-deomir.png";
import crmDmia from "@/assets/crm-dmia.png";
import funnel from "@/assets/funnel-signals.gif";
import workflow from "@/assets/workflow-n8n.png";
import metaPartner from "@/assets/meta-partner.png";
import googlePartner from "@/assets/google-partner.png";

type LinkCard = {
  title: string;
  description?: string;
  image: string;
  href: string;
  accent?: string;
};

const WHATSAPP =
  "https://tintim.link/whatsapp/3cd6aada-3f3e-484b-a2b2-91f08e2bc002/ca4bcf0b-b472-419d-9c5f-aefde3ea931a";

const produtos: LinkCard[] = [
  {
    title: "DM IA — CRM Inteligente",
    description: "Triagem automática de leads, alertas quentes e cadência infinita.",
    image: crmDmia,
    href: "/dmia",
    accent: "from-primary/40 to-secondary/20",
  },
  {
    title: "Simulador de Vendas",
    description: "Descubra o potencial real do seu funil em 2 minutos.",
    image: funnel,
    href: "/simuladordm",
    accent: "from-secondary/40 to-primary/20",
  },
];

const servicos: LinkCard[] = [
  {
    title: "Gestão Mensal 360º",
    description: "Tráfego, criativo, funil e CRM operando como um só time.",
    image: workflow,
    href: "/gestao",
    accent: "from-primary/40 to-secondary/20",
  },
  {
    title: "Acelera 90 Dias",
    description: "Implementação completa do método MIA em 90 dias.",
    image: funnel,
    href: "/acelera90dias",
    accent: "from-secondary/40 to-primary/20",
  },
  {
    title: "GPS 360 — Mentoria",
    description: "Diagnóstico + roteiro executivo para organizar sua marca.",
    image: ceo,
    href: "/gps360",
    accent: "from-primary/40 to-secondary/20",
  },
];

const parceiros: LinkCard[] = [
  {
    title: "Meta Business Partner",
    image: metaPartner,
    href: "https://www.facebook.com/business/partner-directory",
    accent: "from-primary/30 to-secondary/10",
  },
  {
    title: "Google Partner",
    image: googlePartner,
    href: "https://www.google.com/partners/",
    accent: "from-secondary/30 to-primary/10",
  },
];

function Section({ title, items }: { title: string; items: LinkCard[] }) {
  return (
    <section className="w-full max-w-xl mx-auto mt-10">
      <div className="flex items-center gap-4 mb-5">
        <div className="h-px flex-1 bg-border/60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{title}</h2>
        <div className="h-px flex-1 bg-border/60" />
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <a
              key={item.title}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group relative block overflow-hidden rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-md transition-all hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.55)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.accent ?? "from-primary/20 to-secondary/10"} opacity-40 group-hover:opacity-70 transition-opacity`} />
              <div className="relative flex items-center gap-4 p-4">
                <div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-background/40 ring-1 ring-primary/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-foreground leading-tight">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                  )}
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

const Bio = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]" />
      </div>

      <main className="relative z-10 px-4 pb-16">
        {/* Header / Profile */}
        <header className="pt-12 pb-6 max-w-xl mx-auto text-center">
          <div className="mx-auto mb-5 h-28 w-28 rounded-full p-[3px] bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Digital DM" className="h-16 w-16 object-contain" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Digital DM</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-sm mx-auto">
            Agência 360º com CRM inteligente. Tráfego, funil, IA e previsibilidade para escalar seu negócio.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/digitaldm.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-primary/30 bg-card/60 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-10 w-10 rounded-full border border-primary/30 bg-card/60 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Primary CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full max-w-sm rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-bold text-white shadow-[0_15px_40px_-10px_rgba(59,130,246,0.7)] hover:opacity-95 transition-opacity"
          >
            Falar com um especialista
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </header>

        <Section title="Produtos" items={produtos} />
        <Section title="Serviços" items={servicos} />
        <Section title="Parceiros" items={parceiros} />

        <footer className="mt-14 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital DM. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
};

export default Bio;
