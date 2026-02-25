import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  Star,
  Crown,
  Rocket,
  Shield,
  ChevronDown,
  Settings,
  Eye,
  RefreshCw,
  Layers,
} from "lucide-react";

const WA_LINK = "https://wzap.me/9665020002";

/* ─── Plan Data ─── */
const plans = [
  {
    tag: "Ponto de Entrada",
    name: "START",
    tagline: "WhatsApp + Instagram — Presença que Vende",
    objective:
      "Colocar a operação no ar do jeito certo e começar a gerar fluxo com consistência.",
    features: [
      "Gestão de tráfego em Meta Ads (Instagram e Facebook)",
      "Google Ads quando aplicável ao negócio ou contratado no escopo",
      "Campanhas geolocalizadas por raio com foco em loja física e regional",
      "Google Meu Negócio: otimizações para presença local e busca orgânica",
      "Oferta inicial: alinhamento de isca, promoções e chamadas",
      "Direcionamento de Instagram: análise do perfil e reunião mensal de 1h",
      "Otimização de criativos com base no que está performando",
      "Relatórios e acompanhamento: visão semanal de performance e ajustes",
      "Reunião estratégica mensal de alinhamento",
      "Testes A/B contínuos de criativos, públicos e mensagens",
      "Ferramenta de rastreamento de dados com origem de clientes e campanhas",
    ],
    audience:
      "Para e-commerces e negócios digitais iniciantes que querem sair do \"anúncio básico\" e construir uma base organizada com previsibilidade real.",
    criativos:
      "Se o cliente quiser produzir com a DigitalDM, será cobrado R$35,00 por criativo. Os criativos são desenvolvidos no modelo validado pela DigitalDM para performance, com no máximo 1 ajuste.",
    price: "R$ 2.000",
    period: "/mês",
    contract: "Contrato 6 Meses",
    icon: Rocket,
    accent: "from-blue-500 to-cyan-500",
    highlight: false,
  },
  {
    tag: "Próximo Nível",
    name: "PREMIUM",
    tagline: "E-commerce + Catálogo — Venda Enquanto Dorme",
    objective:
      "Aumentar a taxa de conversão e evoluir a operação para rodar com funil e testes reais.",
    includesLabel: "Tudo do Start, mais",
    features: [
      "Funil completo: estrutura em camadas de Topo, Meio e Fundo com mapeamento",
      "Inteligência de audiência: estudo e criação de públicos mais específicos",
      "Testes A/B contínuos de criativos, públicos e mensagens em profundidade",
      "Célula de criativos com direção: roteiros e briefings para vídeos com mais retenção",
      "Auditoria técnica e de UX no site e e-commerce para pontos que travam conversão",
      "Configuração e validação de eventos, rastreio, pixel, tags, mensuração e mapa de calor",
      "Sistema DMIA: CRM + IA para organizar atendimento e acelerar conversão",
    ],
    audience:
      "Para operações que já anunciam e querem mais eficiência, com rotina de testes, funil e conversão para e-commerce e loja física trabalhando juntos.",
    criativos:
      "Fornecimento de 5 criativos por mês, não acumulativos. Criativos adicionais: R$35,00. Modelo validado pela DigitalDM, máx 1 ajuste.",
    price: "R$ 3.500",
    period: "/mês",
    contract: "Contrato 6 Meses",
    icon: Star,
    accent: "from-primary to-secondary",
    highlight: true,
  },
  {
    tag: "Alta Performance",
    name: "MASTER",
    tagline: "Criativos + Escala + Rotina de Drops + IA",
    objective:
      "Operação de elite com foco em ROI real, consistência de vendas e retenção, com acompanhamento próximo e estratégico.",
    includesLabel: "Tudo do Premium, mais",
    features: [
      "Playbook de vendas: scripts, contorno de objeções e treinamento de equipe",
      "Squad Prioritário: gestão próxima com 1 reunião de alinhamento por semana",
      "Estratégia de Retenção com LTV: ações específicas para recompra e fidelização",
      "Análise de Coortes e Unit Economics para decisões financeiras de escala",
      "Expansão geográfica estruturada: Marketplaces e novos canais de aquisição",
      "Suporte a lançamento de novas coleções com estratégia integrada",
    ],
    audience:
      "Para e-commerces consolidados que precisam de escala com controle, rapidez e decisões baseadas em dados financeiros reais.",
    criativos:
      "Fornecimento de até 15 criativos estáticos e vídeos por mês, não acumulativos. Foco total em alta performance de conversão.",
    price: "R$ 7.000",
    period: "/mês",
    contract: "Contrato 6 Meses",
    icon: Crown,
    accent: "from-amber-500 to-orange-500",
    highlight: false,
  },
  {
    tag: "Exclusivo",
    name: "SCALE",
    tagline: "Alto Volume + Automação + IA + Squad Dedicado",
    objective:
      "O nível máximo. Construção de marca, valuation e equity com suporte de diretoria para grandes tomadas de decisão.",
    includesLabel: "Tudo do Master, mais",
    features: [
      "Acompanhamento de Diretoria C-Level nas reuniões estratégicas mensais",
      "Consultoria de Processos e Logística: otimização da operação fim a fim",
      "Projetos Especiais: Influenciadores, Collabs e PR Digital integrado",
      "Internacionalização Cross-border quando aplicável ao negócio",
      "Prioridade total na fila de demandas e implementação imediata",
      "Dashboard de Business Intelligence personalizado com seus KPIs",
    ],
    audience:
      "Para grandes players e marcas que buscam dominação de nicho, valuation para M&A ou estruturação de franquias com visão de longo prazo.",
    criativos:
      "Fornecimento de até 25 criativos por mês. Inclui roteirização avançada e edição premium para branding e performance.",
    price: "SOB CONSULTA",
    period: "",
    contract: "Acompanhamento Contínuo",
    icon: Zap,
    accent: "from-purple-500 to-pink-500",
    highlight: false,
  },
];

