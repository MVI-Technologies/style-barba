# ✂️ The Gentleman's Cut - Landing Page para Barbearia

Uma landing page moderna e elegante para barbearias, construída com React, TypeScript e Tailwind CSS. Design premium com tema escuro e detalhes dourados que transmite sofisticação e profissionalismo.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)

## ✨ Funcionalidades

- 🎨 **Design Premium** - Interface elegante com tema escuro e acentos dourados
- 📱 **Totalmente Responsivo** - Adaptado para todos os dispositivos
- 💬 **Integração WhatsApp** - Botões de agendamento direto pelo WhatsApp
- ⚡ **Performance Otimizada** - Construído com Vite para carregamento ultra-rápido
- 🧩 **Componentes Reutilizáveis** - Baseado em ShadCN UI

## 📋 Seções da Página

| Seção | Descrição |
|-------|-----------|
| **Hero** | Banner principal com estatísticas e chamada para ação |
| **Sobre** | Apresentação da barbearia e sua história |
| **Serviços** | Cards com serviços, preços e duração |
| **Diferenciais** | O que torna a barbearia única |
| **Depoimentos** | Avaliações de clientes satisfeitos |
| **Galeria** | Fotos do ambiente e trabalhos realizados |
| **CTA** | Chamada final para agendamento |
| **Footer** | Informações de contato e horários |

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/style-barba.git

# Acesse a pasta do projeto
cd style-barba

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o linter no código |

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[ShadCN UI](https://ui.shadcn.com/)** - Componentes acessíveis e customizáveis
- **[React Router](https://reactrouter.com/)** - Roteamento para React
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes React
│   ├── ui/              # Componentes base (ShadCN)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── DifferentialsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── GallerySection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
├── pages/               # Páginas da aplicação
└── main.tsx             # Ponto de entrada
```

## 🎨 Personalização

### Cores

As cores do tema podem ser ajustadas no arquivo `src/index.css` através das variáveis CSS:

```css
:root {
  --primary: /* Cor dourada principal */
  --background: /* Cor de fundo */
  --foreground: /* Cor do texto */
  /* ... outras variáveis */
}
```

### Informações da Barbearia

Para personalizar com os dados da sua barbearia, edite os seguintes arquivos:

- **WhatsApp**: Altere o número em `HeroSection.tsx` e `ServicesSection.tsx`
- **Serviços e Preços**: Edite o array `services` em `ServicesSection.tsx`
- **Contato e Endereço**: Atualize as informações em `Footer.tsx`
- **Imagens**: Substitua os arquivos em `src/assets/`

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ♠ para homens de estilo
</p>
