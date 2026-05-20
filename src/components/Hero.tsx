import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, Rocket, Send } from "lucide-react";
const myPhoto = "https://i.ibb.co.com/b57vGMzM/Whats-App-Image-2026-05-20-at-00-04-38.jpg";

export default function Hero() {
  const titles = ["Programmer", "Web Developer", "UI/UX Designer", "Software Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(titles[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Show a creative download confirmation message or download simulation
    const alertBox = document.createElement("div");
    alertBox.className = "fixed bottom-10 right-10 z-50 glass-panel border border-white/20 p-4 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl";
    alertBox.innerHTML = `
      <div class="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold">✓</div>
      <div>
        <h4 class="text-xs font-bold text-white uppercase tracking-wider">Secure Transfer</h4>
        <p class="text-[10px] text-neutral-400">CV_MuhammadIhsanSinaga.pdf has been simulated!</p>
      </div>
    `;
    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.classList.add("opacity-0");
      setTimeout(() => alertBox.remove(), 500);
    }, 4000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-10 flex items-center justify-center px-4 md:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Side: Developer Info */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono tracking-widest text-[#ffffff] uppercase flex items-center gap-2 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            Welcome to my cyberspace
          </motion.div>

          {/* User Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#ffffff] leading-tight mb-2"
          >
            Muhammad <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500 neon-glow-white">
              Ihsan Sinaga
            </span>
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mb-8 h-8 font-mono text-neutral-400 tracking-wider text-base md:text-lg lg:text-xl font-medium"
          >
            <span>&lt;&nbsp;</span>
            <span className="text-white font-semibold glow-text-white">{currentText}</span>
            <span className="text-white animate-pulse">|</span>
            <span>&nbsp;/&gt;</span>
          </motion.div>

          {/* Quick Specifications in Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-10"
          >
            <div className="p-4 rounded-2xl glass-panel border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Age</span>
              <span className="text-sm text-neutral-100 font-display font-medium">20 Years Old</span>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Department</span>
              <span className="text-sm text-neutral-100 font-display font-medium">S1 Informatika</span>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-white/5 col-span-2 md:col-span-1 flex flex-col gap-1">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Campus Institution</span>
              <span className="text-sm text-neutral-100 font-display font-medium leading-tight">Telkom Univ Purwokerto</span>
            </div>
          </motion.div>

          {/* Action Call buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleContactClick}
              className="px-8 py-3.5 rounded-full btn-silver-gradient font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transform hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              Contact Me
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-black" />
            </button>
            
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3.5 rounded-full glass-panel border border-white/10 hover:border-white/30 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              Download CV
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform animate-pulse text-white" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Portrait Portrait Avatar with glowing floating frame */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 80 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Outer Rotating/floating Glow Frame */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-neutral-600 via-neutral-100 to-neutral-700 opacity-20 blur-xl animate-pulse-slow" />
            
            {/* Geometric cyber rings */}
            <div className="absolute -inset-4 rounded-full border border-white/5 animate-spin [animation-duration:20s] pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-dashed border-white/5 animate-spin [animation-duration:35s] [animation-direction:reverse] pointer-events-none" />

            {/* Profile Avatar Frame with Jelly / Floating Effect */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1.5, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }}
              className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 box-glow-silver relative"
            >
              {/* Photo */}
              <div className="w-full h-full rounded-xl overflow-hidden relative group bg-neutral-900">
                <img
                  src={myPhoto}
                  alt="Muhammad Ihsan Sinaga"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Embedded dynamic corner tech badges */}


              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
      
      {/* Decorative prompt visual bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">Scroll to deploy</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-3.5 border border-white/30 rounded-full flex justify-center p-0.5"
        >
          <span className="w-1 h-1 rounded-full bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
