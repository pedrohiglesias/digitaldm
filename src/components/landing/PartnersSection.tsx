const partners = [
  { name: "Hotmart", color: "text-orange-500" },
  { name: "Braip", color: "text-blue-500" },
  { name: "Eduzz", color: "text-green-500" },
  { name: "Kirvano", color: "text-foreground" },
  { name: "Kiwify", color: "text-green-400" },
  { name: "Monetizze", color: "text-green-500" },
  { name: "PerfectPay", color: "text-blue-400" },
  { name: "Ticto", color: "text-primary" },
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-card/30 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm">
          Empresas parceiras e clientes
        </p>
      </div>
      
      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex animate-scroll">
          {/* First set */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <span className={`text-xl md:text-2xl font-bold ${partner.color} opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap`}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
