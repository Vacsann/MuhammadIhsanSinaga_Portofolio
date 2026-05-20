import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-display font-black text-lg tracking-widest text-white italic">
            Vacsann
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 text-center md:text-left mt-1">
            &copy; {currentYear} Muhammad Ihsan Sinaga. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Vacsann" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="https://instagram.com/Vacsann" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="mailto:vacsann@gmail.com" className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}