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
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

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

export default function SimuladorDm() {
  const [investimento, setInvestimento] = useState(5000);
  const [cpm, setCpm] = useState(16.56);
  const [ctr, setCtr] = useState(1.31);
  const [taxaCarregamento, setTaxaCarregamento] = useState(80);
  const [taxaConversao, setTaxaConversao] = useState(1.5);
  const [ticketMedio, setTicketMedio] = useState(180);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);

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
      width: 100,
      color: "from-primary/80 to-primary",
    },
    {
      label: "Cliques",
      value: formatNumber(results.cliques),
      sub: `CPC: ${formatBRL(results.cpc)}`,
      icon: MousePointerClick,
      width: Math.min(95, Math.max(20, (results.cliques / (results.impressoes || 1)) * 100 * 30)),
      color: "from-secondary/80 to-secondary",
    },
    {
      label: "Page Views",
      value: formatNumber(results.pageViews),
      icon: BarChart3,
      width: Math.min(85, Math.max(15, (results.pageViews / (results.impressoes || 1)) * 100 * 50)),
      color: "from-accent/80 to-accent",
    },
    {
      label: "Vendas",
      value: formatNumber(results.vendas),
      icon: ShoppingCart,
      width: Math.min(70, Math.max(10, (results.vendas / (results.impressoes || 1)) * 100 * 200)),
      color: "from-chart-4/80 to-chart-4",
    },
  ];

  const kpis = [
    { label: "Investimento", value: formatBRL(investimento), icon: DollarSign, accent: false },
    { label: "Receita Projetada", value: formatBRL(results.receita), icon: TrendingUp, accent: true },
    {
      label: "ROAS",
      value: `${formatDecimal(results.roas)}x`,
      icon: Target,
      accent: true,
    },
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
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Voltar</span>
            </Link>
            <div className="h-5 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              <h1 className="text-lg font-bold">Simulador de Funil</h1>
              <span className="text-xs text-muted-foreground hidden sm:inline">by Digital DM</span>
            </div>
          </div>

          {/* Scenarios */}
          <div className="flex gap-2">
            {(["pessimista", "realista", "otimista"] as Scenario[]).map((s) => (
              <Button
                key={s}
                size="sm"
                variant={activeScenario === s ? "default" : "outline"}
                onClick={() => applyScenario(s)}
                className="capitalize text-xs"
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi) => (
            <Card
              key={kpi.label}
              className={`border-border/50 ${kpi.negative ? "border-destructive/50" : kpi.accent ? "border-primary/30" : ""}`}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${kpi.negative ? "bg-destructive/20 text-destructive" : kpi.accent ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}
                >
                  <kpi.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <p className={`text-lg font-bold ${kpi.negative ? "text-destructive" : kpi.accent ? "text-primary" : ""}`}>
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
              {/* Editable inputs */}
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

              {/* Read-only calculated params */}
              <div className="border-t border-border/50 pt-3 space-y-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Parâmetros técnicos</p>
                <SimInput label="CPM (R$)" value={cpm} onChange={setCpm} min={1} max={100} step={0.5} prefix="R$" />
                <SimInput label="CTR (%)" value={ctr} onChange={setCtr} min={0.1} max={15} step={0.1} suffix="%" />
                <SimInput
                  label="Taxa de Carregamento (%)"
                  value={taxaCarregamento}
                  onChange={setTaxaCarregamento}
                  min={1}
                  max={100}
                  step={1}
                  suffix="%"
                />
                <SimInput
                  label="Taxa de Conversão (%)"
                  value={taxaConversao}
                  onChange={setTaxaConversao}
                  min={0.1}
                  max={20}
                  step={0.1}
                  suffix="%"
                />
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
              {/* True inverted pyramid funnel */}
              <div className="flex flex-col items-center w-full max-w-lg mx-auto">
                {funnelSteps.map((step, i) => {
                  const totalSteps = funnelSteps.length;
                  // Each step gets narrower: 100% → ~25%
                  const topWidthPct = 100 - (i * 70) / (totalSteps - 1);
                  const bottomWidthPct = 100 - ((i + 1) * 70) / (totalSteps - 1);
                  const isLast = i === totalSteps - 1;

                  // Colors for the gradient (using hsl values from design system)
                  const colors = [
                    "hsl(210, 100%, 55%)",   // primary
                    "hsl(195, 100%, 50%)",   // secondary  
                    "hsl(200, 100%, 55%)",   // accent
                    "hsl(180, 100%, 45%)",   // chart-3
                  ];
                  const fillColor = colors[i] || colors[0];

                  return (
                    <div key={step.label} className="w-full flex flex-col items-center">
                      {/* Label row */}
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

                      {/* Trapezoid shape */}
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
                          points={`${(400 - topWidthPct * 4) / 2},0 ${(400 + topWidthPct * 4) / 2},0 ${(400 + (isLast ? bottomWidthPct : bottomWidthPct) * 4) / 2},60 ${(400 - (isLast ? bottomWidthPct : bottomWidthPct) * 4) / 2},60`}
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

                      {/* Arrow between steps */}
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
    </div>
  );
}

/* Reusable input with slider */
function SimInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label className="text-xs text-muted-foreground">{label}</Label>
        <span className="text-sm font-bold text-foreground">
          {prefix && <span className="text-muted-foreground text-xs mr-0.5">{prefix}</span>}
          {step < 1 ? formatDecimal(value) : formatNumber(value)}
          {suffix && <span className="text-muted-foreground text-xs ml-0.5">{suffix}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:cursor-pointer"
      />
    </div>
  );
}
