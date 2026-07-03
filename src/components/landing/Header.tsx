import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const navLinks = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#trafego", label: "Tráfego Pago" },
  { href: "#ecommerce", label: "Criação de E-commerce" },
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
          ? "bg-background border-b border-border/50 py-3"
          : "bg-background py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logoDigitalDM} 
              alt="Digital DM" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
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
          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <a href="https://app.dmia.net.br/" target="_blank" rel="noopener noreferrer">
                Entrar na DM IA
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">Fale conosco</a>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <a href="#" className="flex items-center">
              <img 
                src={logoDigitalDM} 
                alt="Digital DM" 
                className="h-7 w-auto"
              />
            </a>
            
            {/* Hamburger Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 p-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2 px-3 rounded-xl hover:bg-accent/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border/50">
                  <Button variant="outline" size="lg" className="w-full rounded-xl" asChild>
                    <a href="https://app.dmia.net.br/" target="_blank" rel="noopener noreferrer">
                      Entrar na DM IA
                    </a>
                  </Button>
                  <Button variant="hero" size="lg" className="w-full rounded-xl" asChild>
                    <a href="https://wa.me/554991002472" target="_blank" rel="noopener noreferrer">Fale conosco</a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
