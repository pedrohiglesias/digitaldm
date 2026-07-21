import { ArrowRight, CheckCircle2, Target, Eye, Cog, ShoppingBag, Clock, Users, Layers, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const WA = "https://wa.me/554991002472";

const cases = [
  {
    tag: "Case E-commerce",
    title: "De R$134 mil para R$800 mil",
    text: "O GomaPet é um ecommerce pet. Otimizamos gestão, performance e cultura. Em menos de 90 dias escalamos para 500 mil e aumentamos a margem de 18% para 27%.",
    quote: "A MYM reestruturou nossa operação inteira, da oferta ao time comercial. Saímos de 18% pra 27% de margem, e o faturamento escalou muito mais saudável.",
    author: "Igor Amante",
    role: "CEO — Goma Pet",
  },
  {
    tag: "Case SaaS",
    title: "De R$80 mil para R$640 mil",
    text: "O Chagas é um SaaS para alunos de medicina. Escalou para 640 mil em menos de 90 dias, aumentando o investimento em ads de 14 mil para apenas 28 mil.",
    quote: "Eu achava que meu problema era tráfego pago. O time enxergou o que eu não via. Reformulou oferta, canal de vendas e criativos — só isso já dobrou o faturamento.",
    author: "Lucas Marques",
    role: "CEO — Chagas AI",
  },
  {
    tag: "Case Serviço",
    title: "Do zero para R$200 mil",
    text: "A Codex é uma empresa de disparo de mensagens e contingência de WhatsApp, fundada do zero. Estruturamos oferta, posicionamento, captação e vendas.",
    quote: "No começo tínhamos apenas uma ideia. Conseguiram tirar do papel e fazer virar realidade, abrindo nossa mente e as portas para o mercado.",
    author: "Lucas Klein",
    role: "CEO — CODEX",
  },
];

const forWho = [
  { icon: ShoppingBag, text: "Dono de E-commerce, SaaS ou Empresa de Serviço" },
  { icon: Clock, text: "Quem diz \"não tenho tempo pra implementar mais nada\"" },
  { icon: Users, text: "Quem já contratou agência, mentor e consultoria e não funcionou" },
  { icon: Layers, text: "Quem busca estrutura validada, não milagre barato" },
  { icon: TrendingUp, text: "Quem não pode errar mais uma vez" },
  { icon: BarChart3, text: "Quem quer contar com a execução de sócios com resultado" },
];

const opvt = [
  {
    letter: "O",
    title: "Oferta irresistível",
    text: "Antes de marketing e vendas, abrimos o motor: financeiro, equipe, indicadores. Diagnosticamos onde vamos aumentar a margem e reconstruímos sua oferta com narrativa, mecanismo e precificação estratégica.",
    result: "Otimizamos margem, aumentamos faturamento, reduzimos taxas e melhoramos a saúde do negócio.",
  },
  {
    letter: "P",
    title: "Posicionamento claro",
    text: "Com a oferta pronta, trabalhamos como o mercado te enxerga. Marca pessoal, marca empresarial, identidade visual, conteúdo, narrativa, comunidade e formato criativo.",
    result: "Você para de competir por preço e o mercado entende rápido por que você é a melhor opção.",
  },
  {
    letter: "V",
    title: "Vendas previsíveis",
    text: "Estruturamos o processo comercial, implementamos a melhor tecnologia, otimizamos o funil e criamos novos canais de conversão para reduzir dependência de uma única fonte de receita.",
    result: "Sua empresa para de depender de você. O comercial vira processo replicável, com métricas e previsibilidade.",
  },
  {
    letter: "T",
    title: "Tráfego simplificado",
    text: "Implementamos aquisição, qualificação, conversão e tráfego pago simplificado — com CPA otimizado, ROAS saudável e escala agressiva com margem.",
    result: "Tráfego deixa de ser vilão e vira alavanca previsível do crescimento da sua empresa.",
  },
];

const steps = [
  { letter: "A", label: "Auditoria", subtitle: "Diagnóstico", text: "Análise de mercado, concorrentes e visão clara de onde estão as oportunidades, vazamentos de receita e o caminho da estruturação.", bullets: ["Diagnóstico interno de gestão e financeiro", "Análise do funil comercial e oferta", "Mapeamento de 20+ pontos em marketing e criativos", "Pesquisa de mercado e ranking de concorrentes"] },
  { letter: "C", label: "Consultoria", subtitle: "Plano de Ação", text: "Definição das atividades, indicadores e metas para o projeto — a quatro mãos com a sua liderança.", bullets: ["Plano de ação empresarial", "Plano de branding e posicionamento", "Plano de ação comercial", "Plano de geração de demanda"] },
  { letter: "E", label: "Execução", subtitle: "Implementação", text: "Construímos sua operação do zero, ou escalamos a operação que já existe. Execução direta, não PDF.", bullets: ["Estratégia de oferta e branding", "Estruturas comerciais automatizadas ou com time", "Landing Pages, E-commerces e canais de conversão", "Tráfego pago multicanal para aquisição"] },
];

export default function Teste() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Aceleração Empresarial Digital</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Estruturamos negócios para <span className="text-gradient">Escala Empresarial Digital em 90 dias</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
              Garantimos <strong className="text-foreground">visão</strong> e <strong className="text-foreground">velocidade</strong> para empresários, implementando o mesmo mecanismo que fez nossos parceiros ultrapassarem <strong className="text-foreground">R$120 milhões</strong> em faturamento.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Aplicamos com sucesso em <strong className="text-foreground">mais de 100 operações</strong>, escalando o faturamento de <strong className="text-foreground">100 mil</strong> para <strong className="text-foreground">mais de 500 mil</strong> reais por mês.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Target, text: "Processo claro e estruturado, com começo, meio e fim." },
                { icon: Eye, text: "Visão estratégica e direcionamento nas tomadas de decisão." },
                { icon: Cog, text: "Execução prática, com estratégias validadas e implementação rápida." },
              ].map((p, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 border border-primary/20">
                  <p.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-foreground/90">{p.text}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" asChild>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Aplique para escalar seu negócio <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* RESULTS INTRO */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Em <span className="text-gradient">90 dias</span>, estruturamos empresas que saíram da média e <span className="text-gradient">escalaram com previsibilidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">Veja abaixo alguns dos cases.</p>
        </div>
      </section>

      {/* CASES */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 max-w-6xl mx-auto">
            {cases.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 md:p-10 border border-primary/20">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{c.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{c.title}</h3>
                <p className="text-muted-foreground mb-6">{c.text}</p>
                <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/90 mb-4">"{c.quote}"</blockquote>
                <div>
                  <p className="font-semibold">{c.author}</p>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Seu problema <span className="text-gradient">NÃO é tráfego pago</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">Você concorda que <strong className="text-foreground">culpar o tráfego</strong> é o caminho que o mercado te vendeu?</p>
          <p className="text-muted-foreground mb-4">Nos últimos 4 anos, empresários de todos os portes vieram com a mesma afirmação: "não escalo porque meu tráfego é ruim".</p>
          <p className="text-muted-foreground mb-10">Mostramos pessoalmente para cada um que a escala estava no que eles não enxergavam. <strong className="text-foreground">Como você pode culpar o tráfego</strong> sem saber quanto custa cada etapa da sua jornada de compra?</p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">Não existe fórmula mágica, <span className="text-gradient">atalho ou dica que te faça chegar lá</span></h3>
          <p className="text-muted-foreground mb-3">Sabemos que você já viveu um processo frustrante apostando nas pessoas e soluções erradas — isso consome caixa, tempo e energia.</p>
          <p className="text-muted-foreground">Você precisa contar com alguém que <strong className="text-foreground">já chegou onde você quer chegar</strong>, para operar junto com você e escalar sua operação para o próximo nível.</p>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Para quem é</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Para quem é a <span className="text-gradient">Aceleração Empresarial Digital</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {forWho.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-colors">
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/90">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPVT */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Mecanismo O.P.V.T</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              O mecanismo utilizado para <span className="text-gradient">escalar negócios com agilidade</span> sem aumentar seus custos
            </h2>
            <p className="text-muted-foreground">Desenvolvido em 4 anos de operação própria e replicado em mais de 100 negócios.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {opvt.map((o, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">{o.letter}</div>
                  <h3 className="text-2xl font-bold">{o.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{o.text}</p>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">O que muda</span>
                  <p className="text-foreground/90 mt-2">{o.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Execução em 3 etapas</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2"><span className="text-gradient">90 dias</span> para aplicação completa do O.P.V.T</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 border border-primary/20 relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">{s.letter}</div>
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">{s.subtitle}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">{s.label}</h3>
                  <p className="text-muted-foreground mb-5">{s.text}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Diferencial</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Nosso diferencial <span className="text-gradient">é a execução</span></h2>
          <p className="text-xl text-muted-foreground">Consultoria entrega PDF. Agência entrega tráfego. Curso entrega aula. <strong className="text-foreground">Nós entregamos sua operação rodando em escala.</strong></p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Para quem quer <span className="text-gradient">escalar a operação</span></h3>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">O que fazemos</span>
              <ul className="mt-5 space-y-3">
                {[
                  "Diagnosticamos gargalos e alavancas de crescimento",
                  "Otimizamos a oferta com melhor posicionamento, precificação e margem",
                  "Melhoramos aquisição, formato criativo e conteúdo de alta conversão",
                  "Melhoramos jornada de compra, funis e estrutura comercial",
                  "Criamos novos canais de conversão (e-commerce, LP, quizz, time)",
                  "Aplicamos a estratégia de Tráfego Pago Simplificado",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Para quem quer <span className="text-gradient">fundar um negócio</span></h3>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">O que fazemos</span>
              <ul className="mt-5 space-y-3">
                {[
                  "Diagnosticamos se o projeto é comercialmente viável",
                  "Construímos a marca: narrativa, identidade visual, logo, branding",
                  "Conectamos você com fornecedores ou desenvolvedores",
                  "Construímos seu canal de conversão (e-commerce, LP, quizz, time)",
                  "Validamos a sua oferta",
                  "Construímos seu processo de escala com Tráfego Pago Simplificado",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/90"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Capacidade limitada</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Atendemos apenas <span className="text-gradient">12 empresas</span> por mês</h2>
          <p className="text-muted-foreground mb-3">Cada cliente recebe atenção pessoal dos founders dentro da operação.</p>
          <p className="text-muted-foreground mb-8">Contamos com um time de consultores seniores, mas a força de trabalho que fará sua empresa escalar vem diretamente dos founders. É o que garante a qualidade estratégica e o potencial de resultado — e é o que limita a capacidade a 12.</p>
          <Button variant="hero" size="xl" asChild>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Aplique para escalar seu negócio <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Um dos nossos especialistas entra em contato em menos de 2 horas.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">Última chamada</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Aplique para <span className="text-gradient">acelerar 5 anos</span> do seu negócio em 90 dias
          </h2>
          <p className="text-lg text-muted-foreground mb-4">Se você chegou até aqui, sabe que o problema não é falta de esforço. É <strong className="text-foreground">falta de direção</strong>.</p>
          <p className="text-lg text-muted-foreground mb-10">É olhar pro tráfego quando o problema está no financeiro. É culpar o mercado quando o problema está na oferta. É contratar mais uma agência quando o que falta é alguém que olhe para o 360º da empresa.</p>
          <Button variant="hero" size="xl" asChild>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Aplique para escalar seu negócio <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
