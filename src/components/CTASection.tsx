import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const whatsappLink =
  "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const CTASection = () => {
  return (
    <section
      style={{ backgroundColor: "#141210" }}
      className="py-24 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex justify-center mb-7">
            <span className="eyebrow-center">Pronto para começar</span>
          </div>

          {/* Heading */}
          <h2
            className="font-display font-bold mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1 }}
          >
            <span style={{ display: "block", color: "#f0e8d8" }}>
              Pronto para elevar
            </span>
            <span style={{ display: "block", color: "#c9a96e" }}>
              seu estilo?
            </span>
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "#9e9080",
              lineHeight: 1.75,
              maxWidth: "440px",
              margin: "0 auto 40px",
            }}
          >
            Agende agora mesmo e experimente o que há de melhor em cuidados
            masculinos. Sua transformação começa aqui.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md font-semibold transition-all duration-200"
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
              <WhatsAppIcon style={{ width: "18px", height: "18px" }} />
              Agendar pelo WhatsApp
            </a>

            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md font-medium transition-all duration-200"
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
              <Phone
                strokeWidth={1.5}
                style={{ width: "16px", height: "16px" }}
              />
              (11) 99999-9999
            </a>
          </div>

          {/* Micro-copy */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "#6b6158",
            }}
          >
            Resposta rápida&nbsp;·&nbsp;Confirmação imediata&nbsp;·&nbsp;Sem filas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
