import {
  ArrowRight,
  Target,
  Database,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  CheckCircle2,
  Workflow,
  LineChart,
  Brain,
  Gauge,
  Radar,
  AlertTriangle,
  MousePointerClick,
  MessageCircle,
  UserCheck,
  Handshake,
  Clock,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { EmpresarioHeader } from "@/components/empresario/EmpresarioHeader";
import { InlineLeadForm } from "@/components/empresario/InlineLeadForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scrollToForm = () => {
  document.getElementById("form-diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const heroBullets = [
  "Identifique por que seus anúncios geram curiosos em vez de oportunidades reais",
  "Veja onde leads se perdem entre anúncio, WhatsApp, CRM e vendedor",
  "Entenda quais dados faltam para tomar decisões sem achismo",
  "Receba um diagnóstico executivo com próximos passos claros",
];

const funnelStages = [
  { icon: Target, label: "Anúncio", metric: "R$ 18k invest.", tone: "ok" },
  { icon: MousePointerClick, label: "Clique", metric: "12.480", tone: "ok" },
  { icon: Users, label: "Lead", metric: "842", tone: "warn" },
  { icon: MessageCircle, label: "WhatsApp", metric: "-32%", tone: "leak" },
  { icon: UserCheck, label: "Qualificação", metric: "184", tone: "warn" },
  { icon: Handshake, label: "Vendedor", metric: "-41%", tone: "leak" },
  { icon: TrendingUp, label: "Venda", metric: "28", tone: "ok" },
];

const diagnosticoBlocks = [
  {
    icon: Target,
    title: "Aquisição",
    text: "Analisamos se suas campanhas estão atraindo pessoas com intenção real de compra.",
  },
  {
    icon: Radar,
    title: "Qualidade do lead",
    text: "Avaliamos se os leads que chegam têm perfil, momento e urgência para comprar.",
  },
  {
    icon: Clock,
    title: "Velocidade de atendimento",
    text: "Identificamos quanto tempo sua operação leva para responder e onde oportunidades esfriam.",
  },
  {
    icon: Database,
    title: "Dados e rastreamento",
    text: "Verificamos se Meta, Google, WhatsApp, CRM e vendas estão conectados de forma confiável.",
  },
  {
    icon: Gauge,
    title: "Previsibilidade",
    text: "Mostramos quais números precisam ser acompanhados para sair do achismo e decidir com clareza.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Geração de demanda",
    description:
      "Campanhas em Meta e Google estruturadas para atrair oportunidades reais — não volume vazio.",
  },
  {
    icon: Brain,
    title: "Qualificação com IA",
    description:
      "Triagem automática que separa curioso de lead com potencial antes de chegar no comercial.",
  },
  {
    icon: Database,
    title: "Gestão de dados",
    description:
      "Tracking server-side, CRM e dashboard para enxergar o caminho do lead até a venda.",
  },
];

const stack = [
  { icon: Zap, name: "Meta Ads + Google Ads", desc: "Aquisição com intenção" },
  { icon: Brain, name: "DM IA", desc: "Qualificação automática 24/7" },
  { icon: Database, name: "CRM + Baserow", desc: "Base única de leads e histórico" },
  { icon: Workflow, name: "n8n + Automações", desc: "Follow-up e distribuição inteligente" },
  { icon: LineChart, name: "Meta CAPI + GA4", desc: "Tracking confiável" },
  { icon: BarChart3, name: "Dashboard executivo", desc: "Decisão baseada em número" },
];

const metrics = [
  { label: "Custo por lead qualificado", value: "R$ 87", delta: "-38%", tone: "good" },
  { label: "Taxa de agendamento", value: "24%", delta: "+11 p.p.", tone: "good" },
  { label: "Tempo médio de resposta", value: "2m", delta: "-83%", tone: "good" },
  { label: "ROAS real", value: "6.4x", delta: "+2.1x", tone: "good" },
  { label: "Origem das vendas", value: "Meta 62%", delta: "auditável", tone: "neutral" },
  { label: "Gargalo do funil", value: "WhatsApp", delta: "-32% aqui", tone: "warn" },
];

const steps = [
  { n: "01", title: "Diagnóstico executivo", desc: "Análise do funil atual, gargalos e potencial de escala." },
  { n: "02", title: "Estruturação de dados", desc: "Implantação de tracking, CRM e integrações essenciais." },
  { n: "03", title: "Ativação de demanda", desc: "Campanhas e qualificação com IA rodando em conjunto." },
  { n: "04", title: "Gestão e escala", desc: "Rotina de otimização baseada em dados — não em achismo." },
];

function toneClass(tone: string) {
  if (tone === "leak") return "text-orange-400 border-orange-400/40 bg-orange-500/10";
  if (tone === "warn") return "text-amber-300 border-amber-400/30 bg-amber-500/5";
  return "text-primary border-primary/30 bg-primary/5";
}

export default function Empresario() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EmpresarioHeader />

      <main className="pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pb-16 md:pb-24 pt-8 md:pt-14">
          {/* subtle grid + glow */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          <div className="pointer-events-none absolute top-0 left-1/3 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl -translate-x-1/2" />
          <div className="pointer-events-none absolute top-40 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" />

          <div
            ref={heroRef}
            className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <Activity className="h-3.5 w-3.5" />
                  Central de diagnóstico executivo
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Descubra onde sua empresa está{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-gradient">perdendo leads,</span>
                  </span>{" "}
                  <span className="text-gradient">vendas e dinheiro</span> todos os meses
                </h1>

                <p className="mt-5 text-lg text-foreground/80 max-w-xl">
                  A Digital DM analisa seu funil de aquisição, qualificação e dados para mostrar
                  quais gargalos impedem sua empresa de gerar leads previsíveis e vender com mais consistência.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {heroBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-foreground/85">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Mini KPI proof strip */}
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
                  {[
                    { k: "CPL qualificado", v: "R$ 87" },
                    { k: "Resposta", v: "2 min" },
                    { k: "ROAS real", v: "6.4x" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border border-border bg-card/60 backdrop-blur px-3 py-2.5">
                      <div className="text-xs text-muted-foreground">{m.k}</div>
                      <div className="text-lg font-bold text-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 hidden lg:block text-xs text-muted-foreground">
                  Resposta em até 24h úteis · Sem compromisso · Dados protegidos pela LGPD
                </p>
              </div>

              {/* Right: FORM (hero primary asset) */}
              <div className="lg:sticky lg:top-24">
                <InlineLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============ PAIN + FUNNEL LEAK ============ */}
        <section className="relative py-20 md:py-28 border-t border-border/50 bg-[hsl(220_55%_8%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
                <AlertTriangle className="h-3.5 w-3.5" /> Diagnóstico do funil
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                Você não precisa de mais uma campanha.<br />
                <span className="text-gradient">Precisa descobrir onde seu funil está vazando.</span>
              </h2>
              <p className="mt-4 text-foreground/75 text-lg">
                A maioria dos empresários investe em tráfego, mas não sabe qual canal gera lead
                de verdade, qual tem intenção real de compra, quanto custa uma oportunidade
                qualificada, onde o vendedor perde tempo, por que o WhatsApp vira bagunça —
                e qual campanha traz receita ou só consome verba.
              </p>
            </div>

            {/* Funnel visualization */}
            <div className="mt-12 rounded-2xl border border-border bg-card/60 backdrop-blur p-5 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Jornada do lead — últimos 30 dias
                </div>
                <div className="hidden md:flex items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-primary"><span className="h-2 w-2 rounded-full bg-primary" /> Saudável</span>
                  <span className="inline-flex items-center gap-1.5 text-amber-300"><span className="h-2 w-2 rounded-full bg-amber-400" /> Atenção</span>
                  <span className="inline-flex items-center gap-1.5 text-orange-400"><span className="h-2 w-2 rounded-full bg-orange-400" /> Vazamento</span>
                </div>
              </div>

              <div className="flex items-stretch gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2">
                {funnelStages.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <div className={`min-w-[112px] md:min-w-[140px] rounded-xl border p-3 md:p-4 ${toneClass(s.tone)}`}>
                      <s.icon className="h-4 w-4 md:h-5 md:w-5" />
                      <div className="mt-2 text-[11px] md:text-xs uppercase tracking-wide text-foreground/70">{s.label}</div>
                      <div className="mt-0.5 text-sm md:text-base font-bold text-foreground">{s.metric}</div>
                      {s.tone === "leak" && (
                        <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-orange-300">
                          <AlertTriangle className="h-3 w-3" /> vazamento
                        </div>
                      )}
                    </div>
                    {i < funnelStages.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  <span className="text-orange-300 font-semibold">2 pontos de vazamento</span> reduzem sua conversão em até 60% — sem você enxergar.
                </p>
                <Button variant="hero" className="rounded-xl" onClick={scrollToForm}>
                  Ver meu diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ O QUE O DIAGNÓSTICO ENTREGA ============ */}
        <section className="py-20 md:py-28 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> Escopo do diagnóstico
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                O que vamos <span className="text-gradient">mapear</span> no seu diagnóstico
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diagnosticoBlocks.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-foreground/75">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MÉTODO ============ */}
        <section id="metodo" className="py-20 md:py-28 border-t border-border/50 bg-[hsl(220_55%_8%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Workflow className="h-3.5 w-3.5" /> Método Digital DM
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                O método para transformar tráfego em{" "}
                <span className="text-gradient">operação previsível</span>
              </h2>
              <p className="mt-4 text-foreground/75 text-lg">
                A Digital DM conecta aquisição, qualificação e dados para que sua empresa
                pare de depender de sorte e comece a operar com previsibilidade.
              </p>
            </div>

            {/* Pillars connected */}
            <div className="relative">
              <div className="hidden md:block absolute top-14 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="grid md:grid-cols-3 gap-5">
                {pillars.map((p, i) => (
                  <div key={p.title} className="relative rounded-2xl border border-border bg-card/70 backdrop-blur p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-4 ring-background">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">Pilar 0{i + 1}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-foreground/75">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ STACK ============ */}
        <section className="py-20 md:py-28 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Zap className="h-3.5 w-3.5" /> Infraestrutura
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                A infraestrutura por trás de uma{" "}
                <span className="text-gradient">operação comercial previsível</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stack.map((s) => (
                <div key={s.name} className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{s.name}</div>
                    <div className="mt-1 text-sm text-foreground/70">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MÉTRICAS ============ */}
        <section className="py-20 md:py-28 border-t border-border/50 bg-[hsl(220_55%_8%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <BarChart3 className="h-3.5 w-3.5" /> Dashboard executivo
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                O que você passa a enxergar quando o funil{" "}
                <span className="text-gradient">deixa de ser escuro</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">digitaldm/dashboard-executivo</span>
                </div>
                <span className="text-xs text-muted-foreground hidden sm:inline">Últimos 30 dias · atualizado agora</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border/70 bg-background/40 p-4">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                    <div className="mt-1 text-2xl md:text-3xl font-bold text-foreground">{m.value}</div>
                    <div
                      className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${
                        m.tone === "good" ? "text-emerald-400" : m.tone === "warn" ? "text-orange-400" : "text-muted-foreground"
                      }`}
                    >
                      {m.tone === "good" && <TrendingUp className="h-3 w-3" />}
                      {m.tone === "warn" && <AlertTriangle className="h-3 w-3" />}
                      {m.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fake bar chart footer */}
              <div className="mt-6 rounded-xl border border-border/70 bg-background/30 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Leads qualificados por semana</span>
                  <span className="text-xs font-semibold text-emerald-400">+38% vs. período anterior</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[38, 52, 44, 61, 58, 74, 82, 71, 89, 96, 88, 104].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" className="rounded-xl" onClick={scrollToForm}>
                Quero enxergar meus números
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* ============ IMPLEMENTAÇÃO ============ */}
        <section className="py-20 md:py-28 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Workflow className="h-3.5 w-3.5" /> Implementação
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                Do <span className="text-gradient">caos</span> à{" "}
                <span className="text-gradient">previsibilidade</span> em 4 etapas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-card/60 p-6 hover:border-primary/40 transition-colors">
                  <div className="text-3xl font-bold text-gradient">{s.n}</div>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-foreground/75">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL com formulário ============ */}
        <section className="relative py-20 md:py-28 border-t border-border/50 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Antes de investir mais em anúncio,{" "}
                  <span className="text-gradient">descubra onde sua operação está perdendo dinheiro</span>
                </h2>
                <p className="mt-5 text-lg text-foreground/80">
                  Solicite um diagnóstico executivo e veja quais pontos do seu funil impedem
                  sua empresa de gerar leads qualificados com previsibilidade.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Análise do funil completo — aquisição, qualificação e vendas",
                    "Identificação de vazamentos e oportunidades reais de escala",
                    "Próximos passos claros — sem enrolação, sem achismo",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <InlineLeadForm id="form-diagnostico-final" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
