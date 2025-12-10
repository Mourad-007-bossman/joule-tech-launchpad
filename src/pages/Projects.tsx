import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, CheckCircle2, Waves, Zap, Factory } from "lucide-react";
import projectPompage from "@/assets/project-pompage.jpg";
import projectArmoire from "@/assets/project-armoire.jpg";
import projectAutomate from "@/assets/project-automate.jpg";
const projects = [
  {
    id: 1,
    title: "Station de Pompage Zone Industrielle Tanger",
    category: "Station de Pompage",
    icon: Waves,
    location: "Tanger, Zone Industrielle",
    year: "2024",
    description: "Installation complète d'une station de pompage pour l'alimentation en eau industrielle d'un complexe de production. Capacité de 500 m³/h avec télégestion Sofrel S4W.",
    features: [
      "4 pompes immergées 132 kW",
      "Armoire de commande automatisée",
      "Télégestion Sofrel S4W",
      "Variateurs de fréquence ABB",
      "Système de supervision SCADA",
    ],
    results: "Réduction de 30% de la consommation énergétique grâce aux variateurs",
    image: projectPompage,
  },
  {
    id: 2,
    title: "Électrification Usine Textile",
    category: "Électricité Industrielle",
    icon: Zap,
    location: "Tanger Free Zone",
    year: "2023",
    description: "Installation électrique complète haute et basse tension pour une usine textile de 15 000 m². TGBT, distribution, éclairage industriel et mise à la terre.",
    features: [
      "Poste de transformation 2000 kVA",
      "TGBT avec protection différentielle",
      "12 armoires divisionnaires",
      "Éclairage LED haute efficacité",
      "Groupe électrogène 800 kVA",
    ],
    results: "Certification conformité électrique NFC 15-100 obtenue",
    image: projectArmoire,
  },
  {
    id: 3,
    title: "Automatisation Ligne de Production",
    category: "Programmation Automate",
    icon: Factory,
    location: "Tétouan",
    year: "2024",
    description: "Programmation et mise en service d'une ligne de production automatisée pour l'industrie agroalimentaire. Automate Siemens S7-1500 avec supervision HMI.",
    features: [
      "Automate Siemens S7-1500",
      "15 variateurs Sinamics",
      "Interface HMI tactile 22\"",
      "Réseau Profinet industriel",
      "Traçabilité production",
    ],
    results: "Augmentation de 40% de la cadence de production",
    image: projectAutomate,
  },
];

const Projects = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Nos Projets | Réalisations Électricité Industrielle Tanger"
        description="Découvrez nos réalisations en installation électrique industrielle, stations de pompage et automatisation à Tanger. Études de cas et références clients."
        url="https://joule-tech.ma/projets"
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
                Nos Réalisations
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Projets & Études de Cas
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Découvrez quelques-unes de nos réalisations emblématiques en électricité industrielle,
                stations de pompage et automatismes à Tanger et dans le Nord du Maroc.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass-card rounded-3xl overflow-hidden card-hover"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} - Joule Tech électricité industrielle Tanger`}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-xl bg-card/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {project.title}
                      </h2>

                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-foreground mb-3">Équipements & Solutions</h3>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <p className="text-sm">
                          <span className="font-semibold text-accent">Résultat : </span>
                          <span className="text-foreground">{project.results}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vous Avez un Projet Similaire ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est prête à étudier votre projet et vous proposer
              une solution adaptée à vos besoins et contraintes.
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

export default Projects;
