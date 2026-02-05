import { 
  Home, 
  MessageSquare, 
  Bot, 
  LayoutList, 
  Calendar, 
  Search, 
  Users, 
  Link, 
  Settings, 
  LogOut,
  Phone,
  Send,
  Zap,
  Radio,
  TrendingUp,
  Star,
  Clock,
  ChevronDown,
  RefreshCw
} from "lucide-react";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: MessageSquare, label: "Conversas" },
  { icon: Bot, label: "Agente de IA" },
  { icon: LayoutList, label: "CRM" },
  { icon: Calendar, label: "Agendamentos" },
  { icon: Search, label: "Prospectar" },
  { icon: Users, label: "Contatos" },
  { icon: Link, label: "Conexão" },
  { icon: Settings, label: "Configurações" },
];

const statusCards = [
  { 
    icon: Phone, 
    label: "WhatsApp", 
    value: "Conectado", 
    sub: "Sistema ativo",
    status: "online",
    color: "bg-green-500/10 text-green-600"
  },
  { 
    icon: Send, 
    label: "Disparo", 
    value: "Inativo", 
    sub: "Nenhum ativo",
    status: "idle",
    color: "bg-blue-500/10 text-blue-600"
  },
  { 
    icon: Zap, 
    label: "Créditos", 
    value: "30.000", 
    sub: "Disponíveis",
    status: "idle",
    color: "bg-amber-500/10 text-amber-600"
  },
  { 
    icon: Radio, 
    label: "Disparo Direto", 
    value: "Inativo", 
    sub: "0 enviados",
    status: "idle",
    color: "bg-slate-500/10 text-slate-600"
  },
];

const metrics = [
  { value: "R$ 127K", label: "Receita Ganha", sub: "2.3% conversão", color: "text-green-600" },
  { value: "R$ 0", label: "Receita Perdida", sub: "0% perda", color: "text-red-500" },
  { value: "R$ 331", label: "Em Aberto", sub: "Pipeline ativo", color: "text-blue-600" },
  { value: "R$ 1.4K", label: "Ticket Médio", sub: "Vendas ganhas", color: "text-purple-600" },
  { value: "34.2%", label: "Conversão", sub: "Taxa de ganho", color: "text-amber-600" },
  { value: "135", label: "Novas", sub: "Negociações criadas", color: "text-slate-700" },
  { value: "138", label: "Movimentadas", sub: "No período", color: "text-slate-700" },
];

const stats = [
  { value: "135", label: "Negociações" },
  { value: "127", label: "Contatos" },
  { value: "10", label: "Ações" },
  { value: "4.3", label: "Média/Dia" },
  { value: "29.5K", label: "Créditos IA", accent: true },
];

const topSellers = [
  { rank: 1, name: "Maria Silva", neg: 93, won: 28, value: "R$ 42K" },
  { rank: 2, name: "João Santos", neg: 26, won: 22, value: "R$ 35K" },
  { rank: 3, name: "Ana Costa", neg: 25, won: 19, value: "R$ 28K" },
];

