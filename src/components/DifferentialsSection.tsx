import { Award, Coffee, Sparkles, Users, Wifi, Zap } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Barbeiros Especializados",
    description:
      "Profissionais com anos de experiência e treinamento contínuo nas melhores técnicas.",
  },
  {
    icon: Sparkles,
    title: "Produtos Premium",
    description:
      "Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais.",
  },
  {
    icon: Coffee,
    title: "Ambiente Acolhedor",
    description:
      "Espaço confortável com café, cerveja artesanal e um clima descontraído para relaxar.",
  },
  {
    icon: Zap,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente recebe atenção exclusiva, com cortes adaptados ao seu estilo único.",
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description:
      "Se não ficar 100% satisfeito, ajustamos seu corte sem custo adicional.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Entretenimento",
    description:
      "Conecte-se enquanto espera. TV, revistas e games disponíveis para você.",
  },
];

const DifferentialsSection = () => {
  return (
    <section
      id="diferenciais"
      style={{ backgroundColor: "#1a1614" }}
      className="py-24"
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-center">Por que nos escolher</span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#f0e8d8" }}>Diferenciais que fazem </span>
            <span style={{ color: "#c9a96e" }}>a diferença</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#9e9080",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Mais do que uma barbearia, somos uma experiência completa de
            cuidado masculino.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group surface-card p-7 transition-all duration-250"
            >
              {/* Icon */}
              <div className="icon-box mb-5">
                <item.icon
                  strokeWidth={1.5}
                  style={{ width: "20px", height: "20px", color: "#c9a96e" }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#f0e8d8",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#9e9080",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Seal */}
        <div
          className="mt-16 pt-12 flex flex-col items-center text-center"
          style={{ borderTop: "1px solid rgba(201,169,110,0.14)" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
            style={{ border: "1px solid rgba(201,169,110,0.45)" }}
          >
            <Award
              strokeWidth={1.2}
              style={{ width: "36px", height: "36px", color: "#c9a96e" }}
            />
          </div>
          <h3
            className="font-display font-bold mb-3"
            style={{ fontSize: "22px", color: "#f0e8d8" }}
          >
            Selo de Qualidade
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#9e9080",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
          >
            Certificados em técnicas avançadas de barbearia e comprometidos
            com a excelência no atendimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
