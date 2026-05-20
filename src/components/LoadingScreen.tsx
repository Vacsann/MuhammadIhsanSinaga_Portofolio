import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING SYSTEM...",
  "ESTABLISHING SECURE CONNECTION...",
  "FETCHING CREATIVE MODULES...",
  "OPTIMIZING INTERACTIVE FRAMEWORK...",
  "RENDERING FUTURISTIC CANVAS...",
  "SYSTEMS FULLY OPERATIONAL",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Increment progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800); // Small pause at 100%
          return 100;
        }
        
        // Speed up progress as it goes
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prevProgress + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Rotate text based on progress
    const step = 100 / loadingTexts.length;
    const currentStep = Math.floor(progress / step);
    if (currentStep < loadingTexts.length) {
      setTextIndex(currentStep);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507]"
      >
        <div className="w-[300px] md:w-[400px] flex flex-col items-center">
          {/* Logo / Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-display text-4xl font-extrabold tracking-widest text-neutral-100 italic flex items-center gap-1 neon-glow-white"
          >
            V<span className="text-xs text-neutral-500 font-mono tracking-normal not-italic relative top-1">acsann</span>
          </motion.div>

          {/* Progress Circle & Percent */}
          <div className="relative flex items-center justify-center mb-6">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="42"
                className="stroke-neutral-850"
                strokeWidth="1.5"
                fill="transparent"
              />
              <motion.circle
                cx="48"
                cy="48"
                r="42"
                className="stroke-neutral-100"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 42}
                strokeDashoffset={2 * Math.PI * 42 * (1 - progress / 100)}
                transition={{ ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute font-display font-medium text-lg text-neutral-200">
              {progress}%
            </div>
          </div>

          {/* Loading status bar */}
          <div className="w-full bg-[#151518] h-[2px] rounded-full overflow-hidden mb-3">
            <motion.div
              className="bg-neutral-100 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Telemetry log messages */}
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-center text-[10px] uppercase tracking-widest text-neutral-500"
            >
              {loadingTexts[textIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
