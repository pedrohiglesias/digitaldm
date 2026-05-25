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
  Zap,
  Target,
  CheckCircle,
} from "lucide-react";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatNumber = (value: number) =>
  value.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

const formatDecimal = (value: number, digits = 2) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });

type Scenario = "realista" | "otimista";

const scenarioDefaults: Record<Scenario, { taxaCarrinho: number; taxaCheckout: number; taxaConversao: number }> = {
  realista: { taxaCarrinho: 8, taxaCheckout: 45, taxaConversao: 35 },
  otimista: { taxaCarrinho: 14, taxaCheckout: 60, taxaConversao: 50 },
};

const CPM_FIXO = 20;
const CTR_FIXO = 2.5;
const TAXA_CARREGAMENTO_FIXA = 80;

export function EcommerceCalculatorSection() {
  const [investimento, setInvestimento] = useState(5000);
  const [ticketMedio, setTicketMedio] = useState(180);
  const [activeScenario, setActiveScenario] = useState<Scenario>("realista");

  const scenarioColors: Record<Scenario, { accent: string; accentBg: string; border: string; btn: string; btnOutline: string; funnel: string[] }> = {
    realista: {
      accent: "text-primary",
      accentBg: "bg-primary/20 text-primary",
      border: "border-primary/30",
      btn: "bg-primary hover:bg-primary/90 text-primary-foreground",
      btnOutline: "border-primary/50 text-primary hover:bg-primary/10",
      funnel: ["hsl(210, 100%, 55%)", "hsl(205, 100%, 52%)", "hsl(200, 100%, 50%)", "hsl(195, 100%, 48%)", "hsl(190, 100%, 45%)", "hsl(180, 100%, 42%)"],
    },
    otimista: {
      accent: "text-emerald-400",
      accentBg: "bg-emerald-500/20 text-emerald-400",
      border: "border-emerald-500/30",
      btn: "bg-emerald-500 hover:bg-emerald-600 text-primary-foreground",
      btnOutline: "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10",
      funnel: ["hsl(145, 70%, 45%)", "hsl(148, 68%, 43%)", "hsl(150, 65%, 42%)", "hsl(153, 62%, 40%)", "hsl(155, 60%, 38%)", "hsl(160, 55%, 35%)"],
    },
  };

  const currentColors = scenarioColors[activeScenario];

  const results = useMemo(() => {
    const sc = scenarioDefaults[activeScenario];
    const impressoes = (investimento / CPM_FIXO) * 1000;
    const cliques = impressoes * (CTR_FIXO / 100);
    const cpc = cliques > 0 ? investimento / cliques : 0;
    const pageViews = cliques * (TAXA_CARREGAMENTO_FIXA / 100);
    const carrinho = pageViews * (sc.taxaCarrinho / 100);
    const checkout = carrinho * (sc.taxaCheckout / 100);
    const vendas = checkout * (sc.taxaConversao / 100);
    const receita = vendas * ticketMedio;
    const roas = investimento > 0 ? receita / investimento : 0;
    const lucro = receita - investimento;

    return { impressoes, cliques, cpc, pageViews, carrinho, checkout, vendas, receita, roas, lucro };
  }, [investimento, ticketMedio, activeScenario]);

  const funnelSteps = [
    { label: "Impressões", value: formatNumber(results.impressoes), icon: Eye },
    { label: "Cliques", value: formatNumber(results.cliques), sub: `CPC: ${formatBRL(results.cpc)}`, icon: MousePointerClick },
    { label: "Visualizações da página", value: formatNumber(results.pageViews), icon: BarChart3 },
    { label: "Carrinho", value: formatNumber(results.carrinho), icon: ShoppingCart },
    { label: "Checkout", value: formatNumber(results.checkout), icon: CreditCard },
    { label: "Vendas", value: formatNumber(results.vendas), icon: CheckCircle },
  ];

  const kpis = [
    { label: "Investimento", value: formatBRL(investimento), icon: DollarSign, accent: false },
    { label: "Receita Projetada", value: formatBRL(results.receita), icon: TrendingUp, accent: true },
    { label: "ROAS", value: `${formatDecimal(results.roas)}x`, icon: Target, accent: true },
    { label: "Lucro Líquido", value: formatBRL(results.lucro), icon: CreditCard, accent: results.lucro > 0, negative: results.lucro < 0 },
  ];

  return (
    <div>
      {/* Scenario Toggle */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {(["realista", "otimista"] as Scenario[]).map((s) => (
          <Button
            key={s}
            size="lg"
            variant="outline"
            onClick={() => setActiveScenario(s)}
            className={`capitalize ${activeScenario === s ? scenarioColors[s].btn : scenarioColors[s].btnOutline}`}
          >
            Cenário {s}
          </Button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <Card
            key={kpi.label}
            className={`border-border/50 ${kpi.negative ? "border-destructive/50" : kpi.accent ? currentColors.border : ""}`}
          >
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`p-2 rounded-lg ${kpi.negative ? "bg-destructive/20 text-destructive" : kpi.accent ? currentColors.accentBg : "bg-muted text-muted-foreground"}`}>
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

            <Button asChild variant="hero" size="lg" className="w-full mt-4">
              <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">
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
                        {step.sub && <span className="text-xs text-muted-foreground">{step.sub}</span>}
                      </div>
                    </div>

                    <svg viewBox="0 0 400 60" className="w-full transition-all duration-700" style={{ maxWidth: "100%" }} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`ecom-funnel-grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor={fillColor} stopOpacity="0.7" />
                          <stop offset="50%" stopColor={fillColor} stopOpacity="1" />
                          <stop offset="100%" stopColor={fillColor} stopOpacity="0.7" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points={`${(400 - topWidthPct * 4) / 2},0 ${(400 + topWidthPct * 4) / 2},0 ${(400 + bottomWidthPct * 4) / 2},60 ${(400 - bottomWidthPct * 4) / 2},60`}
                        fill={`url(#ecom-funnel-grad-${i})`}
                        className="transition-all duration-700"
                      />
                      <text x="200" y="36" textAnchor="middle" className="fill-foreground text-sm font-bold" style={{ fontSize: "16px", fontWeight: 700 }}>
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
  );
}