/* ─── Phases Data ─── */
const phases = [
  {
    num: 1,
    title: "Estrutura e Preparação",
    period: "Semana 1-2",
    desc: "Montar a base certa para o tráfego performar e a mensuração ficar confiável.",
    items: [
      "Kickoff e alinhamento de objetivos, público e mix de produtos",
      "Organização de contas e ativos no Meta Ads e ferramentas",
      "Configuração de mensuração e rastreio: UTMs e eventos",
      "Estrutura inicial de campanhas com geolocalização",
      "Planejamento dos primeiros criativos de produtos e copys",
    ],
    crm: [
      "Estrutura do funil no CRM: etapas, tags e organização",
      "Preparação do agente para triagem e respostas iniciais",
    ],
    icon: Settings,
  },
  {
    num: 2,
    title: "Validação e Otimização",
    period: "Semana 3-6",
    desc: "Identificar o que funciona e estabilizar custo e previsibilidade de resultados.",
    items: [
      "Testes A/B contínuos de criativos, públicos e mensagens",
      "Ajustes frequentes para melhorar custo e qualidade do tráfego",
      "Refino por raio, região e expansão gradual",
      "Acompanhamento semanal com reunião quinzenal e mensal",
    ],
    crm: [
      "Cadências iniciais de atendimento e follow-up automatizado",
      "Agente ajudando na triagem e direcionamento de leads",
    ],
    icon: Eye,
  },
  {
    num: 3,
    title: "Escala e Previsibilidade",
    period: "Semana 7-12",
    desc: "Aumentar volume com controle e criar previsibilidade real de receita.",
    items: [
      "Escala gradual do investimento baseada nos vencedores validados",
      "Estrutura de funil e remarketing com engajados e quentes",
      "Rotina de renovação de criativos de produtos para evitar fadiga",
      "Otimização guiada por indicadores: custo por venda e ROAS",
    ],
    crm: [
      "Automação de retomada e recompra ativa",
      "IA + CRM como motor de conversão com velocidade e consistência",
    ],
    icon: TrendingUp,
  },
  {
    num: 4,
    title: "Otimização e Lucro",
    period: "Semana 12+",
    desc: "Manter crescimento com eficiência, reduzindo desperdício e aumentando lucro real.",
    items: [
      "Revisão de orçamento por campanha e etapa do funil",
      "Corte de desperdícios e realocação para o que dá retorno",
      "Ajustes de oferta e criativos com foco em margem real",
      "Rotina de manutenção e evolução para estabilidade de longo prazo",
    ],
    crm: [
      "Otimização de LTV com campanhas de recompra personalizadas",
      "Automações de retenção focadas em maximizar lucro por cliente",
    ],
    icon: BarChart3,
  },
];

