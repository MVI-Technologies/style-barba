import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-barbershop.jpg";
import corteImage from "@/assets/service-corte.jpg";
import barbaImage from "@/assets/service-barba.jpg";
import productsImage from "@/assets/products.jpg";
import shaveImage from "@/assets/service-shave.jpg";
import styleImage from "@/assets/service-style.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    src: heroImage,
    alt: "Interior sofisticado da barbearia",
    caption: "Nosso espaço",
    tall: true,
  },
  {
    src: corteImage,
    alt: "Corte masculino moderno com degradê",
    caption: "Cortes modernos",
  },
  {
    src: barbaImage,
    alt: "Serviço de barba com navalha",
    caption: "Barba perfeita",
  },
  {
    src: productsImage,
    alt: "Produtos premium de barbearia",
    caption: "Produtos selecionados",
    tall: true,
  },
  {
    src: shaveImage,
    alt: "Barba com toalha quente e navalha profissional",
    caption: "Navalha & Toalha Quente",
  },
  {
    src: styleImage,
    alt: "Finalização de cabelo e penteado exclusivo",
    caption: "Estilização Exclusiva",
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="galeria"
      style={{ backgroundColor: "#1a1614" }}
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
          <span className="eyebrow-center">Ambiente & Resultados</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Conheça nosso </span>
            <span style={{ color: "#c9a96e" }}>espaço</span>
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
            Um ambiente pensado para oferecer conforto, estilo e a melhor
            experiência em barbearia.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "12px",
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s",
          }}
          className="sm:grid"
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(201,169,110,0.12)",
                transition: "border-color 0.25s ease, transform 0.3s ease",
                gridRow: item.tall ? "span 2" : "span 1",
                // Alternate heights via minHeight
                minHeight: item.tall ? "460px" : "220px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.12)";
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
                style={{ display: "block" }}
              />

              {/* Hover overlay with caption */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,18,16,0.85) 0%, rgba(20,18,16,0.2) 50%, transparent 100%)",
                }}
              >
                <span
                  className="font-display font-medium"
                  style={{
                    fontSize: "15px",
                    color: "#c9a96e",
                    textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                  }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="text-center mt-10">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#8a7d70",
              fontStyle: "italic",
              marginBottom: "16px",
            }}
          >
            Quer ver mais? Nos siga no Instagram.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir no Instagram"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(201,169,110,0.45)",
              color: "#c9a96e",
              fontFamily: "Inter, sans-serif",
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
            @gentlemanscut
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
