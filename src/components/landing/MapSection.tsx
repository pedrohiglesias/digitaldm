import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Brazil map SVG - realistic shape
const BrazilMap = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="brazilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.95" />
        <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    <path 
      d="M75,10 L80,12 L85,15 L88,20 L90,28 L88,35 L92,40 L95,45 L93,52 L90,58 L85,65 L80,72 L75,78 L68,82 L60,88 L52,92 L45,94 L38,92 L32,88 L28,82 L25,75 L22,68 L18,60 L15,52 L12,44 L10,36 L12,28 L15,22 L20,16 L28,12 L35,10 L42,8 L50,7 L58,8 L65,9 L75,10 Z
      M82,22 L86,25 L89,30 L87,35 L83,32 L80,27 L82,22 Z
      M30,12 L35,10 L40,12 L38,16 L33,15 L30,12 Z"
      fill="url(#brazilGradient)"
    />
  </svg>
);

// Location pins distributed across Brazil map (adjusted for new viewBox)
const locationPins = [
  // Norte
  { x: 35, y: 18 }, { x: 42, y: 22 }, { x: 50, y: 20 },
  { x: 55, y: 25 }, { x: 48, y: 30 }, { x: 38, y: 28 },
  { x: 60, y: 28 }, { x: 45, y: 35 },
  // Nordeste
  { x: 78, y: 25 }, { x: 85, y: 30 }, { x: 90, y: 35 },
  { x: 82, y: 38 }, { x: 88, y: 42 }, { x: 92, y: 48 },
  { x: 85, y: 50 }, { x: 80, y: 45 }, { x: 75, y: 40 },
  // Centro-Oeste
  { x: 45, y: 50 }, { x: 52, y: 55 }, { x: 40, y: 58 },
  { x: 48, y: 62 }, { x: 55, y: 58 }, { x: 42, y: 65 },
  { x: 50, y: 68 },
  // Sudeste
  { x: 62, y: 65 }, { x: 70, y: 68 }, { x: 75, y: 62 },
  { x: 68, y: 72 }, { x: 78, y: 70 }, { x: 72, y: 75 },
  { x: 65, y: 78 }, { x: 80, y: 65 },
  // Sul
  { x: 50, y: 78 }, { x: 55, y: 82 }, { x: 48, y: 85 },
  { x: 42, y: 82 }, { x: 52, y: 88 }, { x: 45, y: 90 },
  { x: 38, y: 85 }, { x: 58, y: 85 },
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
