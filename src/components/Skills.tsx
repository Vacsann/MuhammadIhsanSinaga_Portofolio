import { motion } from "motion/react";

const skills = [
  {
    name: "Java",
    percentage: 85,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M14.076 0s-.15 2.144-1.2 3.6c-.9 1.25-2.25 2.14-3.15 3.3-.9 1.15-1.15 2.5-.45 3.65 1.1 1.75 3.75 2.44 2.85 4.8-.6 1.5-2.25 2.1-3.6 2.4-1.35.3-2.1-.3-2.45-.6-.75-.68-.82-1.88-.12-2.5 1.05-.9 3.05-.6 3.05-.6s-1.8-1.5-2.7-2.4c-1.35-1.35-1.65-3.3-.75-4.65 1.13-1.65 3.38-2.6 3.38-2.6s-.9.75-1.35 1.35c-.75.98-.3 2.1.6 2.55 1.5.75 3.15-.6 3.15-.6s-.15-.9-.6-1.5c-.75-.98-1.5-2.1-1.35-3.3.15-1.2 1.33-3.15 1.33-3.15zM2.55 17.1c3.15 1.45 8.7.6 12 0s3.75-1.8 1.8-2.4c-1.5-.48-5.7-.3-8.85.3-3.1.62-5.4 1.36-4.95 2.1zM.15 20.4c2.25.9 7.8 1.05 11.25.6 4.95-.6 8.7-2.1 4.5-3.15-3.6-.9-10.35-.3-13.05.9-.6.3-.9.9.3 1.65z" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(230,126,34,0.15)] hover:border-[#e67e22]/30",
    progressColor: "bg-neutral-300",
  },
  {
    name: "Python",
    percentage: 90,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M11.966 0c-1.606 0-3.1.135-4.225.37C5.385.877 4.195 2.062 3.86 4.2C3.394 7.158 3.394 9.07 3.86 12.03c.18 1.15.69 2.036 1.492 2.502.8.468 1.83.652 3 .652h2.247v1.545c0 1.25.4 2.176 1.2 2.766.8.59 1.944.75 3.3.75 1.472 0 2.535-.16 3.23-.75.7-.59 1.07-1.516 1.07-2.766V13.88h-3c-1.6 0-2.8-.46-3.6-1.428-.8-.967-.935-2.316-.935-3.952V5.5H11.97v-.002zm5.714 5.5v1.545c0 1.25-.4 2.176-1.2 2.766-.8.59-1.944.75-3.3.75-1.472 0-2.535-.16-3.23-.75-.7-.59-1.07-1.516-1.07-2.766V5.55H5.88v3c0 1.636.136 2.985.936 3.952.8.968 2 .428 3.6.428h5.247c1.606 0 3.1-.135 4.225-.37 2.356-.507 3.546-1.692 3.88-3.83.466-2.958.466-4.87 0-7.828-.18-1.15-.69-2.036-1.492-2.502-.8-.468-1.83-.652-3-.652h-2.247v1.545zm-1.87 11.238a.935.935 0 110-1.87.935.935 0 010 1.87zm-7.662-9.176a.935.935 0 110-1.87.935.935 0 010 1.87z" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(52,152,219,0.15)] hover:border-[#3498db]/30",
    progressColor: "bg-white",
  },
  {
    name: "CSS",
    percentage: 95,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17 5.5H5.5l.35 4h11.3l-.35 4H12v-1.1h-2v3.1l6.25-1.78.65-7.31L5.85 14l-.15-1.7H12v-2H5.7l-.15-1.8H12v-2h6.5z" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(41,128,185,0.15)] hover:border-[#2980b9]/30",
    progressColor: "bg-neutral-300",
  },
  {
    name: "Go Lang",
    percentage: 80,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M1.914 10.457c-.126-.453.033-.923.407-1.2.355-.264.838-.285 1.218-.052 1.942 1.189 4.3 1.82 6.642 1.82 4.417 0 7.828-2.227 7.828-6.143C18.01 1.777 14.5.15 10.37.15c-5.26 0-9.351 2.87-9.351 7.29 0 2.923 1.815 5.253 4.887 6.353-.296.885-1.168 1.488-2.43 1.488-.507 0-1.025-.1-1.39-.283-.493-.243-1.09-.08-1.373.39-.282.474-.15 1.094.316 1.392A13.43 13.43 0 005.153 18c1.674 0 3.235-.49 4.394-1.365a8.777 8.777 0 005.61 2.215c4.78 0 8.843-2.91 8.843-7.533 0-5.714-4.52-9.467-10.235-9.467-5.918 0-10.43 3.655-10.43 9.467 0 3.324 1.492 5.915 4.148 7.208-.13.336-.312.637-.58.824-1.36.945-2.95 1.265-4.48 1.233-.51-.013-1.012-.228-1.267-.626-.263-.41-.09-.948.338-1.173a.89.89 0 01.3-.082c1.78-.17 2.457-.65 2.457-1.48v-.076c-3.15-.97-4.05-3.355-4.453-4.795h1.9c.28 1.157.915 2.766 3.125 3.32v-.002z" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(0,162,232,0.15)] hover:border-[#00a2e8]/30",
    progressColor: "bg-white",
  },
  {
    name: "Bootstrap",
    percentage: 90,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M18.89 0H5.11A5.11 5.11 0 000 5.11v13.78A5.11 5.11 0 005.11 24h13.78A5.11 5.11 0 0024 18.89V5.11A5.11 5.11 0 0018.89 0M16.4 12.3c0 .8-.3 1.5-.9 2.1s-1.3.8-2.2.8H8.8V6.7h4.3c.8 0 1.5.2 2 .7s.8 1.1.8 1.8c0 .6-.2 1.1-.5 1.5.4.3.7.8.7 1.6M11.2 8.7v2.3h1.8c.8 0 1.2-.3 1.2-1.1a1 1 0 00-1.2-1.2h-1.8m0 4.3v2.6h2.1c.9 0 1.3-.4 1.3-1.3a1.3 1.3 0 00-1.3-1.3h-2.1" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(113,44,244,0.15)] hover:border-[#712cf4]/30",
    progressColor: "bg-neutral-300",
  },
  {
    name: "Figma",
    percentage: 85,
    logo: (
      <svg className="w-8 h-8 text-neutral-200 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C8.685 0 6 2.685 6 6v3c0 3.315 2.685 6 6 6h3c3.315 0 6-2.685 6-6V6c0-3.315-2.685-6-6-6h-3zm-3 6c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm0 6c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 6c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3z" />
      </svg>
    ),
    accent: "shadow-[0_0_15px_rgba(242,78,29,0.15)] hover:border-[#f24e1d]/30",
    progressColor: "bg-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          Expertise
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
        >
          My Skillsets
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`rounded-3xl glass-panel p-6 border border-white/5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between cursor-pointer ${skill.accent}`}
          >
            {/* Subtle background radial light glow inside card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.015] rounded-full blur-xl pointer-events-none group-hover:bg-white/[0.04] transition-colors" />

            <div className="flex items-center justify-between mb-8">
              {/* Logo container wrapper inside card */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                {skill.logo}
              </div>
              <span className="font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">{skill.percentage}%</span>
            </div>

            <div>
              <h3 className="font-display font-medium text-lg text-white mb-4 tracking-wide">
                {skill.name}
              </h3>
              
              {/* Progress Bar Container with Filling Effect */}
              <div className="w-full bg-white/[0.03] h-1.5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className={`h-full rounded-full ${skill.progressColor} shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
