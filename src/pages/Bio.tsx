import { Instagram, MessageCircle } from "lucide-react";
import avatarDigitalDM from "@/assets/bio/digitaldm-bio-avatar.jpg";
import diagnosticoDeomir from "@/assets/bio/cards/diagnostico-deomir.png";
import gestao360 from "@/assets/bio/cards/gestao-360.png";
import dmiaCrm from "@/assets/bio/cards/dmia-crm.png";
import ecommerceLojistas from "@/assets/bio/cards/ecommerce-lojistas.png";
import provasCases from "@/assets/bio/cards/provas-cases.png";

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
        image: diagnosticoDeomir,
        alt: "Diagnóstico estratégico com Deomir",
        href: whatsappUrlFor("o Diagnóstico Estratégico com Deomir"),
      },
      {
        image: gestao360,
        alt: "Tráfego, funil e CRM trabalhando juntos",
        href: whatsappUrlFor("Gestão 360: tráfego pago, funil e CRM"),
      },
      {
        image: dmiaCrm,
        alt: "CRM com IA para não perder lead",
        href: whatsappUrlFor("CRM com IA da DigitalDM"),
      },
      {
        image: ecommerceLojistas,
        alt: "Operação digital para vender mais",
        href: whatsappUrlFor("Operação Digital para E-commerce"),
      },
    ],
  },
  {
    title: "Cases",
    align: "left",
    links: [
      {
        image: provasCases,
        alt: "Resultados reais, sem promessa bonita",
        href: whatsappUrlFor("os cases e resultados da DigitalDM"),
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
                    key={link.alt}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group relative left-1/2 block w-[calc(100vw-8px)] max-w-[620px] -translate-x-1/2 overflow-hidden rounded-[18px] bg-[#02050c] shadow-[0_0_0_7px_rgba(255,255,255,0.028),0_21px_48px_rgba(0,0,0,0.62)] transition duration-300 hover:-translate-x-1/2 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(0,0,0,0.7)]"
                  >
                    <img
                      src={link.image}
                      alt={link.alt}
                      className="block w-full object-contain transition duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
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
