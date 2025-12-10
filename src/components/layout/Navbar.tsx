import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Zap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Tous les Services" },
  { href: "/services/installation-station-pompage", label: "Installation Station Pompage" },
  { href: "/services/electricite-industrielle-tanger", label: "Électricité Industrielle" },
  { href: "/services/cablage-armoire-electrique-tanger", label: "Câblage Armoire Électrique" },
  { href: "/services/programmation-automate-tanger", label: "Programmation Automate" },
  { href: "/services/maintenance-industrielle", label: "Maintenance Industrielle" },
  { href: "/services/installation-reparation-machine-industrielle", label: "Installation Machine Industrielle" },
  { href: "/services/etudes-installation-electrique-tanger", label: "Études Installation Électrique" },
  { href: "/services/installation-electrique", label: "Installation Électrique" },
  { href: "/services/programmation-sofrel-s4w-tanger", label: "Programmation Sofrel S4W" },
];

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Pages with dark hero backgrounds where white text works
  const darkHeroPages = [
    "/",
    "/services",
    "/projets",
    "/about",
    "/contact",
  ];
  const hasDarkHero = darkHeroPages.includes(location.pathname) || location.pathname.startsWith("/services/");
  
  // Use white text on dark hero pages when not scrolled
  const useWhiteText = hasDarkHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const isServicePage = location.pathname.startsWith("/services");

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
            <span className={cn("text-xl font-bold transition-colors duration-300", useWhiteText ? "text-white" : "text-foreground")}>Joule Tech</span>
            <span className={cn("text-xs -mt-1 transition-colors duration-300", useWhiteText ? "text-white/70" : "text-muted-foreground")}>Électricité & Pompage</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              location.pathname === "/"
                ? useWhiteText ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                : useWhiteText ? "text-white/80 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Accueil
          </Link>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                  isServicePage
                    ? useWhiteText ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                    : useWhiteText ? "text-white/80 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    to={link.href}
                    className={cn(
                      "w-full cursor-pointer",
                      location.pathname === link.href && "bg-primary/10 text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname === link.href
                  ? useWhiteText ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                  : useWhiteText ? "text-white/80 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+212663339585" className={cn("flex items-center gap-2 text-sm font-medium transition-colors", useWhiteText ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary")}>
            <Phone className="w-4 h-4" />
            <span>+212 6 63 33 95 85</span>
          </a>
          <Button variant="hero" size="default" onClick={onOpenContact}>
            Devis Gratuit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("lg:hidden p-2 rounded-lg transition-colors", useWhiteText ? "hover:bg-white/10" : "hover:bg-muted")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", useWhiteText ? "text-white" : "text-foreground")} />
          ) : (
            <Menu className={cn("w-6 h-6", useWhiteText ? "text-white" : "text-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link
            to="/"
            className={cn(
              "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
              location.pathname === "/"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Accueil
          </Link>

          {/* Services Section Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-between",
                isServicePage
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Services
              <ChevronDown className={cn("w-5 h-5 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            
            <div className={cn(
              "overflow-hidden transition-all duration-300",
              isServicesOpen ? "max-h-[500px]" : "max-h-0"
            )}>
              <div className="pl-4 flex flex-col gap-1 py-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
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