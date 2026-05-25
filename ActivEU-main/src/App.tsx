import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ActiveSectionProvider, useActiveSection } from "@/contexts/ActiveSectionContext";
import { PageLoader } from "@/components/premium/PageLoader";
import { CustomCursor } from "@/components/premium/CustomCursor";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppWithCursor() {
  const { activeSection } = useActiveSection();
  return (
    <>
      <PageLoader />
      <CustomCursor activeSection={activeSection} />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <LanguageProvider>
          <AppWithCursor />
        </LanguageProvider>
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}
