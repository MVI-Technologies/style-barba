import heroImage from "@/assets/hero-barbershop.jpg";
import corteImage from "@/assets/service-corte.jpg";
import barbaImage from "@/assets/service-barba.jpg";
import productsImage from "@/assets/products.jpg";

const images = [
  { src: heroImage, alt: "Interior da barbearia", span: "col-span-2 row-span-2" },
  { src: corteImage, alt: "Corte masculino moderno", span: "col-span-1 row-span-1" },
  { src: barbaImage, alt: "Serviço de barba", span: "col-span-1 row-span-1" },
  { src: productsImage, alt: "Produtos premium", span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  return (
    <section
      id="galeria"
      style={{ backgroundColor: "#1a1614" }}
      className="py-24"
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-center">Galeria</span>
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
              color: "#9e9080",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Um ambiente pensado para oferecer conforto, estilo e a melhor
            experiência em barbearia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridAutoRows: "200px" }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${image.span}`}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(201,169,110,0.12)",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,169,110,0.42)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,169,110,0.12)")
              }
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,18,16,0.78) 0%, transparent 60%)",
                }}
              >
                <span
                  className="font-display font-medium"
                  style={{ fontSize: "15px", color: "#c9a96e" }}
                >
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
