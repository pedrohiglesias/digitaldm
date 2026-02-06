import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import resultRoas20 from "@/assets/results/meta-ads-roas20.png";
import result103k from "@/assets/results/result-103k.png";
import result1197k from "@/assets/results/result-1197k.png";
import result1117mi from "@/assets/results/result-1117mi.png";
import result363mi from "@/assets/results/result-363mi.png";
import result1117mi2 from "@/assets/results/result-1117mi-2.png";

const resultImages = [
  { src: resultRoas20, alt: "ROAS 20x - Meta Ads Dashboard" },
  { src: result1117mi, alt: "R$1,117 milhões em vendas" },
  { src: result363mi, alt: "R$3,63 milhões em vendas" },
  { src: result1197k, alt: "R$1.197.344,90 em faturamento" },
  { src: result103k, alt: "R$103.243,98 em faturamento" },
  { src: result1117mi2, alt: "R$1,117 milhões - Dashboard" },
];

const pillars = [
  "Nosso Método de trabalho EXCLUSIVO.",
  "Validação de Produtos e Criativos.",
  "Processo de Escala específico para Lojista.",
];

export function TrafficResultsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resultImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resultImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + resultImages.length) % resultImages.length);
  };

  return (
    <div 
      ref={ref}
      className={`mt-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
          <TrendingUp className="w-4 h-4 mr-2" />
          Resultados Comprovados
        </Badge>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Nossa metodologia já foi validada por <span className="text-gradient">inúmeras lojas</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Já tendo gerado mais de <span className="text-primary font-bold">50 milhões</span> em faturamento.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column - Case Study */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              Veja um dos nossos resultados:
            </h4>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Em apenas <span className="text-foreground font-semibold">12 semanas</span>, esse cliente teve um{" "}
              <span className="text-secondary font-bold">ROAS 20</span> em sua operação.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-card/50 rounded-xl p-4 text-center border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">R$ 2.997,37</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/30">
                <p className="text-sm text-primary mb-1">Faturamento</p>
                <p className="text-xl md:text-2xl font-bold text-primary">R$ 61.513,52</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Ou seja, com um investimento de R$2.997,37, ele multiplicou seu dinheiro em{" "}
              <span className="text-secondary font-bold">20X</span>.
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-6">
              <p className="text-foreground font-semibold">Isso mostra dois pontos importantes:</p>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary font-bold text-lg">1º</span>
                <p>Você <span className="text-foreground font-medium">não precisa investir muito</span> para ter grandes resultados.</p>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary font-bold text-lg">2º</span>
                <p>Você <span className="text-foreground font-medium">não precisa de milhões de seguidores</span> engajados para vender.</p>
              </div>
            </div>

            {/* Pillars */}
            <div className="bg-card/30 rounded-xl p-5 border border-border/50">
              <p className="text-foreground font-semibold mb-4">
                Tudo isso só é possível graças a esses 3 pilares fundamentais:
              </p>
              <div className="space-y-3">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-muted-foreground">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Results Carousel */}
        <div className="relative">
          {/* Frame with glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/30 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/20 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="relative z-10 p-4 rounded-3xl bg-gradient-to-b from-primary/30 via-primary/10 to-secondary/20 border-2 border-primary/40 shadow-[0_0_60px_rgba(59,130,246,0.4)]">
            <div className="bg-card/95 rounded-2xl p-3 border border-border/50">
              {/* Carousel Header */}
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-sm font-medium text-foreground">Resultados dos Clientes</span>
                <div className="flex items-center gap-1">
                  {resultImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-primary w-4' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Images */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-background/50">
                <div 
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {resultImages.map((image, idx) => (
                    <div key={idx} className="min-w-full h-full flex items-center justify-center p-2">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border/50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border/50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Caption */}
              <p className="text-center text-xs text-muted-foreground mt-3 px-2">
                {resultImages[currentSlide].alt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
