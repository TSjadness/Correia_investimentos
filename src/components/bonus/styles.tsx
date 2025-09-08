// bonus/styles.js
import styled, { keyframes } from "styled-components";

// Animações
const float = keyframes`
  from { 
    transform: translateY(0px) 
  }
  50% { 
    transform: translateY(-10px) 
  }
  to { 
    transform: translateY(0px) 
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(251, 191, 36, 0);
  }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
  }
`;

// Styled Components
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
`;

export const Banner = styled.div`
  position: relative;
  border-radius: 25px;
  padding: 3rem 2rem;
  border: 2px solid rgba(251, 191, 36, 0.2);
  /* background: linear-gradient(
    135deg,
    rgba(30, 50, 42, 0.9),
    rgba(20, 32, 27, 0.95),
    rgba(15, 25, 20, 0.9)
  ); */
  backdrop-filter: blur(20px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    /* border-color: rgba(251, 191, 36, 0.4); */
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    /* background: linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d, #fbbf24); */
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 25px 25px 0 0;
  }
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  /* background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d, #fbbf24); */
  background-size: 400% 400%;
  border-radius: 27px;
  z-index: -1;
  animation: ${gradientShift} 4s ease infinite;
  opacity: 0.6;
  filter: blur(10px);
`;

export const ShimmerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: ${shimmer} 3s infinite;
`;

export const BonusText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`;

export const AnimatedCard = styled.div`
  background: rgba(251, 191, 36, 0.1);
  border: 2px solid rgba(251, 191, 36, 0.3);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: ${glow} 4s ease-in-out infinite;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(251, 191, 36, 0.15);
    border-color: rgba(251, 191, 36, 0.5);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const PulsingCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  /* animation: ${pulse} 2s ease-in-out infinite; */
  /* box-shadow: 0 0 30px rgba(251, 191, 36, 0.4); */
  flex-shrink: 0;

  span {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const CallText = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CallTitle = styled.h3`
  color: #fbbf24;
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CallDescription = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  font-weight: 400;
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

interface FeatureItemProps {
  delay: string;
}

export const FeatureItem = styled.div<FeatureItemProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform: translateY(30px);
  opacity: 0;
  animation-delay: ${(props) => props.delay};

  &.visible {
    animation: ${slideInLeft} 0.6s ease forwards;
  }

  &:nth-child(even).visible {
    animation: ${slideInRight} 0.6s ease forwards;
  }

  &:hover {
    background: rgba(251, 191, 36, 0.1);
    border-color: rgba(251, 191, 36, 0.3);
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.5rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  .text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    font-weight: 500;
    flex: 1;
  }
`;

interface FloatingElementProps {
  delay?: string;
  direction?: "normal" | "reverse";
  size?: "small" | "normal";
}

export const FloatingElement = styled.div<FloatingElementProps>`
  position: absolute;
  font-size: ${(props) => (props.size === "small" ? "1rem" : "1.5rem")};
  animation:
    ${float} ${(props) => (props.direction === "reverse" ? "4s" : "6s")}
      ease-in-out infinite
      ${(props) => (props.direction === "reverse" ? "reverse" : "normal")},
    ${rotate} 20s linear infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0.7;
  z-index: 1;

  &:nth-child(1) {
    top: 20px;
    right: 30px;
  }

  &:nth-child(7) {
    bottom: 30px;
    left: 30px;
  }

  &:nth-child(8) {
    top: 50%;
    right: 20px;
  }
`;

export const GiftIcon = styled.div`
  font-size: 3rem;
  /* animation:
    ${float} 4s ease-in-out infinite,
    ${pulse} 3s ease-in-out infinite; */
  /* filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5)); */
`;