/* ─── How It Works Steps ─── */
const howSteps = [
  {
    num: 1,
    title: "Diagnóstico Inicial",
    desc: "Mapeamos o negócio, entendemos o momento e identificamos as principais alavancas de crescimento disponíveis agora.",
  },
  {
    num: 2,
    title: "Planejamento Mensal",
    desc: "Definimos prioridades, metas e ações para o mês. Clareza total sobre o que será executado e por qual motivo cada ação existe.",
  },
  {
    num: 3,
    title: "Execução e Acompanhamento",
    desc: "Monitoramos resultados, identificamos desvios e ajustamos a rota antes que o problema vire tendência negativa.",
  },
  {
    num: 4,
    title: "Revisão e Próximo Ciclo",
    desc: "Reunião de fechamento com análise real do período. O que funcionou, o que não funcionou e o que o próximo mês vai endereçar.",
  },
];

/* ─── Pricing Sim ─── */
const pricingSim = [
  { plan: "START", price: "R$ 2.000/mês", sales: 14, ratio: "menos de 1 venda por 2 dias", note: "O plano se paga. Todo o crescimento que a gestão gera é lucro líquido." },
  { plan: "PREMIUM", price: "R$ 3.500/mês", sales: 24, ratio: "menos de 1 venda por dia", note: "Uma venda por dia cobre o plano. O resto do mês é construção de negócio.", highlight: true },
  { plan: "MASTER", price: "R$ 7.000/mês", sales: 47, ratio: "1,6 venda por dia", note: "Quem está no Master já tem volume. Uma estrutura dessa se paga no primeiro final de semana de campanha." },
  { plan: "SCALE", price: "SOB CONSULTA", sales: null, ratio: "Alta Performance", note: "Para operações de alto volume, a proposta é desenhada sob medida. Acompanhamento contínuo, squad dedicado e crescimento de longo prazo." },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Por qual plano devo começar?",
    a: "Se está começando pelo WhatsApp e Instagram, o Start é o ponto certo. Tem e-commerce e quer catálogo rodando, o Premium é o caminho. Master e Scale são para quem quer criativos, IA e squad dedicado. Em uma conversa rápida a gente te indica o plano ideal sem enrolação.",
  },
  {
    q: "Vocês executam as ações ou só orientam?",
    a: "A Gestão Mensal inclui execução completa de tráfego pago. Não é só consultoria. A gente entra na conta, configura, otimiza e acompanha. A orientação estratégica vem junto da execução, não separada.",
  },
  {
    q: "Qual é o mínimo de tempo de contrato?",
    a: "Trabalhamos com contratos de 6 meses. O algoritmo precisa de tempo para aprender e maturar. Os primeiros 7 a 20 dias são fase de aprendizado. Resultado consistente e previsível é construído com tempo, dado e ajuste contínuo — não em 30 dias.",
  },
  {
    q: "O que diferencia a Gestão Mensal do Acelera 90 Dias?",
    a: "A Gestão Mensal é acompanhamento contínuo e recorrente para empreendedores que faturam R$ 40k+. O Acelera 90 Dias é um ciclo intenso de 90 dias com ecossistema completo (site, landing page, CRM, Agent IA, tráfego e conversão) para marcas que faturam R$ 50k+ e querem estrutura rápida com resultado garantido.",
  },
];

/* ─── Fit ─── */
const fitYes = [
  "Sua empresa fatura R$ 40k/mês ou mais",
  "Sua empresa já vende e quer crescer com consistência",
  "Quer acompanhamento estratégico próximo e contínuo",
  "Está disposto a participar das reuniões e aprovar direcionamentos",
  "Quer decisões baseadas em dado e não em opinião",
  "Entende que crescimento real é construído mês a mês",
];
const fitNo = [
  "Quem quer resultado na primeira semana sem processo",
  "Quem não consegue participar das reuniões mensais",
  "Quem não está disposto a implementar os direcionamentos",
  "Quem fatura abaixo de R$ 40k — para esse perfil existe a Mentoria 360",
];

