import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Cog, Package, RefreshCw, Settings2 } from "lucide-react";
import serviceImage from "@/assets/service-machine-industrielle.jpg";

const features = [
  {
    icon: Package,
    title: "Installation Machines",
    description: "Installation et mise en service de machines industrielles neuves ou déplacées.",
  },
  {
    icon: RefreshCw,
    title: "Réparation & Dépannage",
    description: "Diagnostic et réparation de machines en panne pour reprise rapide de production.",
  },
  {
    icon: Settings2,
    title: "Retrofit & Modernisation",
    description: "Mise à niveau des machines anciennes avec technologies modernes.",
  },
  {
    icon: Cog,
    title: "Alignement & Réglage",
    description: "Alignement laser, équilibrage et réglages de précision.",
  },
];

const benefits = [
  "Intervention sur toutes marques de machines",
  "Diagnostic précis avec outils modernes",
  "Pièces de rechange d'origine ou équivalentes",
  "Remise en conformité aux normes",
  "Optimisation des performances",
  "Formation des opérateurs",
];

const InstallationReparationMachineIndustrielle = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Installation Réparation Machine Industrielle Tanger | Dépannage"
        description="Installation et réparation de machines industrielles à Tanger. Dépannage, mise en service, retrofit. Intervention rapide sur toutes marques. Devis gratuit."
        keywords="installation machine industrielle Tanger, réparation machine Tanger, dépannage industriel Maroc, mise en service machine, retrofit machine industrielle"
        url="https://joule-tech.ma/services/installation-reparation-machine-industrielle"
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
              <span className="text-foreground">Installation & Réparation Machine</span>
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
                  <Cog className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Installation & Réparation Machine Industrielle à Tanger
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Expert en installation et réparation de machines industrielles à Tanger. 
                  Dépannage rapide, mise en service, modernisation de vos équipements de production.
                </p>
                <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={serviceImage} 
                  alt="Installation et réparation machine industrielle à Tanger" 
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
                    Expert en Machines Industrielles à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> intervient pour l'
                      <strong className="text-foreground">installation et la réparation de machines industrielles</strong> 
                      à Tanger et dans le Nord du Maroc. Nos techniciens expérimentés prennent en charge tous types 
                      d'équipements : machines de production, lignes d'assemblage, équipements de manutention, presses, 
                      compresseurs et plus encore.
                    </p>
                    <p>
                      Pour vos projets d'installation, nous assurons la réception, le positionnement, le raccordement 
                      électrique et pneumatique, les tests et la mise en service complète. Nous formons également vos 
                      opérateurs à l'utilisation et à la maintenance de premier niveau.
                    </p>
                    <p>
                      En cas de panne, notre équipe intervient rapidement pour diagnostiquer le problème et effectuer 
                      les réparations nécessaires. Nous disposons d'un stock de pièces courantes et d'un réseau de 
                      fournisseurs pour obtenir rapidement les pièces spécifiques.
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Machine en Panne ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Contactez-nous pour une intervention rapide et un diagnostic précis.
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
                      <Link to="/services/maintenance-industrielle" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Maintenance Industrielle
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/programmation-automate-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Programmation Automate
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/electricite-industrielle-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Électricité Industrielle
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

export default InstallationReparationMachineIndustrielle;
