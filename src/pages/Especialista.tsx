import React, { useState, useEffect } from "react";
import {
  User,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  Shield,
} from "lucide-react";
import {
  Container,
  Section,
  TitleGroup,
  Title,
  HeroSection,
  ContentCard,
  ImagePlaceholder,
  IntroText,
  Description,
  InfoSection,
  InfoCard,
  InfoTitle,
  HighlightText,
  AnimatedIcon,
  Image,
} from "../pages/mentor/styles";
import perfil from "../images/perfil.png";

function Especialista() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el, index) => {
      el.id = `animate-${index}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const infoSections = [
    {
      icon: <User />,
      title: "Quem é Gabriel Correia?",
      content:
        "Assessor de investimentos sênior na InvestSmart, escritório credenciado à XP, e idealizador do Estoicismo Financeiro. Com mais de 8 anos de experiência, dedico minha carreira a ajudar famílias e empresários a proteger, multiplicar e organizar seu patrimônio.",
    },
    {
      icon: <TrendingUp />,
      title: "Especialização e Experiência",
      content:
        "Lidero um escritório de investimentos voltado para clientes de alta renda — médicos, advogados, executivos e empreendedores. Especializado em estratégias com IPCA+6, crédito privado e diversificação internacional.",
    },
    {
      icon: <Target />,
      title: "Metodologia e Abordagem",
      content:
        "Minha abordagem une visão de longo prazo, disciplina e método. Não acredito em atalhos fáceis, nem em fórmulas mágicas. O que funciona é estratégia: alocação inteligente, diversificação e visão global.",
    },
    {
      icon: <Shield />,
      title: "Filosofia Estoica",
      content:
        "A filosofia estoica me acompanha como princípio de vida e ferramenta financeira. Defendo que o patrimônio deve ser instrumento de liberdade, legado e realização, não fonte de ansiedade.",
    },
    {
      icon: <BookOpen />,
      title: "Objetivo do Curso",
      content:
        "Mostrar como aplicar os fundamentos do estoicismo na sua vida financeira, ajudando você a tomar decisões racionais e conquistar uma relação madura com o dinheiro.",
    },
    {
      icon: <Award />,
      title: "O Estoicismo Financeiro",
      content:
        "Não é sobre ter mais, é sobre ter melhor. É sobre construir riqueza com propósito e serenidade, sem deixar que a euforia ou o medo ditem os rumos do seu futuro.",
    },
  ];

  return (
    <div className="container">
      <Container>
        <Section>
          <TitleGroup>
            <Title>Quem é o especialista?</Title>
          </TitleGroup>

          <HeroSection>
            <ContentCard
              data-animate
              className={visibleElements.has("animate-0") ? "visible" : ""}
            >
              <IntroText>Gabriel Correia</IntroText>
              <Description>
                <HighlightText>Assessor de investimentos sênior</HighlightText>{" "}
                com anos de atuação prática no mercado. Especializado em
                estratégias com IPCA+6, crédito privado e diversificação
                internacional.
              </Description>
              <Description>
                <strong>Sua missão é simples:</strong> ajudar quem já tem
                dinheiro a tomar decisões com clareza e método.
              </Description>
            </ContentCard>

            <ImagePlaceholder data-animate>
              <AnimatedIcon>
                <Image src={perfil} alt="Perfil de Gabriel Correia" />
              </AnimatedIcon>
            </ImagePlaceholder>
          </HeroSection>
        </Section>

        {infoSections.map((section, index) => (
          <Section key={index}>
            <InfoSection>
              <InfoCard
                data-animate
                direction={index % 2 === 0 ? "left" : "right"}
                className={
                  visibleElements.has(`animate-${index + 1}`) ? "visible" : ""
                }
              >
                <InfoTitle>
                  <AnimatedIcon>{section.icon}</AnimatedIcon>
                  {section.title}
                </InfoTitle>
                <Description>{section.content}</Description>
              </InfoCard>
            </InfoSection>
          </Section>
        ))}
      </Container>
    </div>
  );
}

export default Especialista;
