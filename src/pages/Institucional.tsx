import { ArrowRight, Users, Target, Zap, TrendingUp, CheckCircle, Bot, BarChart3, MessageSquare, AlertTriangle, Clock, UserX, PhoneOff, Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";
import ceoDeomir from "@/assets/ceo-deomir.png";

const stats = [
  { value: "+200", label: "Negócios atendidos" },
  { value: "+42%", label: "Aumento médio em vendas" },
  { value: "24/7", label: "Atendimento automatizado" },
];

const problems = [
  {
    icon: MessageSquare,
    text: "O WhatsApp vira um caos — muita mensagem, pouco agendamento",
  },
  {
    icon: Clock,
    text: "A resposta demora e o cliente escolhe outra empresa",
  },
  {
    icon: UserX,
    text: "Ninguém sabe quais leads são 'quentes'",
  },
  {
    icon: PhoneOff,
    text: "Falta follow-up — e o lead some",
  },
  {
    icon: AlertTriangle,
    text: "Você trabalha muito, mas não consegue estabilizar as vendas",
  },
];

const mechanismSteps = [
  { step: "Lead entra", icon: "→" },
  { step: "Triagem automática", icon: "→" },
  { step: "Prioridade definida", icon: "→" },
  { step: "Follow-up inteligente", icon: "→" },
  { step: "Conversão", icon: "✓" },
];

const dmiaFeatures = [
  {
    title: "Triagem inteligente",
    description: "Filtra perfil e intenção antes de lotar sua equipe comercial",
  },
  {
    title: "Prioridade por interesse",
    description: "Destaca quem está pronto para comprar",
  },
  {
    title: "Follow-up automático",
    description: "Mantém o contato ativo sem depender de alguém 'lembrar'",
  },
  {
    title: "Histórico e origem",
    description: "Você sabe de onde veio e qual caminho converte melhor",
  },
  {
    title: "Recuperação de interesse",
    description: "Traz de volta quem sumiu — com cadência estratégica",
  },
];

const methodology = [
  {
    number: "01",
    icon: Target,
    title: "Diagnóstico e Metas",
    items: [
      "Ticket, capacidade, horários, especialidades",
      "Identificação de gargalos (resposta, triagem, conversão)",
      "Metas realistas e plano de execução",
    ],
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Estratégia e Mensagem",
    items: [
      "Posicionamento e oferta que não desvaloriza",
      "Jornada de confiança e autoridade",
      "Estrutura de páginas, WhatsApp e roteiros",
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "Funil com DM IA",
    items: [
      "Triagem automática + tags + prioridade",
      "Cadência de follow-up inteligente",
      "Integração com sua equipe de vendas",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Análise e Otimização",
    items: [
      "Taxa de contato → triagem → agendamento",
      "Ajustes semanais baseados em dados",
      "Decisões estratégicas, não no 'chutômetro'",
    ],
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

const partners = [
  "Hotmart", "Braip", "Eduzz", "Kirvano", "Kiwify", "Monetizze", "PerfectPay", "Ticto"
];

export default function Institucional() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30 sticky top-0 bg-background/80 backdrop-blur-lg z-50">
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
              <a href="#metodo" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Método MIA
              </a>
              <a href="#elegibilidade" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Elegibilidade
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="heroOutline" size="lg" asChild>
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

      {/* DOBRA 1 - RESULTADO (Hero) */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Marketing Digital com Inteligência Artificial</span>
            </div>

            {/* Headline - Promessa de Resultado */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vendas mais previsíveis com{" "}
              <span className="text-gradient">demanda qualificada</span>{" "}
              e processo de conversão.
            </h1>

            {/* Subheadline - O que fazemos */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A Digital DM estrutura um sistema para seu negócio parar de depender de "mês bom / mês ruim" 
              e transformar contatos em clientes com consistência.
            </p>

            {/* Bullets de benefício */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Menos buracos na agenda</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Mais contatos com perfil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Processo automatizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="xl" asChild>
                <a href="#diagnostico" className="flex items-center gap-2">
                  Quero um Diagnóstico Estratégico
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#como-funciona">Ver como Funciona</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 border-y border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Parceiros e Integrações</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {partners.slice(0, 6).map((partner, index) => (
              <span key={index} className="text-muted-foreground/60 font-medium text-sm">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 2 - PROBLEMA REAL (Dor do mercado) */}
      <section id="como-funciona" className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O Problema</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Se seu negócio depende de picos, você não tem{" "}
                <span className="text-gradient">previsibilidade</span> — tem sorte.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A maioria dos negócios até gera contato... mas perde vendas por falta de rotina, 
                triagem e velocidade no atendimento. Resultado: investimento entra, mas o retorno "escorre" no meio do caminho.
              </p>
            </div>

            {/* Checklist de sintomas */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-5 flex items-center gap-4 hover-lift"
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground/90 text-sm">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
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

      {/* DOBRA 3 - MECANISMO (A virada de chave) */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">A Virada de Chave</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O problema não é o anúncio. É{" "}
                <span className="text-gradient">não ter um sistema de conversão</span>.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tráfego (pessoas chegando) é só a "porta". Previsibilidade vem quando você tem um sistema que:
              </p>
            </div>

            {/* Flow de conversão */}
            <div className="glass-card rounded-2xl p-8 mb-12">
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                {mechanismSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/20 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium text-primary">{step.step}</span>
                    </div>
                    {index < mechanismSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparação */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card rounded-xl p-6 border-l-4 border-destructive">
                <h4 className="font-semibold text-destructive mb-2">Sem sistema</h4>
                <p className="text-sm text-muted-foreground">
                  Lead entra → demora → esfria → "não responde"
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">Com sistema</h4>
                <p className="text-sm text-muted-foreground">
                  Lead entra → triagem → prioridade → follow-up → conversão
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-2">Com dados</h4>
                <p className="text-sm text-muted-foreground">
                  Você entende o que vira venda e replica o sucesso
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#dmia" className="flex items-center gap-2">
                  Ver o Sistema na Prática
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 - DM IA (Diferencial central) */}
      <section id="dmia" className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Diferencial Central</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">DM IA</span>: o CRM com Inteligência Artificial que impede o lead de esfriar.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Enquanto sua equipe atende, a DM IA organiza o funil, faz triagem, 
                  acompanha e prioriza — para seu time focar no que importa: vender e fechar.
                </p>

                <div className="space-y-4 mb-8">
                  {dmiaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" asChild>
                  <a href="#diagnostico" className="flex items-center gap-2">
                    Quero Ver a DM IA em Ação
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
                </div>
                
                {/* Cards flutuantes */}
                <div className="relative z-10 space-y-4">
                  <div className="glass-card rounded-xl p-4 ml-0 md:ml-8 transform hover:scale-105 transition-transform">
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
                  
                  <div className="glass-card rounded-xl p-4 mr-0 md:mr-8 transform hover:scale-105 transition-transform">
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
                  
                  <div className="glass-card rounded-xl p-4 ml-0 md:ml-12 transform hover:scale-105 transition-transform">
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

            {/* O que muda na prática */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-gradient mb-2">-70%</div>
                <p className="text-sm text-muted-foreground">Menos perda por demora</p>
              </div>
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-gradient mb-2">-50%</div>
                <p className="text-sm text-muted-foreground">Menos "curioso" no atendimento</p>
              </div>
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-gradient mb-2">+42%</div>
                <p className="text-sm text-muted-foreground">Mais conversões do mesmo volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 5 - MÉTODO MIA */}
      <section id="metodo" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">O Método</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Método <span className="text-gradient">MIA</span>: Método + IA + Análise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Seu negócio não cresce com improviso. Cresce com rotina, métrica e melhoria contínua. 
                O Método MIA é a engenharia de previsibilidade que organiza aquisição, conversão e retenção.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {methodology.map((step, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 hover-lift relative overflow-hidden"
                >
                  {/* Step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom banner */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Dependência do "chutômetro" vira passado
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Com o MIA você escala com segurança, entendendo exatamente o que funciona 
                e replicando o sucesso.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#diagnostico">Quero Crescer com Método</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 - ELEGIBILIDADE (Filtro de lead) */}
      <section id="elegibilidade" className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Elegibilidade</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Isso é <span className="text-gradient">pra você</span>?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Somos transparentes sobre quem podemos ajudar — e quem ainda não está no momento certo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#diagnostico" className="flex items-center gap-2">
                  Quero Saber se Sou Elegível
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Se não fizer sentido, a gente te diz com honestidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with CEO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text - Left aligned */}
              <div className="text-left">
                <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Sobre Nós</p>
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

              {/* CEO Photo - Right side with decorative elements */}
              <div className="relative flex justify-center">
                {/* Background decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
                </div>
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-xl animate-pulse" />
                <div className="absolute bottom-20 left-5 w-16 h-16 rounded-full bg-primary/20 blur-lg" />
                
                {/* Floating icons */}
                <div className="absolute top-5 left-10 glass-card p-3 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute bottom-32 right-5 glass-card p-3 rounded-xl">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute top-1/2 right-0 glass-card p-3 rounded-xl">
                  <Target className="w-5 h-5 text-primary" />
                </div>

                {/* CEO Image container */}
                <div className="relative z-10 text-center">
                  <div className="relative">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-b-3xl blur-xl" />
                    <img 
                      src={ceoDeomir} 
                      alt="Deomir Martinhago - CEO & Founder" 
                      className="relative z-10 w-64 md:w-72 h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Name and title */}
                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-foreground">Deomir Martinhago</h3>
                    <p className="text-sm text-primary font-medium">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA FINAL - CTA (Diagnóstico) */}
      <section id="diagnostico" className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Próximo Passo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Você não precisa "apostar" no marketing.
            </h2>
            <p className="text-muted-foreground mb-8">
              Você precisa de um sistema que organiza demanda, atendimento e conversão. 
              No diagnóstico, a gente identifica o gargalo principal e desenha um plano 
              prático para estabilizar e crescer.
            </p>

            {/* O que acontece depois */}
            <div className="glass-card rounded-xl p-6 mb-8 text-left">
              <h4 className="font-semibold mb-4 text-center">O que acontece depois que você agenda:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">1</div>
                  <span className="text-muted-foreground text-sm">Questionário rápido (2 min) para entender seu negócio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">2</div>
                  <span className="text-muted-foreground text-sm">Diagnóstico (30–40 min) com análise do seu funil atual</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">3</div>
                  <span className="text-muted-foreground text-sm">Roadmap com prioridades (o que fazer primeiro, e por quê)</span>
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
              Seus dados serão usados apenas para contato sobre o diagnóstico. Sem spam.
            </p>
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
