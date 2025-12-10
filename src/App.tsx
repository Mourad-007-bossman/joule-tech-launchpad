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
import ElectriciteIndustrielleTanger from "./pages/services/ElectriciteIndustrielleTanger";
import CablageArmoireElectriqueTanger from "./pages/services/CablageArmoireElectriqueTanger";
import ProgrammationAutomateTanger from "./pages/services/ProgrammationAutomateTanger";
import ProgrammationSofrelS4WTanger from "./pages/services/ProgrammationSofrelS4WTanger";
import MaintenanceIndustrielle from "./pages/services/MaintenanceIndustrielle";
import InstallationReparationMachineIndustrielle from "./pages/services/InstallationReparationMachineIndustrielle";
import EtudesInstallationElectriqueTanger from "./pages/services/EtudesInstallationElectriqueTanger";
import InstallationElectrique from "./pages/services/InstallationElectrique";
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
            <Route path="/services/electricite-industrielle-tanger" element={<ElectriciteIndustrielleTanger />} />
            <Route path="/services/cablage-armoire-electrique-tanger" element={<CablageArmoireElectriqueTanger />} />
            <Route path="/services/programmation-automate-tanger" element={<ProgrammationAutomateTanger />} />
            <Route path="/services/programmation-sofrel-s4w-tanger" element={<ProgrammationSofrelS4WTanger />} />
            <Route path="/services/maintenance-industrielle" element={<MaintenanceIndustrielle />} />
            <Route path="/services/installation-reparation-machine-industrielle" element={<InstallationReparationMachineIndustrielle />} />
            <Route path="/services/etudes-installation-electrique-tanger" element={<EtudesInstallationElectriqueTanger />} />
            <Route path="/services/installation-electrique" element={<InstallationElectrique />} />
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
