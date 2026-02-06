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
    <div className="flex w-full h-full min-h-[280px] md:min-h-[400px] bg-[#f5f7fb] rounded-lg overflow-hidden text-[#0f172a] text-[8px] md:text-[10px] scale-[0.85] md:scale-100 origin-top-left">
      {/* Sidebar - Hidden on mobile, compact on tablet */}
      <aside className="hidden sm:flex w-32 md:w-44 bg-gradient-to-b from-[#0b1426] to-[#0e1a33] text-[#dbe6ff] p-2 md:p-3 flex-col shrink-0">
        {/* Brand */}
        <div className="flex items-center justify-center px-1 py-2 mb-1">
          <img src={logoDigitalDM} alt="DigitalDM" className="h-3 md:h-4 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5">
          {navItems.slice(0, 6).map((item, i) => (
            <a 
              key={i}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[8px] md:text-[9px] transition-colors ${
                item.active 
                  ? "bg-white/10 text-[#dbe6ff]" 
                  : "text-[#dbe6ff]/65 hover:bg-white/5 hover:text-[#dbe6ff]"
              }`}
            >
              <item.icon className="w-3 h-3" />
              <span className="hidden md:inline">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-2 md:p-3 overflow-hidden">
        {/* Topbar */}
        <header className="flex items-start justify-between mb-2 md:mb-3">
          <div>
            <h1 className="text-sm md:text-base font-bold text-[#0f172a] m-0">Dashboard</h1>
            <p className="text-[8px] md:text-[9px] text-[#64748b] mt-0.5">Visão geral do seu negócio</p>
          </div>
        </header>

        {/* Status Cards - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2 mb-2">
          {statusCards.slice(0, 4).map((card, i) => (
            <article key={i} className="bg-white rounded-lg border border-[#e6edf7] p-1.5 md:p-2">
              <div className="flex items-center gap-1 mb-1">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-2.5 h-2.5 md:w-3 md:h-3" />
                </div>
                <span className={`text-[7px] md:text-[8px] px-1 py-0.5 rounded-full ${
                  card.status === "online" 
                    ? "text-green-600 bg-green-500/10" 
                    : "text-[#64748b] bg-slate-100"
                }`}>
                  {card.status === "online" ? "On" : "Off"}
                </span>
              </div>
              <div className="font-bold text-[10px] md:text-xs">{card.value}</div>
              <div className="text-[7px] md:text-[8px] text-[#64748b]">{card.label}</div>
            </article>
          ))}
        </div>

        {/* Performance Section - Simplified */}
        <section className="bg-white rounded-lg border border-[#e6edf7] p-2 mb-2">
          <div className="flex items-center gap-1 mb-2">
            <TrendingUp className="w-3 h-3 text-[#64748b]" />
            <h2 className="text-[9px] md:text-[10px] font-semibold m-0">Desempenho de Vendas</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-1">
            {metrics.slice(0, 4).map((m, i) => (
              <div key={i} className="bg-[#f8fafc] rounded p-1 text-center">
                <div className={`font-bold text-[9px] md:text-[10px] ${m.color}`}>{m.value}</div>
                <div className="text-[7px] md:text-[8px] text-[#64748b] truncate">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Row - Compact */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5 mb-2">
          {stats.slice(0, 3).map((s, i) => (
            <div key={i} className="bg-white rounded-lg border border-[#e6edf7] p-1.5 text-center">
              <div className={`font-bold text-xs md:text-sm ${s.accent ? "text-purple-600" : "text-[#0f172a]"}`}>
                {s.value}
              </div>
              <div className="text-[7px] md:text-[8px] text-[#64748b] truncate">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Top Sellers - Compact */}
        <article className="bg-white rounded-lg border border-[#e6edf7] p-2 hidden sm:block">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-amber-500" />
            <h2 className="text-[9px] md:text-[10px] font-semibold m-0">Top Vendedores</h2>
          </div>
          <div className="space-y-1">
            {topSellers.slice(0, 2).map((seller) => (
              <div key={seller.rank} className="flex items-center justify-between text-[8px] py-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600 font-semibold">{seller.rank}</span>
                  <span className="truncate max-w-[60px]">{seller.name}</span>
                </div>
                <span className="font-medium text-green-600">{seller.value}</span>
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
