import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const float = keyframes`
  from { transform: translateY(0px) }
  50%  { transform: translateY(-10px) }
  to   { transform: translateY(0px) }
`;

// Container principal
export const Container = styled.div`
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

// Header
export const Header = styled.div`
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  opacity: 0;
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
`;

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(251, 191, 36, 0.3);
  animation: ${pulse} 2s infinite;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #000000;
  }
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  color: var(--gold-strong);
`;

export const TitleUnderline = styled.div`
  /* width: 6rem;
  height: 4px;
  /* background: linear-gradient(45deg, #fbbf24, #f59e0b); */
  /* margin: 0 auto;
  border-radius: 2px;  */
`;

// FAQ Items
export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

interface FAQItemProps {
  delay?: string;
}

export const FAQItem = styled.div<FAQItemProps>`
  background: linear-gradient(
    135deg,
    rgba(31, 41, 55, 0.5),
    rgba(17, 24, 39, 0.5)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: ${(props) => props.delay || "0s"};

  &:hover {
    transform: scale(1.02);
    border-color: rgba(251, 191, 36, 0.4);
    box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.1);
  }
`;

export const FAQButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(55, 65, 81, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const QuestionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const QuestionIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
  transition: transform 0.3s ease;

  ${FAQButton}:hover & {
    transform: scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #000000;
  }
`;

export const Question = styled.h3`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 600;
  color: white;
  transition: color 0.3s ease;

  ${FAQButton}:hover & {
    color: #fbbf24;
  }
`;

export const ChevronIcon = styled.div`
  color: #fbbf24;
  margin-left: 1rem;
  transition: transform 0.3s ease;

  ${FAQButton}:hover & {
    transform: scale(1.1);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

interface AnswerContainerProps {
  isOpen: boolean;
}

export const AnswerContainer = styled.div<AnswerContainerProps>`
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  max-height: ${(props) => (props.isOpen ? "12rem" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

export const AnswerContent = styled.div`
  padding: 0 1.5rem 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem 1rem 1.5rem;
  }
`;

export const AnswerInner = styled.div`
  margin-left: 3.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #fbbf24, #f59e0b);
    border-radius: 2px;
  }
`;

interface AnswerProps {
  isOpen: boolean;
}

export const Answer = styled.p<AnswerProps>`
  color: #d1d5db;
  font-size: 1.125rem;
  line-height: 1.7;
  animation: ${(props) => (props.isOpen ? fadeIn : "none")} 0.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// CTA Button
export const CTAContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

export const CTAButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 700;
  color: #000000;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  border: none;
  border-radius: 9999px;
  box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.4);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.6);
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
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
  }
`;

// Elementos decorativos
export const DecorativeElement = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 3s infinite;
  pointer-events: none;

  &.top-left {
    top: 5rem;
    left: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: rgba(251, 191, 36, 0.05);
  }

  &.bottom-right {
    bottom: 5rem;
    right: 2.5rem;
    width: 10rem;
    height: 10rem;
    background: rgba(245, 158, 11, 0.05);
    animation-delay: 1s;
  }
`;
