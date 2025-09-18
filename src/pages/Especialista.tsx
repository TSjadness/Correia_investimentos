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
      title: "Filosofia Estoica",
      content:
        "A filosofia estoica me acompanha como princípio de vida e como ferramenta para o dinheiro. É ela que me guia na defesa de que o patrimônio não deve ser fonte de ansiedade, mas sim um instrumento de liberdade, legado e realização.",
    },
    {
      icon: <TrendingUp />,
      title: "Objetivo",
      content:
        "Meu objetivo neste curso é mostrar como aplicar os fundamentos do estoicismo na sua vida financeira, ajudando você a tomar decisões racionais, blindar seu patrimônio das armadilhas emocionais do mercado e conquistar uma relação madura, simples e sólida com o dinheiro.",
    },
    {
      icon: <Target />,
      title: "Estoicismo Financeiro",
      content:
        "O Estoicismo Financeiro não é sobre ter mais, é sobre ter melhor. É sobre construir riqueza com propósito e serenidade, sem deixar que a euforia ou o medo ditem os rumos do seu futuro.",
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
                Olá! Sou
                <HighlightText> Gabriel Correia</HighlightText> , assessor de
                investimentos sênior na InvestSmart, escritório credenciado à
                XP, e idealizador do Estoicismo Financeiro.
                <br />
                Sou assessor há mais de 8 anos e dedico minha carreira a ajudar
                famílias e empresários a proteger, multiplicar e organizar seu
                patrimônio. Hoje, lidero um escritório de investimentos voltado
                para clientes de alta renda — médicos, advogados, executivos e
                empreendedores que, assim como você, buscam segurança, clareza e
                estratégia.
              </Description>

              <Description>
                Minha abordagem une visão de longo prazo, disciplina e método.
                Não acredito em atalhos fáceis, nem em fórmulas mágicas de
                enriquecimento rápido. O que funciona, de verdade, é estratégia:
                alocação inteligente, diversificação, visão global e, acima de
                tudo, cabeça fria para atravessar crises sem perder o rumo.
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
