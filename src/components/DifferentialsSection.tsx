import { Award, Coffee, Sparkles, Users, Wifi, Zap } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Barbeiros Especializados",
    description: "Profissionais com anos de experiência e treinamento contínuo nas melhores técnicas.",
  },
  {
    icon: Sparkles,
    title: "Produtos Premium",
    description: "Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais.",
  },
  {
    icon: Coffee,
    title: "Ambiente Acolhedor",
    description: "Espaço confortável com café, cerveja artesanal e um clima descontraído para relaxar.",
  },
  {
    icon: Zap,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva, com cortes adaptados ao seu estilo único.",
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description: "Se não ficar 100% satisfeito, ajustamos seu corte sem custo adicional.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Entretenimento",
    description: "Conecte-se enquanto espera. TV, revistas e games disponíveis para você.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Diferenciais que fazem <span className="text-gradient">a diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que uma barbearia, somos uma experiência completa de cuidado masculino.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Seal */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-4 glow-gold">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-2">Selo de Qualidade</h3>
          <p className="text-muted-foreground max-w-md">
            Certificados em técnicas avançadas de barbearia e comprometidos com a excelência no atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
