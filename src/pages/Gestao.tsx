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
  TrendingUp,
  BarChart3,
  Star,
  Crown,
  Rocket,
  Shield,
  ChevronDown,
  Settings,
  Eye,
  Layers,
  AlertTriangle,
  ShieldCheck,
  CreditCard,
  Clock,
  Flame,
} from "lucide-react";
import provaRoas from "@/assets/prova-roas20-clean.png";
import provaResultados from "@/assets/prova-resultados.png";

const WA_LINK = "https://wzap.me/9665020002";
const KIWIFY_LINK = "https://pay.kiwify.com.br/ymOOQOl";

/* ─── Plan Data ─── */
const plans = [
  {
    tag: "Ponto de Entrada",
    name: "START",
    tagline: "WhatsApp + Instagram: Máquina de Aquisição Previsível",
    objective:
      "Parar de impulsionar no chute e construir uma base organizada que gera leads com consistência e custo controlado.",
    features: [
      "Máquina de aquisição previsível no Meta Ads (Instagram e Facebook)",
      "Google Ads quando aplicável ao negócio ou contratado no escopo",
      "Campanhas geolocalizadas por raio com foco em loja física e regional",
      "Google Meu Negócio: otimizações para presença local e busca orgânica",
      "Oferta inicial: alinhamento de isca, promoções e chamadas",
      "Direcionamento de Instagram: análise do perfil e reunião mensal de 1h",
      "Otimização de criativos com base no que está performando",
      "Relatórios e acompanhamento: visão semanal de performance e ajustes",
      "Reunião estratégica mensal de alinhamento",
      "Otimização contínua para reduzir o CAC (custo por cliente)",
      "Ferramenta de rastreamento de dados com origem de clientes e campanhas",
    ],
    audience:
      'Para e-commerces e negócios digitais iniciantes que querem sair do "anúncio básico" e construir uma base organizada com previsibilidade real.',
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
    tagline: "E-commerce + Catálogo: Otimização Contínua para Reduzir o CAC",
    objective:
      "Correção de gargalos de conversão, funil completo e testes reais para vender mais com o mesmo ou menor investimento.",
    includesLabel: "Tudo do Start, mais",
    features: [
      "Funil completo: estrutura em camadas de Topo, Meio e Fundo com mapeamento",
      "Inteligência de audiência: estudo e criação de públicos mais específicos",
      "Otimização contínua de criativos, públicos e mensagens para reduzir CAC",
      "Célula de criativos com direção: roteiros e briefings para vídeos com mais retenção",
      "Correção de gargalos de conversão no site e e-commerce",
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
    tagline: "Criativos + Escala + ROI Real + IA",
    objective:
      "Operação de elite com consistência de vendas, retenção e acompanhamento próximo. Cada real investido tem retorno mapeado.",
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
      "Nível máximo. Construção de marca, valuation e equity com suporte de diretoria. Decisões que movem milhões.",
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

/* ─── Erro vs Verdade ─── */
const erroAcha = [
  "Preciso de mais tráfego",
  "Meu criativo está ruim",
  "Preciso de mais verba",
  "O algoritmo está contra mim",
];
const erroReal = [
  "Falta de estratégia clara de aquisição",
  "Dado não lido, decisão no achismo",
  "Verba gasta sem saber o retorno real",
  "Ninguém responsável pelo crescimento",
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
  "Quem fatura abaixo de R$ 40k — para esse perfil existe o GPS 360: Estruturação de Vendas",
];

/* ─── Component ─── */
export default function Gestao() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroAnim = useScrollAnimation();
  const provocAnim = useScrollAnimation();
  const plansAnim = useScrollAnimation();
  const phasesAnim = useScrollAnimation();
  const howAnim = useScrollAnimation();
  const fitAnim = useScrollAnimation();
  const simAnim = useScrollAnimation();
  const provaAnim = useScrollAnimation();
  const erroAnim = useScrollAnimation();
  const garantiaAnim = useScrollAnimation();
  const realidadeAnim = useScrollAnimation();
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Sistema de Crescimento Mensal</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30">
              <span className="text-sm text-muted-foreground">Moda, Varejo e Negócios Digitais</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Todo Mês Você Toma{" "}
            <span className="text-gradient">DECISÕES DE MARKETING</span>
            <br />
            <span className="text-muted-foreground font-light">No Escuro.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Quem cresce tem estrutura, dados e alguém responsável pelo crescimento.{" "}
            <strong className="text-foreground">TRÁFEGO SEM GESTÃO É DINHEIRO RODANDO SEM CONTROLE.</strong>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Enquanto você investe em anúncios esperando vender mais, a maior parte das empresas perde lucro por falta de estrutura, dados e direção estratégica.
          </p>
        </div>
      </section>

      {/* ═══ PROVOC STRIP ═══ */}
      <section
        ref={provocAnim.ref}
        className={`py-10 bg-primary/5 border-y border-primary/10 transition-all duration-700 ${provocAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-base sm:text-lg text-foreground">
            Seu problema não é falta de tráfego. É que você está{" "}
            <strong className="text-primary">QUEIMANDO DINHEIRO TODO MÊS SEM PERCEBER.</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            SEM GESTÃO, SUA EMPRESA CRESCE POR SORTE. COM GESTÃO, ELA CRESCE POR DECISÃO.
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
              Quatro Formatos. <span className="text-gradient">Uma Missão.</span>
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
            <strong className="text-foreground">Sistema de Crescimento Mensal:</strong> Você não precisa começar no maior. Cada plano foi desenhado para evoluir junto com o negócio. O caminho natural é Start → Premium → Master → Scale, à medida que a operação amadurece e os resultados escalam.
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
              Cada Fase Tem um <span className="text-gradient">Papel Específico.</span>
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
              { title: "Tempo de Maturação", text: "Os primeiros 7 a 20 dias são aprendizado de plataforma. Resultados consistentes aparecem após validação inicial. A mágica está na consistência, não na urgência." },
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
              Analisamos Dado. <span className="text-gradient">CORTAMOS O QUE DRENA.</span>{" "}
              Escalamos o que Converte.
            </h2>
            <div className="max-w-2xl mx-auto space-y-3 text-muted-foreground">
              <p>
                Cada mês começa com um diagnóstico honesto e brutal do que aconteceu no mês anterior. O que funcionou, o que parou de funcionar e o que entra no próximo ciclo.{" "}
                <strong className="text-foreground">Sem relatório de vaidade. Com decisão baseada em dado real.</strong>
              </p>
              <p>
                Você não fica no escuro. Sabe exatamente o que foi feito, o que está convertendo, o que está desperdiçando verba e qual é o próximo movimento. <strong className="text-foreground">Sempre.</strong>
              </p>
              <p>
                Nosso papel é ser os olhos estratégicos que você não tem como ser no dia a dia. Quem está dentro do negócio não enxerga tudo.{" "}
                <strong className="text-foreground">Trazemos o olhar de fora com 15 anos de prática aplicada ao varejo e ao digital.</strong>
              </p>
            </div>
          </div>

          <blockquote className="max-w-2xl mx-auto mb-10 text-center border-l-4 border-primary pl-4 py-2">
            <p className="text-foreground font-semibold italic">
              "SEM GESTÃO, SUA EMPRESA CRESCE POR SORTE. COM GESTÃO, ELA CRESCE POR DECISÃO."
            </p>
          </blockquote>

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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">ESSE PERFIL É VOCÊ?</h2>
            <p className="text-muted-foreground">Resultado consistente só acontece quando existe o contexto certo dos dois lados.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border border-primary/30">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ VOCÊ ESTÁ PRONTO PARA ISSO</h3>
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
              <h3 className="font-bold text-lg mb-4 text-destructive">❌ ESSE NÃO É O CAMINHO PARA VOCÊ</h3>
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
          <div className="text-center mb-4">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">⚡ UMA ÚNICA CAMPANHA VENCEDORA PAGA O PLANO INTEIRO</span>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              UM DIA DE VENDAS COBRE A <span className="text-gradient">GESTÃO DO MÊS.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Não é exagero. É matemática. Com ticket de R$ 150, veja quantas vendas cobrem cada plano. Tudo que vier depois é crescimento puro.
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
                <h3 className="font-bold text-lg mb-1">Plano {p.plan}</h3>
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
              A DigitalDM não é uma agência. <strong className="text-foreground">É o parceiro que analisa dado, decide o que cortar, onde escalar e acompanha o crescimento.</strong> Enquanto você cuida da operação, do estoque e do atendimento, <strong className="text-foreground">a DigitalDM está com os olhos 100% no dado, na campanha e na próxima alavanca de crescimento.</strong>
            </p>
            <p className="text-foreground font-semibold mt-4">
              Mês a mês. Sem sumir. Sem desculpa. <span className="text-primary">SEM GESTÃO, VOCÊ CRESCE POR SORTE. COM A DIGITALDM, VOCÊ CRESCE POR DECISÃO.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ A REALIDADE ═══ */}
      <section
        ref={realidadeAnim.ref}
        className={`py-20 md:py-28 bg-muted/20 transition-all duration-700 ${realidadeAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm text-primary font-semibold tracking-wider uppercase">A Realidade</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            A MAIORIA DAS EMPRESAS NÃO CRESCE PORQUE{" "}
            <span className="text-gradient">NINGUÉM ESTÁ OLHANDO O NEGÓCIO DE VERDADE.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Cada mês sem gestão é um mês de verba queimada,{" "}
              <strong className="text-foreground">decisão tomada no feeling e crescimento que nunca vai aparecer no extrato.</strong>
            </p>
            <p>
              A DigitalDM não é mais uma agência. É o parceiro estratégico que{" "}
              <strong className="text-foreground">entra no negócio, olha o dado, corta o que drena e escala o que converte.</strong>
            </p>
            <p>
              O negócio não para de evoluir.{" "}
              <strong className="text-foreground">A questão é se vai evoluir com método ou continuar perdendo dinheiro no improviso.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROVA REAL ═══ */}
      <section
        ref={provaAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${provaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">Prova Real</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              ESSES SÃO OS RESULTADOS DE QUEM <span className="text-gradient">CONFIOU NO PROCESSO.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não são promessas. São prints reais de operações reais que decidiram parar de improvisar e{" "}
              <strong className="text-foreground">deixar a DigitalDM escalar o que converte.</strong>
            </p>
          </div>

          {/* Caso principal */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={provaRoas} alt="Resultado ROAS 20 — R$ 2.997 investido, R$ 61.513 faturado" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs text-primary font-semibold mb-2">🚀 Caso Real — 12 Semanas</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    R$ 2.997 investidos.<br />
                    <span className="text-gradient">R$ 61.513 faturados.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Em apenas <strong className="text-foreground">12 semanas</strong>, esse cliente atingiu{" "}
                    <strong className="text-foreground">ROAS 20</strong> na operação. Com menos de R$ 3.000 em mídia, multiplicou o dinheiro <strong className="text-foreground">20 vezes.</strong> Não foi sorte. Foi estrutura, dado e decisão.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card rounded-xl p-3 text-center border border-border/50">
                      <div className="text-lg font-bold text-foreground">R$ 2.997</div>
                      <div className="text-xs text-muted-foreground">Valor Investido</div>
                    </div>
                    <div className="glass-card rounded-xl p-3 text-center border border-primary/30">
                      <div className="text-lg font-bold text-primary">R$ 61.513</div>
                      <div className="text-xs text-muted-foreground">Valor Faturado ⭐</div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary mt-4 text-center">
                    ROAS 20 · 20x o dinheiro em 12 semanas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mais resultados */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center mb-6">Mais operações gerenciadas pela DigitalDM</p>
            <div className="glass-card rounded-2xl border border-border/50 overflow-hidden mb-6">
              <img src={provaResultados} alt="Múltiplos resultados de clientes DigitalDM" className="w-full" />
            </div>
            <p className="text-xs text-center text-muted-foreground mb-8">
              Dados reais extraídos do Gerenciador de Anúncios e plataformas de e-commerce dos clientes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "R$ 103k", label: "Total de vendas", sub: "em um período de 3 meses." },
                { value: "R$ 1,19M", label: "Faturamento total", sub: "consolidado em 6 meses." },
                { value: "R$ 298k", label: "Resultado acumulado", sub: "E-commerce em um único mês." },
                { value: "ROAS 20", label: "Retorno registrado", sub: "em 12 semanas." },
              ].map((stat) => (
                <div key={stat.value} className="glass-card rounded-xl p-4 border border-border/50 text-center">
                  <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Resultado comprovado */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ESSES NÚMEROS SÃO O QUE ACONTECE QUANDO VOCÊ{" "}
              <span className="text-gradient">PARA DE IMPROVISAR E COMEÇA A ESCALAR COM MÉTODO.</span>
            </h3>
            <p className="text-muted-foreground mb-2">
              Não existe atalho. Existe estrutura, dado, decisão e um parceiro responsável pelo crescimento.
            </p>
            <p className="text-foreground font-semibold">
              A DigitalDM escalou o que convertia. E vai fazer o mesmo pelo seu negócio.
            </p>
            <p className="text-primary font-bold text-lg mt-4">ESCALAMOS O QUE CONVERTE!</p>
          </div>
        </div>
      </section>

      {/* ═══ O ERRO QUE DESTRÓI EMPRESAS ═══ */}
      <section
        ref={erroAnim.ref}
        className={`py-20 md:py-28 bg-muted/20 transition-all duration-700 ${erroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase text-destructive">🚨 O ERRO QUE DESTRÓI EMPRESAS</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              A maioria acredita que o problema é falta de tráfego, criativo ou verba.{" "}
              <span className="text-gradient">O problema real é a falta de gestão estratégica.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-destructive/20">
              <h3 className="font-bold text-lg mb-4 text-destructive">O que você acha que é o problema</h3>
              <ul className="space-y-3">
                {erroAcha.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-primary/20">
              <h3 className="font-bold text-lg mb-4 text-primary">O que é de verdade</h3>
              <ul className="space-y-3">
                {erroReal.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Toda semana você gasta verba. Mas quanto dessa verba está gerando retorno real?{" "}
              <strong className="text-foreground">Sem alguém olhando o dado, tomando decisão e sendo responsável pelo crescimento, você vai continuar queimando dinheiro</strong>{" "}
              e chamando isso de "investimento em marketing".
            </p>
            <p className="text-foreground font-semibold mt-4">
              Isso é o que destrói empresas que poderiam ser grandes.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ GARANTIA ═══ */}
      <section
        ref={garantiaAnim.ref}
        className={`py-20 md:py-28 transition-all duration-700 ${garantiaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">🛡️ GARANTIA CONDICIONAL DE RESULTADO</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Se em 90 dias não houver evolução clara nos indicadores,{" "}
              <span className="text-gradient">revisamos toda a estratégia sem custo até ajustar.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Você continua pagando apenas o que foi acordado na gestão mensal.{" "}
              <strong className="text-foreground">Não cobramos nada além disso.</strong>{" "}
              Nenhum custo extra de estratégia, nenhuma hora adicional de consultoria, nenhum ajuste pago. Trabalhamos até o resultado aparecer.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Revisão Completa", desc: "Toda a estratégia revisitada sem custo adicional" },
              { icon: CreditCard, title: "Sem Cobranças Extras", desc: "Apenas o valor mensal acordado. Nada mais" },
              { icon: Flame, title: "Comprometimento Real", desc: "Trabalhamos até os indicadores evoluírem" },
            ].map((g) => (
              <div key={g.title} className="glass-card rounded-2xl p-6 border border-primary/20 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
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
          <span className="text-sm text-primary font-semibold tracking-wider uppercase">📈 A PERGUNTA QUE VOCÊ PRECISA RESPONDER</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            QUANTO VOCÊ ESTÁ{" "}
            <span className="text-gradient">DEIXANDO DE GANHAR</span>{" "}
            SEM UMA GESTÃO DE VERDADE?
          </h2>
          <p className="text-muted-foreground mb-4">
            Cada mês sem gestão é um mês de verba queimada, decisão tomada no chute e crescimento que nunca aparece no extrato.{" "}
            <strong className="text-foreground">A DigitalDM não vende tráfego. Vende crescimento como serviço.</strong>
          </p>
          <p className="text-foreground font-semibold mb-10">
            Analisamos dado, decidimos o que cortar, escalamos o que converte e somos responsáveis pelo resultado.{" "}
            <span className="text-primary">Mês a mês. Sem sumir. Sem desculpa.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { v: "R$ 2k", l: "Plano de entrada" },
              { v: "4 Planos", l: "Start ao Scale" },
              { v: "90 dias", l: "Garantia de evolução" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/30 max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-2">GARANTA JÁ SUA VAGA COM O SINAL DE R$ 500</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Esse sinal é <strong className="text-foreground">RISCO ZERO.</strong> Você tem{" "}
              <strong className="text-foreground">7 dias para pedir estorno</strong> direto na plataforma Kiwify, sem burocracia e sem questionamento. Você só tende a sair no{" "}
              <strong className="text-primary">LUCRO</strong>, sem perda alguma.
            </p>
            <Button variant="hero" size="xl" asChild className="w-full">
              <a href={KIWIFY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                QUERO PARAR DE DESPERDIÇAR VERBA
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
