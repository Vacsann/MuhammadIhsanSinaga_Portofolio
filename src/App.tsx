import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

// Sub Components
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SettingsPanel from "./components/SettingsPanel";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Custom interactive settings states
  const [particleCount, setParticleCount] = useState(60);
  const [particleSpeed, setParticleSpeed] = useState(1.0);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  // Synchronize Scroll and Active Navigation Highlight
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Track active section element boundaries
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 250; // offset for detection line

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Intro Pre-loader animation screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Container */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-neutral-100 flex flex-col justify-between selection:bg-white selection:text-black antialiased"
        >
          {/* Cybernetic Starfield/Particle Canvas Background */}
          <AnimatedBackground particleCount={particleCount} particleSpeed={particleSpeed} />

          {/* Interactive cursor trail element */}
          <CustomCursor enabled={cursorEnabled} />

          {/* Interactive Control Console for Stars & Cursor */}
          <SettingsPanel
            particleCount={particleCount}
            setParticleCount={setParticleCount}
            particleSpeed={particleSpeed}
            setParticleSpeed={setParticleSpeed}
            cursorEnabled={cursorEnabled}
            setCursorEnabled={setCursorEnabled}
          />

          {/* Fixed Glassmorphism Navbar */}
          <Navbar activeSection={activeSection} />

          {/* Content sections container */}
          <main className="flex-grow">
            {/* 1. Hero / Main Section */}
            <Hero />

            {/* 2. About Me Section */}
            <About />

            {/* 3. Skills Section */}
            <Skills />

            {/* 4. Education Timeline Section */}
            <Education />

            {/* 5. Projects Showcase Section */}
            <Projects />

            {/* 6. Contact Form Section */}
            <Contact />
          </main>

          {/* Dark futuristic legal Footer */}
          <Footer />

          {/* Modern Floating Back to Top Accelerator Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-4 rounded-full bg-white text-black border border-white hover:bg-black hover:text-white hover:border-white/25 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] cursor-pointer group flex items-center justify-center"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
