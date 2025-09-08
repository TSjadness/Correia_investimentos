import React from "react";
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

// Styled Components
interface CTAContainerProps {
  delay?: string;
  margin?: string;
  className?: string;
}

export const CTAContainer = styled.div<CTAContainerProps>`
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0.6s"};
  opacity: 0;
  margin: ${(props) => props.margin || "4rem 0"};
`;

interface CTAButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outline";
  rounded?: "pill" | "square";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CTAButton = styled.a<CTAButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.size === "large"
      ? "1.25rem 4rem"
      : props.size === "small"
        ? "0.75rem 2rem"
        : "1rem 3rem"};
  font-size: ${(props) =>
    props.size === "large"
      ? "clamp(1.25rem, 3vw, 1.5rem)"
      : props.size === "small"
        ? "clamp(0.875rem, 3vw, 1rem)"
        : "clamp(1rem, 3vw, 1.25rem)"};
  font-weight: 700;
  color: ${(props) => (props.variant === "outline" ? "#fbbf24" : "#000000")};
  background: ${(props) =>
    props.variant === "outline"
      ? "transparent"
      : "linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d)"};
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #fbbf24" : "none"};
  border-radius: ${(props) =>
    props.rounded === "square" ? "0.5rem" : "9999px"};
  box-shadow: ${(props) =>
    props.variant === "outline"
      ? "0 0 0 rgba(251, 191, 36, 0)"
      : "0 25px 50px -12px rgba(251, 191, 36, 0.4)"};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) =>
      props.variant === "outline"
        ? "0 25px 50px -12px rgba(251, 191, 36, 0.3)"
        : "0 25px 50px -12px rgba(251, 191, 36, 0.6)"};
    text-decoration: none;
    color: ${(props) => (props.variant === "outline" ? "#000000" : "#000000")};
    background: ${(props) =>
      props.variant === "outline"
        ? "linear-gradient(45deg, #fbbf24, #f59e0b)"
        : "linear-gradient(45deg, #fcd34d, #fbbf24)"};
  }

  &:hover::before {
    opacity: 1;
    text-decoration: none;
  }

  &:hover::after {
    animation: ${shimmer} 1s ease-in-out;
    text-decoration: none;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #fcd34d, #fbbf24);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    text-decoration: none;
    border-radius: inherit;
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
    text-decoration: none;
    transform: translateX(-100%);
    z-index: 2;
    border-radius: inherit;
  }

  span {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.size === "large"
        ? "1rem 3rem"
        : props.size === "small"
          ? "0.625rem 1.5rem"
          : "0.875rem 2rem"};
    font-size: ${(props) =>
      props.size === "large"
        ? "1.125rem"
        : props.size === "small"
          ? "0.875rem"
          : "1rem"};
  }
`;

// Componente Global CTA
interface GlobalCTAProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outline";
  rounded?: "pill" | "square";
  delay?: string;
  margin?: string;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
  type?: "button" | "submit" | "reset";
}

const GlobalCTA: React.FC<GlobalCTAProps> = ({
  children,
  href,
  onClick,
  size = "medium",
  variant = "filled",
  rounded = "pill",
  delay = "0.6s",
  margin = "4rem 0",
  icon,
  className,
  target,
  rel,
  type,
  ...props
}) => {
  return (
    <CTAContainer delay={delay} margin={margin} className={className}>
      <CTAButton
        href={href}
        onClick={onClick}
        size={size}
        variant={variant}
        rounded={rounded}
        target={target}
        rel={rel}
        {...props}
        type={type}
      >
        <span>
          {children}
          {icon && icon}
        </span>
      </CTAButton>
    </CTAContainer>
  );
};

export default GlobalCTA;
