# Pitbull Apostas — Landing Page Premium

Site institucional premium para a marca Pitbull Apostas, desenvolvido com React + Vite + Tailwind CSS + Framer Motion.

## Tecnologias

- **React 18** com hooks
- **Vite** para bundling
- **Tailwind CSS** para utilidades
- **Framer Motion** para animações

## Instalação e uso

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Pré-visualizar build
npm run preview
```

## Estrutura do projeto

```
src/
  components/
    Header.jsx       — Header fixo com nav responsiva
    Hero.jsx         — Seção principal com partículas e CTAs
    About.jsx        — Cards institucionais
    Social.jsx       — Cards das redes sociais
    Metrics.jsx      — Estatísticas e ticker de odds
    CtaBand.jsx      — Banda de conversão
    Footer.jsx       — Rodapé premium
    Particles.jsx    — Canvas de partículas douradas
  App.jsx
  main.jsx
  index.css
```

## Personalização

### Links das redes sociais
Substitua os placeholders nos componentes `Hero.jsx`, `Social.jsx`, `CtaBand.jsx` e `Footer.jsx`:

```jsx
href="https://discord.gg/SEU_SERVIDOR"
href="https://wa.me/SEU_NUMERO"
href="https://instagram.com/SEU_PERFIL"
href="https://tiktok.com/@SEU_PERFIL"
```

## Deploy na Vercel

1. Faça push do projeto para um repositório GitHub
2. Importe o repositório na Vercel
3. As configurações de build são detectadas automaticamente

---

© 2026 Pitbull Apostas