/* ─── Component ─── */
export default function Gestao() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroAnim = useScrollAnimation();
  const plansAnim = useScrollAnimation();
  const phasesAnim = useScrollAnimation();
  const howAnim = useScrollAnimation();
  const fitAnim = useScrollAnimation();
  const simAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ═══ HERO ═══ */}
      <section
        ref={heroAnim.ref}
        className={`pt-32 pb-20 md:pt-40 md:pb-28 transition-all duration-700 ${heroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Gestão Mensal</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-8 ml-2">
            <span className="text-sm text-muted-foreground">Moda, Varejo e Negócios Digitais</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Você Não Precisa de{" "}
            <span className="text-gradient">Mais Tráfego.</span>
            <br />
            Precisa de{" "}
            <span className="text-muted-foreground font-light">Gestão de Verdade.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Tráfego sem gestão é dinheiro jogado fora. Você investe, o resultado aparece, some, você investe mais, e fica nesse ciclo sem fim.
          </p>
          <p className="text-base sm:text-lg text-foreground font-semibold max-w-2xl mx-auto mb-4">
            A Gestão Mensal quebra esse ciclo. Mês a mês, com método, dado e responsabilidade real.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            A maioria das empresas não cresce por falta de esforço. Para de crescer por falta de <strong className="text-foreground">estrutura, leitura de dado e alguém que olha junto sem sumir depois do contrato.</strong>
          </p>
        </div>
      </section>

      {/* ═══ PLANS ═══ */}
      <section
        id="planos"
        ref={plansAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${plansAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Nossos Planos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Quatro Formatos. Uma Missão.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada plano foi desenhado para um estágio real do negócio. Você não precisa do maior. Precisa do certo para onde você está agora.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:border-primary/50 ${
                  plan.highlight ? "border-primary/60 ring-1 ring-primary/20" : "border-border/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.accent} flex items-center justify-center`}>
                    <plan.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">{plan.tag}</span>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  {plan.highlight && (
                    <span className="ml-auto px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">⭐ Popular</span>
                  )}
                </div>

                <p className="text-sm text-primary font-medium mb-2">{plan.tagline}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Objetivo:</strong> {plan.objective}
                </p>

                {plan.includesLabel && (
                  <p className="text-xs text-primary font-semibold mb-2">{plan.includesLabel}</p>
                )}

                <ul className="space-y-1.5 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-muted/30 rounded-xl p-3 mb-4">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Para quem é:</strong> {plan.audience}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Criativos:</strong> {plan.criativos}
                </p>

                <div className="flex items-end justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-xs text-muted-foreground">{plan.contract}</span>
                    <div className="text-2xl font-bold text-foreground">
                      {plan.price}
                      <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <Button variant="hero" size="lg" asChild>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      Quero esse <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            <strong className="text-foreground">Processo Progressivo:</strong> Você não precisa começar no maior plano. O caminho natural é Start → Premium → Master → Scale, à medida que a operação amadurece e os resultados escalam.
          </p>
        </div>
      </section>

      {/* ═══ PHASES ═══ */}
      <section
        id="fases"
        ref={phasesAnim.ref}
        className={`py-20 md:py-28 bg-muted/20 transition-all duration-700 ${phasesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Fases de Crescimento</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Cada Fase Tem um Papel Específico.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Não existe atalho. Existe método. Quem pula fase, volta. Quem segue o processo, escala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {phases.map((phase) => (
              <div key={phase.num} className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {phase.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                    <span className="text-xs text-primary">{phase.period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{phase.desc}</p>

                <p className="text-xs font-semibold text-foreground mb-2">O que entregamos</p>
                <ul className="space-y-1 mb-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/5 rounded-xl p-3">
                  <p className="text-xs font-semibold text-primary mb-1">Se tiver CRM + IA</p>
                  <ul className="space-y-1">
                    {phase.crm.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Info notes */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10">
            {[
              { title: "Sem CRM e IA", text: "A Gestão de Tráfego completa entrega crescimento com testes e otimizações semanais focados em tráfego qualificado." },
              { title: "Com CRM e Agent de IA", text: "O ganho passa a ser converter mais com o mesmo lead: menos lead perdido, mais follow-up e mais previsibilidade no comercial." },
              { title: "Tempo de Maturação", text: "Os primeiros 7 a 20 dias são aprendizado de plataforma. Resultados consistentes aparecem após validação inicial." },
            ].map((n) => (
              <div key={n.title} className="glass-card rounded-xl p-4 border border-border/50 text-center">
                <h4 className="text-sm font-bold mb-2">{n.title}</h4>
                <p className="text-xs text-muted-foreground">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section
        ref={howAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${howAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Como Funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Olhamos o Todo. Marketing, Dado, Posicionamento e Ponto de Melhoria.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada mês começa com um diagnóstico honesto do que aconteceu no mês anterior. O que funcionou, o que parou de funcionar e o que entra no próximo ciclo. <strong className="text-foreground">Sem relatório de vaidade. Com decisão baseada em dado.</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howSteps.map((step) => (
              <div key={step.num} className="glass-card rounded-2xl p-6 border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="max-w-2xl mx-auto mt-10 text-center text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
            "Quando existe acompanhamento certo, crescimento deixa de ser tentativa e passa a ser construção."
          </blockquote>
        </div>
      </section>

      {/* ═══ FIT IDEAL ═══ */}
      <section
        ref={fitAnim.ref}
        className={`py-20 md:py-28 bg-muted/20 transition-all duration-700 ${fitAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Fit Ideal</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Esse Perfil É Você?</h2>
            <p className="text-muted-foreground">Resultado consistente só acontece quando existe o contexto certo dos dois lados.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ Você está pronto para isso</h3>
              <ul className="space-y-3">
                {fitYes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-destructive/30">
              <h3 className="font-bold text-lg mb-4 text-destructive">❌ Esse não é o caminho para você</h3>
              <ul className="space-y-3">
                {fitNo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING SIMULATION ═══ */}
      <section
        ref={simAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${simAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">⚡ A Conta que Ninguém te Mostrou</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Você paga a Gestão Mensal com quanto vende em um único dia.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Parece exagero. Não é. Faz a conta com a gente agora. Cada plano se paga com menos do que você imagina.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {pricingSim.map((p) => (
              <div
                key={p.plan}
                className={`glass-card rounded-2xl p-6 border text-center transition-all ${
                  p.highlight ? "border-primary/60 ring-1 ring-primary/20" : "border-border/50"
                }`}
              >
                <h3 className="font-bold text-lg mb-1">{p.plan}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.price}</p>
                {p.sales !== null ? (
                  <>
                    <div className="text-4xl font-bold text-primary mb-1">{p.sales}</div>
                    <p className="text-xs text-muted-foreground mb-1">vendas de R$ 150 por mês</p>
                    <p className="text-sm font-medium text-foreground mb-4">= {p.ratio}</p>
                  </>
                ) : (
                  <div className="text-lg font-bold text-primary mb-4">{p.ratio}</div>
                )}
                <p className="text-xs text-muted-foreground">{p.note}</p>
                {p.highlight && <span className="inline-block mt-2 text-xs text-primary">⭐</span>}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              A Gestão Mensal não é um custo. <strong className="text-foreground">É o profissional que você não tem tempo de ser.</strong> Enquanto você cuida da operação, do estoque, do atendimento, <strong className="text-foreground">a DigitalDM está com os olhos 100% no dado, na campanha e na próxima alavanca de crescimento.</strong>
            </p>
            <p className="text-foreground font-semibold mt-4">Mês a mês. Sem sumir. Sem desculpa. Crescendo junto com você.</p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section
        ref={faqAnim.ref}
        className={`py-20 md:py-28 bg-muted/20 transition-all duration-700 ${faqAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Dúvidas Comuns</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Perguntas Diretas</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section
        ref={ctaAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${ctaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm text-primary font-semibold tracking-wider uppercase">📊 A Pergunta Certa</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Você Prefere Continuar Tentando Sozinho ou Crescer com Quem Sabe?
          </h2>
          <p className="text-muted-foreground mb-4">
            Cada mês sem gestão é um mês de decisão tomada no feeling, verba alocada no chute e crescimento que poderia ser maior. <strong className="text-foreground">A Gestão Mensal não é mais um serviço. É o parceiro estratégico que você não tem tempo de ser.</strong>
          </p>
          <p className="text-foreground font-semibold mb-10">
            Mês a mês. Sem sumir. Crescendo junto com você.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { v: "R$ 2k", l: "Plano de entrada" },
              { v: "4 Planos", l: "Start ao Scale" },
              { v: "Contínuo", l: "Crescimento real" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" asChild>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Quero a Gestão Mensal
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
