import { ShoppingCart, MapPin, Stethoscope, Shirt, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const segments = [
  { 
    icon: ShoppingCart, 
    title: "E-commerce", 
    description: "Estratégias completas para lojas virtuais: desde captação até recompra. Automações que aumentam ticket médio e reduzem abandono de carrinho.",
    highlights: ["Recuperação de carrinho", "Segmentação por comportamento", "Upsell automatizado"]
  },
  { 
    icon: MapPin, 
    title: "Negócios Locais", 
    description: "Funis adaptados para atrair clientes da sua região. Tráfego local qualificado que gera visitas e agendamentos.",
    highlights: ["Geolocalização", "Avaliações e reputação", "Agenda cheia"]
  },
  { 
    icon: Stethoscope, 
    title: "Clínicas", 
    description: "Sistema especializado para área da saúde: triagem de pacientes, agendamento automático e follow-up respeitando a ética do setor.",
    highlights: ["Triagem de perfil", "Agenda previsível", "Comunicação ética"]
  },
  { 
    icon: Shirt, 
    title: "Moda Feminina", 
    description: "Expertise em lojas de moda: campanhas sazonais, lançamentos de coleção e relacionamento com clientes que geram recompra.",
    highlights: ["Lançamentos", "Campanhas sazonais", "Fidelização"]
  },
];

export function SegmentsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="segmentos" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Layers className="w-4 h-4 mr-2" />
            Segmentos Atendidos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Time dedicado para o <span className="text-gradient">seu segmento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada mercado tem suas particularidades. Por isso, temos especialistas focados em entender 
            as dores e oportunidades específicas do seu nicho.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl p-8 hover-lift group transition-all duration-500 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <segment.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3">{segment.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{segment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {segment.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex} 
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Não encontrou seu segmento? Fale conosco!</p>
          <Button variant="hero" size="lg" asChild>
            <a href="#diagnostico" className="flex items-center gap-2">
              Agendar Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
