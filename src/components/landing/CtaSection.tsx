import { ClipboardList, Search, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: ClipboardList,
    title: "Questionário rápido",
    description: "2 min para entender seu negócio",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    description: "30-40 min de análise do seu funil atual",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "Prioridades e próximos passos claros",
  },
];

export function CtaSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="diagnostico" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agende seu{" "}
              <span className="text-gradient">Diagnóstico Estratégico</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Você não precisa "apostar" no marketing. Você precisa de um sistema que organiza 
              demanda, atendimento e conversão. No diagnóstico, identificamos o gargalo principal 
              e desenhamos um plano prático.
            </p>
          </div>

          {/* Process steps */}
          <div ref={stepsRef} className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 transition-all duration-500 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold mb-1">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a 
                href="https://wa.me/5551999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Fale diretamente com nossa equipe pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
