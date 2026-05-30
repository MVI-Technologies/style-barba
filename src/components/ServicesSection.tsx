import { Clock, Scissors, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import corteImage from "@/assets/service-corte.jpg";
import barbaImage from "@/assets/service-barba.jpg";

const services = [
  {
    title: "Corte Masculino",
    description:
      "Corte personalizado de acordo com seu estilo e formato de rosto. Inclui lavagem e finalização.",
    price: "R$ 50",
    duration: "45 min",
    image: corteImage,
    popular: false,
  },
  {
    title: "Barba Tradicional",
    description:
      "Aparar e modelar a barba com navalha, toalha quente e produtos premium.",
    price: "R$ 40",
    duration: "30 min",
    image: barbaImage,
    popular: false,
  },
  {
    title: "Barba Premium",
    description:
      "Tratamento completo com esfoliação, hidratação profunda, toalha quente e óleos especiais.",
    price: "R$ 60",
    duration: "45 min",
    image: barbaImage,
    popular: true,
  },
  {
    title: "Corte + Barba",
    description:
      "Combo completo: corte personalizado + barba tradicional. O pacote mais procurado.",
    price: "R$ 80",
    duration: "1h 15min",
    image: corteImage,
    popular: true,
  },
  {
    title: "Acabamento",
    description:
      "Retoque no corte e barba para manter o visual impecável entre as visitas.",
    price: "R$ 25",
    duration: "20 min",
    image: corteImage,
    popular: false,
  },
  {
    title: "Tratamento Capilar",
    description:
      "Hidratação profunda, tratamento anticaspa ou fortalecimento dos fios.",
    price: "R$ 70",
    duration: "40 min",
    image: corteImage,
    popular: false,
  },
];

const whatsappLink =
  "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const ServicesSection = () => {
  return (
    <section id="servicos" style={{ backgroundColor: "#141210" }} className="py-24">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-center">Nossos Serviços</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Serviços para o </span>
            <span style={{ color: "#c9a96e" }}>homem moderno</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#9e9080",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cada serviço executado com técnica apurada, produtos de alta
            qualidade e atenção aos detalhes que fazem toda a diferença.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group surface-card overflow-hidden relative"
              style={{ borderRadius: "12px" }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div
                  className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(201,169,110,0.13)",
                    border: "1px solid rgba(201,169,110,0.45)",
                  }}
                >
                  <Sparkles
                    strokeWidth={1.5}
                    style={{ width: "11px", height: "11px", color: "#c9a96e" }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a96e",
                    }}
                  >
                    Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, #201c19 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-display font-semibold"
                    style={{ fontSize: "17px", color: "#f0e8d8", lineHeight: 1.3 }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="font-display font-bold shrink-0"
                    style={{ fontSize: "18px", color: "#c9a96e" }}
                  >
                    {service.price}
                  </span>
                </div>

                <p
                  className="mb-4 line-clamp-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#9e9080",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#9e9080",
                    }}
                  >
                    <Clock
                      strokeWidth={1.5}
                      style={{ width: "13px", height: "13px", color: "#c9a96e" }}
                    />
                    {service.duration}
                  </span>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200"
                    style={{
                      border: "1px solid rgba(201,169,110,0.45)",
                      color: "#c9a96e",
                      fontFamily: "Inter, sans-serif",
                      backgroundColor: "transparent",
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
                      el.style.color = "#c9a96e";
                      el.style.borderColor = "rgba(201,169,110,0.45)";
                    }}
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Plan */}
        <div
          className="mt-14 p-8 md:p-10 rounded-2xl relative overflow-hidden"
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
                  color: "#9e9080",
                  lineHeight: 1.7,
                }}
              >
                Cortes ilimitados durante o mês por um valor fixo. Mantenha
                seu visual sempre impecável sem se preocupar com o preço.
              </p>
            </div>

            {/* Right */}
            <div
              className="flex flex-col items-center lg:items-end shrink-0"
              style={{
                paddingLeft: "32px",
                borderLeft: "1px solid rgba(201,169,110,0.16)",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#9e9080",
                  textDecoration: "line-through",
                  marginBottom: "4px",
                }}
              >
                De R$ 200/mês
              </span>
              <div
                className="font-display font-bold"
                style={{ fontSize: "48px", color: "#c9a96e", lineHeight: 1 }}
              >
                R$ 149
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#9e9080",
                  marginBottom: "20px",
                }}
              >
                /mês
              </span>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "#c9a96e",
                  color: "#1a1614",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4b87a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#c9a96e")
                }
              >
                <WhatsAppIcon style={{ width: "16px", height: "16px" }} />
                Quero assinar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
