import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO, LocalBusinessSchema } from "@/components/SEO";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO />
      <LocalBusinessSchema />
      
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection onOpenContact={() => setIsContactOpen(true)} />
      </main>
      
      <Footer />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppButton />
      <StickyCTA onOpenContact={() => setIsContactOpen(true)} />
    </>
  );
};

export default Index;
