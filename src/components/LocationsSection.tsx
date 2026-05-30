import { MapPin, Clock, Phone, Car } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useEffect, useRef } from "react";

type Location = {
  name: string;
  address: string;
  neighborhood: string;
  phone: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday?: string;
  };
  parking: boolean;
  mapsUrl: string;
  whatsapp: string;
};

const locations: Location[] = [
  {
    name: "Unidade Centro",
    address: "Rua das Flores, 142",
    neighborhood: "Centro — São Paulo / SP",
    phone: "(11) 99999-0001",
    hours: {
      weekdays: "Seg–Sex: 09h às 20h",
      saturday: "Sáb: 09h às 18h",
      sunday: "Dom: Fechado",
    },
    parking: true,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+das+Flores+142+São+Paulo",
    whatsapp:
      "https://wa.me/5511999990001?text=Olá! Gostaria de agendar na unidade Centro.",
  },
  {
    name: "Unidade Pinheiros",
    address: "Av. Rebouças, 780 — Sala 3",
    neighborhood: "Pinheiros — São Paulo / SP",
    phone: "(11) 99999-0002",
    hours: {
      weekdays: "Seg–Sex: 10h às 21h",
      saturday: "Sáb: 09h às 17h",
      sunday: "Dom: Fechado",
    },
    parking: false,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av+Rebouças+780+São+Paulo",
    whatsapp:
      "https://wa.me/5511999990002?text=Olá! Gostaria de agendar na unidade Pinheiros.",
  },
  {
    name: "Unidade Vila Madalena",
    address: "Rua Harmonia, 215",
    neighborhood: "Vila Madalena — São Paulo / SP",
    phone: "(11) 99999-0003",
    hours: {
      weekdays: "Seg–Sex: 09h às 20h",
      saturday: "Sáb: 08h às 16h",
      sunday: "Dom: 10h às 14h",
    },
    parking: true,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Harmonia+215+São+Paulo",
    whatsapp:
      "https://wa.me/5511999990003?text=Olá! Gostaria de agendar na unidade Vila Madalena.",
  },
];

const LocationsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="unidades"
      style={{ backgroundColor: "#141210" }}
      className="pt-12 pb-24"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <span className="eyebrow-center">Onde Nos Encontrar</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Venha nos </span>
            <span style={{ color: "#c9a96e" }}>visitar</span>
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
            Três unidades estratégicas em São Paulo para você nunca estar longe
            de uma boa barbearia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="surface-card flex flex-col"
              style={{
                borderRadius: "12px",
                padding: "0",
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.7s ease-out ${index * 0.12}s, transform 0.7s ease-out ${index * 0.12}s`,
              }}
            >
              {/* Card top accent bar */}
              <div
                style={{
                  height: "3px",
                  background:
                    "linear-gradient(to right, #c9a96e, rgba(201,169,110,0.3))",
                }}
              />

              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Name + parking badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="font-display font-semibold"
                    style={{
                      fontSize: "19px",
                      color: "#f0e8d8",
                      lineHeight: 1.3,
                    }}
                  >
                    {loc.name}
                  </h3>
                  {loc.parking && (
                    <div
                      className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,169,110,0.08)",
                        border: "1px solid rgba(201,169,110,0.3)",
                      }}
                    >
                      <Car
                        strokeWidth={1.5}
                        style={{
                          width: "11px",
                          height: "11px",
                          color: "#c9a96e",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#c9a96e",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Estacionamento
                      </span>
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    strokeWidth={1.5}
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "#c9a96e",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#f0e8d8",
                        lineHeight: 1.4,
                      }}
                    >
                      {loc.address}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        color: "#b8a898",
                        marginTop: "2px",
                      }}
                    >
                      {loc.neighborhood}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock
                    strokeWidth={1.5}
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "#c9a96e",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#f0e8d8",
                        lineHeight: 1.6,
                      }}
                    >
                      {loc.hours.weekdays}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#f0e8d8",
                        lineHeight: 1.6,
                      }}
                    >
                      {loc.hours.saturday}
                    </p>
                    {loc.hours.sunday && (
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          color: "#b8a898",
                          lineHeight: 1.6,
                        }}
                      >
                        {loc.hours.sunday}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone
                    strokeWidth={1.5}
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "#c9a96e",
                      flexShrink: 0,
                    }}
                  />
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#f0e8d8",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#c9a96e")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#f0e8d8")
                    }
                  >
                    {loc.phone}
                  </a>
                </div>

                {/* Divider */}
                <div
                  style={{
                    borderTop: "1px solid rgba(201,169,110,0.12)",
                    margin: "4px 0",
                  }}
                />

                {/* Action buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Como chegar na ${loc.name}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
                    style={{
                      border: "1px solid rgba(201,169,110,0.38)",
                      color: "#c9a96e",
                      fontFamily: "Inter, sans-serif",
                      backgroundColor: "transparent",
                      fontSize: "13px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(201,169,110,0.08)";
                      el.style.borderColor = "rgba(201,169,110,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "transparent";
                      el.style.borderColor = "rgba(201,169,110,0.38)";
                    }}
                  >
                    <MapPin
                      strokeWidth={1.5}
                      style={{ width: "13px", height: "13px" }}
                    />
                    Como chegar
                  </a>
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp da ${loc.name}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: "#c9a96e",
                      color: "#1a1614",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        "#d4b87a")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        "#c9a96e")
                    }
                  >
                    <WhatsAppIcon style={{ width: "14px", height: "14px" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
