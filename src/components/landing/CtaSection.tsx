import { useState } from "react";
import { ArrowRight, ClipboardList, Search, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: ClipboardList,
    title: "Questionário rápido",
    description: "2 min para entender seu negócio",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    description: "30-40 min de análise do seu funil atual",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "Prioridades e próximos passos claros",
  },
];

export function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Obrigado! Entraremos em contato em breve.");
    }, 2000);
  };

  return (
    <section id="diagnostico" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agende seu{" "}
              <span className="text-gradient">Diagnóstico Estratégico</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Você não precisa "apostar" no marketing. Você precisa de um sistema que organiza 
              demanda, atendimento e conversão. No diagnóstico, identificamos o gargalo principal 
              e desenhamos um plano prático.
            </p>
          </div>

          {/* Process steps */}
          <div ref={stepsRef} className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 transition-all duration-500 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold mb-1">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div 
            ref={formRef}
            className={`glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Nome do Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="@seuperfil"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Faturamento Mensal</Label>
                  <Select required>
                    <SelectTrigger className="bg-muted/50 border-border/50">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40k-80k">R$ 40k - R$ 80k</SelectItem>
                      <SelectItem value="80k-150k">R$ 80k - R$ 150k</SelectItem>
                      <SelectItem value="150k-300k">R$ 150k - R$ 300k</SelectItem>
                      <SelectItem value="300k-500k">R$ 300k - R$ 500k</SelectItem>
                      <SelectItem value="500k-1m">R$ 500k - R$ 1 milhão</SelectItem>
                      <SelectItem value="acima-1m">Acima de R$ 1 milhão</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(00) 00000-0000"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Qual é o maior gargalo hoje?</Label>
                <Textarea
                  id="challenge"
                  placeholder="Descreva brevemente o principal desafio do seu negócio..."
                  className="bg-muted/50 border-border/50 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Agendar Diagnóstico Gratuito
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados serão usados apenas para contato sobre o diagnóstico. Sem spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
