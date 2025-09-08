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

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const rotateGlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container principal
export const TestimonialsContainer = styled.section`
  /* padding: 6rem 2rem; */
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
  /* background-size: 200% 200%; */
  animation: ${gradientShift} 3s ease infinite;
`;

// Grid dos testimonials
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

// Card dos testimonials
export const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  min-width: 350px;
  max-width: 350px;
  height: auto;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.15);
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

  @media (max-width: 768px) {
    min-width: 320px;
    max-width: 320px;
    padding: 1.5rem;
  }
`;

// Imagem do testimonial
export const TestimonialImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(251, 191, 36, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

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

// Avatar do cliente
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
    z-index: -1;
    animation: ${rotateGlow} 3s linear infinite;
  }
`;

// Nome do cliente
export const ClientName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Profissão/título
export const ClientTitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

// Citação
export const Quote = styled.blockquote`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
  height: 150px;

  &::before {
    content: '"';
    position: absolute;
    left: -10px;
    top: -20px;
    font-size: 3rem;
    color: rgba(251, 191, 36, 0.5);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

// Estrelas de avaliação
export const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface StarProps {
  delay?: number;
}

export const Star = styled.span<StarProps>`
  color: #fbbf24;
  font-size: 1.2rem;
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`;

// Placeholder para quando não há imagem
export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2.5s infinite;
  }
`;

// Ícone de verificado
export const VerifiedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(45deg, #10b981, #059669);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Stats de resultado
export const ResultStats = styled.div`
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  margin-top: auto;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #fbbf24, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
`;

// Carrossel Container

export const infiniteScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-280px * 6 - 2rem * 6)); }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 3rem;
  padding: 1rem 0;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${infiniteScroll} 25s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    animation: infiniteScrollMobile 20s linear infinite;

    @keyframes infiniteScrollMobile {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-250px * 6 - 1rem * 6));
      }
    }
  }
`;
