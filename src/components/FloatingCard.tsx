
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  from { transform: translateY(0px) rotate(0deg) }
  50%  { transform: translateY(-8px) rotate(.2deg) }
  to   { transform: translateY(0px) rotate(0deg) }
`;

export const FloatingCard = styled(motion.div)`
  background: var(--card);
  border: 1px solid rgba(212,175,55,.18);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 20px 60px rgba(0,0,0,.35);
  animation: ${float} 7s ease-in-out infinite;
`;
