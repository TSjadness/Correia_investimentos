import { Link } from "react-router-dom";
import {
  Wrap,
  Background,
  Inner,
  Title,
  Sub,
  Actions,
  Cta,
} from "./styles";

export default function NotFound() {
  return (
    <Wrap>
      <Background aria-hidden="true" />
      <Inner className="container">
        <Title>Página não encontrada</Title>
        <Sub>O endereço pode ter sido movido, renomeado ou nunca existiu.</Sub>

        <Actions>
          <Cta as={Link} to="/">
            Voltar para a Home
          </Cta>
        </Actions>
      </Inner>
    </Wrap>
  );
}
