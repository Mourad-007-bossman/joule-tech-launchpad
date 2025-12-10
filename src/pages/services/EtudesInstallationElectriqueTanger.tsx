import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, FileText, Calculator, Lightbulb, ClipboardCheck } from "lucide-react";
import serviceImage from "@/assets/service-etudes-electriques.jpg";

const features = [
  {
    icon: Calculator,
    title: "Dimensionnement",
    description: "Calcul de puissance, sections de câbles, protections selon les normes en vigueur.",
  },
  {
    icon: FileText,
    title: "Schémas Électriques",
    description: "Réalisation de schémas unifilaires, multifilaires et de câblage détaillés.",
  },
  {
    icon: Lightbulb,
    title: "Études d'Éclairage",
    description: "Conception de solutions d'éclairage industriel économes en énergie.",
  },
  {
    icon: ClipboardCheck,
    title: "Cahier des Charges",
    description: "Rédaction de spécifications techniques et dossiers de consultation.",
  },
];

const benefits = [
  "Ingénieurs qualifiés et expérimentés",
  "Conformité aux normes NFC 15-100",
  "Logiciels de calcul professionnels (Caneco, DIALux)",
  "Plans AutoCAD / EPLAN",
  "Optimisation des coûts d'installation",
  "Accompagnement jusqu'à la réception",
];

const EtudesInstallationElectriqueTanger = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Études Installation Électrique Tanger | Schéma Électrique Industriel"
        description="Bureau d'études électriques à Tanger. Dimensionnement, schémas électriques, études d'éclairage industriel. Conformité NFC 15-100. Devis gratuit."
        keywords="études installation électrique Tanger, schéma électrique Tanger, bureau études électriques Maroc, dimensionnement électrique industriel, études éclairage Tanger"
        url="https://joule-tech.ma/services/etudes-installation-electrique-tanger"
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
              <span className="text-foreground">Études Installation Électrique</span>
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
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Études Installation Électrique à Tanger
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Bureau d'études spécialisé en installations électriques industrielles à Tanger. 
                  Dimensionnement, schémas, cahiers des charges conformes aux normes.
                </p>
                <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={serviceImage} 
                  alt="Études installation électrique à Tanger" 
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
                    Bureau d'Études Électriques à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> dispose d'un bureau d'études intégré 
                      spécialisé dans les <strong className="text-foreground">études d'installations électriques</strong> 
                      industrielles à Tanger. Nos ingénieurs conçoivent des installations optimisées, conformes aux 
                      normes en vigueur et adaptées à vos contraintes techniques et budgétaires.
                    </p>
                    <p>
                      Nous prenons en charge l'ensemble du processus d'étude : analyse des besoins, bilan de puissance, 
                      dimensionnement des équipements, réalisation des <strong className="text-foreground">schémas électriques</strong> 
                      (unifilaires, multifilaires, câblage), sélection du matériel et rédaction des spécifications techniques.
                    </p>
                    <p>
                      Nos études sont réalisées avec des logiciels professionnels (Caneco BT, DIALux, AutoCAD, EPLAN) 
                      garantissant la précision des calculs et la qualité des livrables. Nous vous accompagnons de la 
                      conception à la réception des travaux pour assurer la conformité de vos installations.
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Besoin d'une Étude ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Décrivez votre projet pour recevoir une proposition d'étude personnalisée.
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

export default EtudesInstallationElectriqueTanger;
