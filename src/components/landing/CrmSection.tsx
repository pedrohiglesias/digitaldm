import { useState } from "react";
import { 
  LayoutGrid, 
  MessageSquare, 
  Bot, 
  BarChart3, 
  Calendar, 
  Search,
  Users,
  Link,
  Settings,
  ArrowUpRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import crmDashboard from "@/assets/crm-dashboard.png";
import crmKanban from "@/assets/crm-kanban.png";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "conversas", label: "Conversas", icon: MessageSquare },
  { id: "agente", label: "Agente IA", icon: Bot },
  { id: "crm", label: "CRM", icon: BarChart3 },
  { id: "agenda", label: "Agenda", icon: Calendar },
  { id: "prospectar", label: "Prospectar", icon: Search },
  { id: "contatos", label: "Contatos", icon: Users },
  { id: "conexao", label: "Conexão", icon: Link },
  { id: "config", label: "Config", icon: Settings },
];

const tabContent: Record<string, { image: string; title: string; description: string }> = {
  dashboard: {
    image: crmDashboard,
    title: "Dashboard Completo",
    description: "Visão geral do seu negócio com métricas de vendas, conversões e performance em tempo real."
  },
  conversas: {
    image: crmDashboard,
    title: "Central de Conversas",
    description: "Gerencie todas as conversas do WhatsApp em um único lugar com histórico completo."
  },
  agente: {
    image: crmDashboard,
    title: "Agente de IA",
    description: "Configure seu agente de IA para responder automaticamente e qualificar leads 24/7."
  },
  crm: {
    image: crmKanban,
    title: "CRM Kanban",
    description: "Visualize todo seu funil de vendas em colunas organizadas por etapa."
  },
  agenda: {
    image: crmDashboard,
    title: "Agendamentos",
    description: "Integração completa com sua agenda para marcar reuniões automaticamente."
  },
  prospectar: {
    image: crmDashboard,
    title: "Prospecção Ativa",
    description: "Encontre novos leads e inicie conversas com prospects qualificados."
  },
  contatos: {
    image: crmDashboard,
    title: "Base de Contatos",
    description: "Gerencie todos os seus contatos com tags, filtros e segmentações."
  },
  conexao: {
    image: crmDashboard,
    title: "Conexões",
    description: "Conecte seu WhatsApp e outras integrações em poucos cliques."
  },
  config: {
    image: crmDashboard,
    title: "Configurações",
    description: "Personalize o sistema de acordo com as necessidades do seu negócio."
  },
};

export function CrmSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
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

          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground text-sm">
            <Info className="w-4 h-4" />
            <span>Esta é apenas uma demonstração visual do sistema. A interface real possui ainda mais recursos.</span>
          </div>

          {/* Static Tabs Display - No interaction */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              
              return (
                <div
                  key={tab.id}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-primary/20 text-primary border border-primary/30"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </div>
              );
            })}
          </div>

          {/* Browser Window Mockup */}
          <div className="glass-card rounded-2xl overflow-hidden gradient-border mb-8">
            {/* Browser Header */}
            <div className="bg-card/80 border-b border-border/50 px-4 py-3 flex items-center gap-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-muted/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md w-full text-center">
                  https://app.dmia.net.br
                </div>
              </div>
            </div>

            {/* Content Area - Static Dashboard */}
            <div className="relative">
              <img 
                src={crmDashboard}
                alt="CRM Dashboard"
                className="w-full h-auto"
              />
              
              {/* Static overlay with CRM info */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">CRM Completo para Gestão de Leads</h3>
                  <p className="text-muted-foreground">Todas as ferramentas que você precisa para organizar e converter seus leads em um único lugar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Quero Conhecer o CRM
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Veja como organizar seu funil e nunca perder um lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
