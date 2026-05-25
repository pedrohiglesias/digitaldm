import { ArrowRight, CheckCircle2, XCircle, Zap, Target, Palette, MessageSquare, ShoppingCart, Clock, BarChart3, Users, Bot, Shield, FileText, CalendarDays, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const pilares = [
  {
    num: "Pilar 1",
    title: "Oferta que Vende",
    icon: Target,
    items: [
      "Produto de entrada com kits, combos e âncoras de valor",
      "Calendário de campanhas com drops, best-sellers e reposição",
      "Oferta certa para o canal certo, sem misturar tudo numa bagunça",
    ],
  },
  {
    num: "Pilar 2",
    title: "Esteira de Criativos: O Motor da Moda",
    icon: Palette,
    items: [
      "Direção criativa semanal com ângulos, roteiros e variações",
      "UGC, try-on, prova social, carrossel, oferta direta e bastidores",
      "Criativos que vendem de verdade, não só criativos bonitos",
    ],
  },
  {
    num: "Pilar 3",
    title: "Meta Ads para Escala de Verdade",
    icon: BarChart3,
    items: [
      "Estrutura completa: prospecção, remarketing e testes contínuos",
      "Otimização orientada a venda e não a CPM ou curtida",
      "Budget que escala com performance e não com achismo",
    ],
  },
  {
    num: "Pilar 4",
    title: "Conversão via WhatsApp, IG e E-commerce",
    icon: MessageSquare,
    items: [
      "Script de WhatsApp com qualificação e follow-up sem improviso",
      "Recuperação de abandono e reativação com frequência inteligente",
      "Bio, destaques, páginas essenciais e checkout enxuto",
    ],
  },
];

const fases = [
  {
    num: "1",
    period: "Dias 1 a 30: Calibração e Implantação",
    title: "Montamos o Ecossistema do Zero",
    items: [
      "Setup completo: site, landing page, CRM DMIA e Agent IA configurados",
      "Campanhas de Ads no ar com estrutura, rastreio e verba mínima de R$ 3.000",
      "Integração de todos os canais: WhatsApp, Instagram, e-commerce e tráfego pago",
      "A gestão de R$ 2.500/mês começa apenas no 2° mês — o cliente não paga gestão no primeiro mês",
    ],
  },
  {
    num: "2",
    period: "Dias 31 a 60: Operação e Otimização",
    title: "A Máquina Liga. Os Dados Falam.",
    items: [
      "Testes de criativos com identificação dos vencedores e escalada de verba",
      "CRM e Agent IA qualificando leads 24h via WhatsApp automaticamente",
      "Otimização semanal de campanhas orientada 100% a venda",
      "Relatórios quinzenais com o que subiu, o que caiu e o que muda",
    ],
  },
  {
    num: "3",
    period: "Dias 61 a 90: Consolidação e Escala",
    title: "+10% a +15% de Faturamento. Garantido.",
    items: [
      "Rotina de operação consolidada com dados, criativos e conversão integrados",
      "Revisão completa dos marcos: o ecossistema entrega o prometido ou a DigitalDM estende",
      "Você para de depender de improviso — o negócio vende com estrutura",
    ],
  },
];

const faqs = [
  {
    q: "Vocês garantem faturamento?",
    a: "Trabalhamos com metas, marcos e condições operacionais claras. Resultado depende de estoque, margem, atendimento e criativos. Garantimos execução com método e comprometimento real.",
  },
  {
    q: "Funciona para atacado?",
    a: "Sim. O Acelera 90 Dias adapta oferta e qualificação para atacado e híbrido com foco em volume, ticket e frequência de pedidos. Já rodamos isso com marcas do Brás.",
  },
  {
    q: "E se eu não tiver e-commerce?",
    a: "Sem problema. O Acelera 90 Dias funciona com força via WhatsApp e Instagram. Se tiver e-commerce, ativamos catálogo e esteira completa conforme o caso.",
  },
  {
    q: "Quando sinto resultado?",
    a: "A Fase 1 já coloca estrutura e campanhas no ar nos primeiros 30 dias. O resultado aparece na Fase 2 com a máquina rodando. O Acelera 90 Dias é construção e não virada milagrosa.",
  },
];

const CTA_URL = "https://wa.me/554991002472";

export default function Acelera90Dias() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">ACELERA 90 DIAS — DIGITALDM</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-8 ml-2">
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Ecossistema Completo para Vender</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Não Estamos Vendendo{" "}
            <span className="text-gradient">Mais Um Serviço.</span>{" "}
            Estamos Vendendo um Ecossistema.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            Você fatura <strong className="text-foreground">R$ 50k ou mais por mês</strong> e ainda improvisa campanha, site, CRM e atendimento.
            A DigitalDM monta o ecossistema completo de vendas:{" "}
            <strong className="text-foreground">site, landing page, CRM com Agent IA, tráfego e conversão — tudo integrado, tudo funcionando.</strong>
          </p>

          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Os primeiros 30 dias são de calibração e implantação.
            Do dia 31 em diante, a máquina está rodando. A meta: +10% a +15% de faturamento em 90 dias.
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Quero o Acelera 90 Dias
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Perfil Ideal */}
      <PerfilSection />

      {/* 4 Pilares */}
      <PilaresSection />

      {/* 3 Fases */}
      <FasesSection />

      {/* CRM DMIA / IA */}
      <IaSection />

      {/* Garantia */}
      <GarantiaSection />

      {/* Rotina / Transparência */}
      <RotinaSection />

      {/* Investimento */}
      <InvestimentoSection />

      {/* Simulação */}
      <SimulacaoSection />

      {/* Decisão Final */}
      <DecisaoSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA Final */}
      <CtaFinalSection />

      <Footer />
    </div>
  );
}

