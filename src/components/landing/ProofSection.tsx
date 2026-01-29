import { Award, Shield, Cpu, Repeat, Quote } from "lucide-react";

const proofs = [
  {
    icon: Award,
    title: "14+ Anos",
    description: "de experiência em crescimento digital",
  },
  {
    icon: Shield,
    title: "Funil Completo",
    description: "Não só mídia — estrutura de conversão real",
  },
  {
    icon: Cpu,
    title: "Tecnologia Própria",
    description: "DM IA aplicada à conversão e qualificação",
  },
  {
    icon: Repeat,
    title: "Processos Replicáveis",
    description: "Por segmento, com métricas claras",
  },
];

const testimonial = {
  quote: "Em poucas semanas, a gente parou de perder contato por demora e a agenda ficou mais organizada. Agora temos previsibilidade.",
  author: "Cliente Digital DM",
  role: "Empresário",
};

export function ProofSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Autoridade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Não é "marketing bonito".{" "}
              <span className="text-gradient">É operação de crescimento.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A Digital DM trabalha com rotina, processo e acompanhamento — porque seu negócio 
              precisa de previsibilidade, não de tentativa.
            </p>
          </div>

          {/* Proof cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {proofs.map((proof, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <proof.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{proof.title}</h3>
                <p className="text-sm text-muted-foreground">{proof.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
