import styled, { keyframes } from "styled-components";

// Animações
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Container principal
export const HeroContainer = styled.section`
  padding-top: 2rem;

  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
`;

// Header com logo
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.2s forwards;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const FotoLogo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
    z-index: -1;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CompanyTagline = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
`;

// Título principal

export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  line-height: 1.2;
  opacity: 0;
  animation:
    ${fadeInUp} 0.8s ease-out 0.4s forwards,
    ${gradientShift} 3s ease infinite;
`;

// Subtítulo
export const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.6s forwards;
`;

// Card do vídeo
export const VideoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 25px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 900px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.8s forwards;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d, #fbbf24);
    border-radius: 27px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
  }

  &:hover::before {
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.15);
  }
`;

// Container do vídeo
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #1e293b, #334155);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(251, 191, 36, 0.2),
      transparent
    );
    animation: ${shimmer} 4s infinite;
  }
`;

// Iframe do YouTube
export const VideoEmbed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
`;

// Placeholder do vídeo
export const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

// Botão CTA
export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 2rem auto 0;
  background: linear-gradient(135deg, #d4af37, #f2c94c);
  color: #111;
  font-weight: 800;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(242, 201, 76, 0.25);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 1s forwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(242, 201, 76, 0.4);
    color: #000;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
