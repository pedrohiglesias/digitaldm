import { ArrowRight, Users, Target, Zap, TrendingUp, CheckCircle, Bot, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";
import ceoDeomir from "@/assets/ceo-deomir.png";

const stats = [
  { value: "+200", label: "Clientes atendidos" },
  { value: "+42%", label: "Aumento médio em vendas" },
  { value: "24/7", label: "Atendimento automatizado" },
];

const methodology = [
  {
    icon: Target,
    title: "Método",
    description: "Estratégias de marketing digital comprovadas e testadas no mercado.",
  },
  {
    icon: Bot,
    title: "IA",
    description: "Inteligência artificial para qualificar leads e automatizar processos.",
  },
  {
    icon: BarChart3,
    title: "Análise",
    description: "Dados e métricas para decisões precisas e crescimento previsível.",
  },
];

const solutions = [
  {
    title: "Para quem está começando",
    description: "Se você está estruturando seu funil de vendas e precisa de uma base sólida, montamos tudo do zero: tráfego, CRM e automações.",
    cta: "Estruturar meu funil",
  },
  {
    title: "Para quem quer escalar",
    description: "Se você já tem vendas mas quer previsibilidade e escala, otimizamos seu processo com IA e automações inteligentes.",
    cta: "Escalar minhas vendas",
  },
  {
    title: "Para quem precisa de resultado rápido",
    description: "Se você tem urgência em resultados, nosso time assume a operação completa para gerar leads qualificados imediatamente.",
    cta: "Acelerar resultados",
  },
];

const partners = [
  "Hotmart", "Braip", "Eduzz", "Kirvano", "Kiwify", "Monetizze", "PerfectPay", "Ticto"
];

export default function Institucional() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src={logoDigitalDM} alt="Digital DM" className="h-6 md:h-8 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Como Funciona
              </a>
              <a href="/#metodo" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Método MIA
              </a>
              <a href="/#resultados" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Resultados
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://app.dmia.com.br" target="_blank" rel="noopener noreferrer">
                  Entrar na DMIA
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Falar com Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformamos negócios com o{" "}
              <span className="text-gradient">Método MIA</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Combinamos estratégia, inteligência artificial e análise de dados para criar 
              sistemas de vendas que geram crescimento previsível.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="xl" asChild>
                <a href="#contato" className="flex items-center gap-2">
                  Conhecer o Ecossistema
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#metodologia">Ver Metodologia</a>
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
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Parceiros</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {partners.slice(0, 6).map((partner, index) => (
              <span key={index} className="text-muted-foreground/60 font-medium text-sm">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Metodologia</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O <span className="text-gradient">Método MIA</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Três pilares que transformam seu marketing em uma máquina de resultados previsíveis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {methodology.map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 text-center hover-lift gradient-border"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Caminhos</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Escolha sua jornada.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Soluções personalizadas para cada momento do seu negócio.
              </p>
            </div>

            <div className="grid gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover-lift gradient-border flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                  <Button variant="heroOutline" asChild className="shrink-0">
                    <a href="#contato" className="flex items-center gap-2">
                      {solution.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                    <span className="text-foreground/90">Estratégias atualizadas constantemente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90">Suporte dedicado para seu negócio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90">Templates e automações prontos para uso</span>
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

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Próximo Passo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos desenhar o plano ideal para você.
            </h2>
            <p className="text-muted-foreground mb-10">
              Não sabe por onde começar? Nossos especialistas vão analisar seu momento 
              atual e indicar o melhor caminho para alcançar seus objetivos.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="/#diagnostico" className="flex items-center gap-2">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
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
