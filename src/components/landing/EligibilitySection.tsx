import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Elegibilidade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Isso é pra você? <span className="text-gradient">Vamos descobrir.</span>
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For who */}
            <div className="glass-card rounded-xl p-8 border-2 border-primary/30">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                Para quem é
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for who */}
            <div className="glass-card rounded-xl p-8 border-2 border-destructive/30">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                Para quem NÃO é
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
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