/* ─── Sub-sections ─── */

function PerfilSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Perfil Ideal</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          O Acelera 90 Dias <span className="text-gradient">NÃO É PARA TODO MUNDO.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Isso é exatamente o que protege os resultados de quem está dentro. Veja com honestidade se você se encaixa.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ Esse é o seu momento</h3>
              <ul className="space-y-3">
                {[
                  "Marca de Moda: varejo, atacado ou híbrido",
                  "Fatura R$ 50k ou mais por mês com estoque e reposição garantidos",
                  "Vende por WhatsApp, Instagram ou e-commerce",
                  "Ticket médio de R$ 200+ no varejo",
                  "Quer previsibilidade de pedidos e escala sem depender de sorte",
                  "Consegue aprovar criativos com agilidade toda semana",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-destructive">❌ Esse não é o caminho para você</h3>
              <ul className="space-y-3">
                {[
                  "Quem não tem estoque ou reposição garantida",
                  "Quem não consegue aprovar criativos com agilidade",
                  "Quem espera resultado sem comprometer a operação do lado dele",
                  "Quem não responde WhatsApp e não aceita automatizar",
                  "Quem fatura abaixo de R$ 50k — para esse perfil existe a Gestão Mensal (R$ 40k+) ou a Mentoria 360 (abaixo de R$ 30k)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PilaresSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">A Operação</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Os 4 Pilares da <span className="text-gradient">Máquina de Vendas</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Não é tráfego isolado. É sistema integrado onde cada pilar alimenta o próximo e o resultado é escala controlada.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {pilares.map((p, i) => (
            <Card key={i} className="border-border/50 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold">{p.num}</p>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FasesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">O Caminho</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          3 Fases. 90 Dias. <span className="text-gradient">1 Ecossistema.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Cada fase tem entregáveis, marcos e clareza total. Você nunca vai ficar sem saber onde está no processo.
        </p>

        <div className="space-y-8">
          {fases.map((f) => (
            <Card key={f.num} className="border-border/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">
                    {f.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary font-semibold mb-1">{f.period}</p>
                    <h3 className="text-lg md:text-xl font-bold mb-4">{f.title}</h3>
                    <ul className="space-y-2">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function IaSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Diferencial Exclusivo</p>
        <p className="text-xs text-muted-foreground text-center mb-2">Tecnologia IA: Opcional</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          CRM DMIA, sistema com Agent IA{" "}
          <span className="text-gradient">para qualificação via WhatsApp.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Enquanto você dorme, o agente qualifica, recupera e converte.
          Segmentação por coleção, tamanho e interesse de compra.
          Frequência inteligente sem spam e sem queimar nenhum contato.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Bot, title: "Atendimento 24h Automatizado", desc: "Qualificação, recuperação e fechamento de leads enquanto sua equipe descansa" },
            { icon: Users, title: "Segmentação por Perfil de Compra", desc: "Por interesse, coleção e tamanho com a mensagem certa chegando na hora certa" },
            { icon: TrendingUp, title: "Reativação e Recuperação", desc: "Carrinho abandonado, cliente sumido, lead frio: todos com esteira ativa funcionando" },
            { icon: Shield, title: "Frequência Inteligente com Opt-in", desc: "Zero spam, conta protegida e relacionamento construído com consentimento" },
          ].map((item, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GarantiaSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Compromisso DigitalDM</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          A Gente <span className="text-gradient">COLOCA A PELE NO JOGO.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Resultado é construído junto. Por isso assumimos compromisso formal de entrega.
        </p>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg font-bold mb-4">🛡️ Garantia Operacional por Marcos no Dia 90</h3>
            <p className="text-muted-foreground mb-4">
              Se até o Dia 90 não entregarmos o aumento mínimo de <strong className="text-foreground">10% a 15% no seu faturamento</strong>,
              a DigitalDM <strong className="text-foreground">estende a operação por mais 60 dias sem cobrar gestão.</strong>{" "}
              Isso inclui hospedagem, CRM, Agent IA e toda infraestrutura que mantemos rodando para o seu negócio.
            </p>
            <p className="text-sm text-muted-foreground">
              A promessa é clara: <strong className="text-foreground">aumentar seu faturamento em pelo menos 10% a 15% em 90 dias.</strong>{" "}
              Se precisar de site, landing page, CRM, Agent IA, hospedagem — a DigitalDM absorve esses custos operacionais.{" "}
              <strong className="text-foreground">O cliente só paga Ads (Facebook) e API Oficial do WhatsApp.</strong>
            </p>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-6 max-w-xl mx-auto">
          Trabalhamos com verba mínima de R$ 3.000 em Ads. Resultado depende de estoque, atendimento e aprovação de criativos. Você entra comprometido. A gente também.
        </p>
      </div>
    </section>
  );
}

function RotinaSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Nossa Rotina</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Transparência Total. <span className="text-gradient">Sem Sumiço.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Você sabe o que aconteceu, o que mudou e o que vai mudar toda semana.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: CalendarDays, title: "Reunião Semanal de Performance", desc: "30 a 45 minutos toda semana. O que subiu, o que caiu e o que muda. Sem relatório de vaidade." },
            { icon: MessageSquare, title: "Grupo de Alinhamento", desc: "Comunicação direta em horário comercial para aprovação de criativos, ajustes rápidos e decisões ágeis." },
            { icon: FileText, title: "Relatório Quinzenal", desc: "Dados reais. O que está convertendo, o que está desperdiçando e o que vale escalar agora." },
          ].map((item, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestimentoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Investimento</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Um Ecossistema Completo. <span className="text-gradient">Sob Consulta.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Cada negócio tem um estágio. Por isso o valor é definido após entender sua operação, seus canais e seus objetivos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Setup — Infraestrutura Completa</p>
              <p className="text-3xl font-bold text-primary mb-2">SOB CONSULTA</p>
              <p className="text-xs text-muted-foreground mb-4">Pagamento único de implantação</p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Inclui tudo que o seu negócio precisa para funcionar: site, landing page, CRM DMIA, Agent IA, hospedagem, configuração de tráfego pago, rastreio e integração completa dos canais.
                </p>
                <p className="text-sm text-primary font-semibold">
                  ✅ A DigitalDM absorve os custos operacionais
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  CRM, site se for conosco, servidor, hospedagem do Agent IA e toda infraestrutura de tráfego.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Gestão Mensal</p>
              <p className="text-3xl font-bold mb-2">R$ 2.500 <span className="text-base font-normal text-muted-foreground">/mês</span></p>
              <p className="text-xs text-muted-foreground mb-4">Cobrado a partir do 2° mês após implantação</p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm text-muted-foreground">
                  No 1° mês a gestão não é cobrada — o foco é calibração e implantação. Do 2° mês em diante, a DigitalDM está 100% operando sua máquina de vendas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-2">💰 Investimento em Ads (Facebook/Meta)</p>
              <p className="text-lg font-bold text-primary">Mínimo R$ 3.000/mês</p>
              <p className="text-sm text-muted-foreground mt-1">Escala com a performance. Você investe mais quando os números justificam.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-2">💬 API Oficial WhatsApp</p>
              <p className="text-lg font-bold text-primary">Custo de uso</p>
              <p className="text-sm text-muted-foreground mt-1">Pago direto ao provedor. A DigitalDM configura, integra e gerencia tudo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SimulacaoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">⚡ A Conta que Ninguém te Mostrou</p>
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          Se cobrássemos R$ 25k só pela consultoria e mentoria do processo, <span className="text-gradient">ainda valeria cada centavo.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
          Divide por 90 dias. Vê quanto custa montar site, landing page, CRM, Agent IA, hospedagem e tráfego separado no mercado. Depois compara com o que você vai receber integrado e funcionando.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 278</p>
              <p className="text-sm text-muted-foreground">por dia</p>
              <p className="text-xs text-muted-foreground mt-2">R$ 25k ÷ 90 dias. Menos que um funcionário CLT.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">2 vendas</p>
              <p className="text-sm text-muted-foreground">de R$ 200 por dia</p>
              <p className="text-xs text-muted-foreground mt-2">Cobrem os R$ 278 diários. O resto do mês é lucro.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">+10%</p>
              <p className="text-sm text-muted-foreground">faturamento garantido</p>
              <p className="text-xs text-muted-foreground mt-2">Quem fatura R$ 50k ganha +R$ 5k/mês.</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground text-center mb-6">Mas a consultoria é só o começo. O que está incluso no ecossistema completo:</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "Site profissional completo",
            "Landing page de alta conversão",
            "CRM DMIA configurado",
            "Agent IA no WhatsApp 24h",
            "Hospedagem e infraestrutura",
            "Gestão de tráfego e criativos",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-primary font-semibold text-center">
          ✅ A DigitalDM absorve todos esses custos operacionais. Você só paga Ads e API.
        </p>
      </div>
    </section>
  );
}

function DecisaoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">A Decisão</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Sua Marca Merece{" "}
          <span className="text-gradient">Ser Previsível.</span>
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            Você fatura bem em alguns meses e desaparece em outros. Faz campanha e resolve. Para a campanha e cai.
            Isso não é escala. Isso é <strong className="text-foreground">dependência de impulso disfarçada de negócio.</strong>
          </p>
          <p className="text-muted-foreground">
            O Acelera 90 Dias não é para quem quer testar uma nova agência. É para quem decidiu que{" "}
            <strong className="text-foreground">previsibilidade não é luxo, é sobrevivência de negócio.</strong>
          </p>
          <p className="text-muted-foreground">
            A DigitalDM não vai terceirizar tráfego. Vai <strong className="text-foreground">construir sua operação de ponta a ponta</strong>{" "}
            com método, dados e 15 anos de prática no mercado de Moda.
          </p>
          <p className="text-foreground font-semibold mt-6">O seu concorrente já está estruturando a máquina dele.</p>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Dúvidas</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Respostas <span className="text-gradient">Diretas</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card key={i} className="border-border/50 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-sm">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinalSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className={`container mx-auto px-4 max-w-4xl relative z-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2">⚡ É Agora ou É Nunca</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Enquanto Você Hesita,{" "}
          <span className="text-gradient">Seu Concorrente Está Montando o Ecossistema Dele.</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Cada mês sem ecossistema é verba queimada em campanha solta, atendimento manual e lead perdido por falta de automação.{" "}
          <strong className="text-foreground">O problema não é falta de produto. É falta de estrutura que sustente a venda todos os dias.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "SOB CONSULTA", sub: "Setup completo" },
            { label: "90 dias", sub: "Para a máquina rodar" },
            { label: "+10%", sub: "Faturamento garantido" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="xl" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Quero o Acelera 90 Dias
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
