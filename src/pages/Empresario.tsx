import { ArrowRight, Target, Database, TrendingUp, Users, Zap, BarChart3, Shield, CheckCircle2, Workflow, LineChart, Brain, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP = "https://wa.me/554991002472";

const pains = [
  "Investe em anúncio e não sabe o que retornou",
  "Leads chegam frios e o time perde tempo com curioso",
  "Dados espalhados em planilhas, WhatsApp e cabeça do vendedor",
  "Não existe previsibilidade — mês bom, mês ruim",
  "Decisões baseadas em achismo, não em número",
];

const pillars = [
  {
    icon: Target,
    title: "Geração de Demanda",
    description: "Campanhas estruturadas em Meta e Google que atraem quem realmente compra — não curiosos.",
    bullets: ["Criativos com copy de conversão", "Segmentação por intenção", "Otimização diária por CPA real"],
  },
  {
    icon: Users,
    title: "Qualificação de Leads",
    description: "Triagem automática com IA que separa lead quente de curioso antes de chegar no comercial.",
    bullets: ["Bot DM IA 24/7", "Score de qualificação", "Distribuição inteligente"],
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "CRM próprio + tracking server-side. Cada real investido vira dado auditável.",
    bullets: ["Meta CAPI + GA4 + GTM Server", "Dashboard executivo", "Histórico completo por lead"],
  },
];

const stack = [
  { icon: Zap, name: "Meta Ads + Google Ads", desc: "Aquisição paga" },
  { icon: Brain, name: "DM IA", desc: "Qualificação com IA" },
  { icon: Workflow, name: "n8n + Automações", desc: "Fluxos server-side" },
  { icon: Database, name: "Baserow + CRM", desc: "Base de dados unificada" },
  { icon: LineChart, name: "Meta CAPI + GA4", desc: "Tracking avançado" },
  { icon: BarChart3, name: "Dashboards", desc: "Visão executiva em tempo real" },
];

const kpis = [
  { label: "Custo por Lead Qualificado", value: "CPLQ" },
  { label: "Taxa de Agendamento", value: "%" },
  { label: "ROAS Real", value: "x" },
  { label: "LTV do Cliente", value: "R$" },
];

const steps = [
  { n: "01", title: "Diagnóstico executivo", desc: "Análise do funil atual, gargalos e potencial de escala." },
  { n: "02", title: "Estruturação de dados", desc: "Implantação de tracking server-side, CRM e integrações." },
  { n: "03", title: "Ativação de demanda", desc: "Campanhas + qualificação com IA rodando em conjunto." },
  { n: "04", title: "Gestão e escala", desc: "Reunião semanal com dados, otimização contínua e previsibilidade." },
];

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </section>
  );
}

export default function Empresario() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 animated-gradient opacity-20" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-3xl" />
          <div
            ref={heroRef}
            className={`container mx-auto px-4 relative z-10 max-w-5xl text-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              Página exclusiva para empresários
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow">
              Pare de <span className="text-gradient">apostar no marketing</span>.<br />
              Comece a <span className="text-gradient">operar com dados</span>.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-10">
              Um sistema completo de <strong>geração de demanda</strong>, <strong>qualificação de leads</strong> e{" "}
              <strong>gestão de dados</strong> para empresas que querem previsibilidade — não sorte.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Tracking server-side", "IA que qualifica lead", "Dashboard executivo", "ROAS auditável"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-foreground/90 glass-card px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t}
                </div>
              ))}
            </div>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Quero falar com um especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Diagnóstico gratuito · Resposta em até 24h úteis</p>
          </div>
        </section>

        {/* DORES */}
        <Section id="dores" className="bg-card/40">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Se você é dono de negócio, provavelmente vive isso
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Você não tem um problema de <span className="text-gradient">marketing</span>.
              <br />
              Você tem um problema de <span className="text-gradient">sistema</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pains.map((p) => (
              <div key={p} className="glass-card rounded-2xl p-5 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-foreground/90">{p}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 3 PILARES */}
        <Section id="pilares">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Nosso método
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Os <span className="text-gradient">3 pilares</span> de uma operação previsível
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-8 hover-lift border border-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{p.description}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* STACK */}
        <Section id="stack" className="bg-card/40">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Workflow className="w-4 h-4 mr-2" />
              Stack completo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              A infraestrutura que <span className="text-gradient">gigantes usam</span> — pronta para você
            </h2>
            <p className="text-muted-foreground mt-4">
              Você não precisa contratar 6 fornecedores diferentes. A Digital DM entrega tudo integrado.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {stack.map((s) => (
              <div key={s.name} className="glass-card rounded-xl p-5 flex items-center gap-4 border border-primary/20">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* KPIs */}
        <Section id="kpis">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              O que você passa a enxergar
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Deixe de gerenciar <span className="text-gradient">no escuro</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {kpis.map((k) => (
              <div key={k.label} className="glass-card rounded-2xl p-6 text-center border border-primary/20">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{k.value}</div>
                <div className="text-sm text-muted-foreground">{k.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROCESSO */}
        <Section id="processo" className="bg-card/40">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              Como implementamos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Do <span className="text-gradient">caos</span> à <span className="text-gradient">previsibilidade</span> em 4 etapas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.n} className="glass-card rounded-2xl p-8 border border-primary/20">
                <div className="text-4xl font-bold text-gradient mb-3">{s.n}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA FINAL */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para operar com <span className="text-gradient">dados de verdade</span>?
            </h2>
            <p className="text-lg text-foreground/90 mb-10">
              Nosso time monta um diagnóstico executivo do seu funil e mostra exatamente onde está o gargalo — e como resolver.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Quero falar com um especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Sem compromisso · Sem enrolação</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
