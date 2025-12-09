import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  onOpenContact: () => void;
}

export function StickyCTA({ onOpenContact }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="bg-card/95 backdrop-blur-xl border-t border-border shadow-lg px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+212663339585"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
        >
          <Phone className="w-5 h-5" />
          Appeler
        </a>
        <Button
          variant="hero"
          size="lg"
          onClick={onOpenContact}
          className="flex-1"
        >
          <FileText className="w-5 h-5" />
          Devis Gratuit
        </Button>
      </div>
    </div>
  );
}
