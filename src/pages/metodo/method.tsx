// WhyMethodWorks.jsx
import React, { useState } from "react";
import {
  WhyMethodContainer,
  Container,
  TitleGroup,
  Title,
  BenefitsList,
  BenefitItem,
  BenefitIcon,
  BenefitText,
  Grid,
  FloatingCard,
  VideoContainer,
  VideoEmbed,
  VideoPlaceholder,
  VideoTitle,
  LiveBadge,
} from "./styles";

function WhyMethodWorks() {
  const benefits = [
    {
      icon: "📊",
      text: "Alocação baseada em juros reais e ciclo econômico",
      bgColor: "#3b82f6",
      bgColorSecondary: "#1d4ed8",
    },
    {
      icon: "🛡️",
      text: "Estratégia de liquidez e proteção de capital",
      bgColor: "#fbbf24",
      bgColorSecondary: "#f59e0b",
    },
    {
      icon: "🎯",
      text: "Tomada de decisão fria e sem ruído",
      bgColor: "#ec4899",
      bgColorSecondary: "#be185d",
    },
    {
      icon: "🌍",
      text: "Diversificação global com racionalidade",
      bgColor: "#06b6d4",
      bgColorSecondary: "#0891b2",
    },
  ];

  const videoIds = ["dQw4w9WgXcQ", "ysz5S6PUM-U", "Zi_XLOBDo_Y", "KT7F9gEfhRU"];

  const videoTitles = [
    "Fundamentos do Estoicismo Financeiro",
    "Estratégias de Alocação Inteligente",
    "Proteção Patrimonial na Prática",
    "Diversificação Global Estratégica",
  ];

  type VideoEmbedComponentProps = {
    id: string;
    title: string;
    index: number;
  };

  const VideoEmbedComponent: React.FC<VideoEmbedComponentProps> = ({
    id,
    title,
    index,
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <FloatingCard className="visible">
        <VideoContainer>
          {index === 0 && <LiveBadge>🔴 Ao Vivo</LiveBadge>}
          {isLoaded ? (
            <VideoEmbed
              src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&modestbranding=1`}
              title={title}
              allowFullScreen
            />
          ) : (
            <VideoPlaceholder onClick={() => setIsLoaded(true)}>
              <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>▶️</div>
              <div
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  padding: "0 1rem",
                }}
              >
                Clique para carregar
              </div>
            </VideoPlaceholder>
          )}
        </VideoContainer>
        <VideoTitle>{title}</VideoTitle>
      </FloatingCard>
    );
  };

  return (
    <div className="container">
      <WhyMethodContainer>
        <Container>
          <TitleGroup>
            <Title>Por que este método funciona?</Title>
          </TitleGroup>

          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} className="visible">
                <BenefitIcon
                  bgColor={benefit.bgColor}
                  bgColorSecondary={benefit.bgColorSecondary}
                >
                  {benefit.icon}
                </BenefitIcon>
                <BenefitText>{benefit.text}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitsList>

          {/* <Grid>
            {videoIds.map((id, index) => (
              <VideoEmbedComponent
                key={id}
                id={id}
                title={videoTitles[index]}
                index={index}
              />
            ))}
          </Grid> */}
        </Container>
      </WhyMethodContainer>
    </div>
  );
}

export default WhyMethodWorks;
