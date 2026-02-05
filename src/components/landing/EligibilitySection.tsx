import { CheckCircle, XCircle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forWho = [
  "Negócio com operação ativa e capacidade de atender mais",
  "Ticket médio que permite investir em crescimento estratégico",
  "Alguém responsável por atendimento/comercial (mesmo que pequeno)",
  "Disposição para seguir processo — rotina > improviso",
];

const notForWho = [
  "Quem quer 'só rodar anúncio' sem arrumar atendimento e funil",
  "Quem está começando do zero, sem operação mínima",
  "Quem quer resultado imediato sem construir consistência",
  "Quem busca só seguidores e vaidade — sem foco em vendas",
];

export function EligibilitySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <UserCheck className="w-4 h-4 mr-2" />
              Elegibilidade
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Isso é pra você? <span className="text-gradient">Vamos descobrir.</span>
            </h2>
          </div>

          {/* Two columns */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For who */}
            <div 
              className={`glass-card rounded-xl p-8 border-2 border-primary/30 transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                Para quem é
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for who */}
            <div 
              className={`glass-card rounded-xl p-8 border-2 border-destructive/30 transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                Para quem NÃO é
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 350}ms` }}
                  >
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#diagnostico">Quero Saber se Sou Elegível</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Se não fizer sentido, a gente te diz com honestidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
