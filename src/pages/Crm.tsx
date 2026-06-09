import { useState } from "react";
import {
  ArrowRight,
  LayoutGrid,
  Mail,
  Zap,
  Bot,
  Filter,
  Globe,
  MessageSquare,
  Calendar,
  Smartphone,
  Megaphone,
  Check,
  Building2,
  Stethoscope,
  Home,
  Scale,
  GraduationCap,
  Dumbbell,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import crmDashboard from "@/assets/crm-dashboard.png";

const WHATSAPP = "https://wzap.me/9665020002";

const features = [
  { icon: LayoutGrid, title: "CRM Visual", desc: "Pipeline ilimitado para gerenciar leads e oportunidades." },
  { icon: Mail, title: "E-mail Marketing", desc: "Campanhas e sequências com editor simples." },
  { icon: Zap, title: "Automações", desc: "Fluxos para nutrir e converter sem trabalho manual." },
  { icon: Bot, title: "IA de Atendimento", desc: "SDR com IA 24/7 qualificando seus leads." },
  { icon: Filter, title: "Funis", desc: "Funis de vendas e captura de alta conversão." },
  { icon: Globe, title: "Sites & LPs", desc: "Landing pages publicadas em minutos." },
  { icon: MessageSquare, title: "Central de Chat", desc: "WhatsApp, Instagram e site numa só caixa." },
  { icon: Calendar, title: "Agendamentos", desc: "Calendário com confirmação automática." },
  { icon: Smartphone, title: "App Mobile", desc: "Seu CRM e suas conversas no bolso." },
  { icon: Megaphone, title: "Gestão de Anúncios", desc: "Crie campanhas Meta e Google num só lugar." },
];

const niches = [
  { icon: Building2, title: "Agências", desc: "Centralize seus clientes em uma plataforma white-label." },
  { icon: Stethoscope, title: "Clínicas", desc: "Confirmação automática e redução de no-show." },
  { icon: Home, title: "Imobiliárias", desc: "Capture leads de portais e distribua na hora." },
  { icon: Scale, title: "Advocacia", desc: "LGPD compliant com funis por área de atuação." },
  { icon: GraduationCap, title: "Infoprodutores", desc: "Funis de lançamento e nutrição automática." },
  { icon: Dumbbell, title: "Academias", desc: "Captação, contratos e retenção em um só lugar." },
];

const tools = [
  "CRM e Pipeline",
  "Funis e Landing Pages",
  "E-mail Marketing",
  "Automação de WhatsApp",
  "Agendamentos",
  "Formulários",
  "Construtor de Sites",
  "Automação Instagram DM",
  "Relatórios",
  "App Mobile",
];

const faqs = [
  { q: "Preciso pagar por atualizações?", a: "Não. Todas as atualizações e novas features estão inclusas no plano." },
  { q: "Existem custos extras escondidos?", a: "Não. O preço é único e transparente — sem taxas surpresa." },
  { q: "Posso testar antes de contratar?", a: "Sim. Você fala com nosso time e fazemos uma demo personalizada do seu funil." },
  { q: "Funciona pelo celular?", a: "Sim. Temos app mobile para responder leads e acompanhar o CRM de qualquer lugar." },
  { q: "Vocês ajudam na implementação?", a: "Sim. Nossa equipe configura o CRM, as automações e a IA para o seu negócio." },
  { q: "Integra com WhatsApp oficial?", a: "Sim. Integração completa com WhatsApp, Instagram, Facebook e site." },
];

export default function Crm() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-semibold">CRM + Automação + IA num só lugar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
              Automatize seu comercial e <span className="text-gradient">triplique reuniões qualificadas</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              O CRM da Digital DM faz a triagem, qualifica leads com IA e organiza seu funil — gastando menos tempo e
              recursos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Agendar uma demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="#funcionalidades">Ver como funciona</a>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-2 sm:p-3 max-w-3xl mx-auto gradient-border">
              <img src={crmDashboard} alt="CRM Digital DM" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-4">
                <LayoutGrid className="w-4 h-4 text-secondary" />
                <span className="text-xs sm:text-sm text-secondary font-semibold">Tudo num só lugar</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Tudo o que você precisa <span className="text-gradient">numa só plataforma</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Substitua 7+ ferramentas por um único ecossistema integrado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="glass-card rounded-2xl p-5 sm:p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIA / TUDO EM UM */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Economize trocando <span className="text-gradient">8 ferramentas por uma</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Pare de pagar mensalidades em vários sistemas que não conversam entre si.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-10 gradient-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {tools.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base">{t}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground">Economia mensal estimada</p>
                  <p className="text-3xl sm:text-4xl font-bold text-gradient">R$ 3.232/mês</p>
                </div>
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    Quero economizar
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm text-primary font-semibold">Para quem é</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Empresas que querem <span className="text-gradient">crescer rápido</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Mais de 6 nichos usam nosso CRM para escalar vendas e reter clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {niches.map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.title}
                    className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{n.title}</h3>
                    <p className="text-sm text-muted-foreground">{n.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Ficou na dúvida? <span className="text-gradient">A gente responde.</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-semibold text-base sm:text-lg">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-muted-foreground text-sm sm:text-base">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-8 sm:p-12 gradient-border">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Pronto para <span className="text-gradient">escalar suas vendas?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Fale com nosso time e descubra como o CRM da Digital DM transforma seu processo comercial.
            </p>
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Agendar uma demo gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
