import { Phone, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Scroll reveal
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
      { threshold: 0.15 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Pulse ring animation
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    let initial: any;
    let timeout: any;
    let interval: any;

    const runAnimation = () => {
      // Add pulse animation class
      btn.classList.add("animate-pulse-ring");
      
      // Remove class after animation ends (1.2s)
      timeout = setTimeout(() => {
        btn.classList.remove("animate-pulse-ring");
      }, 1200);
    };

    // Stagger first delay to let entrance anim complete
    initial = setTimeout(() => {
      runAnimation();
      
      // Repeat every 3.5 seconds
      interval = setInterval(runAnimation, 3500);
    }, 2000);

    return () => {
      clearTimeout(initial);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#141210" }}
      className="pt-12 pb-24 relative overflow-hidden"
    >
      {/* Subtle radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          {/* Eyebrow */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.22)",
              }}
            >
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
                Viva a Experiência
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="font-display font-bold mb-5"
            style={{ fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Pronto para elevar </span>
            <br />
            <span style={{ color: "#c9a96e" }}>o seu estilo?</span>
          </h2>

          {/* Subtitle */}
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "#b8a898",
              lineHeight: 1.7,
            }}
          >
            Escolha o melhor dia, o seu barbeiro favorito e reserve o seu
            horário com comodidade absoluta pelo nosso agendador virtual.
          </p>

          <p
            className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider"
            style={{ color: "#8a7d70" }}
          >
            Sem complicação. Agende em segundos.
            <Hand
              className="w-3.5 h-3.5 text-[#c9a96e]"
              style={{ transform: "rotate(15deg)" }}
            />
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              ref={btnRef as any}
              to="/agendar"
              aria-label="Agendar Online"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#c9a96e",
                color: "#1a1614",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                borderRadius: "8px",
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
              Agendar Online
            </Link>

            <a
              href="tel:+5511999999999"
              aria-label="Ligar para a barbearia"
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
              color: "#8a7d70",
            }}
          >
            Resposta rápida&nbsp;·&nbsp;Confirmação imediata&nbsp;·&nbsp;Sem
            filas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
