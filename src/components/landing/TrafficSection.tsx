import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Database, TrendingUp, ArrowUpRight, Wallet, ShoppingCart, MapPin, Stethoscope, Shirt, ArrowRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrafficResultsShowcase } from "./TrafficResultsShowcase";
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

const segments = [
  { 
    icon: ShoppingCart, 
    title: "E-commerce", 
    description: "Estratégias completas para lojas virtuais: desde captação até recompra.",
    highlights: ["Recuperação de carrinho", "Segmentação por comportamento"]
  },
  { 
    icon: MapPin, 
    title: "Negócios Locais", 
    description: "Funis adaptados para atrair clientes da sua região.",
    highlights: ["Geolocalização", "Agenda cheia"]
  },
  { 
    icon: Stethoscope, 
    title: "Consultórios Médicos", 
    description: "Sistema especializado para área da saúde com triagem e agendamento.",
    highlights: ["Triagem de perfil", "Comunicação ética"]
  },
  { 
    icon: Shirt, 
    title: "Moda Feminina", 
    description: "Expertise em lojas de moda: campanhas sazonais e fidelização.",
    highlights: ["Lançamentos", "Campanhas sazonais"]
  },
];

export const TrafficSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: segmentsRef, isVisible: segmentsVisible } = useScrollAnimation({ threshold: 0.1 });

  const videoId = "8XcFKcsncno";
  const previewSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section id="trafego" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Target className="w-4 h-4 mr-2" />
            Tráfego Pago
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Gestão profissional de Tráfego Pago</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Time dedicado para o seu segmento com gestão orçamentária inteligente focada em maximizar seu ROAS e lucro operacional
          </p>
        </div>

        {/* Content Grid - Phases + Dashboard */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Phases Infographic */}
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`glass-card hover-lift rounded-xl p-5 relative overflow-hidden group transition-all duration-500 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
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

          {/* Right Column - Video Shorts Style */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blue glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/40 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/50 rounded-full blur-[50px] pointer-events-none" />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 z-30 glass-card px-4 py-2 rounded-full border border-primary/30 shadow-lg">
                <span className="text-sm font-semibold text-primary">Meta ADS & Google ADS</span>
              </div>
              
              {/* Frame wrapper */}
              <div className="relative z-10 p-4 rounded-3xl bg-gradient-to-b from-primary/30 via-primary/10 to-secondary/20 border-2 border-primary/40 shadow-[0_0_60px_rgba(59,130,246,0.4)]">
                {/* Inner frame */}
                <div className="p-2 rounded-2xl bg-card/90 border border-border/50">
                  {/* Video container - Shorts style */}
                  <div 
                    className="relative rounded-xl overflow-hidden cursor-pointer group w-[260px] aspect-[9/16]"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <iframe
                      src={previewSrc}
                      title="Gestão de Tráfego Pago"
                      className="w-full h-full pointer-events-none scale-[1.02]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                    
                    {/* Click overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    {/* Play Button - appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Top Label */}
                    <div className="absolute top-3 left-3 right-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-foreground/80">
                          tráfego-pago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segments Section */}
        <div 
          ref={segmentsRef}
          className={`mt-20 transition-all duration-700 ${
            segmentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Especialistas por <span className="text-gradient">segmento</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada mercado tem suas particularidades. Por isso, temos especialistas focados nas dores e oportunidades do seu nicho.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {segments.map((segment, index) => (
              <div 
                key={index} 
                className={`glass-card rounded-xl p-6 hover-lift group transition-all duration-500 ${
                  segmentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <segment.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{segment.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{segment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {segment.highlights.map((highlight, hIndex) => (
                    <span 
                      key={hIndex} 
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Showcase */}
        <TrafficResultsShowcase />

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Não encontrou seu segmento? Fale conosco!</p>
          <Button variant="hero" size="lg" asChild>
            <a href="#diagnostico" className="flex items-center gap-2">
              Quero Tráfego Pago Agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-card/80 text-foreground hover:bg-card transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1`}
                title="Gestão de Tráfego Pago"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
