import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Scissors, X } from "lucide-react";

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
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
            <span className="text-xl font-display font-bold">Barbearia Elite</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-4" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
