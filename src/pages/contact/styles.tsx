// styles.js - ContactForm Styled Components
import styled, { keyframes } from "styled-components";

// Animações

const float = keyframes`
  from { transform: translateY(0px) }
  50%  { transform: translateY(-10px) }
  to   { transform: translateY(0px) }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
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

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
  }
`;

export const ContactFormSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  animation: ${float} 6s ease-in-out infinite;
  text-align: center;
  width: 100%;
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
  margin-bottom: 3rem;
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

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 25px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  overflow: hidden;
  /* animation: ${glow} 4s ease-in-out infinite; */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;

    background-size: 200% 200%;
    /* animation: ${gradientShift} 3s ease infinite; */
    border-radius: 25px 25px 0 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Row3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const fieldBase = `
  background: rgba(15, 26, 22, 0.8);
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 15px;
  padding: 1rem 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
  }

  &:focus {
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
    background: rgba(15, 26, 22, 0.9);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${fieldBase}
`;

export const Select = styled.select`
  ${fieldBase}
  appearance: none;
  cursor: pointer;
  background-image:
    linear-gradient(45deg, transparent 50%, #fbbf24 50%),
    linear-gradient(135deg, #fbbf24 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;

  option {
    background: rgba(15, 26, 22, 0.95);
    color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  ${fieldBase}
  min-height: 120px;
  resize: vertical;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(15, 26, 22, 0.8);
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 15px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: rgba(251, 191, 36, 0.4);
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid rgba(251, 191, 36, 0.5);
  border-radius: 6px;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;

  &:checked {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-color: transparent;
    box-shadow: 0 6px 18px rgba(251, 191, 36, 0.25);
  }

  &:checked::after {
    content: "✓";
    font-size: 14px;
    color: rgba(15, 26, 22, 0.9);
    font-weight: bold;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.2);
  }
`;

export const CheckboxLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 500;
  user-select: none;
`;

export const SubmitButton = styled.button`
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
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

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

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s linear infinite;
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
`;

// Toast Notifications
export const ToastContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.3s ease;

  &.show {
    transform: translateX(0);
    opacity: 1;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
`;

export const Toast = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 2px solid;
  min-width: 300px;

  &.success {
    border-color: #10b981;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.1),
      rgba(5, 150, 105, 0.1)
    );
  }

  &.error {
    border-color: #ef4444;
    background: linear-gradient(
      135deg,
      rgba(239, 68, 68, 0.1),
      rgba(220, 38, 38, 0.1)
    );
  }

  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const ToastIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const ToastMessage = styled.div`
  flex: 1;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  line-height: 1.4;
`;

export const ToastClose = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.8);
  }
`;
