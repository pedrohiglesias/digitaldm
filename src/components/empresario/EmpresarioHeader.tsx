import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

export function EmpresarioHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("form-diagnostico")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        scrolled ? "border-b border-border/50 py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/empresario" className="flex items-center">
          <img src={logoDigitalDM} alt="Digital DM" className="h-7 md:h-8 w-auto" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#metodo"
            className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Como funciona
          </a>
          <Button
            variant="hero"
            size="lg"
            className="rounded-xl"
            onClick={scrollToForm}
          >
            Solicitar diagnóstico
          </Button>
        </div>
      </div>
    </header>
  );
}
