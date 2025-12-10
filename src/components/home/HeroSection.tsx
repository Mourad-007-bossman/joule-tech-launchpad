import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const features = [
    "Installation électrique industrielle",
    "Stations de pompage clé en main",
    "Programmation automates Sofrel S4W",
    "Maintenance & intervention rapide",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              <span>+200 projets réalisés à Tanger</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Joule Tech
              <br />
              <span className="text-accent">Électricité & Pompage</span>
              <br />
              à Tanger
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Expert en installation électrique industrielle, stations de pompage et automatismes. 
              Votre partenaire de confiance pour tous vos projets électriques au Maroc.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" onClick={onOpenContact} className="w-full sm:w-auto">
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="tel:+212663339585"
                className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/30 transition-all duration-300 w-full sm:w-auto justify-center whitespace-nowrap backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">+212 6 63 33 95 85</span>
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Main image */}
              <div className="glass-card rounded-3xl overflow-hidden bg-primary-foreground/10 border-primary-foreground/20">
                <img 
                  src={heroImage} 
                  alt="Installation électrique industrielle et station de pompage à Tanger - Joule Tech" 
                  className="w-[450px] h-[350px] object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 bg-card shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">200+</p>
                    <p className="text-xs text-muted-foreground">Projets</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 glass-card rounded-2xl p-4 bg-card shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">15+</p>
                    <p className="text-xs text-muted-foreground">Années d'expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
