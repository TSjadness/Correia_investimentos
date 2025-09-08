// styles.js - WhatsApp Float Styles
import styled, { keyframes } from "styled-components";

// Animações
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-8px) rotate(5deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
  }
  50% {
    box-shadow: 0 0 35px rgba(37, 211, 102, 0.8), 0 0 50px rgba(37, 211, 102, 0.4);
  }
`;

export const WhatsAppContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1000;
  animation: ${slideInRight} 0.6s ease-out;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const WhatsAppButton = styled.button`
  position: relative;
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  animation: ${float} 3s ease-in-out infinite;
  overflow: visible;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6);
    animation: ${bounce} 1s ease infinite;
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(135deg, #25d366, #128c7e, #075e54);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.7;
    animation: ${glow} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

export const PulseRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65px;
  height: 65px;
  border: 2px solid rgba(37, 211, 102, 0.7);
  border-radius: 50%;
  animation: ${pulse} 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  z-index: -1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(37, 211, 102, 0.5);
    border-radius: 50%;
  }

  &::before {
    width: 80px;
    height: 80px;
    animation: ${pulse} 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    animation-delay: 0.3s;
  }

  &::after {
    width: 95px;
    height: 95px;
    animation: ${pulse} 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    animation-delay: 0.6s;
  }
`;

export const WhatsAppIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${WhatsAppButton}:hover & {
    transform: rotate(10deg) scale(1.1);
  }

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

export const WhatsAppTooltip = styled.div`
  position: absolute;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::after {
    content: "";
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid rgba(0, 0, 0, 0.8);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }

  ${WhatsAppButton}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(-5px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
