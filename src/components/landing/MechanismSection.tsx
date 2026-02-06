import { ArrowRight, CheckCircle, Zap, Filter, Clock, BarChart3, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const flowSteps = [
  { step: "1", text: "Capta o contato certo" },
  { step: "2", text: "Responde no tempo certo" },
  { step: "3", text: "Qualifica e organiza" },
  { step: "4", text: "Faz follow-up automático" },
  { step: "5", text: "Entrega para sua equipe fechar" },
];

const comparisons = [
  {
    mode: "Sem Sistema",
    color: "destructive",
    flow: "Lead entra → demora → esfria → 'não responde'",
  },
  {
    mode: "Com Sistema DM",
    color: "primary",
    flow: "Lead entra → triagem → prioridade → follow-up → agendamento",
  },
];

export function MechanismSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Cog className="w-4 h-4 mr-2" />
              O Mecanismo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              O problema não é o anúncio.{" "}
              <span className="text-gradient">É o sistema de conversão.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tráfego é só a "porta". Previsibilidade vem quando você tem um sistema que:
            </p>
          </div>

          {/* Flow steps */}
          <div 
            ref={contentRef}
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {flowSteps.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-2 transition-all duration-500 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {item.step}
                </div>
                <span className="text-foreground/90 text-sm">{item.text}</span>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {comparisons.map((comp, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border-2 ${
                  comp.color === "destructive"
                    ? "border-destructive/30 bg-destructive/5"
                    : "border-primary/30 bg-primary/5 glow"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {comp.color === "destructive" ? (
                    <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-destructive" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <h3 className="font-bold text-lg">{comp.mode}</h3>
                </div>
                <p className={`text-sm ${comp.color === "destructive" ? "text-muted-foreground" : "text-foreground"}`}>
                  {comp.flow}
                </p>
              </div>
            ))}
          </div>

          {/* Extra info */}
          <div className="glass-card rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Com dados, você replica o que funciona</h3>
                <p className="text-muted-foreground">
                  Você entende o que vira agendamento, qual canal converte melhor, e escala com segurança 
                  — não no chute.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#dm-ia">Ver o Sistema na Prática</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
