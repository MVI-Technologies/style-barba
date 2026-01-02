import { Button } from "@/components/ui/button";
import { MessageCircle, Scissors } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barbearia Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-up">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Barbearia Premium</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Mais que um corte.
            <br />
            <span className="text-gradient">Um estilo.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Tradição, técnica e atitude em cada detalhe. 
            Experimente o que há de melhor em barbearia masculina.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="gold" 
              size="xl" 
              className="group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button 
              variant="goldOutline" 
              size="xl"
              asChild
            >
              <a href="#servicos">
                Ver Serviços
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">5000+</div>
              <div className="text-sm text-muted-foreground mt-1">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">4.9</div>
              <div className="text-sm text-muted-foreground mt-1">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
