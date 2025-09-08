
# Inteligência Financeira — React + TypeScript (sem Vite)

- **Stack**: Create React App + TypeScript, React Router v6, styled-components v6, framer-motion.
- **Estilo**: Dark elegante com títulos em dourado e bullets em verde neon (conforme imagens).
- **Páginas**: Home, Método, Depoimentos, Especialista, Comparativo, Bônus, FAQ, Contato.
- **Formulário**: Envio por [formsubmit.co] (opção simples) **ou** EmailJS (opção via JS).

## Como rodar
```bash
npm i
npm start
```
Abra `http://localhost:3000`.

## Configurar envio de e-mail
1) Copie `.env.sample` para `.env` e escolha UMA das opções:

**Opção A (recomendada pela simplicidade):**
```env
REACT_APP_FORM_SUBMIT_EMAIL=seu-email@exemplo.com
```
Pronto. O envio usa o FormSubmit em modo AJAX.

**Opção B (EmailJS):**
```env
REACT_APP_EMAILJS_SERVICE_ID=xxx
REACT_APP_EMAILJS_TEMPLATE_ID=xxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxx
```
Crie as chaves em: https://www.emailjs.com/

## Deploy na Vercel
- Este projeto é um SPA (CRA). Faça o deploy com a **framework preset "Create React App"**.
- Configure as variáveis de ambiente no painel (Environment Variables).
- Se usar rotas do React Router, ative fallback para `index.html` (a Vercel já faz isso por padrão para CRA).

## Estrutura
```
src/
  assets/              # imagens de referência
  components/          # componentes reutilizáveis (cards, vídeo, etc.)
  pages/               # páginas
  styles/              # global + theme
  App.tsx              # rotas
  index.tsx
```

## Ajustes visuais
- Efeitos "flutuantes" via `framer-motion` + keyframes CSS nos títulos e cards.
- Layout responsivo com grid e breakpoints simples.
- Cores em variáveis CSS.
"# Correia_investimentos" 
