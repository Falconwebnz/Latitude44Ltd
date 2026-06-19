import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Latitude44Navbar from "./components/Latitude44Navbar";
import HeroVideo from "./components/HeroVideo";
import ClaudeLearnFeature from "./components/ClaudeLearnFeature";
import WorkShowcase from "./components/WorkShowcase";
import ServicesGrid from "./components/ServicesGrid";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

const Landing = () => {
  useEffect(() => {
    // Ensure dark theme class is present (shadcn tokens are dark by default here)
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App relative">
      <Latitude44Navbar />
      <main>
        <HeroVideo />
        <ClaudeLearnFeature />
        <WorkShowcase />
        <ServicesGrid />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--l44-navy)",
            color: "var(--l44-white)",
            border: "1px solid var(--l44-border-gold-hairline)",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
