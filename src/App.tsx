import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import Home from "./pages/Home";
import Metodo from "./pages/metodo_2/Metodo";
import Depoimentos from "./pages/Depoimentos";
import Especialista from "./pages/Especialista";
import Comparativo from "./pages/comparativo/Comparativo";
import Bonus from "./pages/Bonus";
import FAQPage from "./pages/FAQPage";
// import Contato from "./pages/contact/Contato";
import NotFound from "./pages/notfound/NotFound";
import Contato from "./pages/contact/ContactForm";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/especialista" element={<Especialista />} />
        <Route path="/comparativo" element={<Comparativo />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
