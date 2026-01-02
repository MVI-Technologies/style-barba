import { Button } from "@/components/ui/button";
import { MessageCircle, Scissors, Sparkles } from "lucide-react";
import corteImage from "@/assets/service-corte.jpg";
import barbaImage from "@/assets/service-barba.jpg";

const services = [
  {
    title: "Corte Masculino",
    description: "Corte personalizado de acordo com seu estilo e formato de rosto. Inclui lavagem e finalização.",
    price: "R$ 50",
    duration: "45 min",
    image: corteImage,
    popular: false,
  },
  {
    title: "Barba Tradicional",
    description: "Aparar e modelar a barba com navalha, toalha quente e produtos premium.",
    price: "R$ 40",
    duration: "30 min",
    image: barbaImage,
    popular: false,
  },
  {
    title: "Barba Premium",
    description: "Tratamento completo com esfoliação, hidratação profunda, toalha quente e óleos especiais.",
    price: "R$ 60",
    duration: "45 min",
    image: barbaImage,
    popular: true,
  },
  {
    title: "Corte + Barba",
    description: "Combo completo: corte personalizado + barba tradicional. O pacote mais procurado.",
    price: "R$ 80",
    duration: "1h 15min",
    image: corteImage,
    popular: true,
  },
  {
    title: "Acabamento",
    description: "Retoque no corte e barba para manter o visual impecável entre as visitas.",
    price: "R$ 25",
    duration: "20 min",
    image: corteImage,
    popular: false,
  },
  {
    title: "Tratamento Capilar",
    description: "Hidratação profunda, tratamento anticaspa ou fortalecimento dos fios.",
    price: "R$ 70",
    duration: "40 min",
    image: corteImage,
    popular: false,
  },
];

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Serviços para o <span className="text-gradient">homem moderno</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada serviço é executado com técnica apurada, produtos de alta qualidade 
            e atenção aos detalhes que fazem toda a diferença.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_hsl(40_65%_45%_/_0.1)]"
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold">{service.title}</h3>
                  <span className="text-2xl font-bold text-gradient">{service.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Scissors className="w-4 h-4" />
                    {service.duration}
                  </span>
                  <Button variant="goldOutline" size="sm" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Agendar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Plan CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-secondary via-secondary to-charcoal-light border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Plano Mensal
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Assine e economize
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Cortes ilimitados durante o mês por um valor fixo. 
                Mantenha seu visual sempre impecável sem se preocupar com o preço.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <div className="text-sm text-muted-foreground line-through">De R$ 200/mês</div>
              <div className="text-5xl font-display font-bold text-gradient mb-2">R$ 149</div>
              <div className="text-muted-foreground mb-4">/mês</div>
              <Button variant="gold" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Quero assinar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
