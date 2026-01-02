import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Pronto para elevar seu <span className="text-gradient">estilo</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Agende agora mesmo e experimente o que há de melhor em cuidados masculinos. 
            Sua transformação começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+5511999999999">
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Resposta rápida • Confirmação imediata • Sem filas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
