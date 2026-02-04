import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  startOnView?: boolean;
}

export function useCountUp({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  startOnView = true 
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  const displayValue = `${prefix}${count}${suffix}`;

  return { ref, displayValue, count };
}

// Parse a stat value like "+200", "42%", "24/7", "100%", "R$100M+" into components
export function parseStatValue(value: string): { 
  prefix: string; 
  number: number; 
  suffix: string;
  isSpecial: boolean;
} {
  // Handle special case "24/7"
  if (value === "24/7") {
    return { prefix: "", number: 24, suffix: "/7", isSpecial: true };
  }

  // Handle currency format like "R$100M+"
  const currencyMatch = value.match(/^(R\$|US\$|\$|€|£)(\d+)(.*)$/);
  if (currencyMatch) {
    return {
      prefix: currencyMatch[1],
      number: parseInt(currencyMatch[2], 10),
      suffix: currencyMatch[3],
      isSpecial: false
    };
  }

  // Match patterns like "+200", "42%", "100%", "600+"
  const match = value.match(/^([+\-]?)(\d+)(.*)$/);
  
  if (match) {
    return {
      prefix: match[1],
      number: parseInt(match[2], 10),
      suffix: match[3],
      isSpecial: false
    };
  }

  // Fallback
  return { prefix: "", number: 0, suffix: value, isSpecial: true };
}
