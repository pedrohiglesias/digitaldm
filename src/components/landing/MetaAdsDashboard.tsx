import { TrendingUp } from "lucide-react";

const campaigns = [
  { name: "Acme Auto Body", clicks: 158, progress: 100 },
  { name: "Acme Dental", clicks: 144, progress: 91 },
  { name: "Acme Law", clicks: 141, progress: 89 },
  { name: "default", clicks: 141, progress: 89 },
];

const metrics = [
  { label: "Clicks", value: "1,633" },
  { label: "Impressions", value: "302 K" },
  { label: "Reach", value: "248 K" },
  { label: "Amount Spent", value: "R$ 1.270" },
  { label: "Average CPC", value: "R$ 3.00" },
];

const secondaryMetrics = [
  { label: "Average CPM", value: "R$ 0.99" },
  { label: "CTR", value: "7.23%" },
  { label: "Page Likes", value: "244" },
  { label: "Post Reactions", value: "216" },
  { label: "Cost Per Like", value: "R$ 34.50" },
];

export function MetaAdsDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden text-[#1a1a2e] w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="w-6 h-6 bg-[#1877f2] rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">f</span>
        </div>
        <span className="font-semibold text-sm">Meta Ads</span>
        <nav className="flex gap-4 ml-4 text-xs text-gray-500">
          <span className="text-[#1877f2] border-b-2 border-[#1877f2] pb-1">Campaigns</span>
          <span>Ad Sets</span>
          <span>Ads</span>
          <span>Demographics</span>
        </nav>
      </div>

      <div className="p-4 space-y-4">
        {/* Top Row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Chart */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Clicks</span>
              <span className="text-xs font-semibold">2,814</span>
            </div>
            <div className="h-16 flex items-end gap-1">
              {[75, 85, 95, 80, 100, 90, 105, 110, 95, 100, 115, 108].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#1877f2] rounded-t opacity-70"
                  style={{ height: `${h * 0.5}%` }}
                />
              ))}
            </div>
          </div>

          {/* Campaigns List */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <span className="text-xs text-gray-500 mb-2 block">Clicks</span>
            <div className="space-y-1.5">
              {campaigns.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="text-[10px] text-gray-600 truncate">{c.name}</div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#1877f2] rounded-full" 
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-[10px] font-medium">{c.clicks}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <span className="text-xs text-gray-500 mb-2 block">Publisher Platforms</span>
            <div className="flex items-center gap-2">
              <div className="relative w-14 h-14">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#a3d977" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#c4e3a3" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-25" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#7dd3fc" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-50" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#1877f2" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-75" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">358</span>
                  <span className="text-[8px] text-gray-500">Clicks</span>
                </div>
              </div>
              <div className="text-[9px] space-y-1">
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#a3d977]" /> Instagram 92</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#c4e3a3]" /> Audience 91</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#7dd3fc]" /> Messenger 89</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#1877f2]" /> Facebook 86</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-5 gap-2">
          {metrics.map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-2 border border-gray-100 text-center">
              <div className="text-[9px] text-gray-500">{m.label}</div>
              <div className="text-sm font-bold text-[#1877f2]">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {secondaryMetrics.map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-2 border border-gray-100 text-center">
              <div className="text-[9px] text-gray-500">{m.label}</div>
              <div className="text-sm font-bold text-[#1a1a2e]">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
