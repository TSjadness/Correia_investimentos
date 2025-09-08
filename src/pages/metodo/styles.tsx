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
  50% { transform: scale(1.02); }
`;

export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const rotateIcon = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Container principal
export const WhyMethodContainer = styled.section`
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

// Título
export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
`;

// Lista de benefícios
export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  /* margin: 0 0 4rem 0; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 15px;
  transform: translateX(-100px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover {
    transform: translateX(10px);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);
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
      rgba(251, 191, 36, 0.1),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

interface BenefitIconProps {
  bgColor?: string;
  bgColorSecondary?: string;
}

export const BenefitIcon = styled.div<BenefitIconProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${(props) => props.bgColor || "#fbbf24"},
    ${(props) => props.bgColorSecondary || "#f59e0b"}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      ${(props) => props.bgColor || "#fbbf24"},
      ${(props) => props.bgColorSecondary || "#f59e0b"},
      #fcd34d
    );
    z-index: -1;
    animation: ${rotateIcon} 6s linear infinite;
  }

  &:hover {
    animation: ${pulse} 0.6s ease;
  }
`;

export const BenefitText = styled.span`
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

// Grid dos vídeos
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Card dos vídeos
export const FloatingCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d, #fbbf24);
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
  }

  &:hover::before {
    opacity: 0.3;
  }
`;

// Container do vídeo
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, #1e293b, #334155);
  border: 1px solid rgba(251, 191, 36, 0.3);

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
    animation: ${shimmer} 3s infinite;
  }
`;

// Iframe do YouTube
export const VideoEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

// Placeholder do vídeo
export const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;

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

// Título do vídeo
export const VideoTitle = styled.h4`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Badge de "Ao Vivo" ou similar
export const LiveBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(45deg, #ef4444, #dc2626);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
`;
