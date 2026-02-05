import { Play, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const benefits = [
  "Triagem automática de leads",
  "Follow-up inteligente 24/7",
  "Alertas de leads quentes",
];

export default function DmIa() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30">
        <div className="container mx-auto px-4 flex justify-center">
          <a href="/">
            <img src={logoDigitalDM} alt="Digital DM" className="h-6 md:h-8 w-auto" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Demonstração liberada por tempo limitado ✨</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Você está a <span className="text-gradient">Um Passo</span> de Lotar sua Agenda e{" "}
              <span className="text-gradient">Aumentar seu Faturamento em Até 42%</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Fechando Leads fora do horário comercial automaticamente <strong className="text-foreground">Usando IA</strong>
            </p>

            {/* Video Player */}
            <div className="relative max-w-3xl mx-auto mb-8">
              <div className="glass-card rounded-2xl p-2 gradient-border">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
                  {/* Video placeholder - replace with actual video embed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {/* Play button */}
                    <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 glow">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </button>
                  </div>

                  {/* Demo badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">DEMO</span>
                    <span className="text-sm text-foreground/80">Veja como funciona em 2 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-muted-foreground mb-8">
              Assista a demonstração e entenda como a DM IA transforma leads em clientes
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#diagnostico" className="flex items-center gap-2">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/#como-funciona">Ver Como Funciona</a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Digital DM. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
