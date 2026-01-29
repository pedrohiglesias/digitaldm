import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em quanto tempo eu começo a ver melhora?",
    answer:
      "Geralmente você percebe melhorias primeiro na organização do atendimento e conversão (triagem, follow-up, agendamento). Crescimento consistente vem com execução contínua e ajustes por dados.",
  },
  {
    question: "Isso serve para minha especialidade/segmento?",
    answer:
      "Serve para negócios com operação ativa e ticket compatível. No diagnóstico, a gente avalia seu cenário e diz com clareza se faz sentido.",
  },
  {
    question: "A DM IA substitui minha equipe?",
    answer:
      "Não. Ela apoia sua equipe: triagem, prioridade e cadência. Sua equipe fica mais leve para focar no fechamento e confirmação de vendas.",
  },
  {
    question: "Preciso mudar tudo no meu atendimento?",
    answer:
      "Não. A gente ajusta o necessário para o funil funcionar: roteiro, triagem, rotina e acompanhamento. Pequenos ajustes costumam gerar grande diferença.",
  },
  {
    question: "Vocês fazem tudo ou minha equipe precisa executar?",
    answer:
      "A Digital DM estrutura e executa o sistema, e sua equipe entra no ponto mais importante: fechar agendamentos com clareza e velocidade.",
  },
  {
    question: "Tem fidelidade/contrato mínimo?",
    answer:
      "O modelo depende do plano e do nível de execução. Isso é alinhado depois do diagnóstico, com transparência total.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
