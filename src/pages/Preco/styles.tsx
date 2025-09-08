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

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
  }
`;

export const PricingContainer = styled.section`
  /* background: linear-gradient(
    135deg,
    rgba(30, 50, 42, 0.95),
    rgba(20, 32, 27, 0.98),
    rgba(15, 25, 20, 0.95)
  );
  padding: 5rem 0;
  min-height: 100vh; */
  display: flex;
  align-items: center;
  position: relative;

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
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;

export const TitleGroup = styled.div`
  text-align: center;
  animation: ${float} 6s ease-in-out infinite;
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
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  letter-spacing: -0.02em;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 20px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(251, 191, 36, 0.1);
    border-color: rgba(251, 191, 36, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  /* &::before {
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
    animation: ${shimmer} 3s infinite;
  } */
`;

export const CheckIcon = styled.div`
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
  animation: ${glow} 4s ease-in-out infinite;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-weight: 400;
`;

export const PriceColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid #10b981;
  position: sticky;
  top: 2rem;
  max-width: 350px;
  width: 100%;
  position: relative;
  overflow: hidden;
  /* animation: ${glow} 4s ease-in-out infinite; */

  /* &:hover {
    border-color: linear-gradient(135deg, #10b981, #059669);
    transform: translateY(-5px);
  } */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 25px 25px 0 0;
  }

  @media (max-width: 1024px) {
    position: static;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const PriceLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const InstallmentText = styled.div`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const PriceValue = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const PriceInstallments = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
`;

export const OriginalPrice = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-bottom: 0.5rem;
`;

export const CTAButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

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
    transition: left 0.5s;
  }

  /* Efeito de espelhamento */
  &::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.3),
      rgba(5, 150, 105, 0.3)
    );
    border-radius: 15px;
    transform: scaleY(-1);
    opacity: 0.4;
    filter: blur(2px);
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 0.6;
      bottom: -105%;
      filter: blur(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0.7;
`;

export const PaymentIcon = styled.div`
  font-size: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  filter: grayscale(50%);

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
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
    rgba(251, 191, 36, 0.1),
    transparent
  );
  animation: ${shimmer} 3s infinite;
`;
