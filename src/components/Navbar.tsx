import { useState, useEffect } from "react";
import { Scissors, X, Menu } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
];

const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "rgba(20, 18, 16, 0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(201, 169, 110, 0.14)"
          : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Scissors
              strokeWidth={1.5}
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
              style={{ color: "#c9a96e" }}
            />
            <span
              className="font-display font-bold text-lg tracking-wide"
              style={{ color: "#f0e8d8" }}
            >
              The Gentleman's Cut
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9e9080",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#c9a96e")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#9e9080")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200"
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
              Agendar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#9e9080" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={1.5} className="w-6 h-6" />
            ) : (
              <Menu strokeWidth={1.5} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#141210",
            borderBottom: "1px solid rgba(201,169,110,0.14)",
          }}
        >
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9e9080",
                  borderBottom: "1px solid rgba(201,169,110,0.08)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#c9a96e")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#9e9080")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm"
              style={{
                backgroundColor: "#c9a96e",
                color: "#1a1614",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <WhatsAppIcon style={{ width: "16px", height: "16px" }} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
