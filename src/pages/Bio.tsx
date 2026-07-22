import { Instagram, MessageCircle } from "lucide-react";
import avatarDigitalDM from "@/assets/bio/digitaldm-bio-avatar.jpg";

const whatsappNumber = "554991002472";

function whatsappUrlFor(service: string) {
  const message = `Olá! Vim pela link da bio no Instagram e quero saber mais sobre ${service}.`;

  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

const whatsappUrl = whatsappUrlFor("a DigitalDM");

const sections = [
  {
    title: "Serviços",
    align: "left",
    links: [
      {
        title: "CRM",
        subtitle: "Transforme conversas em vendas recorrentes.",
        description: "Centralize leads, automatize follow-ups e pare de perder oportunidades.",
        href: whatsappUrlFor("CRM"),
      },
      {
        title: "Tráfego Pago",
        subtitle: "Campanhas que viram demanda.",
        description: "Google e Meta Ads com estratégia, dados e escala.",
        href: whatsappUrlFor("Tráfego Pago"),
      },
      {
        title: "E-commerce Profissional",
        subtitle: "Sua loja pronta para vender todos os dias.",
        description: "Design, tecnologia e jornada de compra pensados para conversão.",
        href: whatsappUrlFor("a Criação de E-commerce Profissional"),
      },
      {
        title: "Aceleração para Empresas",
        subtitle: "Estratégia, operação e crescimento.",
        description: "Um plano claro para destravar vendas, processos e previsibilidade.",
        href: whatsappUrlFor("a Aceleração para Empresas"),
      },
      {
        title: "Aceleração para Lojas",
        subtitle: "Mais fluxo, mais conversão, mais margem.",
        description: "Da vitrine ao checkout: conectamos mídia, comercial e operação.",
        href: whatsappUrlFor("a Aceleração para Donos de Loja Física e E-commerce"),
      },
    ],
  },
] as const;

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border-2 border-white text-white transition hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

function SectionTitle({ title, align }: { title: string; align: "left" | "right" }) {
  return (
    <div className="my-8 flex items-center gap-5">
      {align === "right" ? <span className="h-px flex-1 bg-[#19222d]" /> : null}
      <h2 className="shrink-0 text-[17px] font-bold text-[#666f7b]">{title}</h2>
      {align === "left" ? <span className="h-px flex-1 bg-[#19222d]" /> : null}
    </div>
  );
}

const Bio = () => {
  return (
    <main className="min-h-screen bg-[#020816] text-white">
      <section className="mx-auto min-h-screen w-full max-w-[620px] px-1 pb-10 pt-7 sm:px-3.5">
        <header className="flex items-center justify-center gap-6 pb-7 text-left">
          <a
            href="/"
            aria-label="Voltar para o site da DigitalDM"
            className="grid h-[104px] w-[104px] shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_48px_rgba(0,0,0,0.55)]"
          >
            <img src={avatarDigitalDM} alt="DigitalDM" className="h-full w-full object-cover" />
          </a>

          <div className="min-w-0">
            <h1 className="text-[27px] font-black leading-tight tracking-normal">Digital DM</h1>
            <p className="mt-2 max-w-[215px] text-[16px] font-medium leading-snug text-white/48">
              Tráfego pago, IA e automação para crescer com previsibilidade
            </p>

            <nav className="mt-4 flex items-center gap-3" aria-label="Redes sociais da DigitalDM">
              <SocialLink href="https://www.instagram.com/digitaldm.com.br/" label="Instagram da DigitalDM">
                <Instagram className="h-[19px] w-[19px]" aria-hidden="true" />
              </SocialLink>
              <SocialLink href={whatsappUrl} label="Falar com a DigitalDM no WhatsApp">
                <MessageCircle className="h-[19px] w-[19px]" aria-hidden="true" />
              </SocialLink>
            </nav>
          </div>
        </header>

        <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-[#16202b]" />

        {sections.map((section) => (
          <section key={section.title} aria-labelledby={`bio-section-${section.title}`}>
            <SectionTitle title={section.title} align={section.align} />
            <div className="space-y-7">
              {section.links.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group relative left-1/2 block w-[calc(100vw-8px)] max-w-[620px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_85%_0%,rgba(43,95,255,0.26),transparent_40%),linear-gradient(120deg,#101b31_0%,#070d19_55%,#02050c_100%)] px-7 py-7 shadow-[0_0_0_7px_rgba(255,255,255,0.028),0_21px_48px_rgba(0,0,0,0.62)] transition duration-300 hover:-translate-x-1/2 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_24px_54px_rgba(0,0,0,0.7)] sm:px-9 sm:py-8"
                  >
                    <span className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_rgba(71,115,255,0.8)]" />
                    <h3 className="pr-7 text-[24px] font-black leading-tight tracking-tight text-white sm:text-[27px]">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-[16px] font-semibold leading-snug text-primary/95 sm:text-[17px]">{link.subtitle}</p>
                    <p className="mt-4 max-w-[470px] text-[14px] leading-relaxed text-white/55 sm:text-[15px]">{link.description}</p>
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        <footer className="pt-9 text-center text-xs leading-relaxed text-white/35">
          © DigitalDM. Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
};

export default Bio;
