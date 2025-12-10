import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Settings, Cable, Cpu, Wrench, FileText, Waves, Factory, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Installation Station Pompage",
    description: "Installation complète de stations de pompage industrielles et municipales. Dimensionnement, pose, raccordement électrique et mise en service clé en main.",
    features: ["Pompes immergées", "Surpresseurs", "Télégestion", "Variateurs de vitesse"],
    href: "/services/installation-station-pompage",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Électricité Industrielle Tanger",
    description: "Installation électrique haute et basse tension pour industries, usines et bâtiments professionnels. Mise en conformité aux normes marocaines et internationales.",
    features: ["Haute tension", "Basse tension", "TGBT", "Mise à la terre"],
    href: "/services/electricite-industrielle-tanger",
    color: "primary",
  },
  {
    icon: Cable,
    title: "Câblage Armoire Électrique",
    description: "Conception et câblage d'armoires électriques sur mesure. Schémas, assemblage, câblage et tests selon normes CE et NFC 15-100.",
    features: ["Armoires de distribution", "Coffrets de commande", "Tableaux divisionnaires", "Automatismes"],
    href: "/services/cablage-armoire-electrique-tanger",
    color: "accent",
  },
  {
    icon: Cpu,
    title: "Programmation Automate Tanger",
    description: "Programmation d'automates programmables industriels (API/PLC) Siemens, Schneider, Allen-Bradley. Développement, intégration et mise au point.",
    features: ["Siemens S7", "Schneider M340", "Allen-Bradley", "Supervision SCADA"],
    href: "/services/programmation-automate-tanger",
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Maintenance Industrielle",
    description: "Contrats de maintenance préventive et curative pour vos installations électriques. Interventions rapides 24/7 et audit énergétique.",
    features: ["Maintenance préventive", "Dépannage urgent", "Audit électrique", "Thermographie"],
    href: "/services/maintenance-industrielle",
    color: "primary",
  },
  {
    icon: Factory,
    title: "Installation Machine Industrielle",
    description: "Installation et mise en service de machines industrielles. Raccordement électrique, pneumatique et mise au point production.",
    features: ["Machines-outils", "Lignes production", "Convoyeurs", "Robots industriels"],
    href: "/services/installation-reparation-machine-industrielle",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Études Installation Électrique",
    description: "Études techniques complètes pour projets électriques industriels. Schémas unifilaires, notes de calcul, cahiers des charges et suivi de chantier.",
    features: ["Schémas électriques", "Notes de calcul", "Cahier des charges", "Suivi travaux"],
    href: "/services/etudes-installation-electrique-tanger",
    color: "secondary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Nos Services | Électricité Industrielle & Pompage Tanger"
        description="Découvrez nos services d'installation électrique industrielle, stations de pompage, programmation automate, câblage armoire et maintenance à Tanger. Devis gratuit."
        url="https://joule-tech.ma/services"
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
                Nos Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Solutions Électriques Complètes à Tanger
              </h1>
              <p className="text-xl text-primary-foreground/80">
                De l'étude à la maintenance, nous couvrons tous vos besoins en électricité industrielle,
                stations de pompage et automatismes dans la région Nord du Maroc.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.href}
                  className="glass-card rounded-2xl p-8 card-hover group"
                >
                  <div className={`w-16 h-16 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={service.href}>
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Besoin d'un Service Sur Mesure ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour étudier votre projet
              et vous proposer une solution adaptée.
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

export default Services;
