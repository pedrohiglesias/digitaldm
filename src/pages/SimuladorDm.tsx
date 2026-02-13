import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  TrendingUp,
  Eye,
  MousePointerClick,
  ShoppingCart,
  CreditCard,
  ArrowRight,
  BarChart3,
  Calculator,
  Zap,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatNumber = (value: number) =>
  value.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

const formatDecimal = (value: number, digits = 2) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });

type Scenario = "pessimista" | "realista" | "otimista";

const scenarioDefaults: Record<Scenario, { ctr: number; taxaCarregamento: number; taxaConversao: number }> = {
  pessimista: { ctr: 0.8, taxaCarregamento: 60, taxaConversao: 0.8 },
  realista: { ctr: 1.3, taxaCarregamento: 80, taxaConversao: 1.5 },
  otimista: { ctr: 2.5, taxaCarregamento: 92, taxaConversao: 3.0 },
};

const impactCards = [
  {
    icon: Target,
    title: "Previsibilidade de Receita",
    description: "Saiba exatamente quanto precisa investir para atingir sua meta de faturamento mensal.",
  },
  {
    icon: Lightbulb,
    title: "Decisões Baseadas em Dados",
    description: "Pare de chutar valores. Use métricas reais para definir orçamentos e metas de vendas.",
  },
  {
    icon: Rocket,
    title: "Escale com Segurança",
    description: "Identifique o ponto exato onde aumentar investimento gera mais lucro, sem desperdiçar verba.",
  },
  {
    icon: ShieldCheck,
    title: "Identifique Gargalos",
    description: "Descubra onde seu funil está perdendo clientes: no clique, no carregamento ou na conversão.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Defina seu investimento",
    description: "Insira quanto pretende investir em tráfego pago e qual o ticket médio do seu produto.",
  },
  {
    step: "02",
    title: "Ajuste os parâmetros",
    description: "Use os cenários prontos ou ajuste CPM, CTR e taxas de conversão com base nos seus dados reais.",
  },
  {
    step: "03",
    title: "Analise o funil",
    description: "Veja em tempo real quantas impressões, cliques, visitas e vendas seu investimento pode gerar.",
  },
  {
    step: "04",
    title: "Tome a decisão certa",
    description: "Compare cenários e descubra o investimento ideal para atingir seu ROAS desejado.",
  },
];

