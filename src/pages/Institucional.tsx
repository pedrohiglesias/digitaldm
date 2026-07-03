import { ArrowRight, Target, Zap, TrendingUp, CheckCircle, Bot, BarChart3, MessageSquare, AlertTriangle, Clock, UserX, PhoneOff, Check, X, Sparkles, ChevronDown, Users, Gauge, Shield, Rocket, ShoppingCart, MapPin, Stethoscope, Shirt, Megaphone, Store, RotateCcw, BrainCircuit, Compass, Calendar, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedStat } from "@/components/landing/AnimatedStat";
import { WorkflowVisualization } from "@/components/landing/WorkflowVisualization";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoDigitalDM from "@/assets/logo-digitaldm.png";
import ceoDeomir from "@/assets/ceo-deomir.png";
import heroBg from "@/assets/hero-bg.jpg";
import caseMania from "@/assets/case-mania.png";

const stats = [
  { icon: Users, value: "120+", label: "Empresas Atendidas" },
  { icon: Store, value: "+1.200", label: "E-commerces Entregues pelo Brasil" },
  { icon: TrendingUp, value: "R$100MM+", label: "Reais em Mídia Paga" },
  { icon: Shield, value: "15+ Anos", label: "De Experiência Varejo" },
];

const offers = [
  {
    tag: "Ponto de Partida",
    title: "GPS 360 — Estruturação de Vendas",
    description: "Para marcas e negócios que faturam até R$ 30k/mês e já perceberam que o problema não é falta de produto, mas falta de estrutura para vender com previsibilidade. 3 encontros ao vivo, mão na massa, método 3C.",
    link: "/gps360",
    icon: Compass,
  },
  {
    tag: "Acompanhamento Contínuo",
    title: "Gestão Mensal",
    description: "Para quem quer acompanhamento próximo, execução estratégica e evolução constante no marketing e nas vendas mês a mês. Quando existe acompanhamento certo, crescimento deixa de ser tentativa e passa a ser construção.",
    link: "/gestao",
    icon: BarChart3,
  },
  {
    tag: "Ciclo de Aceleração",
    title: "Acelera 90 Dias",
    description: "Para empresas que querem um ecossistema completo de vendas em 90 dias: site, landing page, CRM, Agent IA, tráfego e conversão integrados. Resultado garantido de +10% a +15% de faturamento ou a DigitalDM estende sem custo.",
    link: "/acelera90dias",
    icon: Flame,
  },
];

const problems = [
  { icon: MessageSquare, text: "O WhatsApp vira um caos — muita mensagem, pouco agendamento" },
  { icon: Clock, text: "A resposta demora e o cliente escolhe outra empresa" },
  { icon: UserX, text: "Ninguém sabe quais leads são 'quentes'" },
  { icon: PhoneOff, text: "Falta follow-up — e o lead some" },
  { icon: AlertTriangle, text: "Você trabalha muito, mas não consegue estabilizar as vendas" },
];

const processSteps = [
  { number: "01", title: "Diagnóstico", description: "Análise do seu funil atual" },
  { number: "02", title: "Estratégia", description: "Plano personalizado" },
  { number: "03", title: "Implementação", description: "DM IA + Automações" },
  { number: "04", title: "Resultados", description: "Vendas previsíveis" },
];

const dmiaFeatures = [
  { title: "Triagem inteligente", description: "Filtra perfil e intenção antes de lotar sua equipe comercial" },
  { title: "Prioridade por interesse", description: "Destaca quem está pronto para comprar" },
  { title: "Follow-up automático", description: "Mantém o contato ativo sem depender de alguém 'lembrar'" },
  { title: "Histórico e origem", description: "Você sabe de onde veio e qual caminho converte melhor" },
  { title: "Recuperação de interesse", description: "Traz de volta quem sumiu — com cadência estratégica" },
];

const historyPillars = [
  { title: "Diagnóstico Honesto", desc: "Antes de qualquer ação, entendemos o negócio, o momento e o que precisa ser ajustado para crescimento real." },
  { title: "Execução com Método", desc: "Não entregamos teoria. Construímos operação, estrutura e rotina que funciona mesmo quando você não está olhando." },
  { title: "Parceria de Longo Prazo", desc: "Nossos melhores resultados vieram de clientes que ficaram. Crescimento real é construído com tempo, confiança e comprometimento mútuo." },
  { title: "Dado Acima de Opinião", desc: "Cada decisão é orientada por número, não por intuição. O que funciona escala. O que não funciona é cortado sem apego." },
];

