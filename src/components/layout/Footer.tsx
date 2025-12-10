import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoJouleTech from "@/assets/logo-joule-tech.jpeg";

const services = [
  { href: "/services/installation-station-pompage", label: "Installation Station Pompage" },
  { href: "/services/electricite-industrielle-tanger", label: "Électricité Industrielle" },
  { href: "/services/cablage-armoire-electrique-tanger", label: "Câblage Armoire Électrique" },
  { href: "/services/programmation-automate-tanger", label: "Programmation Automate" },
  { href: "/services/maintenance-industrielle", label: "Maintenance Industrielle" },
];

const quickLinks = [
  { href: "/services", label: "Nos Services" },
  { href: "/projets", label: "Nos Projets" },
  { href: "/about", label: "À Propos" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={logoJouleTech} 
                alt="Joule Tech Logo" 
                className="h-14 w-auto rounded-lg"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Expert en installation électrique industrielle, stations de pompage et automatismes à Tanger. Plus de 200 projets réalisés avec succès.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+212663339585" className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+212 6 63 33 95 85</span>
              </a>
              <a href="mailto:info@joule-tech.ma" className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@joule-tech.ma</span>
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Tanger, Maroc</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="text-accent">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="text-accent">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-background/50">Fermé</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-background/5 border border-background/10">
              <p className="text-sm text-background/80">
                <span className="text-accent font-semibold">Urgences 24/7</span>
                <br />
                Service d'intervention rapide disponible
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60 text-center md:text-left">
            © {new Date().getFullYear()} Joule Tech. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
