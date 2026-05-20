import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code, Eye, Layers, Smartphone } from "lucide-react";

const projectCategories = ["All", "Full-Stack", "AI & Vision", "UI/UX Design"];

const projects = [
  {
    id: 1,
    title: "Sistem Expedition Pengiriman Barang",
    category: "Full-Stack",
    description: "Sistem manajemen logistik pengiriman barang jalur darat lengkap dengan modul pencatatan armada, pelacakan real-time rute kurir, serta dashboard laporan analitis pendapatan.",
    image: "/src/assets/images/project_expedition_1779248590358.png",
    tech: ["React.js", "Go Lang", "PostgreSQL", "Google Maps API"],
    demoUrl: "#projects",
    githubUrl: "#projects",
    techIcon: <Layers size={14} />
  },
  {
    id: 2,
    title: "Sistem Pendeteksi Uang Otomatis",
    category: "AI & Vision",
    description: "Aplikasi cerdas untuk mendeteksi nominal uang kertas Rupiah secara instan menggunakan teknologi Computer Vision, Convolutional Neural Networks (CNN), dan integrasi kamera perangkat.",
    image: "/src/assets/images/project_money_ai_1779248609059.png",
    tech: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
    demoUrl: "#projects",
    githubUrl: "#projects",
    techIcon: <Code size={14} />
  },
  {
    id: 3,
    title: "JD.id - Aplikasi Toko Sepatu",
    category: "UI/UX Design",
    description: "Rancangan maket desain aplikasi mobile e-commerce sepatu dengan antarmuka futuristik, alur navigasi checkout intuitif, transisi mikro-interaktif, serta standard kenyamanan usabilitas penuh.",
    image: "/src/assets/images/project_shoes_ui_1779248632461.png",
    tech: ["Figma", "UI/UX Audit", "Adobe Illustrator", "Prototyping"],
    demoUrl: "#projects",
    githubUrl: "#projects",
    techIcon: <Smartphone size={14} />
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Highlight message on click "Demo" or "Detail"
  const handleAction = (title: string, action: string) => {
    const alertBox = document.createElement("div");
    alertBox.className = "fixed bottom-10 right-10 z-50 glass-panel border border-white/20 p-4 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl";
    alertBox.innerHTML = `
      <div class="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold">i</div>
      <div>
        <h4 class="text-xs font-bold text-white uppercase tracking-wider">${action} Initiated</h4>
        <p class="text-[10px] text-neutral-400">Loading modules for "${title}"...</p>
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
      id="projects"
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-3"
        >
          Selected Works
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[2px] w-12 bg-white mt-4 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                  : "bg-white/[0.02] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/15"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden glass-panel border border-white/5 flex flex-col justify-between group hover:border-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] duration-300"
            >
              <div>
                {/* Project Image Frame with Glow */}
                <div className="relative overflow-hidden aspect-video bg-neutral-900 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/75 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-[#ffffff] flex items-center gap-1.5 backdrop-blur-sm">
                    {project.techIcon}
                    {project.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-neutral-100 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology tag lists */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[9px] font-mono text-neutral-500 hover:text-neutral-300 hover:border-white/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons footer inside card */}
              <div className="p-6 pt-0 border-t border-white/5/5 mt-auto flex items-center justify-between gap-4">
                <button
                  onClick={() => handleAction(project.title, "Source Code")}
                  className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#ffffff] hover:opacity-80 transition-opacity"
                >
                  <Code size={12} />
                  Repository
                </button>

                <button
                  onClick={() => handleAction(project.title, "Visual Pitch")}
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-1.5 group/btn"
                >
                  Show Detail
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
