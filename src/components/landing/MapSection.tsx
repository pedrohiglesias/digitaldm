import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Brazil map SVG path
const BrazilMap = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
    <path d="M280,50 L320,55 L350,70 L380,90 L390,120 L385,150 L380,180 L370,200 L360,220 L340,250 L320,280 L290,320 L260,350 L230,370 L200,380 L170,375 L140,360 L120,340 L100,310 L85,280 L75,250 L70,220 L65,190 L70,160 L80,130 L95,100 L120,75 L150,55 L180,45 L210,40 L240,42 L280,50 Z
    M190,60 L210,55 L230,58 L250,65 L235,80 L215,78 L195,75 L185,68 L190,60 Z
    M320,85 L340,95 L355,110 L350,125 L335,115 L320,100 L320,85 Z" 
    className="text-foreground/90"
    />
    {/* State borders - simplified */}
    <path d="M150,120 L180,115 L210,120 L240,130 L220,160 L190,170 L160,160 L140,140 L150,120 Z
    M250,140 L290,135 L320,150 L310,180 L280,190 L250,175 L250,140 Z
    M180,180 L220,175 L250,190 L240,230 L200,240 L170,225 L165,195 L180,180 Z
    M260,200 L300,195 L330,220 L320,260 L280,270 L250,250 L260,200 Z
    M150,250 L190,245 L230,260 L220,300 L180,310 L150,290 L150,250 Z
    M240,280 L280,275 L300,300 L280,330 L250,335 L230,310 L240,280 Z" 
    className="text-foreground/80"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeOpacity="0.3"
    />
  </svg>
);

// Location pins distributed across Brazil
const locationPins = [
  // Norte
  { x: 25, y: 18 }, { x: 32, y: 22 }, { x: 38, y: 15 },
  { x: 45, y: 20 }, { x: 52, y: 25 }, { x: 28, y: 28 },
  // Nordeste
  { x: 75, y: 18 }, { x: 82, y: 22 }, { x: 88, y: 20 },
  { x: 78, y: 28 }, { x: 85, y: 32 }, { x: 92, y: 28 },
  { x: 80, y: 38 }, { x: 88, y: 42 }, { x: 75, y: 45 },
  { x: 82, y: 48 }, { x: 90, y: 45 },
  // Centro-Oeste
  { x: 48, y: 42 }, { x: 55, y: 48 }, { x: 42, y: 52 },
  { x: 50, y: 55 }, { x: 58, y: 52 }, { x: 45, y: 60 },
  // Sudeste
  { x: 65, y: 58 }, { x: 72, y: 62 }, { x: 78, y: 58 },
  { x: 68, y: 65 }, { x: 75, y: 68 }, { x: 82, y: 65 },
  { x: 70, y: 72 }, { x: 78, y: 75 }, { x: 65, y: 78 },
  { x: 72, y: 80 }, { x: 80, y: 78 }, { x: 85, y: 72 },
  { x: 75, y: 85 }, { x: 82, y: 82 },
  // Sul
  { x: 55, y: 75 }, { x: 62, y: 78 }, { x: 58, y: 82 },
  { x: 52, y: 85 }, { x: 60, y: 88 }, { x: 55, y: 92 },
  { x: 48, y: 88 }, { x: 45, y: 82 }, { x: 50, y: 78 },
  { x: 58, y: 95 }, { x: 52, y: 98 },
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
                {/* Map */}
                <BrazilMap />
                
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
                        className="w-4 h-4 text-primary drop-shadow-lg" 
                        fill="currentColor"
                        style={{
                          animationDelay: `${index * 0.05}s`,
                        }}
                      />
                      {/* Pulse effect on some pins */}
                      {index % 5 === 0 && (
                        <div className="absolute inset-0 w-4 h-4 bg-primary/40 rounded-full animate-ping" />
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Glow effect behind map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
