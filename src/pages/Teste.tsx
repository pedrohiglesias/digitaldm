import { ArrowRight, BarChart3, CheckCircle2, Cog, Eye, Layers, ShoppingBag, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { InlineLeadForm } from "@/components/empresario/InlineLeadForm";

const scrollToForm = () => document.getElementById("form-diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" });

const forWho = [
  { icon: ShoppingBag, text: "Tem loja física, e-commerce ou empresa de serviços e quer gerar demanda com processo." },
  { icon: BarChart3, text: "Já anuncia, mas não sabe exatamente onde o lead está travando." },
  { icon: TrendingUp, text: "Depende demais de indicação, sazonalidade ou uma única campanha." },
  { icon: Users, text: "Perde vendas por demora, falta de follow-up ou atendimento desorganizado." },
  { icon: Layers, text: "Quer conectar site, CRM, WhatsApp e tráfego em uma única operação." },
  { icon: Eye, text: "Quer enxergar os dados que realmente mostram onde a receita está vazando." },
];

const method = [
  {
    number: "01",
    title: "Diagnosticar",
    text: "Mapeamos onde sua empresa perde receita: oferta, jornada de compra, atendimento, CRM, site, rastreio e mídia.",
    result: "Você deixa de decidir por sensação e enxerga o que merece prioridade.",
  },
  {
    number: "02",
    title: "Estruturar",
    text: "Organizamos canal de conversão, e-commerce ou landing page, CRM, integrações, rastreio e processo comercial.",
    result: "O lead chega em um caminho preparado para virar conversa, pedido ou agendamento.",
  },
  {
    number: "03",
    title: "Converter",
    text: "Implementamos atendimento inteligente, qualificação, follow-up e recuperação de oportunidades via CRM DMIA, WhatsApp e automações.",
    result: "Sua equipe sabe quem atender, quando agir e como não perder oportunidades.",
  },
  {
    number: "04",
    title: "Escalar",
    text: "Gerenciamos tráfego pago e criativos com base no que realmente converte e preserva margem.",
    result: "Mídia deixa de ser aposta e vira alavanca de crescimento controlado.",
  },
];

const phases = [
  {
    period: "Dias 1–30",
    title: "Diagnóstico e fundação",
    bullets: ["Imersão na empresa, oferta, público e metas", "Mapa de gargalos em mídia, conversão, CRM e atendimento", "Plano de prioridade: o que corrigir primeiro e por quê"],
  },
  {
    period: "Dias 31–60",
    title: "Estrutura de conversão",
    bullets: ["Ajustes em e-commerce, landing page, oferta ou funil", "CRM, etapas, tags, integrações e cadências", "Campanhas e criativos conectados à nova estrutura"],
  },
  {
    period: "Dias 61–90",
    title: "Otimização e escala",
    bullets: ["Rotina de acompanhamento dos dados que importam", "Otimização de campanhas, atendimento e jornada", "Plano de crescimento para o próximo ciclo"],
  },
];

const services = [
  ["Tráfego Pago", "Campanhas para gerar demanda com acompanhamento de custo, qualidade do lead e conversão."],
  ["CRM com IA", "Organização do funil, qualificação, follow-up e recuperação de oportunidades."],
  ["E-commerce Profissional", "Uma loja própria, rápida e preparada para transformar visita em pedido."],
  ["Aceleração para Lojas", "Loja física, WhatsApp, Instagram, catálogo e e-commerce vendendo de forma conectada."],
  ["Aceleração para Empresas", "Diagnóstico e estrutura comercial para organizar aquisição, processo e escala."],
];

function FormCta({ label = "Solicitar meu diagnóstico estratégico" }: { label?: string }) {
  return (
    <Button variant="hero" size="xl" type="button" onClick={scrollToForm} className="gap-2">
      {label} <ArrowRight className="w-5 h-5" />
    </Button>
  );
}

