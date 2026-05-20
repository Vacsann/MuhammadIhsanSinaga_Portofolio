import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Code, GraduationCap, MapPin, Sparkles, User } from "lucide-react";

// Robust counter animation component
function StatCounter({ targetValue, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Fast start and ease out animation curve
      const easedCount = Math.floor(progressPercent * targetValue);
      setCount(easedCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight mb-1 neon-glow-white silver-gradient-text">
        {count}{suffix}
      </h3>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-3"
        >
          Perspective
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] w-12 bg-white mt-4 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: layout with secondary modern photo profile card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm sticky top-24"
          >
            {/* Elegant glass profile panel */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-4 box-glow-silver">
              <div className="rounded-2xl overflow-hidden aspect-square relative mb-5 bg-neutral-900 group">
                <img
                  src="https://i.ibb.co.com/4gZHxR2S/myphoto-jpg.jpg"
                  alt="Ihsan portrait detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-neutral-950/20 mix-blend-screen" />
              </div>
              
              {/* Quick bio details details */}
              <div className="space-y-3.5 px-2">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <User size={14} className="text-neutral-400" />
                  <span className="font-medium">Muhammad Ihsan Sinaga</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <GraduationCap size={14} className="text-neutral-400" />
                  <span>S1 Teknik Informatika</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <MapPin size={14} className="text-neutral-400" />
                  <span>Purwokerto, Jawa Tengah</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Calendar size={14} className="text-neutral-400" />
                  <span>20 Years Old</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Description & Stats counters */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel border border-white/5 p-8 md:p-10 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-white animate-pulse" />
              <h3 className="font-display font-semibold text-lg text-white tracking-wide">Professional Persona</h3>
            </div>
            
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-10 font-sans font-light">
              Mahasiswa Informatika yang memiliki minat mendalam dalam <span className="text-white font-medium">software development</span>, <span className="text-white font-medium">UI/UX design</span>, <span className="text-white font-medium">web development</span>, dan integrasi teknologi modern. 
              Memiliki semangat belajar tinggi serta komitmen kuat untuk memformulasikan sistem yang tidak hanya inovatif tetapi juga <span className="text-white font-medium">user-friendly</span> dan estetis secara visual.
            </p>

            {/* Futuristic Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              {/* Stat 1 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center md:items-start select-none">
                <StatCounter targetValue={12} suffix="+" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1 text-center md:text-left">
                  Projects Completed
                </span>
              </div>
              
              {/* Stat 2 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center md:items-start select-none">
                <StatCounter targetValue={15} suffix="+" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1 text-center md:text-left">
                  Tech Skillsets
                </span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center md:items-start select-none">
                <StatCounter targetValue={5} suffix=" Yrs" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1 text-center md:text-left">
                  Exp Learning
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
