// MentorProfile.jsx
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
} from "./styles";
import perfil from "../../images/perfil.png";

function MentorProfile() {
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
            <Title>Quem é o seu mentor em finanças?</Title>
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
                {/* <img src={perfil} alt="Perfil de Gabriel Correia"  /> */}
                <Image src={perfil} alt="Perfil de Gabriel Correia" />
              </AnimatedIcon>
            </ImagePlaceholder>
          </HeroSection>
        </Section>
      </Container>
    </div>
  );
}

export default MentorProfile;
