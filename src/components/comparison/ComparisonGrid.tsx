import { X, Check, TrendingDown, TrendingUp, Zap, Shield } from "lucide-react";
import {
  Container,
  Wrapper,
  DecorativeElement,
  Header,
  TitleGroup,
  Title,
  Column,
  ColumnHeader,
  ColumnIconWrapper,
  ColumnTitle,
  ItemsList,
  Item,
  ItemIconWrapper,
  ItemContent,
  ItemText,
  ItemSubIcon,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
  ComparisonGridBox,
} from "./styles";

export default function ComparisonGrid() {
  const negatives = [
    { text: "Se assusta com notícias", icon: <TrendingDown size={16} /> },
    { text: "Não tem clareza para investir", icon: <TrendingDown size={16} /> },
    {
      text: "Culpa o governo pela baixa rentabilidade",
      icon: <TrendingDown size={16} />,
    },
    { text: "Vende tudo com medo de crise", icon: <TrendingDown size={16} /> },
    { text: "Não compreende no que investe", icon: <TrendingDown size={16} /> },
    { text: "Se traumatiza com o mercado", icon: <TrendingDown size={16} /> },
    { text: "Tenta ganhar no curto prazo", icon: <TrendingDown size={16} /> },
  ];

  const positives = [
    { text: "Não se abala por notícias", icon: <Shield size={16} /> },
    {
      text: "Sabe exatamente como e onde investir",
      icon: <TrendingUp size={16} />,
    },
    {
      text: "Sabe que é único responsável pela carteira",
      icon: <Shield size={16} />,
    },
    {
      text: "Entende as crises e as aproveita",
      icon: <TrendingUp size={16} />,
    },
    {
      text: "Compreende no que investe e ignora o que não importa",
      icon: <Shield size={16} />,
    },
    {
      text: "Aprende com os erros e volatilidade do mercado",
      icon: <TrendingUp size={16} />,
    },
    {
      text: "Entende que o jogo é de PAZ no longo prazo",
      icon: <Zap size={16} />,
    },
  ];

  return (
    <div className="container">
      <Container>
        {/* Elementos decorativos de fundo */}
        <DecorativeElement className="red" />
        <DecorativeElement className="green" />
        <DecorativeElement className="yellow" />

        <Wrapper>
          {/* Header */}
          <Header>
            <TitleGroup>
              {/* <TitleDot /> */}
              <Title>Com ou sem o método?</Title>
              {/* <TitleDot /> */}
            </TitleGroup>
          </Header>

          {/* Grid de Comparação */}
          <ComparisonGridBox>
            {/* Coluna Negativa */}
            <Column type="negative">
              <ColumnHeader>
                <ColumnIconWrapper type="negative">
                  <X />
                </ColumnIconWrapper>
                <ColumnTitle type="negative">Sem Método</ColumnTitle>
              </ColumnHeader>

              <ItemsList>
                {negatives.map((item, index) => (
                  <Item key={index} type="negative" delay={`${index * 0.1}s`}>
                    <ItemIconWrapper type="negative">
                      <X />
                    </ItemIconWrapper>
                    <ItemContent>
                      <ItemSubIcon type="negative">{item.icon}</ItemSubIcon>
                      <ItemText>{item.text}</ItemText>
                    </ItemContent>
                  </Item>
                ))}
              </ItemsList>
            </Column>

            {/* Coluna Positiva */}
            <Column type="positive">
              <ColumnHeader>
                <ColumnIconWrapper type="positive">
                  <Check />
                </ColumnIconWrapper>
                <ColumnTitle type="positive">Com o Método</ColumnTitle>
              </ColumnHeader>

              <ItemsList>
                {positives.map((item, index) => (
                  <Item key={index} type="positive" delay={`${index * 0.1}s`}>
                    <ItemIconWrapper type="positive">
                      <Check />
                    </ItemIconWrapper>
                    <ItemContent>
                      <ItemSubIcon type="positive">{item.icon}</ItemSubIcon>
                      <ItemText>{item.text}</ItemText>
                    </ItemContent>
                  </Item>
                ))}
              </ItemsList>
            </Column>
          </ComparisonGridBox>

          {/* Seção de Estatísticas */}
          <StatsSection>
            <StatCard type="negative">
              <StatNumber type="negative">78%</StatNumber>
              <StatLabel>Perdem dinheiro sem método</StatLabel>
            </StatCard>

            <StatCard type="neutral">
              <StatNumber type="neutral">VS</StatNumber>
              <StatLabel>A diferença é clara</StatLabel>
            </StatCard>

            <StatCard type="positive">
              <StatNumber type="positive">92%</StatNumber>
              <StatLabel>Têm sucesso com método</StatLabel>
            </StatCard>
          </StatsSection>
        </Wrapper>
      </Container>
    </div>
  );
}
