import { ArrowRight, CheckCircle2, XCircle, Target, Zap, FileText, BarChart3, MessageSquare, CalendarDays, ChevronDown, TrendingUp, Eye, Megaphone, HandshakeIcon, Flame, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const encontros = [
  {
    num: "01",
    label: "Encontro 1",
    title: "Diagnóstico Comercial Profundo",
    subtitle: "Entendemos por que sua marca ainda vende abaixo do potencial.",
    items: [
      "Leitura completa da operação atual",
      "Análise do produto campeão e da oferta de entrada",
      "Avaliação da comunicação comercial e dos canais",
      "Coleta de todos os acessos necessários (Meta Ads, Instagram, pixel, WhatsApp)",
      "Identificação dos gargalos reais, sem achismos",
      "Definição do plano de prioridade para os próximos encontros",
    ],
  },
  {
    num: "02",
    label: "Encontro 2",
    title: "Campanha, Criativo e Direção Comercial",
    subtitle: "Colocamos a estrutura de aquisição e comunicação em ordem ao vivo.",
    items: [
      "Ajuste do perfil comercial no Instagram",
      "Estrutura de campanha montada na sessão",
      "Organização de públicos e construção da oferta de entrada",
      "Criativo desenvolvido e direcionado ao vivo",
      "Roteiro de conteúdo com intenção de venda, não só engajamento",
      "Calendário simples e executável para você manter a rotina sozinho",
    ],
  },
  {
    num: "03",
    label: "Encontro 3",
    title: "Conversão, Métricas e Próximo Passo",
    subtitle: "Transformamos a execução em rotina que você toca sozinho.",
    items: [
      "Revisão do que começou a rodar e análise dos primeiros sinais",
      "Ajuste fino ao vivo nas campanhas e criativos",
      "Rotina de métricas simplificada: só o que importa para decidir",
      "Script de atendimento e conversão para o WhatsApp",
      "Plano operacional de 30 a 60 dias",
      "Clareza do próximo nível de crescimento",
    ],
  },
];

const entregaveis = [
  { icon: CalendarDays, title: "Plano de Execução de 30 Dias", desc: "O que fazer, quando e por que cada ação existe." },
  { icon: Target, title: "Estrutura de Campanha Meta Ads", desc: "Conta, pixel, públicos e estrutura configurados para o seu modelo." },
  { icon: FileText, title: "Direção de Criativos por Objetivo", desc: "O que produzir, em qual formato e com qual intenção comercial." },
  { icon: MessageSquare, title: "Script de WhatsApp", desc: "Para atendimento, condução e fechamento de vendas sem improviso." },
  { icon: BarChart3, title: "Mapa de Métricas que Importam", desc: "O que olhar, o que cortar e o que escalar, sem achismo." },
  { icon: Zap, title: "Plano Estratégico de 60 Dias", desc: "Próximos passos definidos para você não ficar perdido depois do programa." },
];

const metodo3c = [
  {
    label: "C1",
    title: "Clareza",
    subtitle: "Descobrimos o que está travando",
    desc: "Produto errado sendo empurrado, comunicação desalinhada, campanha mal montada, criativo fraco ou atendimento sem condução. Sem clareza do gargalo real, qualquer ação é tiro no escuro.",
    icon: Eye,
  },
  {
    label: "C2",
    title: "Campanha",
    subtitle: "Montamos a base de aquisição",
    desc: "Perfil, posicionamento comercial, campanha, criativo, oferta e direcionamento do anúncio. Estrutura para que cada real investido em mídia tenha uma direção clara.",
    icon: Megaphone,
  },
  {
    label: "C3",
    title: "Conversão",
    subtitle: "Organizamos o que fecha a venda",
    desc: "Script, abordagem, ordem da conversa, prova, urgência, rotina e plano de acompanhamento. Porque gerar interesse sem converter é só custo.",
    icon: HandshakeIcon,
  },
];

const resultados = [
  "Você entende qual produto puxar e quando",
  "Para de anunciar sem direção e critério",
  "Cria conteúdo com função comercial real",
  "Melhora a taxa de conversão no WhatsApp",
  "Deixa de agir por feeling e passa a decidir por dado",
  "Sabe exatamente onde está o vazamento da operação",
  "Ganha uma rotina mais simples e mais lucrativa",
  "Para de depender de sorte, indicação ou postagem aleatória",
  "Tem demanda, responde melhor e converte com consistência",
];

const faqs = [
  { q: "Isso funciona para minha marca ou minha loja?", a: "Sim, especialmente para quem vende por WhatsApp e Instagram e precisa organizar oferta, criativos e rotina de campanhas. Moda, varejo e negócios locais são os mercados em que mais atuamos." },
  { q: "Vocês vão executar por mim?", a: "Não. O GPS 360 é para você aprender e executar com direção clara. Se você quer execução total com criativos, tráfego e escala entregues, o caminho é o Acelera 90 Dias." },
  { q: "Preciso ter e-commerce?", a: "Não. Trabalhamos com WhatsApp, Instagram e loja online. Se tiver e-commerce, orientamos estrutura e conversão. Execução completa faz parte do Acelera 90 Dias." },
  { q: "Em quanto tempo sinto resultado?", a: "Você sai do primeiro encontro já com plano de ação. Os resultados dependem da velocidade de execução, mas você nunca vai ficar sem saber o que fazer em seguida." },
  { q: "Eu já tentei tráfego e não funcionou", a: "Você provavelmente tentou tráfego sem estrutura. Não é a mesma coisa. Anúncio sem oferta clara, criativo sem intenção e atendimento sem processo não é tráfego: é desperdício." },
  { q: "Meu problema talvez seja o produto", a: "Pode ser parcialmente. Por isso o primeiro encontro existe: para separar achismo de gargalo real. Você pode estar com o produto certo sendo vendido do jeito errado." },
  { q: "Eu vendo, mas não com consistência", a: "Exatamente. O GPS 360 não é para quem não vende nada. É para quem já tem movimento, mas não tem previsibilidade. Esse é o perfil ideal." },
  { q: "Não sei se agora é o momento", a: "Se você já está girando sem clareza, esse é justamente o momento. Esperar mais um mês no improviso não vai mudar o diagnóstico, vai só atrasar o resultado." },
];

const CTA_URL = "https://pay.kiwify.com.br/OQPKSmn";

export default function Mentoria() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">GPS 360: Estruturação de Vendas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            O Problema Não É Falta de Produto.{" "}
            <span className="text-gradient">É Falta de Estrutura para Vender.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Para marcas e negócios que já perceberam que{" "}
            <strong className="text-foreground">postar, impulsionar e improvisar não sustenta crescimento.</strong>{" "}
            O GPS 360 estrutura sua operação para vender com mais previsibilidade nos próximos 30 dias,
            ajustando oferta, campanha, criativo e operação comercial <strong className="text-foreground">sem depender de improviso.</strong>
          </p>

          {/* Flow badges */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
            {["Clareza", "Campanha", "Conversão"].map((item, i) => (
              <div key={item} className="flex items-center gap-2 sm:gap-4">
                <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">{item}</span>
                {i < 2 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Agitação da Dor */}
      <AgitacaoDorSection />

      {/* Perfil */}
      <PerfilSection />

      {/* Grande Ideia / Método 3C */}
      <Metodo3CSection />

      {/* Encontros */}
      <EncontrosSection />

      {/* Entregáveis */}
      <EntregaveisSection />

      {/* Resultados */}
      <ResultadosSection />

      {/* Investimento */}
      <InvestimentoSection />

      {/* Simulação */}
      <SimulacaoSection />

      {/* Próximo Nível */}
      <ProximoNivelSection />

      {/* Decisão */}
      <DecisaoSection />

      {/* FAQ */}
      <FaqAccordion />

      {/* CTA Final */}
      <CtaFinalSection />

      <Footer />
    </div>
  );
}

function AgitacaoDorSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Agitação da Dor</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Não é falta de vontade.{" "}
          <span className="text-gradient">É FALTA DE DIREÇÃO COMERCIAL.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          A maioria das marcas que fatura abaixo de R$ 30k/mês vive o mesmo ciclo:
        </p>

        <div className="space-y-4 max-w-2xl mx-auto mb-10">
          {[
            "Lança produto SEM CLAREZA DO QUE REALMENTE VENDE",
            "Posta sem saber o que está PUXANDO COMPRA DE VERDADE",
            "Impulsiona sem campanha estruturada, DINHEIRO QUEIMADO SEM CRITÉRIO",
            "Atende no WhatsApp SEM PROCESSO DEFINIDO",
            "Depende de PICOS DE VENDA em vez de consistência",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground/90">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-muted-foreground text-sm">
            E o pior: como sempre existe movimento, você acha que está "quase acertando".
            Mas não está. <strong className="text-foreground">VOCÊ ESTÁ OPERANDO SEM ESTRUTURA.</strong>
          </p>
          <Card className="border-destructive/30 max-w-xl mx-auto">
            <CardContent className="p-6 text-center">
              <p className="font-bold text-foreground">O PROBLEMA NÃO É SUA MARCA SER PEQUENA.</p>
              <p className="text-destructive font-bold mt-1">O PROBLEMA É ELA AINDA ESTAR VENDENDO NO IMPROVISO.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PerfilSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Fit Ideal</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          PARA <span className="text-gradient">VOCÊ?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Alinhamento honesto define resultado real. Leia com atenção.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">✅ ESSE É O SEU MOMENTO</h3>
              <ul className="space-y-3">
                {[
                  "Você fatura até R$ 30k/mês",
                  "Vende por Instagram, WhatsApp, loja online ou modelo híbrido",
                  "Tem produto validado, mas sente baixa previsibilidade",
                  "Quer entender por que sua operação não converte como deveria",
                  "Está disposto a executar entre os encontros",
                  "Quer parar de depender de tentativa e erro",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-destructive">❌ NÃO É PARA VOCÊ</h3>
              <ul className="space-y-3">
                {[
                  "Quer resultado sem aplicar nada",
                  "Quer terceirizar tudo sem participar do processo",
                  "Ainda não tem operação mínima rodando",
                  "Busca fórmula mágica em vez de estrutura",
                  "Acredita que vender é só postar mais",
                  "Não consegue dedicar tempo para organizar a casa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Metodo3CSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">O Mecanismo</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          O Método 3C que Usamos para{" "}
          <span className="text-gradient">Organizar Sua Estrutura de Vendas</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Três blocos que trabalham juntos para transformar sua operação em algo previsível.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {metodo3c.map((item) => (
            <Card key={item.label} className="border-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{item.label}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                <h4 className="font-semibold text-sm mb-3">{item.subtitle}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <strong className="text-foreground">Você não sai com motivação.</strong> Você sai com estrutura aplicável —
          decisões operacionais para aplicar imediatamente na sua marca.
        </p>
      </div>
    </section>
  );
}

function EncontrosSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">O Programa</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          3 Encontros. <span className="text-gradient">3 Fases de Estruturação.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Cada sessão tem começo, meio e fim. Você sai com ação clara e estrutura montada, sempre.
        </p>

        <div className="space-y-8">
          {encontros.map((e) => (
            <Card key={e.num} className="border-border/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                    {e.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary font-semibold mb-1">{e.label}</p>
                    <h3 className="text-lg md:text-xl font-bold mb-1">{e.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{e.subtitle}</p>
                    <ul className="space-y-2">
                      {e.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EntregaveisSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Entregáveis</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          O Que Você <span className="text-gradient">Leva na Mão</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Não é teoria. São ativos operacionais prontos para aplicar imediatamente.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {entregaveis.map((item, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          <strong className="text-foreground">Não é teoria.</strong> São decisões operacionais para você aplicar imediatamente na sua marca.
        </p>
      </div>
    </section>
  );
}

function ResultadosSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Resultado Prático</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          No Fim, o Que <span className="text-gradient">Muda na Sua Marca?</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {resultados.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestimentoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Investimento</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Quanto Custa Continuar <span className="text-gradient">Sem Estrutura?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Cada campanha sem critério, cada criativo sem função, cada atendimento que não fecha: tem custo. E esse custo é maior do que o investimento para organizar a operação.
        </p>

        <Card className="border-primary/30 max-w-lg mx-auto mb-10">
          <CardContent className="p-8 text-center">
            <p className="text-sm text-muted-foreground mb-1">Valor Total</p>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">R$ 2.997</p>
            <p className="text-sm text-muted-foreground mb-6">Pagamento único sem mensalidade</p>
            <div className="border-t border-border/50 pt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Encontros de 1 a 2h</p>
              </div>
              <div>
                <p className="text-xl font-bold">Online</p>
                <p className="text-xs text-muted-foreground">Formato</p>
              </div>
              <div>
                <p className="text-xl font-bold">100%</p>
                <p className="text-xs text-muted-foreground">Mão na massa</p>
              </div>
            </div>
            <Button variant="hero" size="xl" className="mt-6 w-full" asChild>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Quero Organizar Minha Marca AGORA
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">💡 O Custo de Não Agir</h4>
              <p className="text-xs text-muted-foreground">Cada mês sem estrutura é um mês de verba desperdiçada, produto certo com oferta errada e vendas que não vieram. O GPS 360 se paga na primeira campanha executada com método.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">📦 O Que Está Incluído</h4>
              <p className="text-xs text-muted-foreground">3 encontros de 1 a 2 horas com a equipe DigitalDM, tarefas práticas entre as sessões, todos os entregáveis documentados e plano de próximos passos ao final.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">🚀 O Próximo Nível</h4>
              <p className="text-xs text-muted-foreground">Para quem quer execução completa com criativos, tráfego e escala entregues pela DigitalDM, o caminho é o <strong className="text-foreground">Acelera 90 Dias.</strong></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SimulacaoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold text-center mb-2">🧮 A Matemática da Decisão</p>
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
          R$ 2.997 parece alto até você ver{" "}
          <span className="text-gradient">os números do outro lado.</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
          Com ticket médio de R$ 150, comum em moda, acessórios e varejo, veja a conta real:
        </p>

        {/* Exemplos */}
        <div className="space-y-6 max-w-3xl mx-auto mb-12">
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <p className="text-sm font-bold text-primary mb-2">📦 EXEMPLO 1: 20 VENDAS PAGAM TUDO</p>
              <p className="text-sm text-muted-foreground">
                20 vendas × R$ 150 = <strong className="text-foreground">R$ 3.000</strong> e o GPS 360 está coberto.
                O restante do mês é <strong className="text-foreground">lucro puro.</strong>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Isso representa menos de 1 venda por dia. Quem já tem produto validado já está nesse ritmo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm font-bold text-primary mb-2">📈 EXEMPLO 2: +1 VENDA/DIA JÁ VIRA O JOGO</p>
              <p className="text-sm text-muted-foreground">
                Se o GPS 360 te fizer converter <strong className="text-foreground">1 cliente a mais por dia</strong>, em 20 dias você já recuperou o investimento inteiro.
                Do dia 21 em diante, <strong className="text-foreground">tudo que entrar é lucro sobre o método.</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardContent className="p-6">
              <p className="text-sm font-bold text-destructive mb-2">🚨 EXEMPLO 3: O CUSTO DE CONTINUAR SEM MÉTODO</p>
              <p className="text-sm text-muted-foreground">
                Cada mês sem estrutura: R$ 500 em tráfego sem resultado + R$ 300 em criativo que não converte + tempo perdido ={" "}
                <strong className="text-foreground">R$ 800 desperdiçados por mês.</strong>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Em 4 meses: <strong className="text-foreground">R$ 3.200 jogados fora</strong>, mais do que o GPS 360 inteiro, sem nenhuma estrutura construída.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 100</p>
              <p className="text-sm text-muted-foreground">por dia</p>
              <p className="text-xs text-muted-foreground mt-2">R$ 2.997 ÷ 30 dias. Menos que 1 peça de roupa.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">20</p>
              <p className="text-sm text-muted-foreground">vendas de R$ 150 ⭐</p>
              <p className="text-xs text-muted-foreground mt-2">GPS 360 coberto. Resto do mês é lucro.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-primary">R$ 999</p>
              <p className="text-sm text-muted-foreground">por sessão</p>
              <p className="text-xs text-muted-foreground mt-2">3 encontros que mudam sua operação.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Se você continuar rodando tráfego, conteúdo e atendimento sem método,
            vai continuar pagando para aprender da forma mais cara possível:{" "}
            <strong className="text-foreground">errando no próprio caixa.</strong>
          </p>
          <p className="text-foreground font-semibold">
            Se sua marca já tem movimento mas não tem previsibilidade, o GPS 360 é exatamente o que falta.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button variant="hero" size="xl" asChild>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Quero Organizar Minha Marca AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProximoNivelSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Próximo Nível</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          E Depois do <span className="text-gradient">GPS 360?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">🎯 Executar Sozinho com Direção</h4>
              <p className="text-sm text-muted-foreground">Você sai com estrutura completa para operar de forma independente com clareza de rota.</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">📊 Acompanhamento Mensal</h4>
              <p className="text-sm text-muted-foreground">Para quem quer continuar evoluindo com suporte estratégico contínuo. A Gestão Mensal é o próximo passo natural.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">🚀 Execução Completa: Acelera 90 Dias</h4>
              <p className="text-sm text-muted-foreground">Para quem quer a DigitalDM executando tudo: site, CRM, Agent IA, criativos, tráfego e escala integrados.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function DecisaoSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">A Decisão</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          VAI CONTINUAR TENTANDO ACERTAR NA RAÇA{" "}
          <span className="text-gradient">OU VAI ORGANIZAR DE VEZ?</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-muted-foreground text-center">
            Todo mês sem estrutura parece normal porque o negócio continua de pé. Mas por trás disso existem perdas silenciosas:
          </p>
          <div className="space-y-3 max-w-md mx-auto">
            {[
              "Campanha que não converte",
              "Criativo que não puxa compra",
              "Atendimento que não fecha",
              "Produto certo sendo vendido do jeito errado",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                <p className="text-sm text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">Você não precisa de mais uma ideia.</p>
          <p className="text-center font-bold text-foreground">
            Precisa de uma estrutura comercial simples, direta e executável.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2 text-center">Dúvidas</p>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Respostas <span className="text-gradient">Diretas</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card key={i} className="border-border/50 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
                <span className="font-semibold text-sm">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinalSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className={`container mx-auto px-4 max-w-4xl relative z-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm text-primary font-semibold mb-2">⏳ A Decisão Que Muda Tudo</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Enquanto Você Ainda Está Pensando,{" "}
          <span className="text-gradient">SEU CONCORRENTE JÁ ESTÁ AGINDO.</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          Você já sabe que o problema não é produto. Não é esforço. Não é dedicação.
          É que <strong className="text-foreground">sem estrutura, sem método e sem direção comercial clara, você vai continuar no mesmo lugar.</strong>
        </p>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Cada mês que passa é um mês de campanha errada, criativo que não converte e verba que não volta.{" "}
          <strong className="text-foreground">O GPS 360 não é uma despesa. É o atalho que você deveria ter tomado antes.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "R$ 100", sub: "por dia" },
            { label: "3", sub: "Encontros 1:1" },
            { label: "30 dias", sub: "Para estruturar" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>

        <Button variant="hero" size="xl" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Quero Organizar Minha Marca AGORA!
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
