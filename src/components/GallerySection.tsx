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
    <section id="galeria" className="py-24 bg-charcoal-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Conheça nosso <span className="text-gradient">espaço</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um ambiente pensado para oferecer conforto, estilo e a melhor experiência em barbearia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
