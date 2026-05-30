import { useEffect, useRef } from "react";
import rafaelImg from "@/assets/barber-rafael.png";
import lucasImg from "@/assets/barber-lucas.png";
import marcosImg from "@/assets/barber-marcos.png";

const barbers = [
  {
    name: "Rafael Souza",
    role: "Fundador & Master Barber",
    specialty: "Cortes clássicos e navalha",
    experience: "12 anos",
    instagram: "https://instagram.com",
    image: rafaelImg,
  },
  {
    name: "Lucas Ferreira",
    role: "Especialista em Barba",
    specialty: "Modelagem e hidratação de barba",
    experience: "7 anos",
    instagram: "https://instagram.com",
    image: lucasImg,
  },
  {
    name: "Marcos Alves",
    role: "Barbeiro Sênior",
    specialty: "Cortes modernos & degradê",
    experience: "10 anos",
    instagram: "https://instagram.com",
    image: marcosImg,
  },
];

// Instagram SVG icon
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "16px", height: "16px" }}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipe"
      style={{ backgroundColor: "#141210" }}
      className="pt-12 pb-24 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <span className="eyebrow-center">Nossa Equipe</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Conheça quem vai </span>
            <span style={{ color: "#c9a96e" }}>cuidar do seu estilo</span>
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
            Profissionais apaixonados pelo que fazem, prontos pra transformar
            seu visual com técnica, cuidado e muita conversa boa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbers.map((barber, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group surface-card overflow-hidden"
              style={{
                borderRadius: "12px",
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.7s ease-out ${index * 0.12}s, transform 0.7s ease-out ${index * 0.12}s, border-color 0.25s ease`,
              }}
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={barber.image}
                  alt={`Barbeiro ${barber.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,18,16,0.92) 40%, rgba(20,18,16,0.55) 100%)",
                  }}
                >
                  <a
                    href={barber.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${barber.name}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200"
                    style={{
                      border: "1px solid rgba(201,169,110,0.65)",
                      color: "#c9a96e",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      backgroundColor: "rgba(201,169,110,0.08)",
                      backdropFilter: "blur(6px)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#c9a96e";
                      el.style.color = "#1a1614";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(201,169,110,0.08)";
                      el.style.color = "#c9a96e";
                    }}
                  >
                    <InstagramIcon />
                    Ver no Instagram
                  </a>
                </div>

                {/* Experience badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(20,15,10,0.85)",
                    border: "1px solid rgba(201,169,110,0.4)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a96e",
                    }}
                  >
                    {barber.experience} de exp.
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="font-display font-semibold mb-1"
                  style={{ fontSize: "18px", color: "#f0e8d8", lineHeight: 1.3 }}
                >
                  {barber.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#c9a96e",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {barber.role}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#b8a898",
                    lineHeight: 1.5,
                  }}
                >
                  {barber.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom human note */}
        <p
          className="text-center mt-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "#8a7d70",
            fontStyle: "italic",
          }}
        >
          "Cada visita é uma conversa. Cada corte, uma história."
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
