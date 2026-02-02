import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MusicProvider } from "@/contexts/MusicContext";
import MusicToggle from "@/components/MusicToggle";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import MyFeelings from "./pages/MyFeelings";
import TheQuestion from "./pages/TheQuestion";
import YourMessage from "./pages/YourMessage";
import Always from "./pages/Always";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MusicProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MusicToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/my-feelings" element={<MyFeelings />} />
            <Route path="/the-question" element={<TheQuestion />} />
            <Route path="/your-message" element={<YourMessage />} />
            <Route path="/always" element={<Always />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
