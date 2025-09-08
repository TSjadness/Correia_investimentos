// PricingSection.jsx
import React from "react";
import {
  PricingContainer,
  Container,
  TitleGroup,
  Title,
  ContentWrapper,
  BenefitsColumn,
  BenefitsList,
  BenefitItem,
  CheckIcon,
  BenefitTitle,
  BenefitDescription,
  PriceColumn,
  PriceCard,
  PriceLabel,
  InstallmentText,
  PriceValue,
  PriceInstallments,
  CTAButton,
  PaymentMethods,
  PaymentIcon,
} from "./styles";

function PricingSection() {
  const benefits = [
    {
      title: "Aulas Mensais ao Vivo",
      description:
        "Participe de uma aula ao vivo por mês para aprimorar suas habilidades culinárias.",
    },
    {
      title: "Material de Apoio em PDF",
      description:
        "Acesso a um completo material de apoio com todos os preparos detalhados do curso.",
    },
    {
      title: "Garantia Incondicional de 7 Dias",
      description:
        "Segurança total para você, com a possibilidade de reembolso integral se não ficar satisfeito.",
    },
    {
      title: "Acesso à Comunidade MMC",
      description:
        "Suporte e interação contínua com uma comunidade dedicada, disponível 24/7.",
    },
    {
      title: "Bônus Exclusivo - 8 semanas de cardápios planejados:",
      description:
        "Receba 8 semanas de cardápios planejados com listas de compras detalhadas, um verdadeiro impulso para sua jornada culinária.",
    },
  ];

  return (
    <div className="container">
      <PricingContainer>
        <Container>
          <TitleGroup>
            <Title>Aproveite tudo isso</Title>
          </TitleGroup>

          <ContentWrapper>
            {/* <BenefitsColumn>
              <BenefitsList>
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index}>
                    <CheckIcon>✓</CheckIcon>
                    <div>
                      <BenefitTitle>{benefit.title}</BenefitTitle>
                      <BenefitDescription>
                        {benefit.description}
                      </BenefitDescription>
                    </div>
                  </BenefitItem>
                ))}
              </BenefitsList>
            </BenefitsColumn> */}

            <PriceColumn>
              <PriceCard>
                <PriceLabel>Por apenas</PriceLabel>
                <InstallmentText>12x de</InstallmentText>
                <PriceValue>R$ 51,40</PriceValue>
                <PriceInstallments>ou R$ 497,00 à vista</PriceInstallments>

                <CTAButton>
                  <a href="https://pay.hotmart.com/B101104263Y" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    INICIAR MINHA INSCRIÇÃO
                  </a>
                </CTAButton>

                <PaymentMethods>
                  <PaymentIcon>💳</PaymentIcon>
                  <PaymentIcon>🏦</PaymentIcon>
                  <PaymentIcon>📱</PaymentIcon>
                  <PaymentIcon>🔒</PaymentIcon>
                </PaymentMethods>
              </PriceCard>
            </PriceColumn>
          </ContentWrapper>
        </Container>
      </PricingContainer>
    </div>
  );
}

export default PricingSection;
