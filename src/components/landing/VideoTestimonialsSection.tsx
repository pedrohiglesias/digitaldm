import { Play, MapPin, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videoTestimonials = [
  {
    id: 1,
    company: "Momento Imóveis",
    location: "São José do Rio Preto - SP",
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    company: "Porto House",
    location: "Porto Feliz - SP",
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    company: "New Imóveis",
    location: "Cachoeira do Sul - RS",
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
  },
  {
    id: 4,
    company: "Construtora Alpha",
    location: "Ribeirão Preto - SP",
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
        />
      ))}
      <span className="text-sm text-muted-foreground ml-2">
        {rating.toFixed(1)} / 5.0
      </span>
    </div>
  );
}

export function VideoTestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              O que nossos{" "}
              <span className="text-gradient">clientes dizem</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja os resultados reais de empresas que transformaram seu marketing 
              com a Digital DM.
            </p>
          </div>

          {/* Video Testimonials Carousel */}
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {videoTestimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer group">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={testimonial.thumbnail}
                          alt={`Depoimento ${testimonial.company}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>

                        {/* Top Label */}
                        <div className="absolute top-3 left-3 right-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-foreground/80 truncate">
                              depoimento-cliente
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg mb-2">
                          {testimonial.company}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{testimonial.location}</span>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
