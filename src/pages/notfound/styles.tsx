import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(18px) translateX(8px); }
  100% { transform: translateY(0) translateX(0); }
`;

const codeShine = keyframes`
  to { transform: skewX(-20deg) translateX(120%); }
`;

const shine = keyframes`
  to { transform: rotate(25deg) translateX(100%); }
`;

export const Wrap = styled.section`
  position: relative;
  height: 70vh;
  display: grid;
  place-items: center;
  padding: 64px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 60vh;
    height: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  inset: -20% -10% -10% -10%;
  /* background:
    radial-gradient(
      800px 300px at 20% 0%,
      rgba(89, 255, 168, 0.08),
      transparent 60%
    ),
    radial-gradient(
      700px 280px at 80% 0%,
      rgba(212, 175, 55, 0.1),
      transparent 60%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 100%);
  filter: saturate(120%);
  pointer-events: none; */

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    filter: blur(12px);
    animation: ${float} 9s ease-in-out infinite;
  }

  &::after {
    width: 280px;
    height: 280px;
    left: auto;
    right: 8%;
    top: 25%;
    animation-duration: 12s;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  text-align: left;

  @media (max-width: 880px) {
    text-align: left;
  }
`;


export const Title = styled.h2`
  margin: 14px 0 6px;
  color: var(--text);
  font-size: clamp(24px, 3.4vw, 40px);
  font-weight: 800;
`;

export const Sub = styled.p`
  margin: 0 0 24px;
  color: var(--subtext);
  font-size: 1.05rem;
  opacity: 0.95;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

export const Cta = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  font-weight: 800;
  letter-spacing: 0.2px;
  text-decoration: none;
  border: 1px solid transparent;
  color: #121212;
  background: linear-gradient(135deg, var(--gold), var(--gold-strong));
  box-shadow: 0 10px 30px rgba(242, 201, 76, 0.22);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    border-color 0.16s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
  }

  /* espelhamento contínuo */
  &::before {
    content: "";
    position: absolute;
    top: -60%;
    left: -60%;
    width: 220%;
    height: 220%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.38) 50%,
      rgba(255, 255, 255, 0) 65%
    );
    transform: rotate(25deg) translateX(-100%);
    animation: ${shine} 2.8s linear infinite;
  }
`;
