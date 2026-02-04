import { useCountUp, parseStatValue } from '@/hooks/useCountUp';

const stats = [
  { value: "600+", label: "Negócios Atendidos" },
  { value: "14+", label: "Anos de Experiência" },
  { value: "R$100M+", label: "Gerados para Clientes" },
];

function AnimatedNumber({ value, label }: { value: string; label: string }) {
  const parsed = parseStatValue(value);
  const { ref, displayValue } = useCountUp({
    end: parsed.number,
    duration: 2000,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
  });

  return (
    <div ref={ref} className="text-center px-8">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-[hsl(220,20%,8%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <AnimatedNumber key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
