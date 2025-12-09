import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, Target, Heart, Shield, Zap, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, avec un souci du détail et de la qualité irréprochable.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Notre engagement envers nos clients se traduit par un suivi rigoureux et une disponibilité constante.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Nos installations sont conçues pour durer, avec des équipements certifiés et des méthodes éprouvées.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Nous intégrons les dernières technologies pour optimiser vos installations et réduire vos coûts.",
  },
];

const stats = [
  { value: "200+", label: "Projets Réalisés" },
  { value: "150+", label: "Clients Satisfaits" },
  { value: "15+", label: "Années d'Expérience" },
  { value: "24/7", label: "Support Technique" },
];

const About = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="À Propos | Joule Tech - Électricité Industrielle Tanger"
        description="Découvrez Joule Tech, votre expert en électricité industrielle et stations de pompage à Tanger depuis plus de 15 ans. Une équipe qualifiée à votre service."
        url="https://joule-tech.ma/about"
      />
      
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4">
                À Propos de Nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Votre Partenaire de Confiance en Électricité Industrielle
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Depuis plus de 15 ans, Joule Tech accompagne les industriels et collectivités
                de Tanger dans leurs projets électriques les plus ambitieux.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container-custom px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  Notre Histoire
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une Expertise Forgée sur le Terrain
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Joule Tech</strong> a été fondée à Tanger avec une mission claire : 
                    fournir aux industries et collectivités de la région Nord du Maroc des solutions électriques 
                    de qualité internationale, avec un service de proximité irréprochable.
                  </p>
                  <p>
                    Notre équipe d'ingénieurs et techniciens qualifiés intervient sur l'ensemble du cycle de vie 
                    de vos installations : études et conception, installation, programmation d'automates, 
                    mise en service et maintenance préventive et curative.
                  </p>
                  <p>
                    Nous sommes spécialisés dans les <strong className="text-foreground">stations de pompage</strong>, 
                    l'<strong className="text-foreground">électricité industrielle</strong>, le 
                    <strong className="text-foreground"> câblage d'armoires électriques</strong> et la 
                    <strong className="text-foreground"> programmation d'automates</strong> (Siemens, Schneider, Sofrel S4W).
                  </p>
                  <p>
                    Notre connaissance approfondie du tissu industriel de Tanger et notre réseau de partenaires 
                    nous permettent de répondre rapidement à vos besoins, qu'il s'agisse d'un projet neuf 
                    ou d'une intervention urgente.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Nos Domaines d'Expertise</h3>
                <ul className="space-y-4">
                  {[
                    "Installation de stations de pompage industrielles et municipales",
                    "Électricité industrielle haute et basse tension",
                    "Câblage et montage d'armoires électriques",
                    "Programmation automates Siemens, Schneider, Allen-Bradley",
                    "Programmation télégestion Sofrel S4W",
                    "Maintenance préventive et curative",
                    "Études et schémas électriques",
                    "Installation et mise en service machines industrielles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Nos Valeurs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Les Principes Qui Nous Guident
              </h2>
              <p className="text-lg text-muted-foreground">
                Chez Joule Tech, nos valeurs sont le fondement de notre relation avec nos clients
                et la garantie de la qualité de nos prestations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="glass-card rounded-2xl p-6 text-center card-hover">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à Travailler Avec Nous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppButton />
      <StickyCTA onOpenContact={() => setIsContactOpen(true)} />
    </>
  );
};

export default About;
