import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  ArrowRight,
  Calculator,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BaseCalculatorSection } from "@/components/landing/BaseCalculatorSection";
import { LeadCalculatorSection } from "@/components/landing/LeadCalculatorSection";
import { EcommerceCalculatorSection } from "@/components/landing/EcommerceCalculatorSection";

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
    title: "Escolha a calculadora",
    description: "Selecione entre E-commerce, Base de Clientes ou Geração de Leads conforme seu modelo de negócio.",
  },
  {
    step: "02",
    title: "Insira seus dados",
    description: "Preencha investimento, ticket médio e demais parâmetros com base nos seus números reais.",
  },
  {
    step: "03",
    title: "Analise o funil",
    description: "Veja em tempo real quantas vendas, receita e retorno seu investimento pode gerar.",
  },
  {
    step: "04",
    title: "Tome a decisão certa",
    description: "Compare cenários e descubra o investimento ideal para maximizar seu ROAS.",
  },
];

export default function SimuladorDm() {
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra quantas vendas, qual receita e qual ROAS seu negócio pode alcançar
            antes de investir um único real em anúncios.
          </p>
        </div>
      </section>

      {/* All Calculators in Tabs */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ecommerce" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
              <TabsTrigger value="ecommerce" className="py-3 text-sm font-semibold">
                🛒 Vendas para E-commerce
              </TabsTrigger>
              <TabsTrigger value="base" className="py-3 text-sm font-semibold">
                📊 Ativar Base de Clientes
              </TabsTrigger>
              <TabsTrigger value="leads" className="py-3 text-sm font-semibold">
                🎯 Geração de Leads
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ecommerce">
              <EcommerceCalculatorSection />
            </TabsContent>
            <TabsContent value="base">
              <BaseCalculatorSection />
            </TabsContent>
            <TabsContent value="leads">
              <LeadCalculatorSection />
            </TabsContent>
          </Tabs>
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
              Como usar nossas{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                calculadoras
              </span>{" "}
              para vender mais
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simule funis de e-commerce, ativação de base de clientes ou geração de leads.
              Entender esses números é o primeiro passo para escalar suas vendas com previsibilidade.
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
              Como as simulações{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                impactam seu negócio
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A maioria dos negócios investe sem saber se o retorno será positivo.
              Com nossas calculadoras, você elimina as suposições e toma decisões inteligentes.
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
              <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">
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
