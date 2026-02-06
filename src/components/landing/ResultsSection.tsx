import { ArrowRight, CheckCircle, Calendar, Timer, TrendingUp, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const transformations = [
  {
    before: "Agenda irregular",
    after: "Fluxo mais estável e planejável",
  },
  {
    before: "WhatsApp lotado e bagunçado",
    after: "Triagem + prioridade + rotina",
  },
  {
    before: "Invisto e não sei o que voltou",
    after: "Números claros por etapa do funil",
  },
];

const metrics = [
  { icon: Timer, label: "Tempo de resposta" },
  { icon: Users, label: "Taxa de triagem" },
  { icon: Calendar, label: "Taxa de agendamento" },
  { icon: DollarSign, label: "Custo por conversão" },
  { icon: TrendingUp, label: "Melhores Clientes" },
];

export function ResultsSection() {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Resultado Esperado
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Como seu negócio fica quando{" "}
              <span className="text-gradient">o funil está no lugar</span>
            </h2>
          </div>

          {/* Transformation cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {transformations.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-center gap-2 text-destructive/70 mb-4">
                  <span className="text-sm line-through">{item.before}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.after}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics section */}
          <div className="bg-card/80 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-center mb-8">
              O que você passa a medir (simples e executivo)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className={`text-center ${
                    index === metrics.length - 1 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#diagnostico" className="flex items-center gap-2">
                Quero Resultados Como Esses
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Você sai com um mapa do funil + próximos passos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
