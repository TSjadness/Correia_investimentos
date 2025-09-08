import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import {
  TestimonialsContainer,
  Container,
  TitleGroup,
  Title,
  CarouselContainer,
  CarouselWrapper,
  TestimonialCard,
  TestimonialImage,
  Avatar,
  ClientName,
  ClientTitle,
  Quote,
  Rating,
  Star,
  ImagePlaceholder,
  VerifiedBadge,
  ResultStats,
  StatNumber,
  StatLabel,
} from "./styles";

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Ana Paula Silva",
      title: "Executiva de Marketing",
      avatar: "AS",
      quote:
        "Por anos deixei meu dinheiro parado na poupança por medo. O Estoicismo Financeiro me ensinou a ter clareza nas decisões.",
      rating: 5,
      result: { number: "R$ 850k", label: "patrimônio atual" },
      hasImage: false,
    },
    {
      name: "Roberto Almeida",
      title: "Advogado Empresarial",
      avatar: "RA",
      quote:
        "Quem já aplica o método sabe: não é sobre timing do mercado, é sobre estratégia consistente. Consegui IPCA+8% de forma sustentável.",
      rating: 5,
      result: { number: "IPCA+8%", label: "média anual" },
      hasImage: false,
    },
    {
      name: "Mariana Costa",
      title: "Empresária do Setor Tech",
      avatar: "MC",
      quote:
        "O método mudou completamente minha relação com o dinheiro. Antes era pura ansiedade, hoje é estratégia pura.",
      rating: 5,
      result: { number: "+89%", label: "em 24 meses" },
      hasImage: false,
    },
    {
      name: "Pedro Oliveira",
      title: "Engenheiro Civil",
      avatar: "PO",
      quote:
        "Aplicando exatamente o que o Gabriel ensina. Resultados sólidos e consistentes, sem stress com volatilidade do mercado.",
      rating: 5,
      result: { number: "R$ 1.2M", label: "patrimônio atual" },
      hasImage: false,
    },
    {
      name: "Juliana Santos",
      title: "Dentista",
      avatar: "JS",
      quote:
        "A filosofia estoica aplicada aos investimentos mudou minha vida. Agora tenho clareza e tranquilidade para tomar decisões.",
      rating: 5,
      result: { number: "+203%", label: "em 3 anos" },
      hasImage: false,
    },
  ];


  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const totalCards = duplicatedTestimonials.length;
  const originalLength = testimonials.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} delay={index * 0.1}>
        {index < rating ? "★" : "☆"}
      </Star>
    ));
  };

  return (
    <div className="container">
      <TestimonialsContainer>
        <Container>
          <TitleGroup>
            <Title>Mensagens reais de quem aplicou o método</Title>
          </TitleGroup>

          <CarouselContainer>
            <CarouselWrapper
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`}>
                  <VerifiedBadge>
                    <CheckCircle size={16} />
                  </VerifiedBadge>

                  {/* {testimonial.hasImage ? (
                  <TestimonialImage>
                    <img
                      src={`/assets/ref_${(index % originalLength) + 1}.png`}
                      alt={`Depoimento ${testimonial.name}`}
                    />
                  </TestimonialImage>
                ) : (
                  <ImagePlaceholder>
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                      📱
                    </div>
                    <div>Mensagem Real</div>
                    <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                      Depoimento Verificado
                    </div>
                  </ImagePlaceholder>
                )} */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <Avatar>{testimonial.avatar}</Avatar>
                    <div>
                      <ClientName>{testimonial.name}</ClientName>
                      <ClientTitle>{testimonial.title}</ClientTitle>
                    </div>
                  </div>

                  <Quote>{testimonial.quote}</Quote>
                  <Rating>{renderStars(testimonial.rating)}</Rating>

                  <ResultStats>
                    <StatNumber>{testimonial.result.number}</StatNumber>
                    <StatLabel>{testimonial.result.label}</StatLabel>
                  </ResultStats>
                </TestimonialCard>
              ))}
            </CarouselWrapper>
          </CarouselContainer>
        </Container>
      </TestimonialsContainer>
    </div>
  );
}

export default Testimonials;
