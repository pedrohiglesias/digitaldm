import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DmIa from "./pages/DmIa";
import Institucional from "./pages/Institucional";
import SimuladorDm from "./pages/SimuladorDm";
import Acelera90Dias from "./pages/Acelera90Dias";
import Mentoria from "./pages/Mentoria";
import Gestao from "./pages/Gestao";
import Crm from "./pages/Crm";
import Empresario from "./pages/Empresario";
import Bio from "./pages/Bio";
import Teste from "./pages/Teste";
import NotFound from "./pages/NotFound";
import { LeadCaptureModal } from "./components/LeadCaptureModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LeadCaptureModal />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dmia" element={<DmIa />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/simuladordm" element={<SimuladorDm />} />
          <Route path="/acelera90dias" element={<Acelera90Dias />} />
          <Route path="/gps360" element={<Mentoria />} />
          <Route path="/gestao" element={<Gestao />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/empresario" element={<Empresario />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/teste" element={<Teste />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
