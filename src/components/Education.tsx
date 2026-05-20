import { motion } from "motion/react";
import { BookOpen, Calendar, MapPin, School } from "lucide-react";

const educationHistory = [
  {
    institution: "Telkom University Purwokerto",
    degree: "S1 Teknik Informatika",
    duration: "2024 - Sekarang",
    location: "Purwokerto, Jawa Tengah",
    description: "Fokus dalam mendalami rekayasa perangkat lunak, struktur data, pemrograman berbasis objek, dan teknologi sistem terintegrasi. Aktif dalam kegiatan riset mahasiswa, pengembangan proyek piranti lunak, dan eksplorasi platform modern.",
    isLatest: true
  },
  {
    institution: "SMK Telkom 2 Medan",
    degree: "Teknik Komputer dan Jaringan",
    duration: "2021 - 2024",
    location: "Medan, Sumatera Utara",
    description: "Mempelajari fundamental jaringan komputer, arsitektur perangkat keras, sistem operasi, administrasi server Linux, serta dasar-dasar pemrograman web. Melakukan praktek kerja lapangan industri dengan performa unggul.",
    isLatest: false
  }
];

export default function Education() {
  return (
    <section
      id="education"
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
          Timeline
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
        >
          Education Journey
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] w-12 bg-white mt-4 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        />
      </div>

      {/* Modern Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16">
        {/* Glow Vertical Line */}
        <div className="absolute left-[15px] sm:left-[31px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/30 via-neutral-600 to-white/5" />

        {educationHistory.map((edu, index) => {
          return (
            <div key={edu.institution} className="relative mb-16 last:mb-0">
              
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 z-10 flex items-center justify-center">
                <div className={`relative h-5 w-5 rounded-full border bg-neutral-950 flex items-center justify-center ${
                  edu.isLatest ? "border-white animate-pulse" : "border-neutral-500"
                }`}>
                  {/* Pulse Effect for current study */}
                  {edu.isLatest && (
                    <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping [animation-duration:1.5s]" />
                  )}
                  <span className={`h-1.5 w-1.5 rounded-full ${edu.isLatest ? "bg-white" : "bg-neutral-500"}`} />
                </div>
              </div>

              {/* Card content with sliding animation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                className="glass-panel border border-white/5 p-6 sm:p-8 rounded-3xl relative group hover:border-white/15 transition-all duration-300"
              >
                {/* Visual badge inside card */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-white">
                      <School size={16} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base sm:text-lg text-white leading-tight">
                        {edu.institution}
                      </h3>
                      <p className="font-sans text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
                        <BookOpen size={12} className="opacity-75" />
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  
                  {/* Date Period Badge */}
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-neutral-300 flex items-center gap-1.5">
                      <Calendar size={10} />
                      {edu.duration}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1 sm:justify-end">
                      <MapPin size={10} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                  {edu.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
