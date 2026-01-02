import { Award, Clock, Heart, Shield } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const features = [
  {
    icon: Award,
    title: "Excelência",
    description: "Técnicas aprimoradas ao longo de anos de prática",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Respeitamos seu tempo com agendamento preciso",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Cada corte é uma obra de arte para nós",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Ambiente seguro e higienizado",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-charcoal-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={productsImage}
                alt="Produtos Premium"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 glass-card p-6 rounded-lg max-w-xs glow-gold">
              <div className="text-4xl font-display font-bold text-gradient mb-2">+10 anos</div>
              <p className="text-muted-foreground">De tradição e experiência em cortes masculinos</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Onde tradição encontra <span className="text-gradient">estilo moderno</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nascemos da paixão por transformar a experiência masculina de cuidados pessoais. 
              Nossa barbearia é mais que um lugar para cortar cabelo — é um espaço onde homens 
              se encontram, relaxam e saem com a confiança renovada.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Com uma equipe de barbeiros especializados e apaixonados pelo que fazem, 
              oferecemos serviços de alta qualidade em um ambiente acolhedor e estiloso. 
              Cada detalhe foi pensado para proporcionar uma experiência única.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="p-2 rounded-md bg-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
