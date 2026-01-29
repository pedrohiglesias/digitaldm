import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "600+", label: "Negócios Atendidos" },
  { value: "14+", label: "Anos de Experiência" },
  { value: "R$100M+", label: "Gerados para Clientes" },
];

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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
