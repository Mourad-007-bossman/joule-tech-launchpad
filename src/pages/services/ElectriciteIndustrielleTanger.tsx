import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Zap, Factory, Shield, Gauge } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Installations Industrielles",
    description: "Conception et réalisation d'installations électriques complètes pour usines et ateliers.",
  },
  {
    icon: Zap,
    title: "Distribution HT/BT",
    description: "Installation de postes de transformation et tableaux de distribution basse tension.",
  },
  {
    icon: Shield,
    title: "Protection & Sécurité",
    description: "Mise en place de protections électriques conformes aux normes NFC 15-100.",
  },
  {
    icon: Gauge,
    title: "Mesure & Comptage",
    description: "Installation de systèmes de comptage et supervision de consommation énergétique.",
  },
];

const benefits = [
  "Études et dimensionnement sur mesure",
  "Conformité aux normes marocaines et internationales",
  "Équipements Schneider, ABB, Siemens",
  "Installation clé en main",
  "Formation du personnel technique",
  "Maintenance préventive et curative",
];

const ElectriciteIndustrielleTanger = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Électricité Industrielle Tanger | Installation Électrique Usine"
        description="Société d'électricité industrielle à Tanger. Installation électrique usine, distribution HT/BT, mise en conformité. Expert en installations industrielles au Maroc."
        keywords="électricité industrielle Tanger, installation électrique usine, société installation électrique Tanger, distribution électrique industrielle, tableau électrique industriel Maroc"
        url="https://joule-tech.ma/services/electricite-industrielle-tanger"
      />
      
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 bg-muted/30">
          <div className="container-custom px-4 md:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span className="text-foreground">Électricité Industrielle</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Électricité Industrielle à Tanger
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Société spécialisée en installation électrique industrielle à Tanger. 
                Solutions complètes pour usines, ateliers et zones industrielles du Nord du Maroc.
              </p>
              <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Votre Partenaire en Électricité Industrielle à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> est une société d'installation électrique 
                      industrielle basée à Tanger, intervenant dans toute la région Nord du Maroc. Notre expertise couvre 
                      l'ensemble des besoins en <strong className="text-foreground">électricité industrielle</strong> : 
                      conception, installation, mise en service et maintenance.
                    </p>
                    <p>
                      Nous accompagnons les industries manufacturières, agroalimentaires, chimiques et logistiques dans 
                      leurs projets d'installation électrique. De la distribution haute et basse tension aux systèmes 
                      d'automatisation, nous proposons des solutions adaptées à chaque secteur d'activité.
                    </p>
                    <p>
                      Notre équipe d'ingénieurs et techniciens qualifiés garantit des installations conformes aux normes 
                      en vigueur (NFC 15-100, NF C 13-200) avec des équipements de marques reconnues : Schneider Electric, 
                      ABB, Siemens.
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="glass-card rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="glass-card rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Pourquoi Choisir Joule Tech ?</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <div className="glass-card rounded-xl p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Projet d'Électricité Industrielle ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Contactez-nous pour une étude technique et un devis gratuit sous 48h.
                  </p>
                  <Button variant="hero" className="w-full" onClick={() => setIsContactOpen(true)}>
                    Demander un Devis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Related Services */}
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Services Connexes</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/cablage-armoire-electrique-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Câblage Armoire Électrique
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/installation-electrique" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Installation Électrique
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/maintenance-industrielle" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Maintenance Industrielle
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Services */}
        <section className="pb-16">
          <div className="container-custom px-4 md:px-8">
            <Button variant="outline" asChild>
              <Link to="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux Services
              </Link>
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

export default ElectriciteIndustrielleTanger;
