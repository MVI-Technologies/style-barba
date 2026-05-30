import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const whatsappLink =
  "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#100e0c" }}>
      {/* Top border */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.14)" }}>
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
                <img
                  src={logoImg}
                  alt="Logo"
                  className="w-10 h-10 object-contain rounded-full border border-opacity-20 transition-transform duration-300 group-hover:scale-105"
                  style={{ borderColor: "#c9a96e" }}
                />
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: "#f0e8d8" }}
                >
                  The Gentleman's Cut
                </span>
              </a>
              <p
                className="mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#b8a898",
                  lineHeight: 1.7,
                }}
              >
                Tradição, estilo e excelência em cada corte. Sua barbearia
                premium no coração da cidade.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(201,169,110,0.35)",
                    color: "#b8a898",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#c9a96e";
                    el.style.color = "#1a1614";
                    el.style.borderColor = "#c9a96e";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#b8a898";
                    el.style.borderColor = "rgba(201,169,110,0.35)";
                  }}
                  aria-label="Instagram"
                >
                  <Instagram strokeWidth={1.5} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    strokeWidth={1.5}
                    style={{ width: "16px", height: "16px", color: "#c9a96e", marginTop: "2px", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#b8a898",
                      lineHeight: 1.6,
                    }}
                  >
                    Rua das Barbearias, 123
                    <br />
                    Centro — São Paulo, SP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    strokeWidth={1.5}
                    style={{ width: "16px", height: "16px", color: "#c9a96e", flexShrink: 0 }}
                  />
                  <a
                    href="tel:+5511999999999"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#b8a898",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#b8a898")
                    }
                  >
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    strokeWidth={1.5}
                    style={{ width: "16px", height: "16px", color: "#c9a96e", flexShrink: 0 }}
                  />
                  <a
                    href="mailto:contato@thegentlemanscut.com"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#b8a898",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#b8a898")
                    }
                  >
                    contato@thegentlemanscut.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Horários
              </h4>
              <ul className="space-y-3">
                {[
                  { day: "Segunda a Sexta", hours: "09:00 – 20:00" },
                  { day: "Sábado", hours: "09:00 – 18:00" },
                  { day: "Domingo", hours: "Fechado" },
                ].map((item) => (
                  <li key={item.day} className="flex items-start gap-3">
                    <Clock
                      strokeWidth={1.5}
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#c9a96e",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#f0e8d8",
                        }}
                      >
                        {item.day}
                      </span>
                      <br />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          color: "#b8a898",
                        }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Sobre Nós", href: "#sobre" },
                  { label: "Serviços", href: "#servicos" },
                  { label: "Diferenciais", href: "#diferenciais" },
                  { label: "Depoimentos", href: "#depoimentos" },
                  { label: "Galeria", href: "#galeria" },
                  { label: "Agendar", href: whatsappLink },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#b8a898",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#c9a96e")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#b8a898")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "#8a7d70",
            }}
          >
            © 2024 The Gentleman's Cut. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "#8a7d70",
            }}
          >
            Feito com ♠ para homens de estilo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
