import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Database, TrendingUp, ArrowUpRight, Wallet } from "lucide-react";
import macbookMockup from "@/assets/macbook-mockup.png";
import metaAdsLibrary from "@/assets/meta-ads-library.png";

const phases = [
  {
    number: "01",
    title: "Compra de Dados",
    description: "Captação inteligente de leads qualificados com segmentação precisa",
    icon: Database,
  },
  {
    number: "02",
    title: "Otimização Estratégica",
    description: "Ajustes baseados em métricas reais para maximizar performance",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Escala da Oferta",
    description: "Ampliação do investimento nos canais que comprovadamente convertem",
    icon: ArrowUpRight,
  },
  {
    number: "04",
    title: "Gestão Orçamentária",
    description: "Controle fino do investimento com foco em lucro operacional",
    icon: Wallet,
  },
];

export const TrafficSection = () => {
  return (
    <section id="trafego-pago" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Target className="w-4 h-4 mr-2" />
            Tráfego Pago
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Estratégia Ultra Segmentada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gestão orçamentária inteligente focada em maximizar seu ROAS e lucro operacional
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Phases Infographic */}
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="glass-card hover-lift rounded-xl p-5 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background number */}
                <span className="absolute top-2 right-4 text-6xl font-bold text-primary/10 select-none">
                  {phase.number}
                </span>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-primary/20 rounded-lg shrink-0 group-hover:bg-primary/30 transition-colors">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                {index < phases.length - 1 && (
                  <div className="absolute -bottom-4 left-8 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right Column - MacBook Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* MacBook container */}
              <div className="relative">
                <img
                  src={macbookMockup}
                  alt="MacBook com Meta Ads Library"
                  className="relative z-10 w-full max-w-lg drop-shadow-2xl"
                />
                
                {/* Screen content overlay */}
                <div className="absolute top-[6.5%] left-[11.5%] right-[11.5%] bottom-[28%] z-20 overflow-hidden rounded-sm">
                  <img
                    src={metaAdsLibrary}
                    alt="Biblioteca de Anúncios Meta"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="#diagnostico">
              Quero Escalar com Estratégia
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
