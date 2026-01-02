import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Cliente há 3 anos",
    content: "Depois que conheci essa barbearia, não consigo cortar em outro lugar. O atendimento é impecável e os barbeiros realmente entendem o que você quer.",
    rating: 5,
  },
  {
    name: "Rafael Costa",
    role: "Cliente há 1 ano",
    content: "O ambiente é sensacional, os caras são super profissionais e o café é de primeira! Vale cada centavo investido na experiência completa.",
    rating: 5,
  },
  {
    name: "Thiago Oliveira",
    role: "Cliente há 2 anos",
    content: "Minha barba nunca ficou tão bem cuidada. O tratamento premium é incrível, saio de lá me sentindo outro homem. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Marcelo Silva",
    role: "Cliente há 6 meses",
    content: "Descobri a barbearia por indicação de um amigo e virei cliente fiel. O plano mensal é uma economia absurda para quem gosta de manter o corte em dia.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista. Confira alguns depoimentos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-primary">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/50 border border-border flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="text-5xl font-display font-bold text-gradient">4.9</div>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Avaliação média</span>
            </div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-display font-bold">+500</div>
            <span className="text-sm text-muted-foreground">Avaliações no Google</span>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <div className="text-3xl font-display font-bold">98%</div>
            <span className="text-sm text-muted-foreground">Clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
