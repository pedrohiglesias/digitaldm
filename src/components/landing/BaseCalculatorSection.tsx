import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Users,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Calculator,
} from "lucide-react";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const CUSTO_MEDIO_LEAD_ADS = 250;

export function BaseCalculatorSection() {
  const [baseClientes, setBaseClientes] = useState(5000);
  const [ticketMedio, setTicketMedio] = useState(150);
  const [taxaConversao, setTaxaConversao] = useState(3);

  const results = useMemo(() => {
    const vendas = baseClientes * (taxaConversao / 100);
    const receita = vendas * ticketMedio;
    const custoAds = vendas * CUSTO_MEDIO_LEAD_ADS;
    const economia = custoAds - receita > 0 ? custoAds - receita : custoAds;
    const roi = receita > 0 ? ((receita / (receita * 0.05)) * 100) : 0;
    // ROI simplificado: custo de campanha ~5% da receita
    const custoCampanha = receita * 0.05;
    const roiReal = custoCampanha > 0 ? ((receita - custoCampanha) / custoCampanha) * 100 : 0;

    return { vendas, receita, custoAds, economia: custoAds - custoCampanha, roiReal, custoCampanha };
  }, [baseClientes, ticketMedio, taxaConversao]);

  return (
    <section className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            Calculadora de ROI
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Quanto você pode{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              economizar
            </span>{" "}
            ativando sua base?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra o potencial de receita da sua base de clientes comparado ao
            custo de mídia paga.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 max-w-5xl mx-auto">
          {/* Inputs */}
          <Card className="border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-bold">Insira seus dados</h3>

              <div className="space-y-1.5">
                <Label className="text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  Tamanho da sua base de clientes
                </Label>
                <Input
                  type="number"
                  value={baseClientes}
                  onChange={(e) => setBaseClientes(Math.max(0, Number(e.target.value)))}
                  className="text-lg font-bold"
                />
                <p className="text-xs text-muted-foreground">
                  Número total de contatos (e-mail, WhatsApp, telefone)
                </p>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  Ticket médio (R$)
                </Label>
                <Input
                  type="number"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Math.max(1, Number(e.target.value)))}
                  className="text-lg font-bold"
                />
                <p className="text-xs text-muted-foreground">
                  Valor médio de cada venda
                </p>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  Taxa de conversão esperada (%)
                </Label>
                <Input
                  type="number"
                  value={taxaConversao}
                  onChange={(e) => setTaxaConversao(Math.max(0, Math.min(100, Number(e.target.value))))}
                  className="text-lg font-bold"
                />
                <p className="text-xs text-muted-foreground">
                  Média de 2-5% para campanhas bem estruturadas
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {/* Receita Potencial */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Receita Potencial (1 campanha/mês)
                  </h4>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/20 text-primary">
                    CRM
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-black text-primary">
                  {formatBRL(results.receita)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.vendas.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} vendas × {formatBRL(ticketMedio)}
                </p>
              </CardContent>
            </Card>

            {/* Custo Ads */}
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Custo para o mesmo resultado (mídia paga)
                  </h4>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-destructive/20 text-destructive">
                    ADS
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-black text-destructive">
                  {formatBRL(results.custoAds)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.vendas.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} leads × {formatBRL(CUSTO_MEDIO_LEAD_ADS)} (custo médio)
                </p>
              </CardContent>
            </Card>

            {/* Economia */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Você economiza
                </h4>
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {formatBRL(results.economia)}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="font-bold">ROI: {results.roiReal.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}%</span>
                  <span className="text-muted-foreground">por campanha</span>
                </div>
              </CardContent>
            </Card>

            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="https://wzap.me/9665020002" target="_blank" rel="noopener noreferrer">
                Quero ativar minha base agora <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
