import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Cliente há 3 anos",
    content:
      "Depois que conheci essa barbearia, não consigo cortar em outro lugar. O atendimento é impecável e os barbeiros realmente entendem o que você quer.",
    rating: 5,
  },
  {
    name: "Rafael Costa",
    role: "Cliente há 1 ano",
    content:
      "O ambiente é sensacional, os caras são super profissionais e o café é de primeira! Vale cada centavo investido na experiência completa.",
    rating: 5,
  },
  {
    name: "Thiago Oliveira",
    role: "Cliente há 2 anos",
    content:
      "Minha barba nunca ficou tão bem cuidada. O tratamento premium é incrível, saio de lá me sentindo outro homem. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Marcelo Silva",
    role: "Cliente há 6 meses",
    content:
      "Descobri a barbearia por indicação de um amigo e virei cliente fiel. O plano mensal é uma economia absurda para quem gosta de manter o corte em dia.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="depoimentos"
      style={{ backgroundColor: "#141210" }}
      className="pt-12 pb-24"
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-center">Depoimentos</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>O que nossos clientes </span>
            <span style={{ color: "#c9a96e" }}>dizem</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#b8a898",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A satisfação dos nossos clientes é nossa maior conquista. Confira
            alguns depoimentos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="surface-card p-7 relative"
            >
              {/* Large quote mark */}
              <div
                className="absolute top-5 right-6 font-display font-bold select-none pointer-events-none"
                style={{ fontSize: "72px", color: "rgba(201,169,110,0.08)", lineHeight: 1 }}
                aria-hidden
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: "14px",
                      height: "14px",
                      fill: "#c9a96e",
                      color: "#c9a96e",
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-6 relative z-10"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "#b8a898",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.35)",
                  }}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: "14px", color: "#c9a96e" }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#f0e8d8",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      color: "#b8a898",
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div
          className="mt-12 p-8 rounded-xl flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          style={{
            backgroundColor: "#201c19",
            border: "1px solid rgba(201,169,110,0.16)",
          }}
        >
          {/* 4.9 */}
          <div className="flex items-center gap-3">
            <span
              className="font-display font-bold"
              style={{ fontSize: "48px", color: "#c9a96e", lineHeight: 1 }}
            >
              4.9
            </span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    style={{ width: "13px", height: "13px", fill: "#c9a96e", color: "#c9a96e" }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#b8a898",
                }}
              >
                Avaliação média
              </span>
            </div>
          </div>

          <div
            className="hidden md:block w-px h-10"
            style={{ backgroundColor: "rgba(201,169,110,0.18)" }}
          />

          <div>
            <div
              className="font-display font-bold"
              style={{ fontSize: "30px", color: "#f0e8d8" }}
            >
              +500
            </div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#b8a898",
              }}
            >
              Avaliações no Google
            </span>
          </div>

          <div
            className="hidden md:block w-px h-10"
            style={{ backgroundColor: "rgba(201,169,110,0.18)" }}
          />

          <div>
            <div
              className="font-display font-bold"
              style={{ fontSize: "30px", color: "#f0e8d8" }}
            >
              98%
            </div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#b8a898",
              }}
            >
              Clientes satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