export default function Teste() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* 1. HERO */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Aceleração DigitalDM</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Sua empresa não precisa de mais uma agência. Precisa de uma <span className="text-gradient">operação que venda melhor.</span>
            </h1>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
              Organizamos o caminho entre o anúncio e a venda: tráfego pago, CRM, atendimento, automação e canais de conversão trabalhando juntos.
            </p>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {[
                [Target, "Tráfego pago com estratégia e acompanhamento"],
                [Cog, "CRM e automação para não deixar oportunidade esfriar"],
                [ShoppingBag, "E-commerce, landing pages e funis feitos para converter"],
              ].map(([Icon, text]) => {
                const FeatureIcon = Icon as typeof Target;
                return <div key={text as string} className="glass-card rounded-2xl border border-primary/20 p-5"><FeatureIcon className="mb-3 h-6 w-6 text-primary" /><p className="text-sm text-foreground/90">{text as string}</p></div>;
              })}
            </div>
            <FormCta />
            <p className="mt-4 text-sm text-muted-foreground">Preencha o formulário. Vamos entender sua operação antes de indicar qualquer caminho.</p>
          </div>
        </div>
      </section>

      {/* 2. PROVA */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Resultado é consequência de estrutura</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Há 9 anos, a <span className="text-gradient">Mania de Vestir</span> cresce com a DigitalDM.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">Uma parceria longa não existe por acaso. Mídia, e-commerce, dados e decisões de performance conectados ao negócio, mês após mês.</p>
          <div className="glass-card mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/20 p-8">
            <p className="text-4xl font-bold text-primary">+R$ 50 milhões</p>
            <p className="mt-2 text-muted-foreground">movimentados no e-commerce ao longo da parceria</p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Tráfego pago não resolve uma operação desorganizada. <span className="text-gradient">Só deixa o problema mais caro.</span></h2>
          <p className="mb-8 text-xl text-muted-foreground">O anúncio gera a oportunidade. A operação precisa saber receber, qualificar e converter essa oportunidade.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Pessoas chegam, mas não entendem a oferta.", "Leads chamam no WhatsApp e ninguém responde no tempo certo.", "O time atende sem histórico, prioridade ou próxima ação.", "O e-commerce recebe visitas, mas perde vendas no checkout.", "Ninguém sabe qual canal trouxe receita de verdade."].map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 p-4 text-foreground/90"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</div>)}
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Para quem é</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Para empresas que já têm algo bom para vender — e não querem mais crescer no improviso.</h2></div>
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{forWho.map((item) => <div key={item.text} className="glass-card rounded-2xl border border-primary/20 p-6"><item.icon className="mb-4 h-8 w-8 text-primary" /><p className="text-foreground/90">{item.text}</p></div>)}</div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">Não prometemos faturamento sem olhar estoque, margem, oferta, equipe e atendimento. Construímos uma base comercial mais clara, mensurável e pronta para crescer.</p>
        </div>
      </section>

      {/* 5. MÉTODO */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto px-4"><div className="mx-auto mb-12 max-w-4xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">O método DigitalDM</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Diagnosticar. Estruturar. <span className="text-gradient">Converter. Escalar.</span></h2><p className="mt-4 text-muted-foreground">Um método simples para resolver o que vem antes, durante e depois do clique.</p></div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">{method.map((item) => <div key={item.number} className="glass-card rounded-2xl border border-primary/20 p-8"><p className="text-sm font-semibold text-primary">{item.number}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.text}</p><div className="mt-5 border-t border-border/50 pt-4"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Na prática</span><p className="mt-2 text-foreground/90">{item.result}</p></div></div>)}</div>
        </div>
      </section>

      {/* 6. AUTORIDADE */}
      <section className="border-t border-border/50 py-20"><div className="container mx-auto max-w-4xl px-4 text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Quem constrói com você</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Marketing precisa virar <span className="text-gradient">operação de crescimento.</span></h2><p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">A DigitalDM trabalha na interseção entre performance, tecnologia e processo comercial. Não colocamos mais uma ferramenta no seu negócio: fazemos as ferramentas certas trabalharem pela venda.</p><p className="mt-5 text-muted-foreground">Experiência de quem opera tráfego, constrói e-commerces, organiza jornadas de conversão e acompanha empresas que precisam vender todos os dias.</p></div></section>

      {/* 7. RESULTADOS */}
      <section className="border-t border-border/50 py-20"><div className="container mx-auto max-w-5xl px-4"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">O que muda quando a operação conecta</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Não olhamos só para clique, alcance ou ROAS. <span className="text-gradient">Olhamos para o caminho até a receita.</span></h2></div><div className="glass-card mt-10 rounded-2xl border border-primary/20 p-8 md:p-10"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Evidências que acompanhamos</span><div className="mt-6 grid gap-4 sm:grid-cols-2">{["Crescimento de receita no e-commerce", "Redução no tempo de resposta ao lead", "Aumento de conversão do site ou checkout", "Recuperação de carrinhos e leads esquecidos", "Melhora na qualidade dos leads entregues ao comercial", "Menos dependência de uma única fonte de aquisição"].map((item) => <p key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{item}</p>)}</div></div></div></section>

      {/* 8. EXECUÇÃO */}
      <section className="border-t border-border/50 py-20"><div className="container mx-auto px-4"><div className="mx-auto mb-12 max-w-4xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Um plano claro, não um PDF esquecido</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Os primeiros <span className="text-gradient">90 dias</span> colocam a máquina em funcionamento.</h2></div><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">{phases.map((phase) => <div key={phase.period} className="glass-card rounded-2xl border border-primary/20 p-8"><span className="text-sm font-semibold text-primary">{phase.period}</span><h3 className="mt-2 text-2xl font-bold">{phase.title}</h3><ul className="mt-6 space-y-3">{phase.bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-sm text-foreground/90"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{bullet}</li>)}</ul></div>)}</div><div className="mt-10 text-center"><FormCta /></div></div></section>

      {/* 9. DIFERENCIAL */}
      <section className="border-t border-border/50 py-20"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Uma operação, não uma pilha de prestadores</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Agência entrega anúncio. Software entrega ferramenta. <span className="text-gradient">A DigitalDM conecta o que precisa acontecer entre uma coisa e outra.</span></h2></div><div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, text]) => <div key={title} className="glass-card rounded-2xl border border-primary/20 p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></div>)}</div><p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">Nem todo negócio precisa de tudo; todo negócio precisa saber o que está impedindo a próxima venda.</p></div></section>

      {/* 10. FORMULÁRIO */}
      <section className="relative overflow-hidden border-t border-border/50 py-24"><div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" /><div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><span className="text-xs font-semibold uppercase tracking-widest text-primary">Comece pelo diagnóstico</span><h2 className="mt-3 text-3xl font-bold md:text-5xl">Antes de falar em investimento, vamos entender se sua operação está pronta para crescer.</h2><p className="mt-6 text-lg text-muted-foreground">Conte sobre a sua empresa. A equipe DigitalDM avalia o cenário e retorna com o caminho mais adequado: tráfego, CRM, e-commerce, aceleração ou uma combinação deles.</p><p className="mt-5 text-muted-foreground">Não é um formulário para receber proposta genérica. É o primeiro passo para descobrir onde sua empresa está deixando dinheiro na mesa.</p></div><InlineLeadForm id="form-diagnostico" /></div></section>
      <Footer />
    </div>
  );
}
