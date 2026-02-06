import { useCountUp, parseStatValue } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: "120+", label: "Empresas Atendidas" },
  { value: "1200+", label: "E-commerces Atendidos" },
  { value: "R$12M+", label: "Reais Gerenciados" },
  { value: "15+", label: "Anos de Experiência" },
];

function AnimatedNumber({ value, label, delay }: { value: string; label: string; delay: number }) {
  const parsed = parseStatValue(value);
  const { ref, displayValue } = useCountUp({
    end: parsed.number,
    duration: 2000,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
  });

  return (
    <div 
      ref={ref} 
      className="text-center px-8 opacity-0 translate-y-4 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,6%)] via-[hsl(220,30%,8%)] to-[hsl(220,25%,6%)]" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {isVisible && stats.map((stat, index) => (
            <AnimatedNumber key={index} value={stat.value} label={stat.label} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
