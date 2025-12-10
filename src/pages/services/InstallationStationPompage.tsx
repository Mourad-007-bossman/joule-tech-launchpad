import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Waves, Settings, Cpu, Wrench } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Pompes Immergées",
    description: "Installation de pompes immergées haute performance pour forages et puits profonds.",
  },
  {
    icon: Settings,
    title: "Surpresseurs",
    description: "Mise en place de surpresseurs pour maintenir une pression constante dans vos réseaux.",
  },
  {
    icon: Cpu,
    title: "Télégestion Sofrel",
    description: "Programmation et intégration de systèmes Sofrel S4W pour supervision à distance.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Contrats de maintenance préventive pour garantir la disponibilité de vos installations.",
  },
];

const benefits = [
  "Dimensionnement optimisé selon vos besoins",
  "Équipements de marques reconnues (Grundfos, KSB, Wilo)",
  "Variateurs de fréquence pour économies d'énergie",
  "Télégestion et alarmes SMS/Email",
  "Mise en service et formation des opérateurs",
  "Garantie et support technique",
];

const InstallationStationPompage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Installation Station Pompage Tanger | Joule Tech"
        description="Installation de stations de pompage industrielles et municipales à Tanger. Pompes immergées, surpresseurs, télégestion Sofrel S4W. Devis gratuit."
        keywords="installation station pompage Tanger, pompes immergées, surpresseur, télégestion Sofrel S4W, station de pompage industrielle Maroc"
        url="https://joule-tech.ma/services/installation-station-pompage"
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
              <span className="text-foreground">Installation Station Pompage</span>
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
                <Waves className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Installation Station de Pompage à Tanger
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Expert en installation de stations de pompage industrielles et municipales.
                Solutions clé en main avec télégestion Sofrel S4W pour la région Nord du Maroc.
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
                    Votre Expert en Stations de Pompage à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> est votre partenaire de confiance pour 
                      l'<strong className="text-foreground">installation de stations de pompage</strong> à Tanger et dans 
                      la région Nord du Maroc. Nous intervenons pour les industries, les collectivités et les exploitations 
                      agricoles nécessitant des solutions de pompage performantes et fiables.
                    </p>
                    <p>
                      Nos équipes d'ingénieurs et techniciens qualifiés prennent en charge l'ensemble de votre projet : 
                      étude de dimensionnement, choix des équipements, installation électrique et hydraulique, 
                      programmation de la télégestion et mise en service.
                    </p>
                    <p>
                      Nous sommes spécialisés dans la <strong className="text-foreground">programmation Sofrel S4W</strong>, 
                      permettant une supervision à distance de vos installations avec alertes SMS et email en cas d'anomalie.
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="glass-card rounded-xl p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
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
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Besoin d'une Station de Pompage ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Contactez-nous pour une étude personnalisée et un devis gratuit sous 48h.
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
                      <Link to="/services/programmation-sofrel-s4w-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Programmation Sofrel S4W
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/electricite-industrielle-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Électricité Industrielle
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

export default InstallationStationPompage;
