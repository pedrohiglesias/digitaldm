import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioEcommerce1 from "@/assets/portfolio-ecommerce-1.png";
import portfolioEcommerce2 from "@/assets/portfolio-ecommerce-2.png";

const portfolioSlides = [
  {
    id: 1,
    image: portfolioEcommerce1,
    title: "Lojas E-commerce",
    description: "Sites de vendas otimizados para conversão com design profissional",
  },
  {
    id: 2,
    image: portfolioEcommerce2,
    title: "Experiência Premium",
    description: "Checkout intuitivo e navegação agradável para seus clientes",
  },
];

const features = [
  "Layouts profissionais",
  "Checkout rápido e intuitivo",
  "Navegação agradável e busca eficiente",
  "Design responsivo",
  "Integração com meios de pagamento",
];

export function EcommercePortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Confira algumas das{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                nossas lojas criadas
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expertise em criação de e-commerce e sites profissionais que convertem visitantes em clientes
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main slide */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50">
              <div className="relative aspect-[16/9] md:aspect-[21/10] overflow-hidden">
                {portfolioSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                ))}

                {/* Slide info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {portfolioSlides[currentSlide].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {portfolioSlides[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Próximo slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolioSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Features grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border/50 text-center hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="rounded-2xl" asChild>
              <a href="#diagnostico">
                Quero Marcar Reunião
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
