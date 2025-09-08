// Metodo.jsx
import React, { useState, useEffect } from "react";
import {
  MetodoSection,
  Container,
  Title,
  ContentGrid,
  MethodCard,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription,
  FloatingElement,
  GlowEffect,
  TitleGroup,
} from "./styles";

export default function Metodo() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const index = (entry.target as HTMLElement).dataset.index;
              return new Set([...prev, index]);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll("[data-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const metodosData = [
    {
      icon: "📊",
      title: "Juros Reais & Ciclo Econômico",
      description: "Juros reais & ciclo econômico como bússola.",
      gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)",
      delay: "0s",
    },
    {
      icon: "🛡️",
      title: "Proteção & Liquidez",
      description: "Regras claras de liquidez e proteção.",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      delay: "0.2s",
    },
    {
      icon: "🎯",
      title: "Filtro Comportamental",
      description: "Filtro contra ruído e vieses comportamentais.",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: "0.4s",
    },
    {
      icon: "🌍",
      title: "Exposição Global",
      description: "Exposição global com racionalidade.",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
      delay: "0.6s",
    },
  ];

  return (
    <MetodoSection>
      {/* <FloatingElement delay="0s" top="10%" left="5%">
        💎
      </FloatingElement>
      <FloatingElement delay="2s" top="20%" right="8%" size="small">
        ⚡
      </FloatingElement>
      <FloatingElement delay="4s" bottom="15%" left="10%" direction="reverse">
        🔥
      </FloatingElement>
      <FloatingElement delay="1s" bottom="25%" right="5%" size="small">
        ✨
      </FloatingElement> */}

      <Container>
        <TitleGroup>
          <Title as="h2">O Método</Title>
        </TitleGroup>

        <ContentGrid>
          {metodosData.map((metodo, index) => (
            <MethodCard
              key={index}
              data-card
              data-index={index}
              className={visibleCards.has(index.toString()) ? "visible" : ""}
              delay={metodo.delay}
              gradient={metodo.gradient}
            >
              <GlowEffect gradient={metodo.gradient} />

              <CardIcon gradient={metodo.gradient}>{metodo.icon}</CardIcon>

              <CardContent>
                <CardTitle>{metodo.title}</CardTitle>
                <CardDescription>{metodo.description}</CardDescription>
              </CardContent>
            </MethodCard>
          ))}
        </ContentGrid>
      </Container>
    </MetodoSection>
  );
}
