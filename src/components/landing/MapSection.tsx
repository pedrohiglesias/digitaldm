import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import brazilMap from "@/assets/brazil-map.png";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Location pins distributed across Brazil map - all inside the white map area
const locationPins = [
  // Norte (Amazonas, Pará, Roraima, Amapá) - mais centralizados
  { x: 32, y: 28 }, { x: 38, y: 30 }, { x: 44, y: 26 },
  { x: 48, y: 22 }, { x: 54, y: 24 },
  // Nordeste - ajustado para dentro do mapa
  { x: 62, y: 24 }, { x: 66, y: 28 }, { x: 70, y: 32 },
  { x: 64, y: 35 }, { x: 68, y: 38 }, { x: 72, y: 35 },
  { x: 66, y: 42 }, { x: 70, y: 45 }, { x: 64, y: 48 },
  // Centro-Oeste (Mato Grosso, Goiás)
  { x: 40, y: 42 }, { x: 45, y: 46 }, { x: 42, y: 50 },
  { x: 48, y: 52 }, { x: 44, y: 55 }, { x: 50, y: 48 },
  // Sudeste (SP, RJ, MG, ES)
  { x: 54, y: 56 }, { x: 58, y: 58 }, { x: 62, y: 55 },
  { x: 56, y: 62 }, { x: 60, y: 64 }, { x: 64, y: 60 },
  { x: 58, y: 68 },
  // Sul (PR, SC, RS) - ajustado para cima
  { x: 50, y: 68 }, { x: 54, y: 72 }, { x: 48, y: 74 },
  { x: 52, y: 78 }, { x: 56, y: 76 },
];

// Typing animation hook
function useTypingAnimation(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      const typeChar = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeChar();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}

export function MapSection() {
  const { displayedText, isComplete } = useTypingAnimation(
    "Já ajudamos mais de 600 empresas nos últimos 14 anos a acelerar vendas com Inteligência Artificial",
    40,
    500
  );
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -translate-y-1/2" />
      
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight min-h-[180px] md:min-h-[160px]">
                {displayedText.split("600 empresas").map((part, i, arr) => (
                  <span key={i}>
                    {i === 0 ? part : null}
                    {i < arr.length - 1 && <span className="text-gradient">600 empresas</span>}
                    {i === arr.length - 1 && i > 0 ? (
                      <>
                        {part.split("Inteligência Artificial").map((subPart, j, subArr) => (
                          <span key={j}>
                            {subPart}
                            {j < subArr.length - 1 && <span className="text-gradient">Inteligência Artificial</span>}
                          </span>
                        ))}
                      </>
                    ) : null}
                  </span>
                ))}
                {!isComplete && <span className="animate-pulse text-primary">|</span>}
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Atendemos empresas de todo o Brasil, implementando CRM inteligente, 
                automações e estratégias de vendas que geram resultados reais — 
                independente do seu segmento ou localização.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Atendimento 100% Online</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium">Todos os Estados</span>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Quero Acelerar Minhas Vendas
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Right - Map */}
            <div 
              ref={mapRef}
              className={`order-1 lg:order-2 relative transition-all duration-700 ${
                mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                {/* Intense blue glow behind map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/40 rounded-full blur-[80px] -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/50 rounded-full blur-[50px] -z-10" />
                
                {/* Map PNG */}
                <img 
                  src={brazilMap} 
                  alt="Mapa do Brasil" 
                  className="w-full h-full object-contain"
                />
                
                {/* Location pins with slide-up animation */}
                {locationPins.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute opacity-0"
                    style={{ 
                      left: `${pin.x}%`, 
                      top: `${pin.y}%`,
                      transform: 'translate(-50%, -100%)',
                      animation: `slideUpPin 0.5s ease-out ${index * 0.05}s forwards`
                    }}
                  >
                    <div className="relative">
                      <MapPin 
                        className="w-5 h-5 text-primary drop-shadow-[0_2px_4px_rgba(59,130,246,0.6)]" 
                        fill="currentColor"
                      />
                      {/* Pulse effect on some pins */}
                      {index % 4 === 0 && (
                        <div className="absolute inset-0 w-5 h-5 bg-primary/50 rounded-full animate-ping" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation for pins */}
      <style>{`
        @keyframes slideUpPin {
          from {
            opacity: 0;
            transform: translate(-50%, 0%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -100%);
          }
        }
      `}</style>
    </section>
  );
}
