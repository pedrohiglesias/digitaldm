import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Percent, Palette, Server, Smartphone, CreditCard, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Percent,
    title: "Sem Comissões",
    description: "Aqui o e-commerce será totalmente seu e não iremos cobrar comissões pelas vendas que você realizar.",
    tags: ["Menos taxas", "Mais faturamento"],
    side: "right" as const,
  },
  {
    icon: Palette,
    title: "Totalmente Personalizável",
    description: "Você poderá personalizar e ajustar seu site quando e como quiser. Treinamos você e seu time para fazer isso.",
    tags: ["Mais praticidade", "Maior tranquilidade"],
    side: "left" as const,
  },
  {
    icon: Server,
    title: "Servidor Próprio",
    description: "Quedas e instabilidades não serão uma preocupação para você. Temos servidores próprios onde vamos conseguir te entregar muito mais estabilidade e fluidez do seu site.",
    tags: ["Mais visitas", "Mais estabilidade"],
    side: "right" as const,
  },
  {
    icon: Smartphone,
    title: "Loja Responsiva",
    description: "90% do tráfego de todo e-commerce é via Mobile. Por isso, criamos uma experiência totalmente personalizada para o seu visitante que estiver observando seus produtos em seu celular.",
    tags: ["Mais profissionalismo", "Mais vendas"],
    side: "left" as const,
  },
  {
    icon: CreditCard,
    title: "Integração com Meios de Pagamento",
    description: "Integração completa com os principais meios de pagamento do mercado para você não perder nenhuma venda.",
    tags: ["Mais facilidade", "Mais vendas"],
    side: "right" as const,
  },
  {
    icon: GraduationCap,
    title: "Treinamento",
    description: "Você e sua equipe serão treinados para manusear o site e conseguirem extrair o máximo da sua nova ferramenta de vendas.",
    tags: ["Mais autonomia", "Mais resultados"],
    side: "left" as const,
  },
];

export function EcommerceBenefitsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Criação de{" "}
            <span className="text-gradient">E-Commerce profissional</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja abaixo o "porque" ter uma loja online conosco é a melhor opção para você escalar suas vendas e aumentar seu faturamento nos próximos meses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          {/* Benefits */}
          <div className="space-y-12 md:space-y-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isLeft = benefit.side === "left";

              return (
                <div
                  key={index}
                  className={`relative md:flex md:items-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="glass-card p-6 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {benefit.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-primary/50 text-primary bg-primary/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:flex w-full items-center">
                    {/* Left side content */}
                    <div className={`w-[calc(50%-2rem)] ${isLeft ? "" : "invisible"}`}>
                      {isLeft && (
                        <div className="glass-card p-6 rounded-2xl border border-border/50 mr-8 hover:border-primary/50 transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">{benefit.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            {benefit.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="border-primary/50 text-primary bg-primary/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="w-16 flex justify-center relative z-10">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsla(280,100%,65%,0.6)]" />
                    </div>

                    {/* Right side content */}
                    <div className={`w-[calc(50%-2rem)] ${!isLeft ? "" : "invisible"}`}>
                      {!isLeft && (
                        <div className="glass-card p-6 rounded-2xl border border-border/50 ml-8 hover:border-primary/50 transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">{benefit.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            {benefit.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="border-primary/50 text-primary bg-primary/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
