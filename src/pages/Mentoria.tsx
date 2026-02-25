import { ArrowRight, CheckCircle2, XCircle, Target, Zap, FileText, BarChart3, MessageSquare, CalendarDays, ChevronDown, Shirt, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const encontros = [
  {
    num: "01",
    label: "Encontro 1",
    title: "Diagnóstico Completo: Entendemos o Seu Negócio por Dentro",
    items: [
      "Levantamento total da operação: produto, oferta, público, canais de venda e concorrência",
      "Identificação dos gargalos reais — por que as vendas não crescem e onde está o bloqueio",
      "Coleta de todos os acessos necessários: Meta Ads, Instagram, pixel, WhatsApp e e-commerce",
      "Definição do produto campeão, oferta de entrada e posicionamento que prende atenção",
      "Plano de ação personalizado: o que vai ser feito nos próximos encontros, em que ordem e por quê",
    ],
  },
  {
    num: "02",
    label: "Encontro 2",
    title: "Mão na Massa: Instagram, Campanha no Ar e Criativo Rodando",
    items: [
      "Ajuste do perfil do Instagram com foco comercial: bio, destaques e páginas que vendem",
      "Estrutura de campanha no Meta Ads montada ao vivo: conta, pixel, eventos e públicos configurados",
      "Criativo desenvolvido e publicado na sessão — você vê o anúncio subindo em tempo real",
      "Roteiro de conteúdo comercial: prova social, oferta direta, bastidor e autoridade",
      "Calendário simples e executável para você manter a rotina sozinho após o encontro",
    ],
  },
  {
    num: "03",
    label: "Encontro 3",
    title: "Otimizações, Melhorias e Você Tocando Sozinho com Clareza",
    items: [
      "Análise dos dados gerados desde o 2° encontro: o que funcionou, o que ajustar e o que escalar",
      "Ajustes ao vivo nas campanhas, criativos e segmentação com base nos resultados reais",
      "Rotina de métricas simplificada: os únicos números que você precisa olhar para tomar decisão",
      "Manual de operação personalizado: você sabe exatamente o que fazer semana a semana",
      "Próximo passo mapeado: crescimento contínuo com Gestão Mensal ou Acelera 90 Dias se for a hora",
    ],
  },
];

const entregaveis = [
  { icon: CalendarDays, title: "Plano de Marketing de 30 Dias", desc: "Roteiro completo de execução com o que fazer, quando e por que cada ação existe." },
  { icon: Target, title: "Estrutura de Campanhas", desc: "Sugestão completa com templates de anúncios prontos para o Meta Ads." },
  { icon: MessageSquare, title: "Script de WhatsApp", desc: "Para atendimento, qualificação e fechamento de vendas sem improviso." },
  { icon: FileText, title: "Checklist de Criativos", desc: "O que gravar, como estruturar e em qual frequência, semana a semana sem dúvida." },
  { icon: BarChart3, title: "Direção de Métricas", desc: "O que é bom e o que é desperdício, sem achismo e sem enfeitar relatório." },
  { icon: Zap, title: "Plano Estratégico de 60 Dias", desc: "Próximos passos definidos para escala real, sem ficar perdido depois do programa." },
];

const faqs = [
  { q: "Isso funciona para Moda?", a: "Sim, especialmente para quem vende por WhatsApp e Instagram e precisa organizar oferta, criativos e rotina de campanhas. Moda é um dos mercados em que mais atuamos." },
  { q: "Vocês vão executar por mim?", a: "Não. A Mentoria 360 é para você aprender e executar com direção clara. Se você quer execução total com criativos, tráfego e escala entregues, o caminho é o Acelera 90 Dias." },
  { q: "Preciso ter e-commerce?", a: "Não. Mas se tiver, orientamos o básico de estrutura e conversão. Execução completa de e-commerce faz parte da operação do Acelera 90 Dias." },
  { q: "Em quanto tempo sinto resultado?", a: "Você sai do primeiro encontro já com plano de ação. Os resultados dependem da velocidade de execução, mas você nunca vai ficar sem saber o que fazer em seguida." },
];

const CTA_URL = "https://wzap.me/9665020002";

export default function Mentoria() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">MENTORIA 360</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-8 ml-2">
            <Shirt className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Moda e Varejo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Você Não Está Perdendo{" "}
            <span className="text-gradient">Por Falta de Esforço.</span>{" "}
            Está Perdendo Por Falta de Método.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sua marca fatura <strong className="text-foreground">abaixo de R$ 30k/mês</strong> e você já tentou de tudo.
            Mais posts, mais impulsionamento, mais "estratégia" copiada do Instagram.
            O problema não é dedicação. É que <strong className="text-foreground">ninguém ainda te deu um mapa de verdade.</strong>
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Quero a Mentoria 360
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Perfil */}
      <PerfilSection />

      {/* Encontros */}
      <EncontrosSection />

      {/* Entregáveis */}
      <EntregaveisSection />

      {/* Investimento */}
      <InvestimentoSection />

      {/* Simulação */}
      <SimulacaoSection />

      {/* Decisão */}
      <DecisaoSection />

      {/* FAQ */}
      <FaqAccordion />

      {/* CTA Final */}
      <CtaFinalSection />

      <Footer />
    </div>
  );
}

function PerfilSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Fit Ideal</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Esse Perfil <span className="text-gradient">É Você?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Alinhamento honesto define resultado real. Leia com atenção.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ Esse é o seu momento</h3>
              <ul className="space-y-3">
                {[
                  "Você fatura abaixo de R$ 30k/mês",
                  "Vende por WhatsApp ou Instagram e talvez esteja migrando pro e-commerce",
                  "Quer entender o que está travando suas vendas e agir com clareza",
                  "Está disposto a executar entre os encontros porque sabe que nada acontece no passivo",
                  "Quer sair do \"postar e rezar\" e entrar no modo campanha com rotina",
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
                  "Quem quer resultado sem executar nada",
                  "Quem quer que alguém faça tudo por ele — para isso existe o Acelera 90 Dias",
                  "Quem não consegue dedicar tempo entre as sessões",
                  "Quem acredita que marketing é sorte ou timing de mercado",
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

function EncontrosSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">O Programa</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          3 Encontros. <span className="text-gradient">3 Fases de Resultado.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Cada sessão tem começo, meio e fim. Você sai com ação clara, estrutura montada e o próximo passo definido — sempre.
        </p>

        <div className="space-y-8">
          {encontros.map((e) => (
            <Card key={e.num} className="border-border/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                    {e.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary font-semibold mb-1">{e.label}</p>
                    <h3 className="text-lg md:text-xl font-bold mb-4">{e.title}</h3>
                    <ul className="space-y-2">
                      {e.items.map((item, j) => (
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

function EntregaveisSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Entregáveis</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          O Que Você <span className="text-gradient">Leva na Mão</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Não é teoria. São ativos operacionais prontos para você aplicar no dia seguinte ao último encontro.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {entregaveis.map((item, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
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
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Investimento</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Quanto Custa Ter <span className="text-gradient">Clareza?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Menos do que mais um mês de tráfego sem estratégia. Muito menos.
        </p>

        <Card className="border-primary/30 max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            <p className="text-sm text-muted-foreground mb-1">Valor total</p>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">R$ 4.997</p>
            <p className="text-sm text-muted-foreground mb-6">Pagamento único sem mensalidade</p>
            <div className="border-t border-border/50 pt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Encontros de 1 a 2h</p>
              </div>
              <div>
                <p className="text-xl font-bold">Online</p>
                <p className="text-xs text-muted-foreground">Formato</p>
              </div>
              <div>
                <p className="text-xl font-bold">100%</p>
                <p className="text-xs text-muted-foreground">Mão na massa</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">💡 O Custo de Não Agir</h4>
              <p className="text-xs text-muted-foreground">Cada mês sem estrutura é um mês de verba desperdiçada, produto certo com oferta errada e vendas que não vieram.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">📦 O Que Está Incluído</h4>
              <p className="text-xs text-muted-foreground">3 sessões de 1 a 2 horas, tarefas práticas entre as sessões, todos os entregáveis documentados e plano de próximos passos.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">🚀 O Próximo Nível</h4>
              <p className="text-xs text-muted-foreground">Para quem quer execução completa com criativos, tráfego e escala, o caminho é o <strong className="text-foreground">Acelera 90 Dias.</strong></p>
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
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">⚡ A Conta que Ninguém te Mostrou</p>
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          R$ 4.997 parece muito. Até você ver que é{" "}
          <span className="text-gradient">menos do que 2 vendas por dia.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
          Divide por 6 meses. Divide por 30 dias. O número vai te surpreender — e vai doer ter esperado tanto tempo.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 28</p>
              <p className="text-sm text-muted-foreground">por dia</p>
              <p className="text-xs text-muted-foreground mt-2">Menos que um almoço no shopping.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 833</p>
              <p className="text-sm text-muted-foreground">por mês</p>
              <p className="text-xs text-muted-foreground mt-2">Menos que uma arte no freela.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 1.665</p>
              <p className="text-sm text-muted-foreground">por sessão</p>
              <p className="text-xs text-muted-foreground mt-2">3 sessões que mudam sua operação.</p>
            </CardContent>
          </Card>
        </div>

        {/* Matemática Real */}
        <p className="text-sm text-primary font-semibold text-center mb-6">🧮 A Matemática Real</p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-2">Ticket R$ 100</p>
              <p className="text-2xl font-bold text-primary">50 <span className="text-sm font-normal text-muted-foreground">vendas/mês</span></p>
              <p className="text-sm text-muted-foreground mt-1">= 1,7 venda por dia</p>
              <p className="text-xs text-muted-foreground mt-2">Mentoria paga. Restam ~28 dias de lucro puro no mês.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <p className="text-sm font-semibold mb-2">Ticket R$ 150 ⭐</p>
              <p className="text-2xl font-bold text-primary">34 <span className="text-sm font-normal text-muted-foreground">vendas/mês</span></p>
              <p className="text-sm text-muted-foreground mt-1">= 1,1 venda por dia</p>
              <p className="text-xs text-muted-foreground mt-2">Uma venda por dia e a Mentoria já está paga. O resto? Lucro.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Se você vende moda e fatura <strong className="text-foreground">abaixo de R$ 30k/mês</strong>, sua operação provavelmente já tem volume para pagar a Mentoria.
            O que falta não é venda. É <strong className="text-foreground">estrutura para converter o que já chega.</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Enquanto você hesita, <strong className="text-foreground">sua marca perde venda toda semana por falta de método.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card className="border-border/50">
            <CardContent className="p-6 flex items-start gap-3">
              <span className="text-2xl">👕</span>
              <div>
                <p className="font-bold text-sm">34 vendas × R$ 150 = R$ 5.100</p>
                <p className="text-xs text-muted-foreground">Mentoria paga. Tudo que vier depois é lucro.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-6 flex items-start gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-bold text-sm">Sem método = sem previsibilidade</p>
                <p className="text-xs text-muted-foreground">Cada mês sem estrutura é dinheiro que não volta.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm mb-2">A pergunta não é se você pode pagar R$ 4.997.</p>
          <p className="text-lg md:text-xl font-bold text-primary">QUANTO VOCÊ ESTÁ PERDENDO TODO MÊS SEM CLAREZA E SEM MÉTODO!</p>
        </div>
      </div>
    </section>
  );
}

function DecisaoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">A Decisão</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Você Vai Continuar Tentando Sozinho{" "}
          <span className="text-gradient">ou Vai Parar de Improvisar?</span>
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            Todo mês que passa sem método é um mês de <strong className="text-foreground">verba desperdiçada, criativo errado e campanha que não converte.</strong>
          </p>
          <p className="text-muted-foreground">
            A Mentoria 360 não é sobre aprender marketing. É sobre <strong className="text-foreground">construir o seu sistema de vendas</strong> com quem já fez isso para mais de 120 empresas.
          </p>
          <p className="text-foreground font-semibold mt-6">
            Não existe momento perfeito para organizar a casa. Existe o momento em que você decide que chega de improvisar.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Dúvidas</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Perguntas <span className="text-gradient">Diretas</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card key={i} className="border-border/50 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
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
        <p className="text-sm text-primary font-semibold mb-2">⏳ A Decisão Que Muda Tudo</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Enquanto Você Ainda Está Pensando,{" "}
          <span className="text-gradient">Seu Concorrente Já Está Agindo.</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Cada mês que passa é um mês de campanha errada, criativo que não converte e verba que não volta.{" "}
          <strong className="text-foreground">A Mentoria 360 não é uma despesa. É o atalho que você deveria ter tomado há 6 meses.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "R$ 28", sub: "por dia" },
            { label: "3", sub: "Encontros 1:1" },
            { label: "+30%", sub: "Meta de receita" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="xl" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Quero a Mentoria 360
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
