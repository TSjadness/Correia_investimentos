
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  from { transform: translateY(0px) }
  50%  { transform: translateY(-10px) }
  to   { transform: translateY(0px) }
`;

export const Title = styled(motion.h1)`
  text-align: center;
  color: var(--gold-strong);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0 0 10px 0;
  line-height: 1.1;
  letter-spacing: 0.3px;
  animation: ${float} 6s ease-in-out infinite;
`;

export const Subtitle = styled(motion.p)`
  text-align: center;
  color: var(--subtext);
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0 auto 24px;
  max-width: 900px;
`;
