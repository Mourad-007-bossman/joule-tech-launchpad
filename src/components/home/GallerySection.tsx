import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import projectPompage from "@/assets/project-pompage.jpg";
import projectArmoire from "@/assets/project-armoire.jpg";
import projectAutomate from "@/assets/project-automate.jpg";
import serviceElectricite from "@/assets/service-electricite-industrielle.jpg";
import serviceCablage from "@/assets/service-cablage-armoire.jpg";
import serviceAutomate from "@/assets/service-programmation-automate.jpg";
import serviceSofrel from "@/assets/service-sofrel-s4w.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const galleryItems = [
  {
    src: projectPompage,
    title: "Station de Pompage",
    category: "Pompage",
  },
  {
    src: serviceElectricite,
    title: "Installation Électrique Industrielle",
    category: "Électricité",
  },
  {
    src: projectArmoire,
    title: "Câblage Armoire TGBT",
    category: "Armoire",
  },
  {
    src: serviceAutomate,
    title: "Programmation Automate Siemens",
    category: "Automatisme",
  },
  {
    src: serviceSofrel,
    title: "Télégestion Sofrel S4W",
    category: "Télégestion",
  },
  {
    src: projectAutomate,
    title: "Mise en Service Automate",
    category: "Automatisme",
  },
  {
    src: serviceCablage,
    title: "Câblage Tableau Distribution",
    category: "Armoire",
  },
  {
    src: serviceMaintenance,
    title: "Maintenance Préventive",
    category: "Maintenance",
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations en électricité industrielle, 
            automatisme et pompage à Tanger et dans le Nord du Maroc.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-lg border-none">
            {selectedIndex !== null && (
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Image */}
                <img
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
                />

                {/* Info */}
                <div className="p-6 bg-background">
                  <span className="text-sm text-accent uppercase tracking-wider">
                    {galleryItems[selectedIndex].category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {galleryItems[selectedIndex].title}
                  </h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