const ecosystem = [
  {
    tag: "Tráfego Pago",
    title: "Gestão de Tráfego Pago Completo",
    items: ["Meta Ads (Instagram e Facebook)", "Google Ads e Shopping", "Estratégias de Escala e Testes A/B", "Relatórios de Performance Semanais"],
    icon: Megaphone,
  },
  {
    tag: "E-commerce",
    title: "Criação de E-commerce",
    items: ["Loja Virtual de Alta Conversão", "UX/UI Focado em Experiência do Usuário", "Integração com ERP e Logística", "Otimização para Mobile First"],
    icon: ShoppingCart,
  },
  {
    tag: "Retenção",
    title: "Reativação e Recuperação",
    items: ["Recuperação de carrinhos abandonados", "Reativação de clientes inativos", "Aumento do LTV com sequências automáticas", "Nenhuma venda perdida sem uma segunda chance"],
    icon: RotateCcw,
  },
  {
    tag: "IA e CRM",
    title: "DM IA (CRM + Agent de IA)",
    items: ["Atendimento Inteligente 24/7", "Qualificação Automática de Leads", "CRM Integrado para Gestão de Pipeline", "Humanização com Tecnologia"],
    icon: BrainCircuit,
  },
];

const benefits = [
  { icon: Rocket, title: "Tecnologia Exclusiva", description: "CRM próprio com IA que qualifica e nutre leads automaticamente" },
  { icon: Users, title: "Time Especializado", description: "Profissionais dedicados ao crescimento do seu negócio" },
  { icon: Target, title: "Método Validado", description: "Processo testado em +200 empresas de diferentes segmentos" },
  { icon: TrendingUp, title: "Resultados Reais", description: "Aumento médio de 42% nas vendas dos nossos clientes" },
  { icon: Shield, title: "Investimento Seguro", description: "Transparência total e acompanhamento de métricas" },
  { icon: BarChart3, title: "Decisões por Dados", description: "Ajustes semanais baseados em análise, não no achismo" },
];

const segments = [
  { 
    icon: ShoppingCart, 
    title: "E-commerce", 
    description: "Estratégias completas para lojas virtuais: desde captação até recompra. Automações que aumentam ticket médio e reduzem abandono de carrinho.",
    highlights: ["Recuperação de carrinho", "Segmentação por comportamento", "Upsell automatizado"]
  },
  { 
    icon: MapPin, 
    title: "Negócios Locais", 
    description: "Funis adaptados para atrair clientes da sua região. Tráfego local qualificado que gera visitas e agendamentos.",
    highlights: ["Geolocalização", "Avaliações e reputação", "Agenda cheia"]
  },
  { 
    icon: Stethoscope, 
    title: "Clínicas", 
    description: "Sistema especializado para área da saúde: triagem de pacientes, agendamento automático e follow-up respeitando a ética do setor.",
    highlights: ["Triagem de perfil", "Agenda previsível", "Comunicação ética"]
  },
  { 
    icon: Shirt, 
    title: "Moda Feminina", 
    description: "Expertise em lojas de moda: campanhas sazonais, lançamentos de coleção e relacionamento com clientes que geram recompra.",
    highlights: ["Lançamentos", "Campanhas sazonais", "Fidelização"]
  },
];

const forWho = [
  "Negócio com operação ativa e capacidade de atender mais",
  "Ticket médio que permite investir em crescimento com estratégia",
  "Alguém responsável por atendimento/comercial",
  "Disposição para seguir processo (rotina > improviso)",
];

const notForWho = [
  "Quem quer 'só rodar anúncio' sem arrumar atendimento e funil",
  "Quem está começando do zero, sem operação mínima",
  "Quem quer resultado imediato sem construir consistência",
  "Quem busca só seguidores/vaidade",
];

const faqItems = [
  {
    question: "O que é o Método MIA?",
    answer: "MIA significa Método + IA + Análise. É nossa metodologia exclusiva que combina estratégias validadas, inteligência artificial para automação e análise de dados para decisões precisas."
  },
  {
    question: "O que é a DM IA?",
    answer: "É nosso CRM próprio com Inteligência Artificial que faz triagem automática de leads, define prioridades, envia follow-ups e mantém o contato ativo até a conversão."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Dependendo do seu negócio, os primeiros resultados aparecem entre 30 e 90 dias. O diagnóstico inicial ajuda a definir metas realistas para o seu caso."
  },
  {
    question: "Funciona para qual tipo de negócio?",
    answer: "Atendemos clínicas, negócios locais, e-commerce, prestadores de serviço e infoprodutores. O método se adapta ao seu segmento específico."
  },
  {
    question: "Como funciona o diagnóstico?",
    answer: "É uma sessão de 30-40 minutos onde analisamos seu funil atual, identificamos gargalos e desenhamos um plano prático. Sem compromisso de contratação."
  },
];

