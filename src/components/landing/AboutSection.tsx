import { Users, Award, TrendingUp, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ceoDeomir from "@/assets/ceo-deomir.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Users, value: "800+", label: "E-commerces Atendidos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: TrendingUp, value: "R$12M+", label: "Reais Gerenciados" },
];

export function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div 
              ref={contentRef}
              className={`order-2 lg:order-1 transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                Autoridade
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-center lg:text-left">
                Quem somos <span className="text-gradient">nós?</span>
              </h2>

              <div className="space-y-6 text-foreground/90">
                <p className="text-lg">
                  Meu nome é <strong className="text-foreground">Deomir</strong> e sou fundador da Digital DM. 
                  Com mais de 15 anos de experiência, nossa empresa já transformou a realidade de{" "}
                  <strong className="text-foreground">mais de 800 e-commerces</strong> que alcançaram{" "}
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
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-10">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-lg sm:rounded-xl p-2 sm:p-4 text-center hover:bg-primary/10 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1 sm:mb-2" />
                    <p className="text-lg sm:text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 sm:mt-10 text-center lg:text-left px-4 sm:px-0">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://tintim.link/whatsapp/3cd6aada-3f3e-484b-a2b2-91f08e2bc002/ca4bcf0b-b472-419d-9c5f-aefde3ea931a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    Fale conosco
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div 
              ref={imageRef}
              className={`order-1 lg:order-2 relative flex items-center justify-center transition-all duration-700 ${
                imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Intense blue glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/40 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-secondary/50 rounded-full blur-[60px] pointer-events-none" />
              
              {/* Image with frame */}
              <div className="relative p-2 rounded-2xl border-2 border-primary/40 bg-card/30 backdrop-blur-sm shadow-[0_0_60px_rgba(59,130,246,0.4)]">
                <img 
                  src={ceoDeomir}
                  alt="Deomir - CEO & Founder da Digital DM"
                  className="w-full h-auto max-w-md object-contain relative z-10 rounded-xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 right-4 glass-card rounded-xl px-4 py-3 float border border-primary/30 z-20">
                  <p className="text-sm font-bold text-primary text-center">Deomir Martinhago</p>
                  <p className="text-xs text-muted-foreground text-center">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
