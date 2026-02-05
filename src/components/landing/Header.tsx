import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const navLinks = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#trafego", label: "Tráfego Pago" },
  { href: "#portfolio", label: "Criação de E-commerce" },
  { href: "#automacao", label: "Cadência Infinita" },
  { href: "#dm-ia", label: "DM IA" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logoDigitalDM} 
              alt="Digital DM" 
              className="h-6 md:h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <a href="https://app.dmia.com.br" target="_blank" rel="noopener noreferrer">
                Entrar na DM IA
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="#diagnostico">Agendar Diagnóstico</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" size="lg" className="mt-2" asChild>
                <a href="https://app.dmia.com.br" target="_blank" rel="noopener noreferrer">
                  Entrar na DM IA
                </a>
              </Button>
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="#diagnostico">Agendar Diagnóstico</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