export default function SimuladorDm() {
  const [investimento, setInvestimento] = useState(5000);
  const [cpm, setCpm] = useState(16.56);
  const [ctr, setCtr] = useState(1.31);
  const [taxaCarregamento, setTaxaCarregamento] = useState(80);
  const [taxaConversao, setTaxaConversao] = useState(1.5);
  const [ticketMedio, setTicketMedio] = useState(180);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);

  const scenarioColors: Record<Scenario, { accent: string; accentBg: string; border: string; btn: string; btnOutline: string; funnel: string[] }> = {
    pessimista: {
      accent: "text-red-400",
      accentBg: "bg-red-500/20 text-red-400",
      border: "border-red-500/30",
      btn: "bg-red-500 hover:bg-red-600 text-white",
      btnOutline: "border-red-500/50 text-red-400 hover:bg-red-500/10",
      funnel: ["hsl(0, 80%, 55%)", "hsl(0, 70%, 50%)", "hsl(0, 65%, 45%)", "hsl(0, 60%, 40%)"],
    },
    realista: {
      accent: "text-primary",
      accentBg: "bg-primary/20 text-primary",
      border: "border-primary/30",
      btn: "bg-primary hover:bg-primary/90 text-white",
      btnOutline: "border-primary/50 text-primary hover:bg-primary/10",
      funnel: ["hsl(210, 100%, 55%)", "hsl(195, 100%, 50%)", "hsl(200, 100%, 55%)", "hsl(180, 100%, 45%)"],
    },
    otimista: {
      accent: "text-emerald-400",
      accentBg: "bg-emerald-500/20 text-emerald-400",
      border: "border-emerald-500/30",
      btn: "bg-emerald-500 hover:bg-emerald-600 text-white",
      btnOutline: "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10",
      funnel: ["hsl(145, 70%, 45%)", "hsl(150, 65%, 42%)", "hsl(155, 60%, 38%)", "hsl(160, 55%, 35%)"],
    },
  };

  const currentColors = activeScenario ? scenarioColors[activeScenario] : scenarioColors.realista;

  const results = useMemo(() => {
    const impressoes = (investimento / cpm) * 1000;
    const cliques = impressoes * (ctr / 100);
    const cpc = cliques > 0 ? investimento / cliques : 0;
    const pageViews = cliques * (taxaCarregamento / 100);
    const vendas = pageViews * (taxaConversao / 100);
    const receita = vendas * ticketMedio;
    const roas = investimento > 0 ? receita / investimento : 0;
    const lucro = receita - investimento;

    return { impressoes, cliques, cpc, pageViews, vendas, receita, roas, lucro };
  }, [investimento, cpm, ctr, taxaCarregamento, taxaConversao, ticketMedio]);

  const applyScenario = (scenario: Scenario) => {
    const s = scenarioDefaults[scenario];
    setCtr(s.ctr);
    setTaxaCarregamento(s.taxaCarregamento);
    setTaxaConversao(s.taxaConversao);
    setActiveScenario(scenario);
  };

  const funnelSteps = [
    {
      label: "Impressões",
      value: formatNumber(results.impressoes),
      icon: Eye,
    },
    {
      label: "Cliques",
      value: formatNumber(results.cliques),
      sub: `CPC: ${formatBRL(results.cpc)}`,
      icon: MousePointerClick,
    },
    {
      label: "Page Views",
      value: formatNumber(results.pageViews),
      icon: BarChart3,
    },
    {
      label: "Vendas",
      value: formatNumber(results.vendas),
      icon: ShoppingCart,
    },
  ];

  const kpis = [
    { label: "Investimento", value: formatBRL(investimento), icon: DollarSign, accent: false },
    { label: "Receita Projetada", value: formatBRL(results.receita), icon: TrendingUp, accent: true },
    { label: "ROAS", value: `${formatDecimal(results.roas)}x`, icon: Target, accent: true },
    {
      label: "Lucro Líquido",
      value: formatBRL(results.lucro),
      icon: CreditCard,
      accent: results.lucro > 0,
      negative: results.lucro < 0,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            Ferramenta Gratuita
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Simule o{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              retorno do seu investimento
            </span>{" "}
            em tráfego pago
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra quantas vendas, qual receita e qual ROAS seu e-commerce pode alcançar 
            antes de investir um único real em anúncios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {(["pessimista", "realista", "otimista"] as Scenario[]).map((s) => (
              <Button
                key={s}
                size="lg"
                variant="outline"
                onClick={() => applyScenario(s)}
                className={`capitalize ${activeScenario === s ? scenarioColors[s].btn : scenarioColors[s].btnOutline}`}
              >
                Cenário {s}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpis.map((kpi) => (
              <Card
                key={kpi.label}
                className={`border-border/50 ${kpi.negative ? "border-destructive/50" : kpi.accent ? currentColors.border : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${kpi.negative ? "bg-destructive/20 text-destructive" : kpi.accent ? currentColors.accentBg : "bg-muted text-muted-foreground"}`}
                  >
                    <kpi.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{kpi.label}</p>
                    <p className={`text-lg font-bold ${kpi.negative ? "text-destructive" : kpi.accent ? currentColors.accent : ""}`}>
                      {kpi.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-[340px_1fr] gap-6">
            {/* Sidebar - Inputs */}
            <Card className="border-border/50 h-fit lg:sticky lg:top-20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Parâmetros da Simulação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Investimento (R$)</Label>
                  <Input
                    type="number"
                    value={investimento}
                    onChange={(e) => setInvestimento(Math.max(0, Number(e.target.value)))}
                    className="text-right font-bold"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Ticket Médio (R$)</Label>
                  <Input
                    type="number"
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(Math.max(1, Number(e.target.value)))}
                    className="text-right font-bold"
                  />
                </div>

                <div className="border-t border-border/50 pt-3 space-y-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Métricas do funil</p>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Custo por mil exibições (CPM R$)</Label>
                    <Input
                      type="number"
                      value={cpm}
                      onChange={(e) => setCpm(Math.max(0.01, Number(e.target.value)))}
                      className="text-right font-bold"
                      step={0.5}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Taxa de cliques (CTR %)</Label>
                    <Input
                      type="number"
                      value={ctr}
                      onChange={(e) => setCtr(Math.max(0.01, Number(e.target.value)))}
                      className="text-right font-bold"
                      step={0.1}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Taxa de carregamento da página (%)</Label>
                    <Input
                      type="number"
                      value={taxaCarregamento}
                      onChange={(e) => setTaxaCarregamento(Math.min(100, Math.max(1, Number(e.target.value))))}
                      className="text-right font-bold"
                      step={1}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Taxa de conversão em vendas (%)</Label>
                    <Input
                      type="number"
                      value={taxaConversao}
                      onChange={(e) => setTaxaConversao(Math.max(0.01, Number(e.target.value)))}
                      className="text-right font-bold"
                      step={0.1}
                    />
                  </div>
                </div>

                <Button asChild variant="hero" size="lg" className="w-full mt-4">
                  <a href="https://wzap.me/9665020002" target="_blank" rel="noopener noreferrer">
                    Quero esse resultado <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Funnel Visualization */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  Funil de Conversão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center w-full max-w-lg mx-auto">
                  {funnelSteps.map((step, i) => {
                    const totalSteps = funnelSteps.length;
                    const topWidthPct = 100 - (i * 70) / (totalSteps - 1);
                    const bottomWidthPct = 100 - ((i + 1) * 70) / (totalSteps - 1);
                    const isLast = i === totalSteps - 1;

                    const colors = currentColors.funnel;
                    const fillColor = colors[i] || colors[0];

                    return (
                      <div key={step.label} className="w-full flex flex-col items-center">
                        <div className="w-full flex items-center justify-between px-2 mb-1">
                          <div className="flex items-center gap-2 text-sm">
                            <step.icon className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{step.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">{step.value}</span>
                            {step.sub && (
                              <span className="text-xs text-muted-foreground">{step.sub}</span>
                            )}
                          </div>
                        </div>

                        <svg
                          viewBox="0 0 400 60"
                          className="w-full transition-all duration-700"
                          style={{ maxWidth: "100%" }}
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`funnel-grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor={fillColor} stopOpacity="0.7" />
                              <stop offset="50%" stopColor={fillColor} stopOpacity="1" />
                              <stop offset="100%" stopColor={fillColor} stopOpacity="0.7" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points={`${(400 - topWidthPct * 4) / 2},0 ${(400 + topWidthPct * 4) / 2},0 ${(400 + bottomWidthPct * 4) / 2},60 ${(400 - bottomWidthPct * 4) / 2},60`}
                            fill={`url(#funnel-grad-${i})`}
                            className="transition-all duration-700"
                          />
                          <text
                            x="200"
                            y="36"
                            textAnchor="middle"
                            className="fill-foreground text-sm font-bold"
                            style={{ fontSize: "16px", fontWeight: 700 }}
                          >
                            {step.value}
                          </text>
                        </svg>

                        {!isLast && (
                          <div className="py-1">
                            <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Summary Box */}
                <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border/50 space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Resumo da Simulação</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Investimento</span>
                      <p className="font-bold">{formatBRL(investimento)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Receita</span>
                      <p className="font-bold text-primary">{formatBRL(results.receita)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Vendas Estimadas</span>
                      <p className="font-bold">{formatDecimal(results.vendas, 0)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">ROAS</span>
                      <p className={`font-bold ${results.roas >= 2 ? "text-primary" : results.roas >= 1 ? "text-foreground" : "text-destructive"}`}>
                        {formatDecimal(results.roas)}x
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-4">
              <Zap className="w-4 h-4 text-primary" />
              Como Funciona
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Entenda o{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                funil de vendas
              </span>{" "}
              do seu e-commerce
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada etapa do funil representa uma fase da jornada do cliente. Entender esses números 
              é o primeiro passo para escalar suas vendas com previsibilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-black text-primary/10 mb-2">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              Por que isso importa
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Como o simulador{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                impacta seu e-commerce
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A maioria dos e-commerces investe em tráfego pago sem saber se o retorno será positivo. 
              Com o simulador, você elimina as suposições e toma decisões inteligentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {impactCards.map((card) => (
              <Card key={card.title} className="border-border/50">
                <CardContent className="p-6 flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              escalar suas vendas?
            </span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Nossos especialistas analisam seu funil gratuitamente e criam uma estratégia 
            personalizada para maximizar seu ROAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="https://wzap.me/9665020002" target="_blank" rel="noopener noreferrer">
                Quero um Diagnóstico Gratuito <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/">Conhecer a Digital DM</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
