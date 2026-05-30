import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da barbearia The Gentleman's Cut"
          className="w-full h-full object-cover"
        />
        {/* Left→right dark fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #1a1614 0%, rgba(26,22,20,0.88) 40%, rgba(26,22,20,0.5) 70%, rgba(26,22,20,0.2) 100%)",
          }}
        />
        {/* Bottom fade to next section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, #1a1614 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 animate-fade-up"
            style={{
              background: "rgba(20,15,10,0.82)",
              border: "1px solid rgba(201,169,110,0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Scissors
              strokeWidth={1.5}
              style={{ width: "14px", height: "14px", color: "#c9a96e" }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#c9a96e",
              }}
            >
              Barbearia Premium · São Paulo
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-tight mb-6 animate-fade-up"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              animationDelay: "0.1s",
              lineHeight: 1.1,
            }}
          >
            <span style={{ display: "block", color: "#f0e8d8" }}>
              Mais que um corte.
            </span>
            <span style={{ display: "block", color: "#c9a96e" }}>
              Um style.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 animate-fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              color: "#b8a898",
              lineHeight: 1.7,
              maxWidth: "460px",
              animationDelay: "0.2s",
            }}
          >
            Tradição, técnica e atitude em cada detalhe. Experimente o que há
            de melhor em barbearia masculina.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Primary */}
            <Link
              to="/agendar"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#c9a96e",
                color: "#1a1614",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4b87a")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#c9a96e")
              }
            >
              Agendar Online
            </Link>

            {/* Secondary */}
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(201,169,110,0.45)",
                color: "#c9a96e",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(201,169,110,0.08)";
                el.style.borderColor = "rgba(201,169,110,0.65)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(201,169,110,0.45)";
              }}
            >
              Ver Serviços
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-4 pt-4 animate-fade-up"
            style={{
              borderTop: "1px solid rgba(201,169,110,0.18)",
              animationDelay: "0.4s",
            }}
          >
            {[
              { value: "10+", label: "Anos de experiência" },
              { value: "5.000+", label: "Clientes atendidos" },
              { value: "4.9", label: "Avaliação média" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "#c9a96e",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#b8a898",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: "1px solid rgba(201,169,110,0.4)" }}
        >
          <div
            className="w-0.5 h-2 rounded-full"
            style={{ backgroundColor: "#c9a96e" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
