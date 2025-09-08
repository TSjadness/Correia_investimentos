// ContactForm.jsx
import React, { useState, useEffect } from "react";
import {
  ContactFormSection,
  Container,
  Title,
  FormWrapper,
  FormContainer,
  Row,
  Row3,
  Input,
  Select,
  Textarea,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel,
  SubmitButton,
  FloatingElement,
  ToastContainer,
  Toast,
  ToastIcon,
  ToastMessage,
  ToastClose,
  LoadingSpinner,
  TitleGroup,
  Row2,
} from "./styles";

const PATRIMONIO_OPCOES = [
  "Selecione seu patrimônio",
  "Até R$ 10 mil",
  "R$ 10 mil – R$ 50 mil",
  "R$ 50 mil – R$ 200 mil",
  "R$ 200 mil – R$ 1 milhão",
  "Acima de R$ 1 milhão",
];

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patrimonio: PATRIMONIO_OPCOES[0],
    conhecia: false,
    message: "Quero começar com inteligência.",
  });

  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const showToast = (type: any, message: any) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  const closeToast = () => {
    setToast({ show: false, type: "", message: "" });
  };

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const normalizePhone = (raw: any) => {
    return raw.replace(/\D/g, "");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSending(true);

    try {
      const payload = {
        ...formData,
        phone: normalizePhone(formData.phone),
        conhecia: formData.conhecia ? "Sim" : "Não",
      };

      // Simulando envio para jadsonts2012@gmail.com
      const formSubmitData = new FormData();
      Object.entries(payload).forEach(([k, v]) =>
        formSubmitData.append(k, String(v))
      );
      formSubmitData.append(
        "_subject",
        "Novo contato do site - Método de Investimento"
      );
      formSubmitData.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/jadsonts2012@gmail.com",
        {
          method: "POST",
          body: formSubmitData,
        }
      );

      if (response.ok) {
        showToast(
          "success",
          "Mensagem enviada com sucesso! Verifique seu e-mail."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          patrimonio: PATRIMONIO_OPCOES[0],
          conhecia: false,
          message: "Quero começar com inteligência.",
        });
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      showToast("error", "Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container">
      <ContactFormSection>
        <Container>
          <TitleGroup>
            <Title>Entre em Contato</Title>
          </TitleGroup>

          <p style={{ opacity: 0.8, marginBottom: 15, textAlign: "center" }}>
            Envie uma mensagem — retornamos em até 1 dia útil.
          </p>

          <FormWrapper>
            <FormContainer onSubmit={handleSubmit}>
              <Row>
                <Input
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={sending}
                  aria-label="Nome"
                />
                <Input
                  required
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={sending}
                  aria-label="E-mail"
                />
              </Row>

              <Row3>
                <Input
                  required
                  type="tel"
                  placeholder="Seu WhatsApp"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={sending}
                  aria-label="Telefone"
                />

                <Select
                  value={formData.patrimonio}
                  onChange={(e) =>
                    handleInputChange("patrimonio", e.target.value)
                  }
                  disabled={sending}
                  aria-label="Patrimônio investido"
                >
                  {PATRIMONIO_OPCOES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </Row3>

              <Row2>
                <CheckboxWrapper>
                  <CheckboxInput
                    id="conhecia"
                    type="checkbox"
                    checked={formData.conhecia}
                    onChange={(e) =>
                      handleInputChange("conhecia", e.target.checked)
                    }
                    disabled={sending}
                  />
                  <CheckboxLabel>Já conhecia nosso trabalho?</CheckboxLabel>
                </CheckboxWrapper>
              </Row2>

              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Conte um pouco sobre seus objetivos e o que você busca..."
                disabled={sending}
                aria-label="Mensagem"
              />

              <SubmitButton type="submit" disabled={sending}>
                {sending && <LoadingSpinner />}
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </SubmitButton>
            </FormContainer>
          </FormWrapper>
        </Container>

        <ToastContainer className={toast.show ? "show" : ""}>
          <Toast className={toast.type}>
            <ToastIcon>{toast.type === "success" ? "✅" : "❌"}</ToastIcon>
            <ToastMessage>{toast.message}</ToastMessage>
            <ToastClose onClick={closeToast}>×</ToastClose>
          </Toast>
        </ToastContainer>
      </ContactFormSection>
    </div>
  );
}
