import { GitBranch, Target, TrendingUp, CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import funnelGif from "@/assets/funnel-signals.gif";

const benefits = [
  "Jornada do lead mapeada do primeiro clique ao fechamento",
  "Identificação de gargalos e pontos de abandono",
  "Otimização baseada em dados reais, não em achismo",
  "Funis validados que escalam com previsibilidade",
];

export function FunnelSection() {
  return (
    <section id="funil" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <GitBranch className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-semibold">Estratégia de Funil</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Funil Estratégico{" "}
              <span className="text-gradient">Personalizado e Validado</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Construímos funis de conversão sob medida para o seu negócio. Cada etapa é mapeada, 
              testada e otimizada para maximizar seus resultados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Arquitetura Estratégica</h3>
                    <p className="text-muted-foreground text-sm">
                      Cada funil é desenhado considerando seu público, produto e objetivos. 
                      Nada de templates genéricos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Otimização Contínua</h3>
                    <p className="text-muted-foreground text-sm">
                      Monitoramos cada ponto do funil em tempo real para identificar 
                      oportunidades de melhoria e escalar o que funciona.
                    </p>
                  </div>
                </div>

                {/* Benefits list */}
                <div className="pt-4 space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#diagnostico" className="flex items-center gap-2">
                      Quero Meu Funil Personalizado
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right - GIF with browser mockup and glow */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Blue glow light behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/40 via-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-secondary/30 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
                
                {/* Browser mockup */}
                <div className="relative glass-card rounded-xl overflow-hidden gradient-border hover-lift">
                  {/* Browser header */}
                  <div className="bg-card/90 border-b border-border/30 px-4 py-3 flex items-center gap-4">
                    {/* Traffic lights */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    {/* URL bar */}
                    <div className="flex-1 flex justify-center">
                      <div className="bg-muted/50 rounded-full px-4 py-1.5 text-xs text-muted-foreground max-w-xs w-full text-center">
                        https://app.dmia.com.br/funil
                      </div>
                    </div>
                    <div className="w-16" /> {/* Spacer for balance */}
                  </div>
                  
                  {/* GIF content */}
                  <div className="relative bg-card/50">
                    <img 
                      src={funnelGif}
                      alt="Visualização de funil de conversão"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                Visualização em tempo real do fluxo de conversão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
