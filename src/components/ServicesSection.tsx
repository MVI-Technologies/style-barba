import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Sparkles, Scissors, Layers, Droplets, Package2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import corteImage from "@/assets/service-corte.jpg";
import barbaImage from "@/assets/service-barba.jpg";

type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
};

type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

const categories: Category[] = [
  {
    id: "cabelo",
    label: "Cabelo",
    icon: Scissors,
    items: [
      { name: "Corte Masculino", duration: "45 min", price: "R$ 50" },
      { name: "Corte Infantil", duration: "30 min", price: "R$ 35" },
      { name: "Acabamento", duration: "20 min", price: "R$ 25" },
      { name: "Platinado / Descoloração", duration: "90 min", price: "R$ 120" },
      { name: "Relaxamento / Selagem", duration: "60 min", price: "R$ 90" },
    ],
  },
  {
    id: "barba",
    label: "Barba",
    icon: Layers,
    items: [
      { name: "Barba Tradicional", duration: "30 min", price: "R$ 40" },
      { name: "Barba Premium", duration: "45 min", price: "R$ 60", popular: true },
      { name: "Aparar Barba", duration: "15 min", price: "R$ 25" },
      { name: "Hidratação de Barba", duration: "20 min", price: "R$ 30" },
    ],
  },
  {
    id: "tratamentos",
    label: "Tratamentos",
    icon: Droplets,
    items: [
      { name: "Tratamento Capilar", duration: "40 min", price: "R$ 70" },
      { name: "Hidratação Profunda", duration: "45 min", price: "R$ 80" },
      { name: "Esfoliação de Couro Cabeludo", duration: "30 min", price: "R$ 55" },
      { name: "Massagem Craniana", duration: "20 min", price: "R$ 40" },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    icon: Package2,
    items: [
      {
        name: "Corte + Barba",
        duration: "1h 15min",
        price: "R$ 80",
        popular: true,
      },
      { name: "Corte + Barba + Sobrancelha", duration: "1h 30min", price: "R$ 95" },
      { name: "Corte + Hidratação", duration: "1h 30min", price: "R$ 110" },
      { name: "Barba + Tratamento", duration: "1h", price: "R$ 95" },
    ],
  },
];

const whatsappLink =
  "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("cabelo");
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const priceListRef = useRef<HTMLDivElement>(null);

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
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="servicos" style={{ backgroundColor: "#141210" }} className="pt-12 pb-24">
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
          <span className="eyebrow-center">Nossos Serviços</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Tudo que você precisa, </span>
            <span style={{ color: "#c9a96e" }}>com o preço na mesa</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#b8a898",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Sem surpresa no final. Cada serviço executado com técnica, produtos
            de alta qualidade e atenção a cada detalhe.
          </p>
        </div>

        {/* Layout: Image left + Price list right */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-14">
          {/* Left: Service image + quick visual */}
          <div className="lg:col-span-2 hidden lg:block">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "12px", aspectRatio: "4/5" }}
            >
              <img
                src={
                  activeTab === "barba" || activeTab === "tratamentos"
                    ? barbaImage
                    : corteImage
                }
                alt={`Serviços de ${activeCategory.label}`}
                className="w-full h-full object-cover"
                style={{ transition: "opacity 0.4s ease" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,18,16,0.85) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="font-display font-bold"
                  style={{ fontSize: "22px", color: "#f0e8d8", lineHeight: 1.2 }}
                >
                  {activeCategory.label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#b8a898",
                    marginTop: "4px",
                  }}
                >
                  {activeCategory.items.length} serviços disponíveis
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tabs + Price list */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div
              className="flex gap-1 p-1 mb-6 rounded-xl"
              style={{
                backgroundColor: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.14)",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  aria-label={`Ver serviços de ${cat.label}`}
                  className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundColor:
                      activeTab === cat.id ? "#c9a96e" : "transparent",
                    color: activeTab === cat.id ? "#1a1614" : "#b8a898",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <cat.icon
                    strokeWidth={1.6}
                    style={{ width: "13px", height: "13px", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Price List */}
            <div
              ref={priceListRef}
              className="surface-card overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              {activeCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-5 py-4 group transition-colors duration-200"
                  style={{
                    borderBottom:
                      index < activeCategory.items.length - 1
                        ? "1px solid rgba(201,169,110,0.10)"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(201,169,110,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.popular && (
                      <div
                        className="shrink-0 flex items-center gap-1 px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "rgba(201,169,110,0.12)",
                          border: "1px solid rgba(201,169,110,0.4)",
                        }}
                      >
                        <Sparkles
                          strokeWidth={1.5}
                          style={{
                            width: "10px",
                            height: "10px",
                            color: "#c9a96e",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "#c9a96e",
                          }}
                        >
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p
                        className="truncate"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#f0e8d8",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </p>
                      <span
                        className="flex items-center gap-1 mt-0.5"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          color: "#8a7d70",
                        }}
                      >
                        <Clock
                          strokeWidth={1.5}
                          style={{
                            width: "11px",
                            height: "11px",
                            color: "#b8a898",
                          }}
                        />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: "17px", color: "#c9a96e" }}
                    >
                      {item.price}
                    </span>
                    <Link
                      to="/agendar"
                      aria-label={`Agendar ${item.name}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200"
                      style={{
                        border: "1px solid rgba(201,169,110,0.38)",
                        color: "#c9a96e",
                        fontFamily: "Inter, sans-serif",
                        backgroundColor: "transparent",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#c9a96e";
                        el.style.color = "#1a1614";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "transparent";
                        el.style.color = "#c9a96e";
                      }}
                    >
                      Agendar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Plan */}
        <div
          className="p-8 md:p-10 rounded-2xl relative overflow-hidden"
          style={{
            backgroundColor: "#201c19",
            border: "1px solid rgba(201,169,110,0.22)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left max-w-lg">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
                style={{
                  backgroundColor: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
              >
                <Sparkles
                  strokeWidth={1.5}
                  style={{ width: "13px", height: "13px", color: "#c9a96e" }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                  }}
                >
                  Plano Mensal
                </span>
              </div>

              <h3
                className="font-display font-bold mb-3"
                style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#f0e8d8" }}
              >
                Assine e economize
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "#b8a898",
                  lineHeight: 1.7,
                }}
              >
                Cortes ilimitados durante o mês por um valor fixo. Mantenha
                seu visual sempre impecável sem se preocupar com o preço.
              </p>
            </div>

            {/* Right */}
            <div
              className="flex flex-col items-center lg:items-end shrink-0 border-t lg:border-t-0 lg:border-l border-opacity-20 pt-8 lg:pt-0 lg:pl-10 w-full lg:w-auto"
              style={{
                borderColor: "rgba(201,169,110,0.16)",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#b8a898",
                  textDecoration: "line-through",
                  marginBottom: "4px",
                }}
              >
                De R$ 200/mês
              </span>
              
              <div className="flex items-baseline gap-1.5 mb-5">
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "44px", color: "#c9a96e", lineHeight: 1 }}
                >
                  R$ 149
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#b8a898",
                  }}
                >
                  /mês
                </span>
              </div>

              <Link
                to="/agendar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "#c9a96e",
                  color: "#1a1614",
                  fontFamily: "Inter, sans-serif",
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
                Quero assinar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
