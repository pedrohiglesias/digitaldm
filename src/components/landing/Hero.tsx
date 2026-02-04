import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Agência 360º com CRM Inteligente
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-shadow">
            Transforme seu marketing em{" "}
            <span className="text-gradient">crescimento previsível</span>
          </h1>

          {/* VSL Video Player */}
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
            <div className="glass-card rounded-2xl p-2 gradient-border">
              <AspectRatio ratio={16 / 9}>
                <div className="relative w-full h-full bg-card rounded-xl overflow-hidden group cursor-pointer">
                  {/* Video Thumbnail/Placeholder */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20"
                    style={{
                      backgroundImage: `url(${heroBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-background/60" />
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 pulse-glow">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Demo Label */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/80 rounded-full text-xs font-semibold text-primary-foreground">
                      DEMO
                    </span>
                    <span className="text-sm text-foreground/80">Veja como funciona em 2 min</span>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Assista a demonstração e entenda como a Digital DM transforma leads em clientes
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            A Digital DM estrutura sistemas completos de aquisição e conversão para 
            seu negócio parar de depender de sorte — e escalar com segurança.
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            {[
              "Menos dependência de indicação",
              "Leads qualificados no funil",
              "Agenda previsível e escalável",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-foreground/90"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button variant="hero" size="xl" asChild>
              <a href="#diagnostico" className="flex items-center gap-2">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#como-funciona">Ver Como Funciona</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
