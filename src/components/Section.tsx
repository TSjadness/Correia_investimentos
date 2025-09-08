import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(50px, 1vw, 100px) 0;

  @media (max-width: 768px) {
    padding: clamp(30px, 8vw, 60px) 0;
  }
`;

export const Card = styled.div`
  background:
    radial-gradient(
      700px 400px at 40% -250px,
      rgba(212, 175, 55, 0.12),
      transparent 55%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.03));
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 20px;
  padding: clamp(16px, 3vw, 28px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
`;
