import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

export function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-accent" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à Lancer Votre Projet ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour une étude personnalisée et un devis gratuit.
            Installation électrique, station de pompage ou maintenance — nous avons la solution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={onOpenContact}>
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="tel:+212663339585"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +212 6 63 33 95 85
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60 mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/40">
              <span className="text-lg font-semibold">Groupe Industriel Tanger</span>
              <span className="text-lg font-semibold">Amendis</span>
              <span className="text-lg font-semibold">ONEE</span>
              <span className="text-lg font-semibold">Collectivités Locales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
