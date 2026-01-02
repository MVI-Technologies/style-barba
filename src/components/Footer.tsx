import { Clock, Instagram, Mail, MapPin, Phone, Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold">Barbearia Elite</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Tradição, estilo e excelência em cada corte. Sua barbearia premium no coração da cidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Rua das Barbearias, 123<br />Centro - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contato@barbearia.com" className="hover:text-primary transition-colors">
                  contato@barbearia.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-medium text-foreground">Segunda a Sexta</span>
                  <br />09:00 - 20:00
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-medium text-foreground">Sábado</span>
                  <br />09:00 - 18:00
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-medium text-foreground">Domingo</span>
                  <br />Fechado
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Barbearia Elite. Todos os direitos reservados.</p>
          <p>Feito com ♠ para homens de estilo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
