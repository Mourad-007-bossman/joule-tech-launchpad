import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Radio, Smartphone, Bell, BarChart3 } from "lucide-react";
import serviceImage from "@/assets/service-sofrel-s4w.jpg";

const features = [
  {
    icon: Radio,
    title: "Télégestion Sofrel",
    description: "Configuration et programmation complète des postes locaux Sofrel S4W.",
  },
  {
    icon: Smartphone,
    title: "Supervision à Distance",
    description: "Accès aux données en temps réel via PC, tablette ou smartphone.",
  },
  {
    icon: Bell,
    title: "Alertes SMS/Email",
    description: "Configuration des alarmes et notifications automatiques en cas d'anomalie.",
  },
  {
    icon: BarChart3,
    title: "Historiques & Rapports",
    description: "Enregistrement des données et génération de rapports de fonctionnement.",
  },
];

const benefits = [
  "Expertise certifiée Sofrel/Lacroix",
  "Configuration optimisée pour le pompage",
  "Intégration SCADA et supervision centrale",
  "Protocoles Modbus, DNP3, IEC 60870",
  "Mise en service et réglage sur site",
  "Formation des exploitants",
];

const ProgrammationSofrelS4WTanger = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Programmation Sofrel S4W Tanger | Télégestion Station Pompage"
        description="Expert en programmation Sofrel S4W à Tanger. Télégestion pour stations de pompage, réservoirs, réseaux d'eau. Configuration, mise en service, formation."
        keywords="programmation Sofrel S4W Tanger, télégestion pompage, Sofrel Lacroix Maroc, supervision station pompage, RTU S4W, télégestion eau Tanger"
        url="https://joule-tech.ma/services/programmation-sofrel-s4w-tanger"
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
              <span className="text-foreground">Programmation Sofrel S4W</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <Radio className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Programmation Sofrel S4W à Tanger
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Spécialiste de la télégestion Sofrel pour stations de pompage et réseaux d'eau à Tanger. 
                  Configuration, programmation et mise en service de postes S4W.
                </p>
                <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={serviceImage} 
                  alt="Programmation Sofrel S4W télégestion à Tanger" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
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
                    Expert Sofrel S4W pour la Télégestion de l'Eau
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> est spécialisé dans la 
                      <strong className="text-foreground"> programmation Sofrel S4W</strong> pour les réseaux d'eau et 
                      d'assainissement à Tanger et dans le Nord du Maroc. Les postes locaux Sofrel de Lacroix permettent 
                      une supervision complète de vos installations de pompage, réservoirs et ouvrages hydrauliques.
                    </p>
                    <p>
                      Nous configurons vos RTU S4W pour assurer le pilotage automatique de vos pompes, la surveillance 
                      des niveaux, débits et pressions, ainsi que la transmission des alarmes en temps réel. Nos programmes 
                      intègrent les logiques de régulation adaptées à chaque type d'ouvrage.
                    </p>
                    <p>
                      Grâce à notre expertise, vos exploitants peuvent superviser l'ensemble du réseau depuis un poste 
                      central ou leur smartphone, recevoir des alertes SMS/email en cas de défaut et consulter les 
                      historiques de fonctionnement pour optimiser la gestion de vos infrastructures.
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Projet de Télégestion ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Contactez-nous pour une étude de votre réseau et un devis personnalisé.
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
                      <Link to="/services/installation-station-pompage" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Installation Station Pompage
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/programmation-automate-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Programmation Automate
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

export default ProgrammationSofrelS4WTanger;
