import React, { useState } from "react";
import {
  HeroContainer,
  Container,
  Header,
  Logo,
  LogoIcon,
  CompanyInfo,
  CompanyName,
  CompanyTagline,
  Title,
  Subtitle,
  VideoCard,
  VideoContainer,
  VideoEmbed,
  VideoPlaceholder,
  CTAButton,
  CTAContainer,
  TitleGroup,
  FotoLogo,
} from "./styles";
import GlobalCTA from "../../components/Button";
import logo from "../../images/logo.png";

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // ID do vídeo do YouTube - você pode alterar este ID
  const videoId = "dQw4w9WgXcQ";

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="container">
      <HeroContainer>
        <Container>
          <Header>
            <Logo>
              <FotoLogo src={logo} alt="Correia Investimentos" loading="lazy" />

              {/* <CompanyInfo>
                <CompanyName>Correia Investimentos</CompanyName>
                <CompanyTagline>
                  Inteligência financeira para o seu patrimônio
                </CompanyTagline>
              </CompanyInfo> */}
            </Logo>
          </Header>

          <TitleGroup>
            <Title>Multiplique seu patrimônio com estratégia</Title>
          </TitleGroup>

          <Subtitle>
            O método financeiro para quem já tem dinheiro – e quer parar de
            errar nas decisões
          </Subtitle>

          <VideoCard>
            <VideoContainer>
              {videoLoaded ? (
                <VideoEmbed
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1&autoplay=0`}
                  title="Multiplique seu patrimônio com estratégia"
                  allowFullScreen
                />
              ) : (
                <VideoPlaceholder onClick={handleVideoLoad}>
                  <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                    ▶️
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "center",
                      padding: "0 2rem",
                      fontWeight: "600",
                    }}
                  >
                    Clique para assistir
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      textAlign: "center",
                      padding: "0 2rem",
                      marginTop: "0.5rem",
                      opacity: 0.9,
                    }}
                  >
                    O método que vai transformar sua relação com o dinheiro
                  </div>
                </VideoPlaceholder>
              )}
            </VideoContainer>
          </VideoCard>

          <GlobalCTA href="/contato">Quero investir com inteligência</GlobalCTA>
        </Container>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
