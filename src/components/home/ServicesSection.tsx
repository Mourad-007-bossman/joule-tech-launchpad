import { Link } from "react-router-dom";
import { ArrowRight, Zap, Settings, Cable, Cpu, Wrench, FileText, Waves, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Waves,
    title: "Installation Station Pompage",
    description: "Installation complète de stations de pompage industrielles et municipales à Tanger et sa région.",
    href: "/services/installation-station-pompage",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Électricité Industrielle",
    description: "Installation et mise en conformité électrique pour industries et bâtiments professionnels.",
    href: "/services/electricite-industrielle-tanger",
    color: "primary",
  },
  {
    icon: Cable,
    title: "Câblage Armoire Électrique",
    description: "Conception et câblage d'armoires électriques sur mesure selon normes internationales.",
    href: "/services/cablage-armoire-electrique-tanger",
    color: "accent",
  },
  {
    icon: Cpu,
    title: "Programmation Automate",
    description: "Programmation d'automates programmables industriels (API/PLC) pour automatisation.",
    href: "/services/programmation-automate-tanger",
    color: "secondary",
  },
  {
    icon: Settings,
    title: "Programmation Sofrel S4W",
    description: "Expert en programmation Sofrel S4W pour télégestion et supervision de réseaux.",
    href: "/services/programmation-sofrel-s4w-tanger",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Maintenance Industrielle",
    description: "Contrats de maintenance préventive et curative pour installations électriques.",
    href: "/services/maintenance-industrielle",
    color: "accent",
  },
  {
    icon: Factory,
    title: "Installation Machine Industrielle",
    description: "Installation et mise en service de machines industrielles et équipements de production.",
    href: "/services/installation-reparation-machine-industrielle",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Études & Schémas Électriques",
    description: "Études techniques complètes et réalisation de schémas électriques pour vos projets.",
    href: "/services/etudes-installation-electrique-tanger",
    color: "primary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
  accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions Électriques
            <span className="text-gradient-primary"> Complètes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            De l'installation à la maintenance, nous couvrons tous vos besoins en électricité industrielle
            et stations de pompage à Tanger et dans la région Nord du Maroc.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.href}
              to={service.href}
              className="group glass-card rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 transition-all duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <Link to="/services">
              Voir Tous Nos Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
