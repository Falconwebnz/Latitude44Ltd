import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Latitude44Navbar from "./components/Latitude44Navbar";
import SiteFooter from "./components/SiteFooter";

import HomePage from "./pages/HomePage";
import ClaudeLearnPage from "./pages/ClaudeLearnPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Scrolls to top whenever the route changes (best-practice for multi-page SPA).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="App relative min-h-screen flex flex-col">
      <Latitude44Navbar />
      <main className="flex-1">{children}</main>
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
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/claude-learn" element={<ClaudeLearnPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
