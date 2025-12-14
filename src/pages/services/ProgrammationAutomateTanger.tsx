import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, Monitor, Settings, RefreshCw } from "lucide-react";
import serviceImage from "@/assets/service-programmation-automate.jpg";

const features = [
  {
    icon: Cpu,
    title: "Automates Programmables",
    description: "Programmation d'automates Siemens, Schneider, Allen-Bradley et autres marques.",
  },
  {
    icon: Monitor,
    title: "Supervision IHM",
    description: "Développement d'interfaces homme-machine pour pilotage des installations.",
  },
  {
    icon: Settings,
    title: "Régulation & Contrôle",
    description: "Mise en place de boucles de régulation PID et systèmes de contrôle avancés.",
  },
  {
    icon: RefreshCw,
    title: "Rétrofit & Migration",
    description: "Migration de programmes et mise à niveau d'automates obsolètes.",
  },
];

const benefits = [
  "Expertise multi-marques (Siemens, Schneider, AB)",
  "Programmation structurée et documentée",
  "Développement IHM personnalisé",
  "Communication industrielle (Profibus, Modbus, Ethernet/IP)",
  "Mise en service sur site",
  "Formation des opérateurs",
];

const ProgrammationAutomateTanger = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Programmation Automate Tanger | Automate Programmable Maroc"
        description="Expert en programmation d'automates programmables à Tanger. Siemens, Schneider, Allen-Bradley. Développement IHM, supervision industrielle. Devis gratuit."
        keywords="programmation automate Tanger, automate programmable Maroc, programmation Siemens, programmation Schneider, IHM industrielle, automatisme Tanger"
        url="https://joule-tech.ma/services/programmation-automate-tanger"
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
              <span className="text-foreground">Programmation Automate</span>
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
                  <Cpu className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Programmation Automate à Tanger
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Expert en programmation d'automates programmables industriels à Tanger. 
                  Siemens, Schneider, Allen-Bradley : nous maîtrisons toutes les plateformes.
                </p>
                <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={serviceImage} 
                  alt="Programmation automate programmable à Tanger" 
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
                    Spécialiste en Automates Programmables à Tanger
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">Joule Tech</strong> propose des services complets de 
                      <strong className="text-foreground"> programmation d'automates</strong> à Tanger et dans la région 
                      Nord du Maroc. Notre équipe d'automaticiens expérimentés intervient sur toutes les marques d'API : 
                      Siemens (S7-300, S7-1200, S7-1500), Schneider (M340, M580), Allen-Bradley et autres.
                    </p>
                    <p>
                      De l'étude fonctionnelle à la mise en service, nous développons des programmes robustes et maintenables 
                      pour vos lignes de production, machines spéciales et process industriels. Nos programmes sont structurés, 
                      commentés et documentés pour faciliter la maintenance future.
                    </p>
                    <p>
                      Nous réalisons également le développement d'<strong className="text-foreground">interfaces IHM</strong> 
                      (pupitres tactiles, supervision PC) et l'intégration des communications industrielles : Profinet, 
                      Profibus, Modbus TCP, Ethernet/IP, OPC-UA.
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
                  <h3 className="text-lg font-semibold text-foreground mb-4">Projet d'Automatisation ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Décrivez votre besoin pour recevoir une proposition technique et commerciale.
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
                        RTU et SCADA Télégestion
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cablage-armoire-electrique-tanger" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Câblage Armoire Électrique
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/installation-reparation-machine-industrielle" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                        Installation Machine Industrielle
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

export default ProgrammationAutomateTanger;
