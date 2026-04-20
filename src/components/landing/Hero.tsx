import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCeoBg from "@/assets/hero-ceo-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-[140vh] md:min-h-[120vh] flex items-end justify-center overflow-hidden pb-12 md:pb-24 pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCeoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Overlay - stronger gradient at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-shadow">
            Somos <span className="text-gradient">especialistas</span> em
          </h1>

          {/* Specialties Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 animate-fade-in max-w-4xl mx-auto">
            {[
              { label: "Gestão de Tráfego Pago", icon: "📈" },
              { label: "CRM DM IA", icon: "🤖" },
              { label: "Criação de E-commerce", icon: "🛒" },
              { label: "Gestão de Automações", icon: "⚙️" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-3 sm:p-4 text-center border border-primary/30 hover:border-primary/60 transition-colors"
              >
                <span className="text-2xl sm:text-3xl mb-2 block">{item.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-foreground leading-tight block">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in px-4">
            A Digital DM estrutura sistemas completos de aquisição e conversão para 
            seu negócio parar de depender de sorte — e escalar com segurança.
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 animate-fade-in px-4">
            {[
              "Menos dependência de indicação",
              "Leads qualificados no funil",
              "Agenda previsível e escalável",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button variant="hero" size="xl" asChild>
              <a href="https://tintim.link/whatsapp/3cd6aada-3f3e-484b-a2b2-91f08e2bc002/ca4bcf0b-b472-419d-9c5f-aefde3ea931a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Quero Marcar Reunião
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
