import { useState, useRef, MouseEvent } from "react";
import { Bot, Zap, Brain, MessageSquare, Search } from "lucide-react";
import workflowImage from "@/assets/workflow-n8n.png";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Integrado",
    description: "Receba e processe mensagens automaticamente",
  },
  {
    icon: Brain,
    title: "IA Multiagente",
    description: "Agentes especializados para cada tarefa",
  },
  {
    icon: Bot,
    title: "Automação Total",
    description: "Fluxos inteligentes 24/7 sem intervenção",
  },
  {
    icon: Search,
    title: "Memória Contextual",
    description: "IA que lembra de cada conversa",
  },
];

export function AutomationSection() {
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cadência Infinita</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Workflows Complexos</span>
            <br />
            <span className="text-foreground">Resultados Simples</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Nossa IA opera em fluxos multiagentes conectando WhatsApp, CRM, calendário e muito mais.
            Passe o mouse sobre o workflow para explorar a arquitetura.
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Features List */}
          <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 hover-lift cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Image with Zoom */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur">
              {/* Main Image Container */}
              <div
                ref={imageRef}
                className="relative cursor-zoom-in"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={workflowImage}
                  alt="Workflow de automação n8n"
                  className="w-full h-auto"
                />
                
                {/* Zoom Lens Indicator */}
                {isHovering && (
                  <div
                    className="absolute w-32 h-32 border-2 border-primary/50 rounded-full pointer-events-none transition-opacity duration-200"
                    style={{
                      left: `${zoomPosition.x}%`,
                      top: `${zoomPosition.y}%`,
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 20px hsla(210, 100%, 55%, 0.3)",
                    }}
                  />
                )}
              </div>

              {/* Zoom Preview Window */}
              <div
                className={`absolute top-4 right-4 w-72 h-48 rounded-xl overflow-hidden border-2 border-primary/50 bg-background shadow-lg transition-all duration-300 ${
                  isHovering ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${workflowImage})`,
                    backgroundSize: "400%",
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-xs text-muted-foreground text-center">
                      Zoom: {Math.round(zoomPosition.x)}%, {Math.round(zoomPosition.y)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Hint Badge */}
              <div className={`absolute bottom-4 left-4 transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}>
                <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Passe o mouse para explorar
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Arquitetura real de um workflow DM IA com múltiplos agentes e integrações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
