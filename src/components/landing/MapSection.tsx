import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import brazilMap from "@/assets/brazil-map.png";

// Location pins distributed across Brazil map (positioned for PNG image)
const locationPins = [
  // Norte (Amazonas, Pará, Roraima, Amapá)
  { x: 22, y: 18 }, { x: 30, y: 22 }, { x: 38, y: 16 },
  { x: 28, y: 28 }, { x: 35, y: 32 }, { x: 42, y: 26 },
  { x: 48, y: 20 }, { x: 55, y: 24 },
  // Nordeste
  { x: 72, y: 18 }, { x: 78, y: 22 }, { x: 82, y: 28 },
  { x: 75, y: 32 }, { x: 80, y: 36 }, { x: 85, y: 32 },
  { x: 78, y: 42 }, { x: 82, y: 46 }, { x: 76, y: 50 },
  // Centro-Oeste (Mato Grosso, Goiás)
  { x: 42, y: 40 }, { x: 48, y: 45 }, { x: 38, y: 48 },
  { x: 52, y: 52 }, { x: 45, y: 55 }, { x: 55, y: 48 },
  { x: 58, y: 55 },
  // Sudeste (SP, RJ, MG, ES)
  { x: 62, y: 58 }, { x: 68, y: 62 }, { x: 72, y: 58 },
  { x: 65, y: 68 }, { x: 70, y: 72 }, { x: 75, y: 65 },
  { x: 78, y: 60 }, { x: 68, y: 75 },
  // Sul (PR, SC, RS)
  { x: 55, y: 72 }, { x: 60, y: 76 }, { x: 52, y: 78 },
  { x: 48, y: 82 }, { x: 55, y: 85 }, { x: 50, y: 88 },
  { x: 58, y: 80 }, { x: 45, y: 85 },
];

export function MapSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Já ajudamos mais de{" "}
                <span className="text-gradient">600 empresas</span>{" "}
                nos últimos 14 anos a acelerar vendas com{" "}
                <span className="text-gradient">Inteligência Artificial</span>
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
                <a href="#diagnostico" className="inline-flex items-center gap-2">
                  Quero Acelerar Minhas Vendas
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Right - Map */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Intense blue glow behind map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/40 rounded-full blur-[80px] -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/50 rounded-full blur-[50px] -z-10" />
                
                {/* Map PNG */}
                <img 
                  src={brazilMap} 
                  alt="Mapa do Brasil" 
                  className="w-full h-full object-contain"
                />
                
                {/* Location pins */}
                {locationPins.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{ 
                      left: `${pin.x}%`, 
                      top: `${pin.y}%`,
                      transform: 'translate(-50%, -100%)'
                    }}
                  >
                    <div className="relative">
                      <MapPin 
                        className="w-5 h-5 text-primary drop-shadow-[0_2px_4px_rgba(59,130,246,0.6)]" 
                        fill="currentColor"
                        style={{
                          animationDelay: `${index * 0.05}s`,
                        }}
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
    </section>
  );
}
