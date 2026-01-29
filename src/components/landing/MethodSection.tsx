import { Target, MessageSquare, Bot, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
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

export function MethodSection() {
  return (
    <section id="metodo" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              O Método
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Método <span className="text-gradient">MIA</span>: Método + IA + Análise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Seu negócio não cresce com improviso. Cresce com rotina, métrica e melhoria contínua. 
              O Método MIA é a engenharia de previsibilidade que organiza aquisição, conversão e retenção.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
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
  );
}
