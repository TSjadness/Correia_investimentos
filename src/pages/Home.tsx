import { Section } from "../components/Section";
import BonusBanner from "../components/bonus/BonusBanner";
import FAQ from "../components/faq/FAQ";
import ComparisonGrid from "../components/comparison/ComparisonGrid";
import MentorProfile from "./mentor/MentorProfile";
import Testimonials from "./testimonials/Testimonial";
import WhyMethodWorks from "./metodo/method";
import HeroSection from "./hero/Hero";
import PricingSection from "./Preco/PricingSection";
import WhatsAppFloat from "../components/whatsapp/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      {/* sessao hero */}
      <Section>
        <HeroSection />
      </Section>

      {/* sessao metodo */}
      <Section>
        <WhyMethodWorks />
      </Section>

      {/* sessao depoimentos */}
      <Section>
        <Testimonials />
      </Section>

      {/* sessao mentor */}
      <Section>
        <MentorProfile />
      </Section>

      {/* sessao comparacao */}
      <Section>
        <ComparisonGrid />
      </Section>

      {/* sessao bonus */}
      <Section>
        <BonusBanner />
      </Section>

      {/* sessao preco */}
      <Section>
        <PricingSection />
      </Section>

      {/* sessao faq */}
      <Section>
        <FAQ />
      </Section>

      <WhatsAppFloat />
    </main>
  );
}
