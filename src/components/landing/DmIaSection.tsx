import { useState } from "react";
import { Bot, Filter, Zap, Clock, BarChart, RefreshCw, ArrowUpRight, TrendingUp, Users, Bell, LayoutGrid, MessageSquare, Calendar, Search, Link, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import crmDashboard from "@/assets/crm-dashboard.png";
import crmKanban from "@/assets/crm-kanban.png";

const features = [
  {
    icon: Filter,
    title: "Triagem Inteligente",
    description: "Filtra perfil e intenção antes de lotar sua equipe de atendimento",
  },
  {
    icon: Zap,
    title: "Prioridade por Interesse",
    description: "Destaca quem está pronto para comprar — menos energia em curiosos",
  },
  {
    icon: Clock,
    title: "Follow-up Automático",
    description: "Mantém o contato ativo sem depender de alguém 'lembrar'",
  },
  {
    icon: Bell,
    title: "Alertas em Tempo Real",
    description: "Notifica sua equipe quando um lead quente está pronto para fechar",
  },
  {
    icon: BarChart,
    title: "Histórico e Origem",
    description: "Você sabe de onde veio cada lead e qual caminho converte melhor",
  },
  {
    icon: RefreshCw,
    title: "Recuperação de Interesse",
    description: "Traz de volta quem sumiu — com cadência inteligente",
  },
];

const results = [
  { icon: TrendingUp, text: "Menos perda por demora" },
  { icon: Users, text: "Menos 'curioso' no atendimento" },
  { icon: ArrowUpRight, text: "Mais conversões com o mesmo volume" },
];

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "conversas", label: "Conversas", icon: MessageSquare },
  { id: "agente", label: "Agente IA", icon: Bot },
  { id: "crm", label: "CRM", icon: BarChart },
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

export function DmIaSection() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const currentContent = tabContent[activeTab];

  return (
    <section id="dm-ia" className="py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">CRM Inteligente</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              CRM com <span className="text-gradient">Inteligência Artificial</span>{" "}
              que impede o lead de esfriar
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enquanto sua equipe atende, a DM IA organiza o funil, faz triagem, acompanha e 
              prioriza — para seu time focar no que importa: fechar vendas.
            </p>
          </div>

          {/* CRM Showcase */}
          <div className="mb-16">
            {/* Disclaimer */}
            <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground text-sm">
              <Info className="w-4 h-4" />
              <span>Esta é apenas uma demonstração visual do sistema. A interface real possui ainda mais recursos.</span>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                      transition-all duration-300 border
                      ${isActive 
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25" 
                        : "bg-card/50 text-muted-foreground border-border/50 hover:bg-card hover:text-foreground hover:border-border"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Browser Window Mockup */}
            <div className="glass-card rounded-2xl overflow-hidden gradient-border">
              {/* Browser Header - Hidden on mobile */}
              <div className="hidden sm:flex bg-card/80 border-b border-border/50 px-4 py-3 items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-secondary/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-muted/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md w-full text-center">
                    https://app.dmia.com.br
                  </div>
                </div>
              </div>

              {/* Content Area - Interactive Dashboard */}
              <div className="relative">
                <DashboardPreview />
                
                {/* Info overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-4 sm:p-6 pt-8 sm:pt-12">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{currentContent.title}</h3>
                  <p className="text-muted-foreground text-sm">{currentContent.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover-lift gradient-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Results banner */}
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Na prática, você ganha:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-center gap-3 justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                    <result.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{result.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#diagnostico" className="flex items-center gap-2">
                Quero Meu CRM Inteligente
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Demonstração rápida do fluxo de triagem + acompanhamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
