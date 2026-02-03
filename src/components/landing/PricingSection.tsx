import { Check, Sparkles, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start",
    description: "Ideal para começar",
    price: "197",
    popular: false,
    features: [
      "IA Personalizada básica",
      "Atendimento 24h automatizado",
      "Qualificação de leads",
      "Integração com WhatsApp",
      "Servidor e infraestrutura",
      "Suporte por email",
    ],
  },
  {
    name: "Pleno",
    description: "Para crescimento consistente",
    price: "350",
    popular: false,
    features: [
      "IA Personalizada para seu negócio",
      "Atendimento 24h automatizado",
      "Qualificação inteligente de leads",
      "Integração com WhatsApp",
      "Integração com seu CRM",
      "Servidor e infraestrutura",
      "Tokens de IA inclusos",
      "Suporte técnico",
    ],
  },
  {
    name: "Pro",
    description: "Mais vendido",
    price: "597",
    popular: true,
    features: [
      "IA Personalizada avançada",
      "Atendimento 24h automatizado",
      "Qualificação inteligente de leads",
      "Integração com WhatsApp",
      "Integração com seu CRM",
      "Servidor e infraestrutura",
      "Tokens de IA inclusos",
      "Manutenções e atualizações",
      "Suporte técnico prioritário",
      "Personalizações ilimitadas",
    ],
  },
  {
    name: "Master",
    description: "Solução completa",
    price: "997",
    popular: false,
    features: [
      "IA Personalizada enterprise",
      "Atendimento 24h automatizado",
      "Qualificação inteligente de leads",
      "Integração com WhatsApp",
      "Integração com seu CRM",
      "Servidor dedicado",
      "Tokens de IA ilimitados",
      "Manutenções e atualizações",
      "Suporte VIP 24/7",
      "Personalizações ilimitadas",
      "Consultoria mensal",
      "Relatórios avançados",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="precos" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Investimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Escolha o plano{" "}
              <span className="text-gradient">ideal para você</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todos os planos incluem acesso ao DM IA e podem ser cancelados a qualquer momento, 
              sem multa ou fidelidade.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card rounded-2xl overflow-hidden transition-all duration-300 hover-lift ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 px-4">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Name */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      O que está incluído:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-6" />

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Investimento mensal</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                  </div>

                  {/* Promo Banner */}
                  <div className="bg-primary/10 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <Gift className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">SEM CUSTO DE IMPLEMENTAÇÃO</p>
                        <p className="text-xs text-muted-foreground">
                          Por tempo limitado - Economia de R$ 1.500
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#diagnostico" className="flex items-center justify-center gap-2">
                      Ativar Minha IA Agora
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>

                  {/* Cancel note */}
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Cancele quando quiser, sem multa ou fidelidade
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
