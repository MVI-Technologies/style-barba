import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
];

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
            <img
              src={logoImg}
              alt="Logo"
              className="w-10 h-10 object-contain rounded-full border border-opacity-20 transition-transform duration-300 group-hover:scale-105"
              style={{ borderColor: "#c9a96e" }}
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
                  color: "#b8a898",
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
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/agendar"
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
              Agendar Online
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#b8a898" }}
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
                  color: "#b8a898",
                  borderBottom: "1px solid rgba(201,169,110,0.08)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#c9a96e")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#b8a898")
                }
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/agendar"
              className="mt-4 inline-flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm"
              style={{
                backgroundColor: "#c9a96e",
                color: "#1a1614",
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
