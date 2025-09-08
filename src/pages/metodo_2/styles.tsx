// styles.js - Metodo Styled Components
import styled, { keyframes } from "styled-components";

// Animações
const float = keyframes`
  from { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-15px) rotate(180deg);
  }
  to { 
    transform: translateY(0px) rotate(360deg);
  }
`;

const floatTitle = keyframes`
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
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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
  }
  50% { 
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glow = keyframes`
  0%, 100% { 
    opacity: 0.5;
    filter: blur(20px);
  }
  50% { 
    opacity: 0.8;
    filter: blur(25px);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px) rotateY(-30deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotateY(0deg);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px) rotateY(30deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotateY(0deg);
  }
`;

export const MetodoSection = styled.section`
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
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

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    animation: ${float} 20s linear infinite;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

export const TitleGroup = styled.div`
  text-align: center;
  animation: ${floatTitle} 6s ease-in-out infinite;
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  letter-spacing: -0.02em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    filter: blur(20px);
    opacity: 0.5;
    z-index: -1;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

interface MethodCardProps {
  delay?: string;
  gradient?: string;
}

export const MethodCard = styled.div<MethodCardProps>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(50px) rotateX(10deg);
  opacity: 0;
  overflow: hidden;
  cursor: pointer;

  &.visible {
    animation: ${fadeInUp} 0.8s ease forwards;
    animation-delay: ${(props) => props.delay || "0s"};
  }

  &:nth-child(odd).visible {
    animation: ${slideInFromLeft} 0.8s ease forwards;
    animation-delay: ${(props) => props.delay || "0s"};
  }

  &:nth-child(even).visible {
    animation: ${slideInFromRight} 0.8s ease forwards;
    animation-delay: ${(props) => props.delay || "0s"};
  }

  &:hover {
    transform: translateY(-10px) rotateX(0deg) scale(1.02);
    border-color: rgba(251, 191, 36, 0.5);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 50px rgba(251, 191, 36, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) =>
      props.gradient || "linear-gradient(90deg, #fbbf24, #f59e0b)"};
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 20px 20px 0 0;
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
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 4s infinite;
    animation-delay: ${(props) => props.delay || "0s"};
  }
`;

interface GlowEffectProps {
  gradient?: string;
}

export const GlowEffect = styled.div<GlowEffectProps>`
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: ${(props) =>
    props.gradient || "linear-gradient(45deg, #fbbf24, #f59e0b)"};
  border-radius: 24px;
  z-index: -1;
  animation: ${glow} 3s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MethodCard}:hover & {
    opacity: 0.6;
  }
`;

interface CardIconProps {
  gradient?: string;
}

export const CardIcon = styled.div<CardIconProps>`
  width: 80px;
  height: 80px;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #fbbf24, #f59e0b)"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    background: ${(props) =>
      props.gradient || "linear-gradient(135deg, #fbbf24, #f59e0b)"};
    border-radius: 22px;
    z-index: -1;
    filter: blur(10px);
    opacity: 0.7;
  }

  ${MethodCard}:hover & {
    animation: ${pulse} 1s ease-in-out infinite;
  }
`;

export const CardContent = styled.div`
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;

  ${MethodCard}:hover & {
    color: #fcd34d;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-weight: 400;
  transition: color 0.3s ease;

  ${MethodCard}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`;

interface FloatingElementProps {
  delay?: string;
  direction?: "normal" | "reverse";
  size?: "small" | "normal";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const FloatingElement = styled.div<FloatingElementProps>`
  position: absolute;
  font-size: ${(props) => (props.size === "small" ? "1.5rem" : "2rem")};
  animation: ${float}
    ${(props) => (props.direction === "reverse" ? "8s" : "6s")} ease-in-out
    infinite
    ${(props) => (props.direction === "reverse" ? "reverse" : "normal")};
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0.6;
  z-index: 1;
  pointer-events: none;
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5));

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
