
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b1210;
    --bg-soft: #101a17;
    --card: #0f1b17;
    --muted: #0e1815;
    --text: #e8ffee;
    --subtext: #b5ffd0;
    --gold: #d4af37;
    --gold-strong: #f2c94c;
    --accent: #59ffa8;
    --danger: #ff6b6b;
    --glow: 0 0 30px rgba(89,255,168,.25);
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    color: var(--text);
    background: radial-gradient(1200px 600px at 50% -100px, #0f1c17 0%, #0b1210 60%);
    background-attachment: fixed;
  }

  a { color: var(--gold-strong); text-decoration: none; }
  a:hover { text-decoration: underline; }

  .container {
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
  }

  .glow {
    box-shadow: var(--glow);
  }
`;
