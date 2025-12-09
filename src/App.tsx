import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import InstallationStationPompage from "./pages/services/InstallationStationPompage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/installation-station-pompage" element={<InstallationStationPompage />} />
            <Route path="/services/electricite-industrielle-tanger" element={<Services />} />
            <Route path="/services/cablage-armoire-electrique-tanger" element={<Services />} />
            <Route path="/services/programmation-automate-tanger" element={<Services />} />
            <Route path="/services/programmation-sofrel-s4w-tanger" element={<Services />} />
            <Route path="/services/maintenance-industrielle" element={<Services />} />
            <Route path="/services/installation-reparation-machine-industrielle" element={<Services />} />
            <Route path="/services/etudes-installation-electrique-tanger" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
