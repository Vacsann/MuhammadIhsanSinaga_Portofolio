import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Mail, MessageSquare, Send, User } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Sintaks email tidak valid (contoh: user@site.com).";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Pesan mu tidak boleh kosong.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate transfer/database latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-dismiss success after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-3"
        >
          Signal
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] w-12 bg-white mt-4 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.015] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.015] rounded-full blur-2xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
              noValidate
            >
              {/* Row Grid: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} />
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Muhammad Ihsan Sinaga"
                      className={`w-full px-5 py-3.5 bg-white/[0.02] border rounded-2xl text-xs font-sans text-white placeholder-neutral-450 focus:outline-none focus:bg-white/[0.06] focus:border-white transition-all ${
                        errors.name ? "border-[#ff4d4d]/50" : "border-white/10"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-[#ff4d4d] font-mono"
                    >
                      {errors.name}
                    </motion.span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} />
                    Alamat Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Contoh: ihsan@domain.com"
                      className={`w-full px-5 py-3.5 bg-white/[0.02] border rounded-2xl text-xs font-sans text-white placeholder-neutral-450 focus:outline-none focus:bg-white/[0.06] focus:border-white transition-all ${
                        errors.email ? "border-[#ff4d4d]/50" : "border-white/10"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-[#ff4d4d] font-mono"
                    >
                      {errors.email}
                    </motion.span>
                  )}
                </div>

              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} />
                  Pesan Anda
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis gagasan sistem mu disini..."
                    className={`w-full px-5 py-4 bg-white/[0.02] border rounded-2xl text-xs font-sans text-white placeholder-neutral-450 focus:outline-none focus:bg-white/[0.06] focus:border-white transition-all resize-none ${
                      errors.message ? "border-[#ff4d4d]/50" : "border-white/10"
                    }`}
                  />
                </div>
                {errors.message && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] text-[#ff4d4d] font-mono"
                  >
                    {errors.message}
                  </motion.span>
                )}
              </div>

              {/* Submit Button with Loading Indicator */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center gap-2.5 group"
                >
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING...</span>
                      <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            /* Success Telemetry Box */
            <motion.div
              key="contact-success"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="py-12 flex flex-col items-center text-center justify-center max-w-md mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                className="p-4 bg-white/5 border border-white/15 h-16 w-16 rounded-full flex items-center justify-center text-white mb-6 box-glow-white"
              >
                <CheckCircle size={32} />
              </motion.div>
              
              <h3 className="font-display font-bold text-2xl text-white mb-3">Transmission Confirmed!</h3>
              
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-8">
                Pesan anda telah ditransmisikan ke enkripsi cloud Muhammad Ihsan Sinaga secara aman. Anda akan segera menerima feedback/balasan melalui saluran email formal tertera.
              </p>

              {/* Reset Form button */}
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-[10px] font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
              >
                Kirim baru (Form Reset)
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
