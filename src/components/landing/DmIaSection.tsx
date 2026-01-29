import { Bot, Filter, Zap, Clock, BarChart, RefreshCw, ArrowUpRight, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function DmIaSection() {
  return (
    <section id="dm-ia" className="py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">Diferencial Central</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              <span className="text-gradient">DM IA:</span> o CRM com Inteligência Artificial
              que impede o lead de esfriar
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enquanto sua equipe atende, a DM IA organiza o funil, faz triagem, acompanha e 
              prioriza — para seu time focar no que importa: fechar vendas.
            </p>
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
                Quero Ver a DM IA em Ação
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
