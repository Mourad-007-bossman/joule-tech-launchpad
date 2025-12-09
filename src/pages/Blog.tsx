import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Zap } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "electricite-industrielle-tanger-guide-2025",
    title: "Électricité Industrielle à Tanger — Guide Complet 2025",
    excerpt: "Découvrez les meilleures pratiques pour vos installations électriques industrielles à Tanger : normes, équipements, maintenance et conseils d'experts.",
    category: "Guide",
    author: "Équipe Joule Tech",
    date: "10 Janvier 2025",
    readTime: "8 min",
    featured: true,
    content: `
## Introduction

L'électricité industrielle à Tanger connaît une croissance significative grâce à l'essor des zones industrielles et au développement économique de la région Nord du Maroc. Ce guide vous présente les aspects essentiels à connaître pour vos projets d'installation électrique industrielle en 2025.

## Les Normes Électriques au Maroc

Les installations électriques industrielles au Maroc doivent respecter plusieurs normes et réglementations :

- **NFC 15-100** : Norme française largement adoptée au Maroc pour les installations basse tension
- **CEI 60364** : Normes internationales pour les installations électriques
- **Réglementation ONEE** : Exigences spécifiques du fournisseur d'électricité national

## Équipements Essentiels

Une installation électrique industrielle complète comprend généralement :

### Postes de Transformation
- Transformateurs MT/BT (20 kV / 400 V)
- Cellules de protection
- Équipements de comptage

### Tableaux Généraux Basse Tension (TGBT)
- Disjoncteurs généraux
- Protections différentielles
- Système de mesure et supervision

### Distribution
- Armoires divisionnaires
- Câblage selon sections normalisées
- Chemins de câbles et conduits

## Maintenance Préventive

La maintenance régulière est cruciale pour :
- Prévenir les pannes et arrêts de production
- Assurer la sécurité des personnes et équipements
- Optimiser la consommation énergétique
- Prolonger la durée de vie des installations

## Conclusion

Pour vos projets d'électricité industrielle à Tanger, faites appel à des professionnels qualifiés comme Joule Tech. Notre expertise de plus de 15 ans vous garantit des installations conformes, performantes et durables.
    `,
  },
  {
    id: 2,
    slug: "programmation-automate-sofrel-s4w",
    title: "Programmation Sofrel S4W : Télégestion des Réseaux d'Eau",
    excerpt: "Tout savoir sur la programmation des automates Sofrel S4W pour la télégestion des réseaux d'eau potable et d'assainissement.",
    category: "Technique",
    author: "Équipe Joule Tech",
    date: "5 Janvier 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 3,
    slug: "maintenance-station-pompage",
    title: "Maintenance des Stations de Pompage : Les Bonnes Pratiques",
    excerpt: "Conseils et recommandations pour assurer une maintenance efficace de vos stations de pompage industrielles.",
    category: "Maintenance",
    author: "Équipe Joule Tech",
    date: "28 Décembre 2024",
    readTime: "5 min",
    featured: false,
  },
];

const Blog = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <SEO
        title="Blog | Actualités Électricité Industrielle Tanger"
        description="Découvrez nos articles et guides sur l'électricité industrielle, les stations de pompage et l'automatisation à Tanger. Conseils d'experts et bonnes pratiques."
        url="https://joule-tech.ma/blog"
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
                Notre Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Actualités & Conseils d'Experts
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Découvrez nos articles sur l'électricité industrielle, les stations de pompage
                et l'automatisation. Guides pratiques et retours d'expérience.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding">
            <div className="container-custom">
              <div className="glass-card rounded-3xl overflow-hidden card-hover">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 min-h-[300px] flex items-center justify-center p-8">
                    <div className="w-32 h-32 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center shadow-lg">
                      <Zap className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        Article Vedette
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="hero" asChild>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Posts */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">Autres Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <article key={post.id} className="glass-card rounded-2xl overflow-hidden card-hover group">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-card/90 flex items-center justify-center shadow-lg">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Besoin d'un Expert ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à vos questions
              et vous accompagner dans vos projets.
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsContactOpen(true)}>
              Nous Contacter
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

export default Blog;
