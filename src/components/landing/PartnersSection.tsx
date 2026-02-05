import jrPortas from "@/assets/partners/jr-portas.png";
import calcadosNovoHamburgo from "@/assets/partners/calcados-novo-hamburgo.png";
import mercadoCalcado from "@/assets/partners/mercado-calcado.png";
import donnaMoca from "@/assets/partners/donna-moca.png";
import hyorrana from "@/assets/partners/hyorrana.png";
import lustShoes from "@/assets/partners/lust-shoes.png";
import maniaVestir from "@/assets/partners/mania-vestir.png";

const partners = [
  { name: "JR Portas Gaspar", logo: jrPortas },
  { name: "Calçados Novo Hamburgo", logo: calcadosNovoHamburgo },
  { name: "Mercado do Calçado", logo: mercadoCalcado },
  { name: "Donna Moça", logo: donnaMoca },
  { name: "Hyorrana", logo: hyorrana },
  { name: "Lust Shoes", logo: lustShoes },
  { name: "Mania de Vestir", logo: maniaVestir },
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
        <div className="flex animate-scroll items-center">
          {/* Triple the partners for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
