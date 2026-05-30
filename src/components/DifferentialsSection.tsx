import { Award, Coffee, Sparkles, Users, Wifi, Zap, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const differentials = [
  {
    icon: Users,
    title: "Barbeiros Especializados",
    description:
      "Profissionais com anos de experiência e treinamento contínuo nas melhores técnicas.",
  },
  {
    icon: Sparkles,
    title: "Produtos Premium",
    description:
      "Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais.",
  },
  {
    icon: Coffee,
    title: "Ambiente Acolhedor",
    description:
      "Espaço confortável com café, cerveja artesanal e um clima descontraído para relaxar.",
  },
  {
    icon: Zap,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente recebe atenção exclusiva, com cortes adaptados ao seu estilo único.",
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description:
      "Se não ficar 100% satisfeito, ajustamos seu corte sem custo adicional.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Entretenimento",
    description:
      "Conecte-se enquanto espera. TV, revistas e games disponíveis para você.",
  },
];

const DifferentialsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="diferenciais"
      style={{ backgroundColor: "#1a1614" }}
      className="pt-12 pb-24"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <span className="eyebrow-center">Por que nos escolher</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Diferenciais que fazem </span>
            <span style={{ color: "#c9a96e" }}>a diferença</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#b8a898",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Mais do que uma barbearia, somos uma experiência completa de
            cuidado masculino.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
          }}
        >
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group surface-card p-7 transition-all duration-250"
            >
              {/* Icon */}
              <div className="icon-box mb-5">
                <item.icon
                  strokeWidth={1.5}
                  style={{ width: "20px", height: "20px", color: "#c9a96e" }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#f0e8d8",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#b8a898",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Quote */}
        <div
          ref={quoteRef}
          className="mt-16 relative"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <div
            className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              backgroundColor: "#201c19",
              border: "1px solid rgba(201,169,110,0.18)",
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 left-8 opacity-10"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              <Quote
                style={{ width: "72px", height: "72px", color: "#c9a96e" }}
              />
            </div>
            <div
              className="absolute bottom-6 right-8 opacity-10 rotate-180"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              <Quote
                style={{ width: "72px", height: "72px", color: "#c9a96e" }}
              />
            </div>

            {/* Quote text */}
            <p
              className="font-display relative z-10 mx-auto"
              style={{
                fontSize: "clamp(20px, 2.5vw, 26px)",
                color: "#c9a96e",
                fontStyle: "italic",
                lineHeight: 1.6,
                maxWidth: "700px",
                fontWeight: 400,
              }}
            >
              "Nunca pensei que uma ida à barbearia pudesse ser tão boa. Saí não
              só com o visual renovado, mas com a autoestima lá em cima. Virei
              cliente fiel."
            </p>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4 mt-8 relative z-10">
              {/* Avatar initial */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold shrink-0"
                style={{
                  backgroundColor: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.4)",
                  fontSize: "16px",
                  color: "#c9a96e",
                }}
              >
                R
              </div>
              <div className="text-left">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#f0e8d8",
                    lineHeight: 1.3,
                  }}
                >
                  Ricardo M.
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#b8a898",
                  }}
                >
                  Cliente há 3 anos · Unidade Centro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
