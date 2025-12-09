import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle2, Upload, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Installation Station Pompage",
  "Électricité Industrielle",
  "Câblage Armoire Électrique",
  "Programmation Automate",
  "Maintenance Industrielle",
  "Programmation Sofrel S4W",
  "Études Installation Électrique",
  "Autre",
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Demande envoyée avec succès !",
      description: "Notre équipe vous contactera dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    setStep(3);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      service: "",
      location: "",
      email: "",
      message: "",
      file: null,
    });
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-card border-border">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary-foreground">
              {step === 3 ? "Merci !" : "Demander un Devis Gratuit"}
            </DialogTitle>
          </DialogHeader>
          {step !== 3 && (
            <div className="flex items-center gap-2 mt-4">
              <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-accent" : "bg-primary-foreground/30"}`} />
              <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-accent" : "bg-primary-foreground/30"}`} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Votre nom"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+212 6XX XXX XXX"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Type de service *</Label>
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Localisation *</Label>
                <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tanger">Tanger</SelectItem>
                    <SelectItem value="tetouan">Tétouan</SelectItem>
                    <SelectItem value="autre">Autre ville</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full mt-6"
                disabled={!formData.name || !formData.phone || !formData.service || !formData.location}
              >
                Continuer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email (optionnel)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="votre@email.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Description du projet</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Décrivez votre projet ou vos besoins..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label>Fichier joint (optionnel)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    {formData.file ? (
                      <p className="text-sm text-primary font-medium">{formData.file.name}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Cliquez pour ajouter un fichier (PDF, PNG, JPG)
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="flex-1">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour
                </Button>
                <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Demande envoyée !</h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe vous contactera dans les prochaines 24 heures pour discuter de votre projet.
              </p>
              <Button variant="hero" size="lg" onClick={resetForm} className="w-full">
                Fermer
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
