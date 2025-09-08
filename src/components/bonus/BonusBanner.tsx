// BonusBanner.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  TitleGroup,
  Title,
  Banner,
  BonusText,
  CallText,
  CallTitle,
  CallDescription,
  FloatingElement,
  PulsingCircle,
  GiftIcon,
  AnimatedCard,
  FeatureList,
  FeatureItem,
  GlowEffect,
  ShimmerOverlay,
} from "./styles";
import GlobalCTA from "../Button";

export default function BonusBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector("[data-bonus-animate]");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const bonusFeatures = [
    {
      icon: "🎯",
      text: "Análise personalizada do seu perfil",
    },
    {
      icon: "📊",
      text: "Estratégias específicas para seu caso",
    },
    {
      icon: "💡",
      text: "Dicas exclusivas de alocação",
    },
    {
      icon: "🛡️",
      text: "Plano de proteção patrimonial",
    },
  ];

  return (
    <div className="container">
      <Container>
        <TitleGroup>
          <Title>🔥 BÔNUS EXCLUSIVO</Title>
        </TitleGroup>

        <Banner data-bonus-animate className={isVisible ? "visible" : ""}>
          <GlowEffect />
          <ShimmerOverlay />

          {/* <FloatingElement delay="0s">
          <GiftIcon>🎁</GiftIcon>
        </FloatingElement> */}

          <BonusText>
            Receba um presente especial ao se inscrever agora:
          </BonusText>

          <AnimatedCard>
            <PulsingCircle>
              <span>1h</span>
            </PulsingCircle>

            <CallText>
              <CallTitle>Call Individual com o Correia</CallTitle>
              <CallDescription>
                Uma hora inteira de conversa direta para falar sobre seu
                patrimônio, tirar dúvidas e receber orientação estratégica
                exclusiva.
              </CallDescription>
            </CallText>
          </AnimatedCard>

          <FeatureList>
            {bonusFeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                delay={`${0.2 + index * 0.1}s`}
                className={isVisible ? "visible" : ""}
              >
                <span className="icon">{feature.icon}</span>
                <span className="text">{feature.text}</span>
              </FeatureItem>
            ))}
          </FeatureList>

          <GlobalCTA
            href="https://pay.hotmart.com/B101104263Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero investir!
          </GlobalCTA>
          {/* 
        <FloatingElement delay="1s" direction="reverse">
          ⭐
        </FloatingElement> */}

          {/* <FloatingElement delay="0.5s" size="small">
          ✨
        </FloatingElement> */}
        </Banner>
      </Container>
    </div>
  );
}
