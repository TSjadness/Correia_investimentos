// styles.js
import styled, { keyframes } from "styled-components";

// Animações
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
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

export const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

// Styled Components
export const Container = styled.div`
  color: white;
  overflow-x: hidden;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
  margin-bottom: 4rem;
  text-align: center;
  width: 100%;
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
  text-align: center;
`;

// export const HeroSection = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4rem;
//   width: 100%;
//   align-items: start;
//   margin-bottom: 4rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     grid-template-areas:
//       "image"
//       "content"; /* inverter no mobile */
//     gap: 2rem;
//     text-align: center;
//   }
// `;
export const HeroSection = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  align-items: start;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* inverte no mobile */
    text-align: center;
    gap: 2rem;
  }
`;

export const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    height: 300px;
    font-size: 3rem;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: auto;

  background: linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  animation: ${pulse} 4s ease-in-out infinite;
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }

  @media (max-width: 768px) {
    height: 300px;
    font-size: 3rem;
  }
`;

export const IntroText = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
`;

interface InfoCardProps {
  direction?: "left" | "right";
}

export const InfoCard = styled.div<InfoCardProps>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transform: translateX(
    ${(props) => (props.direction === "left" ? "-100px" : "100px")}
  );
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);
  }
`;

export const InfoTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

export const HighlightText = styled.span`
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const AnimatedIcon = styled.div`
  font-size: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;