const partners = [
  "Hotmart", "Braip", "Eduzz", "Kirvano", "Kiwify", "Monetizze"
];

export default function Institucional() {
  const offersAnim = useScrollAnimation();
  const historyAnim = useScrollAnimation();
  const caseAnim = useScrollAnimation();
  const ecoAnim = useScrollAnimation();
  const pathsAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src={logoDigitalDM} alt="Digital DM" className="h-6 md:h-8 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Como Funciona
              </a>
              <a href="#ofertas" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Ofertas
              </a>
              <a href="#dmia" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                DM IA
              </a>
              <a href="#segmentos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Segmentos
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Dúvidas
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="heroOutline" size="lg" asChild className="hidden sm:flex">
                <a href="https://app.dmia.net.br/" target="_blank" rel="noopener noreferrer">
                  Entrar na DMIA
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">Agendar Diagnóstico</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                  <span className="text-sm text-primary font-medium">👋 DigitalDM</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30">
                  <span className="text-sm text-muted-foreground">Moda, Varejo e Negócios Locais</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Três Caminhos Claros para Crescer com{" "}
                <span className="text-gradient">Estratégia, Previsibilidade e Escala.</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Na DigitalDM, acreditamos que <strong className="text-foreground">cada negócio está em um momento diferente.</strong>{" "}
                Por isso estruturamos três formatos de trabalho que acompanham a evolução natural da empresa, desde o ajuste estratégico até a escala com acompanhamento contínuo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Agendar Diagnóstico
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#ofertas" className="flex items-center gap-2">
                    Ver Ofertas
                    <ChevronDown className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">Método Validado</span>
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">100% Digital</span>
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">Tecnologia IA</span>
              </div>
            </div>

            <WorkflowVisualization />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 bg-card border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-sm text-primary font-medium uppercase tracking-widest">Por Que a DigitalDM</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Dominamos o varejo digital com expertise em <span className="text-gradient">Moda, Varejo e Negócios Locais.</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
              Unimos inteligência de dados avançada e execução estratégica com um único foco: gerar <strong className="text-foreground">vendas reais</strong> e crescimento previsível para o seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border/50">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOSSAS OFERTAS ═══ */}
      <section
        id="ofertas"
        ref={offersAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${offersAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Nossas Ofertas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Três Formatos. <span className="text-gradient">Uma Missão.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aqui você entende qual é o próximo passo para destravar crescimento, organizar processos e transformar marketing em vendas reais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offers.map((offer) => (
              <div key={offer.title} className="glass-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <offer.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{offer.tag}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{offer.description}</p>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href={offer.link} className="flex items-center justify-center gap-2">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            A seguir você vai entender <strong className="text-foreground">quem somos, como pensamos</strong> e por que nossos clientes conseguem avançar com segurança e resultado. Não vendemos serviço genérico. Construímos operação real.
          </p>
        </div>
      </section>

      {/* SEÇÃO PROBLEMA */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-background/80 backdrop-blur rounded-xl p-4 hover:translate-x-2 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <problem.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <p className="text-sm text-foreground/90">{problem.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O PROBLEMA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Se seu negócio depende de picos, você não tem{" "}
                <span className="text-gradient">previsibilidade</span> — tem sorte.
              </h2>
              <p className="text-muted-foreground mb-8">
                A maioria dos negócios até gera contato... mas perde vendas por falta de rotina, 
                triagem e velocidade no atendimento. Resultado: investimento entra, mas o retorno "escorre" no meio do caminho.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Quero Corrigir Meu Funil
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Em 30–40 min você sai com clareza do gargalo principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - Steps */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">COMECE AGORA</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Como funciona o processo com a Digital DM?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DM IA */}
      <section id="dmia" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O QUE É A DM IA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">DM IA</span>: o CRM com Inteligência Artificial que impede o lead de esfriar.
              </h2>
              <p className="text-muted-foreground mb-8">
                Enquanto sua equipe atende, a DM IA organiza o funil, faz triagem, 
                acompanha e prioriza — para seu time focar no que importa: vender e fechar.
              </p>

              <ul className="space-y-4 mb-8">
                {dmiaFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">{feature.title}</span>
                      <span className="text-muted-foreground"> — {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Quero Ver a DM IA em Ação
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
                <div className="relative h-full flex flex-col justify-center gap-4 px-4">
                  <div className="glass-card rounded-xl p-4 transform hover:scale-105 transition-transform ml-0 lg:ml-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Lead qualificado detectado</p>
                        <p className="text-xs text-muted-foreground">Prioridade: Alta</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-xl p-4 transform hover:scale-105 transition-transform mr-0 lg:mr-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Follow-up automático enviado</p>
                        <p className="text-xs text-muted-foreground">Cadência: Dia 3</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-xl p-4 transform hover:scale-105 transition-transform ml-0 lg:ml-12">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">+32% taxa de conversão</p>
                        <p className="text-xs text-muted-foreground">vs. processo manual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUEM É A DIGITALDM + NOSSA HISTÓRIA ═══ */}
      <section
        ref={historyAnim.ref}
        className={`py-20 md:py-28 bg-card/50 transition-all duration-700 ${historyAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Quem é a DigitalDM</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estratégia, Execução e <span className="text-gradient">Parceria Real</span> com Quem Quer Crescer.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não acreditamos em promessas vazias nem em soluções genéricas. Nosso trabalho é entrar no negócio, entender o cenário e construir caminhos que fazem sentido para a realidade de cada cliente.
            </p>
          </div>

          {/* Nossa História */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Nascemos para Fazer o Cliente Vender Mais com <span className="text-gradient">Clareza e Controle.</span>
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              <p>
                A DigitalDM nasceu com um propósito claro. Ajudar empresas a crescer com método, visão e acompanhamento de verdade.
              </p>
              <p>
                Somos conhecidos por atuar próximos, com olhar estratégico e foco em resultado.
                Não chegamos com uma solução pronta. <strong className="text-foreground">Chegamos para entender, mapear e construir junto.</strong>
              </p>
              <p>
                Nosso compromisso é simples. Fazer o cliente vender mais com clareza e controle.
                Sem achismo. Sem vanidade de relatório. <strong className="text-foreground">Com dado, método e responsabilidade.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {historyPillars.map((pillar) => (
                <div key={pillar.title} className="glass-card rounded-xl p-5 border border-border/50 text-center">
                  <h4 className="font-bold text-sm mb-2">{pillar.title}</h4>
                  <p className="text-xs text-muted-foreground">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE MANIA DE VESTIR ═══ */}
      <section
        ref={caseAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${caseAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Case de Sucesso</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mania de Vestir: 9 Anos de Parceria e <span className="text-gradient">+R$ 50M no E-commerce.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Qualquer agência tem um case bonito no site. Poucas têm um cliente que ficou por quase uma década. A Mania de Vestir cresceu com a gente <strong className="text-foreground">mês após mês, decisão após decisão.</strong> Não terceirizamos tráfego. <strong className="text-foreground">Construímos operação real.</strong>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={caseMania} alt="Case Mania de Vestir — 9 anos de parceria" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass-card rounded-xl p-4 text-center border border-primary/20">
                      <div className="text-2xl font-bold text-primary">+R$50M</div>
                      <div className="text-xs text-muted-foreground">Faturamento no E-commerce</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 text-center border border-border/50">
                      <div className="text-2xl font-bold text-foreground">9 anos</div>
                      <div className="text-xs text-muted-foreground">De parceria contínua</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se você quer alguém que <strong className="text-foreground">entra no negócio, pensa estratégia e executa com responsabilidade,</strong> você está no lugar certo. Esse é o padrão DigitalDM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ECOSSISTEMA DE OFERTAS ═══ */}
      <section
        ref={ecoAnim.ref}
        className={`py-20 md:py-28 bg-card/50 transition-all duration-700 ${ecoAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O Que a DigitalDM Oferta</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Um Ecossistema Completo para <span className="text-gradient">Escalar com Previsibilidade.</span>
            </h2>
            <p className="text-muted-foreground">
              Inteligência e execução integradas em cada frente do negócio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ecosystem.map((eco) => (
              <div key={eco.title} className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <eco.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-primary font-semibold">{eco.tag}</span>
                </div>
                <h3 className="font-bold text-sm mb-3">{eco.title}</h3>
                <ul className="space-y-2">
                  {eco.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">BENEFÍCIOS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vantagens de trabalhar com a Digital DM
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda as principais vantagens de utilizar nossa metodologia no seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section id="segmentos" className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">SEGMENTOS ATENDIDOS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Time dedicado para o <span className="text-gradient">seu segmento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada mercado tem suas particularidades. Por isso, temos especialistas focados em entender 
              as dores e oportunidades específicas do seu nicho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {segments.map((segment, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover-lift group">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <segment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3">{segment.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{segment.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex} 
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Não encontrou seu segmento? Fale conosco!</p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Agendar Diagnóstico
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ELEGIBILIDADE */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">PARA QUEM É</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Isso é <span className="text-gradient">pra você</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Somos transparentes sobre quem podemos ajudar — e quem ainda não está no momento certo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Para quem É</h3>
              </div>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8 border-t-4 border-destructive">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-bold text-xl">Para quem NÃO é</h3>
              </div>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE / CEO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-xl animate-pulse" />
              
              <div className="relative z-10 text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-b-3xl blur-xl" />
                  <img 
                    src={ceoDeomir} 
                    alt="Deomir Martinhago - CEO & Founder" 
                    className="relative z-10 w-64 md:w-72 h-auto object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg text-foreground">Deomir Martinhago</h3>
                  <p className="text-sm text-primary font-medium">CEO & Founder</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">SOBRE NÓS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Um ecossistema de{" "}
                <span className="text-gradient">evolução contínua</span>.
              </h2>
              <p className="text-muted-foreground mb-6">
                A Digital DM não é apenas uma agência. Somos um ecossistema que reúne 
                estratégia, tecnologia e dados para transformar negócios. Tudo testado 
                e validado no campo de batalha.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90">Mais de uma década de experiência</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90">Tecnologia própria (DM IA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90">Processos replicáveis por segmento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">CENTRAL DE AJUDA</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ficou com alguma dúvida?
              </h2>
              <p className="text-muted-foreground">
                Confira nossas respostas com as perguntas mais frequentes.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Não encontrou o que gostaria?</p>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">
                  Quero tirar outra dúvida
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUAL CAMINHO — CTA FINAL ═══ */}
      <section
        ref={pathsAnim.ref}
        className={`py-20 md:py-28 relative overflow-hidden transition-all duration-700 ${pathsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O Próximo Passo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qual Caminho Faz Sentido para o <span className="text-gradient">Seu Momento Agora?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada formato de trabalho foi pensado para um estágio específico do negócio.{" "}
              <strong className="text-foreground">Você não precisa de tudo ao mesmo tempo.</strong> Precisa do que é certo para onde você está agora.
            </p>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Clareza estratégica, acompanhamento contínuo ou ciclo de aceleração.{" "}
              <strong className="text-foreground">Escolha o caminho e avance com quem já transformou mais de 120 empresas.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                tag: "Ponto de Partida",
                title: "GPS 360 — Estruturação de Vendas",
                desc: "Estruturação comercial para marcas que faturam até R$ 30k/mês e querem vender com previsibilidade. Método 3C em 3 encontros ao vivo.",
                link: "/gps360",
                cta: "Ver o GPS 360",
              },
              {
                tag: "Evolução Contínua",
                title: "Gestão Mensal",
                desc: "Acompanhamento estratégico próximo para empreendedores que faturam R$ 40k/mês ou mais.",
                link: "/gestao",
                cta: "Ver a Gestão",
              },
              {
                tag: "Aceleração Máxima",
                title: "Acelera 90 Dias",
                desc: "Ecossistema completo para marcas que faturam R$ 50k+ e querem escalar com garantia de resultado.",
                link: "/acelera90dias",
                cta: "Ver o Acelera",
              },
            ].map((path) => (
              <div key={path.title} className="glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all flex flex-col">
                <span className="text-xs text-primary font-semibold mb-2">{path.tag}</span>
                <h3 className="font-bold text-lg mb-3">{path.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{path.desc}</p>
                <Button variant="hero" size="lg" asChild className="w-full">
                  <a href={path.link} className="flex items-center justify-center gap-2">
                    {path.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Parceiros e Integrações
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {partners.map((partner, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={logoDigitalDM} alt="Digital DM" className="h-5 w-auto" />
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Digital DM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
