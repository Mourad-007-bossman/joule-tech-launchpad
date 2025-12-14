import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed El Amrani",
    role: "Directeur Technique",
    company: "Usine Textile Tanger",
    content: "Joule Tech a réalisé l'installation électrique complète de notre usine. Travail impeccable, respect des délais et équipe très professionnelle. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Fatima Benali",
    role: "Responsable Maintenance",
    company: "Société Agricole Nord",
    content: "Installation de notre station de pompage réalisée avec expertise. Le système RTU et SCADA télégestion fonctionne parfaitement. Service après-vente réactif et efficace.",
    rating: 5,
  },
  {
    name: "Ahmed Tazi",
    role: "Gérant",
    company: "Groupe Industriel Tanger",
    content: "Partenaire fiable depuis 5 ans pour notre maintenance électrique industrielle. Interventions rapides et solutions techniques adaptées à nos besoins.",
    rating: 5,
  },
  {
    name: "Karim Ouazzani",
    role: "Chef de Projet",
    company: "Promoteur Immobilier",
    content: "Câblage d'armoires électriques de qualité supérieure. Schémas clairs, documentation complète. Travail propre et conforme aux normes.",
    rating: 5,
  },
  {
    name: "Nadia Fassi",
    role: "Directrice Usine",
    company: "Agroalimentaire Tétouan",
    content: "Programmation automate parfaitement exécutée. L'équipe a su comprendre nos besoins spécifiques et proposer des solutions innovantes.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce Que Disent
            <span className="text-gradient-accent"> Nos Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience
            sur nos services d'électricité industrielle à Tanger.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 card-hover relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
