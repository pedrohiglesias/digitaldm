import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  TrendingUp,
  Users,
  MessageSquare,
  ShoppingCart,
  ArrowRight,
  Calculator,
  Percent,
} from "lucide-react";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatNumber = (value: number) =>
  value.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

export function LeadCalculatorSection() {
  const [investimento, setInvestimento] = useState(3240);
  const [cpl, setCpl] = useState(18);
  const [taxaAtendimento, setTaxaAtendimento] = useState(12.8);
  const [taxaVenda, setTaxaVenda] = useState(17.4);
  const [ticketMedio, setTicketMedio] = useState(955);

  const results = useMemo(() => {
    const leads = cpl > 0 ? investimento / cpl : 0;
    const atendimentos = leads * (taxaAtendimento / 100);
    const vendas = atendimentos * (taxaVenda / 100);
    const faturamento = vendas * ticketMedio;
    const roi = investimento > 0 ? ((faturamento - investimento) / investimento) * 100 : 0;
    const roas = investimento > 0 ? faturamento / investimento : 0;

    return { leads, atendimentos, vendas, faturamento, roi, roas };
  }, [investimento, cpl, taxaAtendimento, taxaVenda, ticketMedio]);

  return (
    <div>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8 max-w-5xl mx-auto">
          {/* Inputs */}
          <Card className="border-border/50">
            <CardContent className="p-0">
              <div className="bg-primary text-primary-foreground p-4 rounded-t-xl">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Configure Sua Simulação
                </h3>
              </div>
              <div className="p-6 space-y-5">
                <div className="space-y-1.5">
                  <Label className="text-sm flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    Investimento Mensal em Anúncios (R$)
                  </Label>
                  <Input
                    type="number"
                    value={investimento}
                    onChange={(e) => setInvestimento(Math.max(0, Number(e.target.value)))}
                    className="text-lg font-bold"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    Custo por Lead - CPL (R$)
                  </Label>
                  <Input
                    type="number"
                    value={cpl}
                    onChange={(e) => setCpl(Math.max(1, Number(e.target.value)))}
                    className="text-lg font-bold"
                  />
                  <p className="text-xs text-muted-foreground">
                    Quanto você paga por cada pessoa interessada
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm flex items-center gap-2">
                    <Percent className="w-4 h-4 text-muted-foreground" />
                    Taxa: Lead vira Atendimento/Conversa (%)
                  </Label>
                  <Input
                    type="number"
                    value={taxaAtendimento}
                    onChange={(e) => setTaxaAtendimento(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="text-lg font-bold"
                    step="0.1"
                  />
                  <p className="text-xs text-muted-foreground">
                    Quantos % dos leads realmente conversam com você
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm flex items-center gap-2">
                    <Percent className="w-4 h-4 text-muted-foreground" />
                    Taxa: Atendimento vira Venda (%)
                  </Label>
                  <Input
                    type="number"
                    value={taxaVenda}
                    onChange={(e) => setTaxaVenda(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="text-lg font-bold"
                    step="0.1"
                  />
                  <p className="text-xs text-muted-foreground">
                    Quantos % das conversas viram venda
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    Ticket Médio por Venda (R$)
                  </Label>
                  <Input
                    type="number"
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(Math.max(1, Number(e.target.value)))}
                    className="text-lg font-bold"
                  />
                  <p className="text-xs text-muted-foreground">
                    Valor médio que cada cliente gasta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funnel Results */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-1">Seu Funil de Vendas</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Resultados estimados baseados nos seus dados
            </p>

            <div className="w-full max-w-sm flex flex-col items-center gap-0">
              {/* Leads */}
              <div className="w-full rounded-xl bg-primary p-5 text-center text-primary-foreground">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Leads Gerados</span>
                </div>
                <p className="text-4xl font-black">{formatNumber(results.leads)}</p>
                <p className="text-xs opacity-80 mt-1">Pessoas interessadas no seu negócio</p>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-1">
                <div className="w-px h-4 bg-border" />
                <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/50 bg-muted/30">
                  {taxaAtendimento}% convertem
                </span>
                <div className="w-px h-4 bg-border" />
              </div>

              {/* Atendimentos */}
              <div className="w-full rounded-xl bg-secondary p-5 text-center text-secondary-foreground">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Atendimentos/Conversas</span>
                </div>
                <p className="text-4xl font-black">{formatNumber(results.atendimentos)}</p>
                <p className="text-xs opacity-80 mt-1">Leads que conversaram com você</p>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-1">
                <div className="w-px h-4 bg-border" />
                <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border/50 bg-muted/30">
                  {taxaVenda}% fecham
                </span>
                <div className="w-px h-4 bg-border" />
              </div>

              {/* Vendas */}
              <div className="w-full rounded-xl bg-accent p-5 text-center text-accent-foreground">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Vendas Realizadas</span>
                </div>
                <p className="text-4xl font-black">{formatNumber(results.vendas)}</p>
                <p className="text-xs opacity-80 mt-1">Negócios fechados no mês</p>
              </div>

              {/* Bottom KPIs */}
              <div className="grid grid-cols-2 gap-3 w-full mt-4">
                <div className="rounded-xl bg-primary p-4 text-center text-primary-foreground">
                  <p className="text-xs font-semibold opacity-80">Faturamento Estimado</p>
                  <p className="text-xl font-black">{formatBRL(results.faturamento)}</p>
                </div>
                <div className={`rounded-xl p-4 text-center ${results.roi >= 0 ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"}`}>
                  <p className="text-xs font-semibold opacity-80">Retorno (ROI)</p>
                  <p className="text-xl font-black">
                    {results.roi >= 0 ? "+" : ""}{results.roi.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}%
                  </p>
                </div>
              </div>

              {/* ROAS */}
              <div className="w-full rounded-xl bg-card border border-border/50 p-4 text-center mt-3">
                <p className="text-xs font-semibold text-muted-foreground">Retorno sobre Investimento (ROAS)</p>
                <p className="text-3xl font-black mt-1">
                  {results.roas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}x
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Para cada R$ 1,00 investido, você fatura {formatBRL(results.roas)}
                </p>
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full max-w-sm mt-6">
              <a href="https://tintim.link/whatsapp/3cd6aada-3f3e-484b-a2b2-91f08e2bc002/ca4bcf0b-b472-419d-9c5f-aefde3ea931a" target="_blank" rel="noopener noreferrer">
                Quero esse resultado <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
    </div>
  );
}
