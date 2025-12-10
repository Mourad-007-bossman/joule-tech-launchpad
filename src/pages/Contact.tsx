import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyCTA } from "@/components/StickyCTA";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone Mobile",
    value: "+212 6 63 33 95 85",
    href: "tel:+212663339585",
    description: "WhatsApp disponible",
  },
  {
    icon: Phone,
    title: "Téléphone Fixe",
    value: "05 31 31 82 82",
    href: "tel:+212531318282",
    description: "Du lundi au vendredi, 8h-18h",
  },
  {
    icon: Phone,
    title: "Fax",
    value: "05 31 97 87 92",
    href: null,
    description: "Envoi de documents",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@joule-tech.ma",
    href: "mailto:info@joule-tech.ma",
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Tanger, Maroc",
    href: "#map",
    description: "Zone industrielle",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Ven: 8h-18h",
    href: null,
    description: "Sam: 8h-12h",
  },
];

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

const Contact = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Notre équipe vous contactera dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Contact | Joule Tech - Électricité Industrielle Tanger"
        description="Contactez Joule Tech pour vos projets d'électricité industrielle, stations de pompage et automatismes à Tanger. Devis gratuit sous 24h."
        url="https://joule-tech.ma/contact"
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
                Contactez-Nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Parlons de Votre Projet
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Notre équipe d'experts est à votre disposition pour répondre à vos questions
                et vous accompagner dans vos projets électriques.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8 relative z-20">
          <div className="container-custom px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href || undefined}
                  className="glass-card rounded-xl p-5 card-hover group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Envoyez-nous un Message</h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Votre nom"
                        required
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
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
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
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Décrivez votre projet ou vos besoins..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.service || !formData.message}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* WhatsApp Alternative */}
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground mb-4">Ou contactez-nous directement sur WhatsApp</p>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a
                      href="https://wa.me/212663339585?text=Bonjour%20Joule%20Tech%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20vos%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Discuter sur WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div id="map" className="space-y-6">
                <div className="glass-card rounded-2xl overflow-hidden h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103532.63509452891!2d-5.916711!3d35.7594651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger%2C%20Morocco!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Joule Tech Location - Tanger, Maroc"
                  />
                </div>

                {/* Additional Info */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Zone d'Intervention</h3>
                  <p className="text-muted-foreground mb-4">
                    Joule Tech intervient sur l'ensemble de la région Nord du Maroc, avec une présence forte à :
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {["Tanger", "Tétouan", "Larache", "Asilah", "Fnideq", "M'diq", "Chefchaouen", "Ksar el-Kébir"].map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-foreground">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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

export default Contact;
