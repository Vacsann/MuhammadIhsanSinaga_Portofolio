import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    alert(`Connecting safely to Muhammad Ihsan's official ${platform} database channel...`);
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram / Legal */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-display font-black text-lg tracking-widest text-white italic">
            Vacsann
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 text-center md:text-left mt-1">
            &copy; {currentYear} Muhammad Ihsan Sinaga. All rights reserved.
          </p>
        </div>

        {/* Social Badges with micro glow hover */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSocialClick("GitHub")}
            className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </button>
          
          <button
            onClick={() => handleSocialClick("LinkedIn")}
            className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </button>

          <button
            onClick={() => handleSocialClick("Instagram")}
            className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </button>

          <button
            onClick={() => handleSocialClick("Email")}
            className="p-3 bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
            aria-label="Email"
          >
            <Mail size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
