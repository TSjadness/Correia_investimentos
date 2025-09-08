import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, Target } from "lucide-react";
import {
  Container,
  Wrapper,
  Header,
  TitleGroup,
  IconWrapper,
  Title,
  TitleUnderline,
  FAQList,
  FAQItem,
  FAQButton,
  QuestionGroup,
  QuestionIcon,
  Question,
  ChevronIcon,
  AnswerContainer,
  AnswerContent,
  AnswerInner,
  Answer,
  CTAContainer,
  CTAButton,
  DecorativeElement,
} from "./styles";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index: any) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Esse método é para mim?",
      answer:
        "Se você já tem patrimônio, mas sente insegurança para tomar decisões, sim.",
      icon: <Target />,
    },
    {
      question: "Preciso entender de economia?",
      answer:
        "Não. O método foi criado para pessoas ocupadas, que querem praticidade e resultado.",
      icon: <Sparkles />,
    },
  ];

  return (
    <div className="container">
      <Container>
        <Wrapper>
          <Header>
            <TitleGroup>
              {/* <IconWrapper>
              <Sparkles />
            </IconWrapper> */}
              <Title>Dúvidas Frequentes</Title>
            </TitleGroup>
            {/* <TitleUnderline /> */}
          </Header>

          {/* FAQ Items */}
          <FAQList>
            {faqData.map((item, index) => (
              <FAQItem key={index} delay={`${index * 0.2}s`}>
                <FAQButton onClick={() => toggleItem(index)}>
                  <QuestionGroup>
                    <QuestionIcon>{item.icon}</QuestionIcon>
                    <Question>{item.question}</Question>
                  </QuestionGroup>
                  <ChevronIcon>
                    {openItems.has(index) ? <ChevronUp /> : <ChevronDown />}
                  </ChevronIcon>
                </FAQButton>

                <AnswerContainer isOpen={openItems.has(index)}>
                  <AnswerContent>
                    <AnswerInner>
                      <Answer isOpen={openItems.has(index)}>
                        {item.answer}
                      </Answer>
                    </AnswerInner>
                  </AnswerContent>
                </AnswerContainer>
              </FAQItem>
            ))}
          </FAQList>

          {/* CTA Button */}
          {/* <CTAContainer>
            <CTAButton>
              <span>Quero começar agora</span>
            </CTAButton>
          </CTAContainer> */}
        </Wrapper>

        {/* Elementos decorativos */}
        <DecorativeElement className="top-left" />
        <DecorativeElement className="bottom-right" />
      </Container>
    </div>
  );
}
