// src/components/Footer/index.jsx
import React, { useState, useEffect } from "react";
import {
  Wrap,
  Inner,
  Brand,
  Logo,
  BrandText,
  Legal,
  CTAContainer,
  CTAButton,
  SocialLinks,
  SocialIcon,
  AnimatedBorder,
  ParticleEffect,
  GlowOrb,
  WaveEffect,
} from "./styles";
import { Mail, Instagram, Phone } from "lucide-react";
import logo from "../../images/logo.png";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("[data-footer-animate]");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:estoicismofinanceiro@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "https://wa.me/5521959584301?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!",
      label: "WhatsApp",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/gabriel.correia.ofc/",
      label: "Instagram",
    },
  ];

  const infoCards = [
    {
      title: "Escritório",
      content: "São Paulo, SP\nBrasil",
      icon: "🏢",
    },
    {
      title: "Horário",
      content: "Segunda à Sexta\n9h às 18h",
      icon: "🕒",
    },
    {
      title: "Especializações",
      content: "IPCA+6 • Crédito Privado\nDiversificação Global",
      icon: "💼",
    },
  ];

  const handleNewsletterSubmit = (e: any) => {
    e.preventDefault();
    // Lógica de newsletter aqui
    console.log("Newsletter:", email);
    setEmail("");
  };

  return (
    <Wrap
      role="contentinfo"
      data-footer-animate
      className={isVisible ? "visible" : ""}
    >
      <WaveEffect />
      <ParticleEffect>
        {[...Array(6)].map((_, i) => (
          <GlowOrb key={i} delay={`${i * 0.5}s`} />
        ))}
      </ParticleEffect>
      {/* 
      <FloatingElements>
        <span className="float-1">💰</span>
        <span className="float-2">📈</span>
        <span className="float-3">🎯</span>
        <span className="float-4">💎</span>
      </FloatingElements> */}

      <Inner className="container">
        <AnimatedBorder />

        <Brand className={isVisible ? "animate" : ""}>
          <a
            href="/"
            style={{ cursor: "pointer" }}
            aria-label="Ir para a página inicial"
          >
            <Logo src={logo} alt="Estoicismo Financeiro" loading="lazy" />
          </a>
          <BrandText>
            <strong>Estoicismo Financeiro</strong>
            <span>Inteligência financeira para o seu patrimônio</span>
          </BrandText>
        </Brand>

        {/* <InfoGrid>
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              delay={`${0.2 + index * 0.1}s`}
              className={isVisible ? "visible" : ""}
            >
              <div className="card-icon">{card.icon}</div>
              <div className="card-content">
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </div>
            </InfoCard>
          ))}
        </InfoGrid> */}
        {/* 
        <NewsletterSection className={isVisible ? "visible" : ""}>
          <h3>💌 Receba insights exclusivos</h3>
          <p>Estratégias e análises direto no seu email</p>
          <form onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">Quero receber ✨</NewsletterButton>
          </form>
        </NewsletterSection> */}

        <SocialLinks className={isVisible ? "visible" : ""}>
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              delay={`${0.1 + index * 0.1}s`}
            >
              {social.icon && React.createElement(social.icon, { size: 24 })}
            </SocialIcon>
          ))}
        </SocialLinks>

        <CTAContainer className={isVisible ? "visible" : ""}>
          <CTAButton
            href="https://pay.hotmart.com/B101104263Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Quero começar agora</span>
          </CTAButton>
        </CTAContainer>

        <Legal className={isVisible ? "visible" : ""}>
          © {year} Inteligência Financeira S.A. • Todos os direitos reservados.
          <br />
          <small>
            Desenvolvido com 💛 para transformar seu futuro financeiro
          </small>
        </Legal>
      </Inner>
    </Wrap>
  );
};
