import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Sparkles, X, Eye, EyeOff } from "lucide-react";

interface SettingsPanelProps {
  particleCount: number;
  setParticleCount: (count: number) => void;
  particleSpeed: number;
  setParticleSpeed: (speed: number) => void;
  cursorEnabled: boolean;
  setCursorEnabled: (enabled: boolean) => void;
}

export default function SettingsPanel({
  particleCount,
  setParticleCount,
  particleSpeed,
  setParticleSpeed,
  cursorEnabled,
  setCursorEnabled,
}: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="settings-panel-container" className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40 select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="mb-4 w-72 glass-panel border border-white/10 rounded-3xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <Sliders size={14} className="text-white animate-pulse" />
                <span className="font-display font-medium text-xs uppercase tracking-wider text-white">
                  Cosmic Console
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close settings"
              >
                <X size={14} />
              </button>
            </div>

            {/* Sliders and Controls */}
            <div className="space-y-4">
              {/* Particle Count / Intensity Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  <span>Intensitas Partikel</span>
                  <span className="text-white font-medium">{particleCount} Stars</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={particleCount}
                  onChange={(e) => setParticleCount(parseInt(e.target.value))}
                  className="w-full accent-white bg-white/10 rounded-lg cursor-pointer h-1"
                />
              </div>

              {/* Particle Speed Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  <span>Kecepatan Partikel</span>
                  <span className="text-white font-medium">{particleSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.5"
                  step="0.1"
                  value={particleSpeed}
                  onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
                  className="w-full accent-white bg-white/10 rounded-lg cursor-pointer h-1"
                />
              </div>

              {/* Custom Cursor Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Kursor Kustom
                  </span>
                  <span className="text-[8px] text-neutral-500 font-sans tracking-wide">
                    Trail & Glow modern
                  </span>
                </div>
                <button
                  onClick={() => setCursorEnabled(!cursorEnabled)}
                  className={`p-2 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                    cursorEnabled
                      ? "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                      : "bg-white/5 text-neutral-400 border-white/5 hover:border-white/15 hover:text-white"
                  }`}
                  aria-label="Toggle custom cursor"
                >
                  {cursorEnabled ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-full border transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center ${
          isOpen
            ? "bg-white text-black border-white"
            : "bg-black/40 glass-panel border-white/10 text-white hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        }`}
        aria-label="Toggle Cosmic Console"
      >
        <Sparkles size={16} className={`${isOpen ? "text-black" : "text-white animate-pulse"}`} />
      </motion.button>
    </div>
  );
}