export function DashboardPreview() {
  return (
    <div className="flex w-full h-full min-h-[500px] bg-[#f5f7fb] rounded-lg overflow-hidden text-[#0f172a] text-xs">
      {/* Sidebar */}
      <aside className="w-56 bg-gradient-to-b from-[#0b1426] to-[#0e1a33] text-[#dbe6ff] p-3 flex flex-col shrink-0">
        {/* Brand */}
        <div className="flex items-center justify-center px-2 py-3 mb-2">
          <img src={logoDigitalDM} alt="DigitalDM" className="h-5 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a 
              key={i}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                item.active 
                  ? "bg-white/10 text-[#dbe6ff]" 
                  : "text-[#dbe6ff]/65 hover:bg-white/5 hover:text-[#dbe6ff]"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-xs font-bold">
              U
            </div>
            <div>
              <div className="font-semibold text-xs">Usuário</div>
              <div className="text-[10px] text-[#dbe6ff]/65">Administrador</div>
            </div>
          </div>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 px-3 py-2 text-[#dbe6ff]/65 hover:text-[#dbe6ff] text-xs mt-1"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto">
        {/* Topbar */}
        <header className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-[#0f172a] m-0">Dashboard</h1>
            <p className="text-xs text-[#64748b] mt-0.5">Visão geral do seu negócio</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 h-8 px-3 rounded-lg border border-[#e6edf7] bg-white text-xs text-[#334155]">
              Últimos 30 dias
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="w-8 h-8 rounded-lg border border-[#e6edf7] bg-white flex items-center justify-center text-[#3b4a66]">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {statusCards.map((card, i) => (
            <article key={i} className="bg-white rounded-xl border border-[#e6edf7] p-3">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-3.5 h-3.5" />
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-full border ${
                  card.status === "online" 
                    ? "text-green-600 bg-green-500/10 border-green-500/20" 
                    : "text-[#64748b] bg-slate-100 border-[#e6edf7]"
                }`}>
                  {card.status === "online" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />}
                  {card.status === "online" ? "Online" : "Inativo"}
                </span>
              </div>
              <div className="text-[10px] text-[#64748b]">{card.label}</div>
              <div className="font-bold text-sm mt-0.5">{card.value}</div>
              <div className="text-[10px] text-[#64748b]">{card.sub}</div>
            </article>
          ))}
        </div>

        {/* Performance Section */}
        <section className="bg-white rounded-xl border border-[#e6edf7] p-3 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#64748b]" />
            <h2 className="text-xs font-semibold m-0">Desempenho de Vendas</h2>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {metrics.map((m, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-lg p-2 text-center">
                <div className={`font-bold text-sm ${m.color}`}>{m.value}</div>
                <div className="text-[10px] text-[#64748b] mt-0.5">{m.label}</div>
                <div className="text-[9px] text-[#94a3b8]">{m.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-5 gap-3 mb-3">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#e6edf7] p-3 text-center">
              <div className={`font-bold text-lg ${s.accent ? "text-purple-600" : "text-[#0f172a]"}`}>
                {s.value}
              </div>
              <div className="text-[10px] text-[#64748b]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Top Sellers */}
          <article className="bg-white rounded-xl border border-[#e6edf7] p-3">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-amber-500" />
              <h2 className="text-xs font-semibold m-0">Top Vendedores</h2>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-5 gap-2 text-[10px] text-[#64748b] font-medium pb-1 border-b border-[#e6edf7]">
                <div>#</div>
                <div>Vendedor</div>
                <div className="text-right">Neg.</div>
                <div className="text-right">Ganhas</div>
                <div className="text-right">Valor</div>
              </div>
              {topSellers.map((seller) => (
                <div key={seller.rank} className="grid grid-cols-5 gap-2 text-[10px] py-1">
                  <div className="text-amber-600 font-semibold">{seller.rank}</div>
                  <div>{seller.name}</div>
                  <div className="text-right">{seller.neg}</div>
                  <div className="text-right text-blue-600">{seller.won}</div>
                  <div className="text-right font-medium">{seller.value}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Conversions */}
          <article className="bg-white rounded-xl border border-[#e6edf7] p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#64748b]" />
                <h2 className="text-xs font-semibold m-0">Conversões por Regra</h2>
              </div>
              <span className="text-[10px] text-[#64748b]">1 conversões | 0.8% taxa</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2 py-0.5 rounded bg-green-500 text-white font-medium">Vendido!</span>
                <span className="text-[10px] text-green-600">1 (100%)</span>
              </div>
              <div className="h-1.5 bg-[#e6edf7] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }} />
              </div>
              <div className="flex items-center justify-between text-[9px] text-[#94a3b8]">
                <div>
                  <div>03/01, 00:32</div>
                  <div>Palavras: "eu comprei" • Movido para Qualificação</div>
                </div>
                <div>Lucas Almeida</div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
