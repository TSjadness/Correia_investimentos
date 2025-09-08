// src/components/Footer/styles.js
import styled, { keyframes } from "styled-components";

// Animações
const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
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

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 0.7;
  }
  50% { 
    transform: scale(1.2);
    opacity: 1;
  }
`;

const wave = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
  }
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

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
export const Wrap = styled.footer`
  position: relative;
  border-top: 2px solid rgba(251, 191, 36, 0.2);
  margin-top: 80px;
  padding: 0.5rem 0 1rem;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(15, 15, 15, 0.95) 30%,
    rgba(25, 25, 25, 0.9) 100%
  );
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  padding-top: 3rem;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    /* background: linear-gradient(90deg, transparent, #fbbf24, transparent);
    animation: ${wave} 3s infinite; */
  }
`;

export const WaveEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: 
    radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(252, 211, 77, 0.05) 0%, transparent 50%); */
  z-index: 0;
`;

export const ParticleEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

interface GlowOrbProps {
  delay: string;
}

export const GlowOrb = styled.div<GlowOrbProps>`
  position: absolute;
  width: ${Math.random() * 6 + 4}px;
  height: ${Math.random() * 6 + 4}px;
  border-radius: 50%;
  /* background: radial-gradient(circle, #fbbf24, transparent); */
  top: ${Math.random() * 100}%;
  left: ${Math.random() * 100}%;
  animation: ${pulse} ${Math.random() * 3 + 2}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  opacity: 0.6;
`;

export const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;

  .float-1,
  .float-2,
  .float-3,
  .float-4 {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.3;
    animation: ${float} 6s ease-in-out infinite;
  }

  .float-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .float-2 {
    top: 30%;
    right: 15%;
    animation-delay: 1.5s;
  }

  .float-3 {
    bottom: 25%;
    left: 20%;
    animation-delay: 3s;
  }

  .float-4 {
    bottom: 35%;
    right: 25%;
    animation-delay: 4.5s;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 960px) {
    padding: 3rem 1.5rem 1.5rem;
    gap: 2rem;
  }
`;

export const AnimatedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  /* background: linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d, #fbbf24); */
  background-size: 300% 300%;
  animation: ${gradientShift} 4s ease infinite;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  transition: all 0.3s ease;
  /* animation: ${glow} 4s ease-in-out infinite; */

  /* &:hover {
    transform: scale(1.1) rotate(5deg);
     border-color: rgba(251, 191, 36, 0.5); 
  } */

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  strong {
    color: #fbbf24;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  span {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0.9;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface InfoCardProps {
  delay: string;
}

export const InfoCard = styled.div<InfoCardProps>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: ${(props) => props.delay};

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    background: rgba(251, 191, 36, 0.1);
    border-color: rgba(251, 191, 36, 0.3);
    transform: translateY(-5px);
  }

  .card-icon {
    font-size: 2rem;
    animation: ${float} 4s ease-in-out infinite;
  }

  .card-content {
    h4 {
      color: #fbbf24;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      line-height: 1.4;
      white-space: pre-line;
    }
  }
`;

export const NewsletterSection = styled.div`
  background: rgba(251, 191, 36, 0.1);
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${glow} 4s ease-in-out infinite;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  h3 {
    color: #fbbf24;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  form {
    display: flex;
    gap: 0.5rem;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #f59e0b, #fbbf24);
    transform: translateY(-2px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface SocialIconProps {
  delay: string;
}

export const SocialIcon = styled.a<SocialIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${(props) => props.delay};
  transform: translateY(30px);
  opacity: 0;
  text-decoration: none;

  &:hover {
    background: rgba(251, 191, 36, 0.2);
    border-color: rgba(251, 191, 36, 0.4);
    transform: translateY(-3px) scale(1.1);
    text-decoration: none;
  }
`;

export const CTAContainer = styled.div`
  text-align: center;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: 0.6s;

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CTAButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 700;
  color: #000000;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  border: none;
  border-radius: 50px;
  box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.4);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  animation: ${glow} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 35px 60px -12px rgba(251, 191, 36, 0.6);
    text-decoration: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    animation: ${shimmer} 1s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #fcd34d, #fbbf24);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%);
    z-index: 2;
  }

  span {
    position: relative;
    z-index: 3;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
`;

export const Legal = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px dashed rgba(251, 191, 36, 0.2);
  margin-top: 2rem;
  padding-top: 2rem;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  small {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
  }
`;

// Exports adicionais para compatibilidade
export const Links = styled.nav`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.95rem;
    opacity: 0.9;
    border-bottom: 1px solid transparent;
    transition: 200ms ease;

    &:hover {
      color: #fbbf24;
      border-bottom-color: #fbbf24;
      text-decoration: none;
    }
  }
`;

export const ContactInfo = styled.div`
  /* Manter para compatibilidade se necessário */
`;
