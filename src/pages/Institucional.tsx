import { ArrowRight, Target, Zap, TrendingUp, CheckCircle, Bot, BarChart3, MessageSquare, AlertTriangle, Clock, UserX, PhoneOff, Check, X, Sparkles, ChevronDown, Users, Gauge, Shield, Rocket, ShoppingCart, MapPin, Stethoscope, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedStat } from "@/components/landing/AnimatedStat";
import logoDigitalDM from "@/assets/logo-digitaldm.png";
import ceoDeomir from "@/assets/ceo-deomir.png";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "+200", label: "Negócios atendidos" },
  { icon: TrendingUp, value: "+42%", label: "Aumento médio em vendas" },
  { icon: Gauge, value: "24/7", label: "Atendimento automatizado" },
  { icon: Shield, value: "100%", label: "Tecnologia própria" },
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
                <a href="https://app.dmia.com.br" target="_blank" rel="noopener noreferrer">
                  Entrar na DMIA
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#diagnostico">Agendar Diagnóstico</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO - Layout lado a lado com imagem de fundo */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <span className="text-sm text-primary font-medium">👋 BEM VINDO(A) À DIGITAL DM</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Vendas mais previsíveis com{" "}
                <span className="text-gradient">demanda qualificada</span>.
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                A Digital DM estrutura um sistema para seu negócio parar de depender de "mês bom / mês ruim" 
                e transformar contatos em clientes com consistência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <a href="#diagnostico" className="flex items-center gap-2">
                    Agendar Diagnóstico
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#como-funciona" className="flex items-center gap-2">
                    Conheça mais
                    <ChevronDown className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">Método Validado</span>
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">100% Digital</span>
                <span className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium">Tecnologia IA</span>
              </div>
            </div>

            {/* Right - Floating badges (visible on larger screens) */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="absolute top-10 right-20 glass-card px-4 py-3 rounded-xl flex items-center gap-3 float">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Rápido</span>
              </div>
              <div className="absolute top-1/3 right-0 glass-card px-4 py-3 rounded-xl flex items-center gap-3 float" style={{ animationDelay: "2s" }}>
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Preciso</span>
              </div>
              <div className="absolute bottom-1/3 right-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 float" style={{ animationDelay: "4s" }}>
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Automatizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 bg-card border-y border-border/30">
        <div className="container mx-auto px-4">
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

      {/* SEÇÃO 1 - Problema (Imagem esquerda, texto direita) */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
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

            {/* Right - Text */}
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
                <a href="#diagnostico" className="flex items-center gap-2">
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

      {/* COMO FUNCIONA - Steps horizontais */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">COMECE AGORA</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Como funciona o processo com a Digital DM?
            </h2>
          </div>

          {/* Steps */}
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

      {/* SEÇÃO 2 - DM IA (Texto esquerda, visual direita) */}
      <section id="dmia" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
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
                <a href="#diagnostico" className="flex items-center gap-2">
                  Quero Ver a DM IA em Ação
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
                
                {/* Floating cards */}
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

      {/* BENEFÍCIOS - Grid de cards */}
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

      {/* SEGMENTOS - Time dedicado */}
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
              <a href="#diagnostico" className="flex items-center gap-2">
                Agendar Diagnóstico
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ELEGIBILIDADE - Lado a lado */}
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
            {/* Para quem É */}
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

            {/* Para quem NÃO é */}
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

      {/* SOBRE / CEO - Layout com imagem */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left - CEO Image */}
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

            {/* Right - Text */}
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
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Quero tirar outra dúvida
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="diagnostico" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Deixe a conversão com especialistas e foque no crescimento do seu negócio!
              </h2>
              <p className="text-muted-foreground mb-8">
                Você não precisa "apostar" no marketing. Você precisa de um sistema que organiza demanda, 
                atendimento e conversão. No diagnóstico, a gente identifica o gargalo principal e desenha 
                um plano prático para estabilizar e crescer.
              </p>

              <div className="glass-card rounded-xl p-6 mb-8">
                <h4 className="font-semibold mb-4">O que acontece depois que você agenda:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">1</div>
                    <span className="text-muted-foreground text-sm">Questionário rápido (2 min)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">2</div>
                    <span className="text-muted-foreground text-sm">Diagnóstico (30–40 min) com análise do funil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">3</div>
                    <span className="text-muted-foreground text-sm">Roadmap com prioridades</span>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="xl" asChild>
                <a href="/#diagnostico" className="flex items-center gap-2">
                  Agendar Diagnóstico Estratégico
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Seus dados serão usados apenas para contato. Sem spam.
              </p>
            </div>

            {/* Right - Partners */}
            <div className="text-center lg:text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                Parceiros e Integrações
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
