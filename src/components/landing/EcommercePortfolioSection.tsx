import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, LayoutGrid, CreditCard, Search, Smartphone, Wallet, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import portfolioAmazonas from "@/assets/portfolio-amazonas.jpg";
import portfolioAnaSouza from "@/assets/portfolio-anasouza.png";
import portfolioFlexEstilo from "@/assets/portfolio-flexestilo.png";
import portfolioDiulli from "@/assets/portfolio-diulli.png";

const portfolioSlides = [
  {
    id: 1,
    image: portfolioAmazonas,
    title: "Amazonas Fashion",
    description: "E-commerce de moda com design moderno e navegação intuitiva",
  },
  {
    id: 2,
    image: portfolioAnaSouza,
    title: "Ana Souza",
    description: "Loja virtual elegante com experiência de compra premium",
  },
  {
    id: 3,
    image: portfolioFlexEstilo,
    title: "Flex Estilo",
    description: "E-commerce responsivo com foco em conversão e usabilidade",
  },
  {
    id: 4,
    image: portfolioDiulli,
    title: "Diulli",
    description: "Plataforma de vendas sofisticada com identidade visual marcante",
  },
];

const features = [
  { icon: LayoutGrid, label: "Layouts profissionais" },
  { icon: CreditCard, label: "Checkout rápido e intuitivo" },
  { icon: Search, label: "Busca Eficiente" },
  { icon: Smartphone, label: "Design responsivo" },
  { icon: Wallet, label: "Integração de pagamento" },
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
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Briefcase className="w-4 h-4 mr-2" />
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Confira algumas das{" "}
              <span className="text-gradient">nossas lojas criadas</span>
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
                className="p-4 py-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/50 transition-colors flex flex-col items-center justify-center gap-3"
              >
                <feature.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
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
