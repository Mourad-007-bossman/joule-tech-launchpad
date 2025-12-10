import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-xl font-bold transition-colors duration-300", isScrolled ? "text-foreground" : "text-white")}>Joule Tech</span>
            <span className={cn("text-xs -mt-1 transition-colors duration-300", isScrolled ? "text-muted-foreground" : "text-white/70")}>Électricité & Pompage</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname === link.href
                  ? isScrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
                  : isScrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+212663339585" className={cn("flex items-center gap-2 text-sm font-medium transition-colors", isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white")}>
            <Phone className="w-4 h-4" />
            <span>+212 6 63 33 95 85</span>
          </a>
          <Button variant="hero" size="default" onClick={onOpenContact}>
            Devis Gratuit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("lg:hidden p-2 rounded-lg transition-colors", isScrolled ? "hover:bg-muted" : "hover:bg-white/10")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="tel:+212663339585"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-muted text-foreground font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>+212 6 63 33 95 85</span>
            </a>
            <Button variant="hero" size="lg" onClick={onOpenContact} className="w-full">
              Demander un Devis Gratuit
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
