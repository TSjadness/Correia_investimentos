import styled, { keyframes } from "styled-components";

// Animações
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) 
  }
  50% { 
    transform: translateY(-10px) 
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

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const itemSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Container principal
export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

// Elementos decorativos
export const DecorativeElement = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 4s infinite;
  pointer-events: none;

  &.red {
    top: 5rem;
    left: 2.5rem;
    width: 16rem;
    height: 16rem;
    background: rgba(239, 68, 68, 0.1);
  }

  &.green {
    bottom: 5rem;
    right: 2.5rem;
    width: 20rem;
    height: 20rem;
    background: rgba(34, 197, 94, 0.1);
    animation-delay: 2s;
  }

  &.yellow {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12rem;
    height: 12rem;
    background: rgba(251, 191, 36, 0.05);
    animation-delay: 1s;
  }
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

// export const TitleDot = styled.div`
//   width: 0.75rem;
//   height: 0.75rem;
//   background: linear-gradient(45deg, #fbbf24, #f59e0b);
//   border-radius: 50%;
//   animation: ${pulse} 2s infinite;

//   &:last-child {
//     animation-delay: 0.5s;
//   }
// `;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #fbbf24, #f59e0b, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
`;

export const TitleUnderline = styled.div`
  width: 8rem;
  height: 4px;
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  margin: 0 auto;
  border-radius: 2px;
`;

// Grid de comparação
export const ComparisonGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

interface TypeProp {
  type: "negative" | "positive";
}

export const Column = styled.div<TypeProp>`
  background: ${(props) =>
    props.type === "negative"
      ? "linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(153, 27, 27, 0.3))"
      : "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(21, 128, 61, 0.3))"};
  backdrop-filter: blur(10px);
  border: 1px solid
    ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.3)"
        : "rgba(34, 197, 94, 0.3)"};
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  transition: all 0.5s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) =>
      props.type === "negative"
        ? "linear-gradient(90deg, #ef4444, #f87171)"
        : "linear-gradient(90deg, #22c55e, #4ade80)"};
    border-radius: 1.5rem 1.5rem 0 0;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.5)"
        : "rgba(34, 197, 94, 0.5)"};
    box-shadow: 0 35px 60px -12px
      ${(props) =>
        props.type === "negative"
          ? "rgba(239, 68, 68, 0.2)"
          : "rgba(34, 197, 94, 0.2)"};
  }
`;

export const ColumnHeader = styled.div`
  display: flex;
  items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

interface TypeProp {
  type: "negative" | "positive";
}

export const ColumnIconWrapper = styled.div<TypeProp>`
  width: 4rem;
  height: 4rem;
  background: ${(props) => (props.type === "negative" ? "#ef4444" : "#22c55e")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 8px 25px
    ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.4)"
        : "rgba(34, 197, 94, 0.4)"};
  animation: ${bounce} 2s ease-in-out infinite;

  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

interface TypeProp {
  type: "negative" | "positive";
}

export const ColumnTitle = styled.h3<TypeProp>`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${(props) => (props.type === "negative" ? "#f87171" : "#4ade80")};
  margin: 0;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ItemProps {
  type: "negative" | "positive";
  delay?: string;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: ${(props) =>
    props.type === "negative"
      ? "rgba(239, 68, 68, 0.1)"
      : "rgba(34, 197, 94, 0.1)"};
  border-radius: 0.75rem;
  border: 1px solid
    ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.2)"
        : "rgba(34, 197, 94, 0.2)"};
  transition: all 0.3s ease;
  animation: ${itemSlideIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0;

  &:hover {
    background: ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.2)"
        : "rgba(34, 197, 94, 0.2)"};
    border-color: ${(props) =>
      props.type === "negative"
        ? "rgba(239, 68, 68, 0.4)"
        : "rgba(34, 197, 94, 0.4)"};
    transform: translateX(8px);
  }
`;

interface ItemIconWrapperProps {
  type: "negative" | "positive";
}

export const ItemIconWrapper = styled.div<ItemIconWrapperProps>`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.type === "negative"
      ? "rgba(239, 68, 68, 0.2)"
      : "rgba(34, 197, 94, 0.2)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.125rem;
  transition: transform 0.3s ease;

  ${Item}:hover & {
    transform: scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => (props.type === "negative" ? "#f87171" : "#4ade80")};
  }
`;

export const ItemContent = styled.div`
  flex: 1;
`;

export const ItemText = styled.span`
  color: #e5e7eb;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 500;
  line-height: 1.6;
  display: block;
`;

interface ItemSubIconProps {
  type: "negative" | "positive";
}

export const ItemSubIcon = styled.div<ItemSubIconProps>`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  opacity: 0.7;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => (props.type === "negative" ? "#f87171" : "#4ade80")};
  }
`;

// Seção de estatísticas
export const StatsSection = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
`;

interface StatTypeProp {
  type?: "negative" | "positive" | "neutral";
}

export const StatCard = styled.div<StatTypeProp>`
  text-align: center;
  padding: 2rem;
  background: ${(props) => {
    if (props.type === "negative")
      return "linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(153, 27, 27, 0.3))";
    if (props.type === "positive")
      return "linear-gradient(135deg, rgba(20, 83, 45, 0.2), rgba(21, 128, 61, 0.3))";
    return "linear-gradient(135deg, rgba(146, 64, 14, 0.2), rgba(180, 83, 9, 0.3))";
  }};
  border-radius: 1rem;
  border: 1px solid
    ${(props) => {
      if (props.type === "negative") return "rgba(239, 68, 68, 0.3)";
      if (props.type === "positive") return "rgba(34, 197, 94, 0.3)";
      return "rgba(251, 191, 36, 0.3)";
    }};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div<StatTypeProp>`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => {
    if (props.type === "negative") return "#f87171";
    if (props.type === "positive") return "#4ade80";
    return "#fbbf24";
  }};
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
`;
