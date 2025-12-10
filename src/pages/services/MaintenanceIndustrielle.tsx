import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Wrench, Clock, Shield, FileCheck } from "lucide-react";
import serviceImage from "@/assets/service-maintenance.jpg";

const features = [
  {
    icon: Clock,
    title: "Maintenance Préventive",
    description: "Planification et exécution de programmes de maintenance pour éviter les pannes.",
  },
  {
    icon: Wrench,
    title: "Maintenance Curative",
    description: "Intervention rapide pour diagnostic et réparation des équipements en panne.",
  },
  {
    icon: Shield,
    title: "Maintenance Prédictive",
    description: "Analyse des données pour anticiper les défaillances avant qu'elles ne surviennent.",
  },
  {
    icon: FileCheck,
    title: "Contrats de Maintenance",
    description: "Formules d'abonnement adaptées à vos besoins et votre budget.",
  },
];

const benefits = [
  "Disponibilité 24/7 pour urgences",
  "Techniciens qualifiés et expérimentés",
  "Stock de pièces de rechange",
  "Rapports d'intervention détaillés",
  "Conseils d'amélioration continue",
  "Réduction des coûts de maintenance",
];

const MaintenanceIndustrielle = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Maintenance Industrielle Tanger | Maintenance Électrique Maroc"
        description="Services de maintenance industrielle et électrique à Tanger. Maintenance préventive, curative, contrats d'entretien. Intervention rapide 24/7. Devis gratuit."
        keywords="maintenance industrielle Tanger, maintenance électrique Maroc, dépannage industriel, maintenance préventive, contrat maintenance, réparation équipement industriel Tanger"
        url="https://joule-tech.ma/services/maintenance-industrielle"
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
              <span className="text-foreground">Maintenance Industrielle</span>
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
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Maintenance Industrielle à Tanger
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Services complets de maintenance industrielle et électrique à Tanger. 
                  Préventive, curative ou prédictive : nous assurons la disponibilité de vos équipements.
                </p>
                <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={serviceImage} 
                  alt="Maintenance industrielle à Tanger" 
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
                    Votre Partenaire Maintenance à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> propose des services complets de 
                      <strong className="text-foreground"> maintenance industrielle</strong> à Tanger et dans la région 
                      Nord du Maroc. Nos équipes de techniciens qualifiés interviennent sur tous types d'équipements 
                      électriques et électromécaniques pour garantir leur disponibilité optimale.
                    </p>
                    <p>
                      Nous proposons différentes formules adaptées à vos besoins : maintenance préventive planifiée 
                      pour anticiper les pannes, maintenance curative avec intervention rapide en cas de défaillance, 
                      et maintenance prédictive basée sur l'analyse des données de fonctionnement.
                    </p>
                    <p>
                      Nos contrats de <strong className="text-foreground">maintenance électrique</strong> incluent 
                      des visites régulières, la fourniture de pièces de rechange et une hotline disponible 24/7 
                      pour les urgences. Nous intervenons sur les armoires électriques, automates, variateurs, 
                      moteurs et tous équipements industriels.
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Besoin de Maintenance ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Demandez un audit de vos installations et un devis pour un contrat adapté.
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
                      <Link to="/services/electricite-industrielle-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Électricité Industrielle
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/installation-reparation-machine-industrielle" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Réparation Machine Industrielle
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/installation-station-pompage" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Installation Station Pompage
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

export default MaintenanceIndustrielle;
