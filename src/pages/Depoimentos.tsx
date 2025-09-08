import { Section } from "../components/Section";
import { Title } from "../components/AnimatedHeading";
import TestimonialCard from "../components/testimonial_card/TestimonialCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export default function Depoimentos() {
  return (
    <Section>
      <div className="container">
        <Title as="h2">Quem já aplicou o método</Title>
        <Grid>
          {["dQw4w9WgXcQ", "ysz5S6PUM-U", "Zi_XLOBDo_Y", "KT7F9gEfhRU"].map(
            (id) => (
              <TestimonialCard key={id} videoId={id} />
            )
          )}
        </Grid>
      </div>
    </Section>
  );
}
