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
    <section
      id="sobre"
      style={{ backgroundColor: "#1a1614" }}
      className="pt-12 pb-24 overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">

          {/* ── Left: Photo Column ── */}
          <div className="relative overflow-hidden rounded-l-2xl lg:rounded-r-none rounded-2xl lg:rounded-l-2xl">
            {/* Photo */}
            <img
              src={productsImage}
              alt="Produtos Premium da Barbearia"
              className="w-full h-full object-cover"
              style={{ minHeight: "480px" }}
            />

            {/* Right-side fade gradient → blends into bg */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent, #1a1614)",
              }}
            />

            {/* Top + bottom subtle darkening */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(26,22,20,0.35) 0%, transparent 30%, transparent 65%, rgba(26,22,20,0.55) 100%)",
              }}
            />

            {/* Badge — bottom-left */}
            <div
              className="absolute bottom-6 left-6 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(20,15,10,0.88)",
                border: "1px solid rgba(201,169,110,0.45)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                maxWidth: "220px",
              }}
            >
              <div
                className="font-display font-bold mb-1"
                style={{ fontSize: "28px", color: "#c9a96e", lineHeight: 1.1 }}
              >
                +10 anos
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#b8a898",
                  lineHeight: 1.5,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                De tradição e experiência em cortes masculinos
              </p>
            </div>
          </div>

          {/* ── Right: Text Column ── */}
          <div
            className="flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-0"
            style={{ backgroundColor: "#1a1614" }}
          >

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#c9a96e",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#c9a96e",
                  textTransform: "uppercase",
                }}
              >
                Quem Somos
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-display font-bold mb-6"
              style={{ lineHeight: 1.15 }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#f0e8d8",
                }}
              >
                Onde tradição encontra
              </span>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#c9a96e",
                  marginTop: "4px",
                }}
              >
                estilo moderno
              </span>
            </h2>

            {/* Body paragraphs */}
            <p
              className="mb-4 leading-relaxed"
              style={{
                fontSize: "14px",
                color: "#b8a898",
                fontFamily: "Inter, sans-serif",
                maxWidth: "420px",
              }}
            >
              Nascemos da paixão por transformar a experiência masculina de
              cuidados pessoais. Nossa barbearia é mais que um lugar para cortar
              cabelo — é um espaço onde homens se encontram, relaxam e saem com
              a confiança renovada.
            </p>
            <p
              className="mb-10 leading-relaxed"
              style={{
                fontSize: "14px",
                color: "#b8a898",
                fontFamily: "Inter, sans-serif",
                maxWidth: "420px",
              }}
            >
              Com uma equipe de barbeiros especializados e apaixonados pelo que
              fazem, oferecemos serviços de alta qualidade em um ambiente
              acolhedor e estiloso. Cada detalhe foi pensado para proporcionar
              uma experiência única.
            </p>

            {/* Feature 2×2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ padding: "12px 0" }}
                >
                  {/* Icon container */}
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      border: "1px solid rgba(201,169,110,0.5)",
                      backgroundColor: "rgba(201,169,110,0.08)",
                    }}
                  >
                    <feature.icon
                      strokeWidth={1.5}
                      style={{ width: "16px", height: "16px", color: "#c9a96e" }}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#f0e8d8",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "3px",
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#b8a898",
                        fontFamily: "Inter, sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </p>
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
