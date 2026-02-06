import { useState } from "react";
import { MapPin, Star, X, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const videoTestimonials = [
  {
    id: 1,
    company: "Momento Imóveis",
    location: "São José do Rio Preto - SP",
    rating: 5.0,
    videoId: "o1sWFLkzyMI",
  },
  {
    id: 2,
    company: "Mania de Vestir",
    location: "Chapecó - SC",
    rating: 5.0,
    videoId: "W8KcHTC9-ic",
  },
  {
    id: 3,
    company: "New Imóveis",
    location: "Cachoeira do Sul - RS",
    rating: 5.0,
    videoId: "mdaGb-TwNzc",
  },
  {
    id: 4,
    company: "Construtora Alpha",
    location: "Ribeirão Preto - SP",
    rating: 5.0,
    videoId: "3WTRXwKad3U",
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

function VideoCard({ 
  testimonial, 
  onPlay 
}: { 
  testimonial: typeof videoTestimonials[0];
  onPlay: (videoId: string) => void;
}) {
  // Autoplay muted preview - loop silently
  const previewSrc = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=1&loop=1&playlist=${testimonial.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer group">
      {/* Video Preview - Autoplay Muted */}
      <div 
        className="relative aspect-[9/16] overflow-hidden"
        onClick={() => onPlay(testimonial.videoId)}
      >
        <iframe
          src={previewSrc}
          title={`Preview ${testimonial.company}`}
          className="w-full h-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
        
        {/* Click overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Play Button - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
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
  );
}

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              O que nossos{" "}
              <span className="text-gradient">clientes dizem</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja os resultados reais de empresas que transformaram seu marketing 
              com a Digital DM.
            </p>
          </div>

          {/* Video Testimonials Grid - All 4 visible */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {videoTestimonials.map((testimonial) => (
              <VideoCard 
                key={testimonial.id} 
                testimonial={testimonial}
                onPlay={setActiveVideo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-card/80 text-foreground hover:bg-card transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&loop=1`}
                title="Video depoimento"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
