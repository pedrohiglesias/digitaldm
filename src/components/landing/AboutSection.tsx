import { Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoDeomir from "@/assets/ceo-deomir.png";

const stats = [
  { icon: Users, value: "600+", label: "Empresas Atendidas" },
  { icon: Award, value: "14+", label: "Anos de Experiência" },
  { icon: TrendingUp, value: "42%", label: "Aumento Médio em Vendas" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-center lg:text-left">
                <span className="text-gradient">Quem somos nós?</span>
              </h2>

              <div className="space-y-6 text-foreground/90">
                <p className="text-lg">
                  Meu nome é <strong className="text-foreground">Deomir</strong> e sou fundador da Digital DM. 
                  Com mais de 14 anos de experiência, nossa empresa já transformou a realidade de{" "}
                  <strong className="text-foreground">mais de 600 empresas</strong> que alcançaram{" "}
                  <strong className="text-primary">crescimento exponencial</strong> através da nossa metodologia.
                </p>

                <p>
                  Somos especialistas em <strong className="text-primary">Inteligência Artificial aplicada a vendas</strong>,{" "}
                  <strong className="text-primary">engenharia de vendas</strong> e estratégias comerciais que geram 
                  resultados reais, <strong className="text-foreground">sem perda de tempo</strong>.
                </p>

                <p>
                  Nossa missão é ajudar empresas a estruturar processos comerciais inteligentes, 
                  automatizados e escaláveis, para que possam{" "}
                  <strong className="text-foreground">vender mais com menos esforço operacional.</strong>
                </p>

                <p>
                  Essa é a sua oportunidade de conversar comigo e descobrir como aplicar{" "}
                  <strong className="text-foreground">IA e automação para acelerar suas vendas.</strong>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl p-4 text-center hover:bg-primary/10 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 text-center lg:text-left">
                <Button variant="hero" size="lg" asChild>
                  <a href="#diagnostico" className="inline-flex items-center gap-2">
                    Falar com Deomir
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 relative">
              {/* Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                <img 
                  src={ceoDeomir}
                  alt="Deomir - CEO & Founder da Digital DM"
                  className="w-full h-auto max-w-md mx-auto lg:max-w-none rounded-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 glass-card rounded-xl px-4 py-3 float">
                  <p className="text-sm font-bold text-primary">Deomir Martinhago</p>
                  <p className="text-xs text-muted-foreground">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
