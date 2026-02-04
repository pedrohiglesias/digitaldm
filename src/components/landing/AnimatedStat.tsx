import { useCountUp, parseStatValue } from '@/hooks/useCountUp';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function AnimatedStat({ icon: Icon, value, label }: AnimatedStatProps) {
  const parsed = parseStatValue(value);
  const { ref, displayValue } = useCountUp({
    end: parsed.number,
    duration: 2000,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
  });

  return (
    <div ref={ref} className="flex items-center gap-4 md:justify-center md:px-8">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">{displayValue}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
