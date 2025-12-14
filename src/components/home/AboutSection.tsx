import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Clock, ArrowRight } from "lucide-react";

const stats = [
  { icon: Award, value: "200+", label: "Projets Réalisés" },
  { icon: Users, value: "150+", label: "Clients Satisfaits" },
  { icon: Clock, value: "15+", label: "Années d'Expérience" },
];

const strengths = [
  "Équipe d'ingénieurs et techniciens qualifiés",
  "Respect des normes et délais",
  "Service après-vente réactif",
  "Solutions personnalisées",
  "Matériel de qualité certifié",
  "Couverture Tanger et région Nord",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              À Propos de Joule Tech
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Votre Partenaire en
              <span className="text-gradient-primary"> Électricité Industrielle</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Depuis plus de 15 ans, <strong>Joule Tech</strong> est le partenaire de référence des industriels 
              et collectivités à Tanger pour l'installation électrique, les stations de pompage et 
              l'automatisation industrielle.
            </p>
            <p className="text-muted-foreground mb-8">
              Notre expertise couvre l'ensemble du cycle de vie de vos installations : études, conception, 
              installation, programmation, mise en service et maintenance. Nous intervenons sur les automates 
              programmables, les RTU (Remonte télécontrôle unité) et SCADA télégestion, le câblage d'armoires électriques et bien plus.
            </p>

            {/* Strengths */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{strength}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" asChild>
              <Link to="/about">
                En Savoir Plus
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats & Visual */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
