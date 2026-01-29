import { AlertTriangle, Clock, MessageSquare, TrendingDown, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: MessageSquare,
    text: "O WhatsApp vira um caos — muita mensagem, pouco agendamento",
  },
  {
    icon: Clock,
    text: "A resposta demora e você perde para o concorrente",
  },
  {
    icon: UserX,
    text: "Ninguém sabe quais leads são 'quentes' de verdade",
  },
  {
    icon: AlertTriangle,
    text: "Falta follow-up — e o lead esfria e some",
  },
  {
    icon: TrendingDown,
    text: "Você trabalha muito, mas não consegue estabilizar a agenda",
  },
];

export function ProblemSection() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 animated-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              O Problema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Se você depende de picos,{" "}
              <span className="text-gradient">não tem previsibilidade — tem sorte</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A maioria dos negócios até gera contatos... mas perde vendas por falta de 
              rotina, triagem e velocidade no atendimento.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-6 flex items-start gap-4 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground/90">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#diagnostico">Quero Corrigir Meu Funil</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Em 30-40 min você sai com clareza do gargalo principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
