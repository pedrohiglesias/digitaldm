import { ShoppingCart, MapPin, Stethoscope, Shirt, MessageSquare, Users, Bot, ArrowRight, Zap, Database, Mail, Phone } from "lucide-react";

const workflowNodes = [
  {
    id: "trigger",
    label: "Lead Entrada",
    icon: Users,
    type: "trigger",
    position: { x: 0, y: 50 },
  },
  {
    id: "crm",
    label: "DM IA CRM",
    icon: Bot,
    type: "main",
    position: { x: 140, y: 50 },
  },
  {
    id: "segment",
    label: "Segmentação",
    icon: Database,
    type: "process",
    position: { x: 280, y: 50 },
  },
];

const segmentOutputs = [
  { 
    id: "ecommerce", 
    label: "E-commerce", 
    sublabel: "Moda Feminina",
    icon: Shirt, 
    color: "primary",
    position: { y: 0 }
  },
  { 
    id: "clinic", 
    label: "Clínica", 
    sublabel: "Agendamento",
    icon: Stethoscope, 
    color: "accent",
    position: { y: 70 }
  },
  { 
    id: "local", 
    label: "Negócio Local", 
    sublabel: "Conversão",
    icon: MapPin, 
    color: "secondary",
    position: { y: 140 }
  },
];

const actionNodes = [
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Mail, label: "E-mail" },
  { icon: Phone, label: "Ligação" },
];

export function WorkflowVisualization() {
  return (
    <div className="relative w-full h-[400px] hidden lg:block">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Workflow Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="relative" style={{ width: '550px', height: '300px' }}>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {/* Trigger to CRM */}
            <path 
              d="M 70 75 L 130 75" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
            {/* CRM to Segment */}
            <path 
              d="M 210 75 L 270 75" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="4 2"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            {/* Segment to Outputs */}
            <path 
              d="M 350 75 Q 380 75 400 30" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <path 
              d="M 350 75 L 400 75" 
              stroke="hsl(var(--accent))" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.7s" }}
            />
            <path 
              d="M 350 75 Q 380 75 400 120" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.8s" }}
            />
          </svg>

          {/* Trigger Node */}
          <div 
            className="absolute glass-card rounded-xl p-3 border-2 border-primary/50 hover:border-primary hover:scale-105 transition-all cursor-pointer group"
            style={{ left: '0px', top: '50px' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">Lead</p>
                <p className="text-[10px] text-muted-foreground">Entrada</p>
              </div>
            </div>
            {/* Pulse indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-ping" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary" />
          </div>

          {/* CRM Node - Main */}
          <div 
            className="absolute glass-card rounded-xl p-4 border-2 border-primary hover:scale-105 transition-all cursor-pointer bg-primary/10"
            style={{ left: '130px', top: '40px' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-primary">DM IA</p>
                <p className="text-[10px] text-muted-foreground">CRM Inteligente</p>
              </div>
            </div>
            {/* Activity indicator */}
            <div className="mt-2 flex gap-1">
              <div className="w-1.5 h-4 bg-primary/60 rounded-full animate-pulse" />
              <div className="w-1.5 h-6 bg-primary/80 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-1.5 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              <div className="w-1.5 h-5 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>

          {/* Segment Node */}
          <div 
            className="absolute glass-card rounded-xl p-3 border-2 border-accent/50 hover:border-accent hover:scale-105 transition-all cursor-pointer"
            style={{ left: '270px', top: '50px' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Database className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">Triagem</p>
                <p className="text-[10px] text-muted-foreground">Automática</p>
              </div>
            </div>
          </div>

          {/* Output Nodes - Segments */}
          {/* E-commerce / Moda */}
          <div 
            className="absolute glass-card rounded-xl p-3 border-2 border-primary/50 hover:border-primary hover:scale-105 transition-all cursor-pointer group"
            style={{ left: '400px', top: '5px' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Shirt className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">Moda Feminina</p>
                <p className="text-[10px] text-muted-foreground">Carrinho + Upsell</p>
              </div>
            </div>
          </div>

          {/* Clínica */}
          <div 
            className="absolute glass-card rounded-xl p-3 border-2 border-accent/50 hover:border-accent hover:scale-105 transition-all cursor-pointer group"
            style={{ left: '400px', top: '75px' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Stethoscope className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">Clínica</p>
                <p className="text-[10px] text-muted-foreground">Agenda + Follow-up</p>
              </div>
            </div>
          </div>

          {/* Negócio Local */}
          <div 
            className="absolute glass-card rounded-xl p-3 border-2 border-secondary/50 hover:border-secondary hover:scale-105 transition-all cursor-pointer group"
            style={{ left: '400px', top: '145px' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <MapPin className="w-4 h-4 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">Negócio Local</p>
                <p className="text-[10px] text-muted-foreground">Visitas + Conversão</p>
              </div>
            </div>
          </div>

          {/* Action indicators */}
          <div className="absolute flex gap-2" style={{ left: '130px', top: '130px' }}>
            {actionNodes.map((action, index) => (
              <div 
                key={action.label}
                className="glass-card rounded-lg p-2 flex items-center gap-1.5 hover:bg-primary/10 transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <action.icon className="w-3 h-3 text-primary" />
                <span className="text-[10px] text-muted-foreground">{action.label}</span>
              </div>
            ))}
          </div>

          {/* Floating metrics */}
          <div 
            className="absolute glass-card rounded-lg px-3 py-2 float"
            style={{ left: '10px', top: '160px' }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-bold text-primary">+32%</p>
                <p className="text-[9px] text-muted-foreground">Conversão</p>
              </div>
            </div>
          </div>

          <div 
            className="absolute glass-card rounded-lg px-3 py-2 float"
            style={{ left: '320px', top: '200px', animationDelay: '2s' }}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs font-bold text-accent">24/7</p>
                <p className="text-[9px] text-muted-foreground">Atendimento</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
