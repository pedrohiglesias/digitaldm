import { useState, useRef } from "react";
import { LayoutGrid, Users, Filter, Bell, BarChart3, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import crmImage from "@/assets/crm-dmia.png";

const features = [
  {
    icon: LayoutGrid,
    title: "Kanban Visual",
    description: "Visualize todo seu funil em colunas organizadas por etapa",
  },
  {
    icon: Filter,
    title: "Filtros Avançados",
    description: "Encontre leads por período, tags, fontes e departamentos",
  },
  {
    icon: Users,
    title: "Gestão de Leads",
    description: "Acompanhe cada negociação do primeiro contato ao fechamento",
  },
  {
    icon: Bell,
    title: "Follow-ups",
    description: "Nunca perca o timing certo com lembretes automáticos",
  },
  {
    icon: Calendar,
    title: "Agendamentos",
    description: "Integração completa com sua agenda de reuniões",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description: "Veja o valor total e quantidade de leads por etapa",
  },
];

export function CrmSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
              <LayoutGrid className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-semibold">CRM Inteligente</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Gerencie seu funil com o <span className="text-gradient">CRM da DM IA</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualize, organize e priorize todos os seus leads em um único lugar. 
              Kanban visual, filtros avançados e métricas em tempo real.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Interactive CRM preview */}
            <div className="space-y-6">
              <div 
                ref={imageRef}
                className="relative glass-card rounded-2xl p-2 overflow-hidden cursor-crosshair gradient-border"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                <img 
                  src={crmImage} 
                  alt="CRM DM IA - Funil de Vendas Kanban"
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Zoom lens indicator */}
                {isHovering && (
                  <div 
                    className="absolute w-24 h-24 border-2 border-secondary rounded-full pointer-events-none transition-opacity duration-200"
                    style={{
                      left: `calc(${zoomPosition.x}% - 48px)`,
                      top: `calc(${zoomPosition.y}% - 48px)`,
                      background: 'rgba(0, 200, 255, 0.1)',
                    }}
                  />
                )}
              </div>

              {/* Zoom preview */}
              <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isHovering ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                <div className="p-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-secondary" />
                    {isHovering ? 'Área ampliada do CRM' : 'Passe o mouse na imagem para ampliar'}
                  </span>
                </div>
                <div 
                  className="h-48 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${crmImage})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: '350%',
                  }}
                />
              </div>
            </div>

            {/* Features grid */}
            <div className="space-y-6">
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-4 hover-lift flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button variant="hero" size="lg" asChild className="w-full">
                  <a href="#diagnostico" className="flex items-center justify-center gap-2">
                    Quero Conhecer o CRM
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Veja como organizar seu funil e nunca perder um lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
