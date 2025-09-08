import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
  background: rgba(11, 18, 16, 0.75);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Brand = styled(Link)`
  font-weight: 800;
  letter-spacing: 0.3px;
  color: var(--gold-strong);
  font-size: 1.1rem;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Menu = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 14px;
  align-items: center;
  font-weight: 600;

  a {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
    color: var(--text);
    opacity: 0.9;
  }
  a.active {
    background: var(--muted);
    border: 1px solid rgba(212, 175, 55, 0.25);
    color: var(--gold-strong);
  }

  @media (max-width: 860px) {
    position: fixed;
    inset: 56px 10px auto auto;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    background: rgba(11, 18, 16, 0.98);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 12px;
    border-radius: 16px;
  }
`;

export const Burger = styled.button`
  display: none;
  @media (max-width: 860px) {
    display: inline-flex;
  }
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.25);
  background: var(--muted);
  color: var(--text);
`;
