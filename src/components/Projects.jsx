import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData } from "../data/portfolioData";

const rotatingWords = ["built", "engineered", "coded", "shipped", "designed"];

export default function Projects() {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const categories = ["All", "Full Stack", "Frontend", "Data Science / ML"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full relative z-20 pt-28 md:pt-36 pb-28">
      <div className="w-full max-w-[880px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Rotating Word */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#c2185b] dark:text-[#f3b9c8] uppercase mb-3 block"
          >
            Featured Work
          </motion.span>

          <h2 className="font-instrument font-semibold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 flex flex-wrap justify-center items-center gap-x-3">
            <span>Things I've</span>
            <span className="relative inline-flex items-center justify-center min-w-[120px] sm:min-w-[150px] border border-dashed border-gray-800/30 dark:border-white/30 rounded-lg px-3 py-0.5 overflow-hidden text-[#c2185b] dark:text-[#f3b9c8]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          <p className="font-sans text-gray-600 dark:text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
            A selection of production systems, full-stack applications, and machine learning models built with modern web technologies.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`glare-button px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#c2185b] text-white shadow-md"
                    : "bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] overflow-hidden shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] flex flex-col justify-between"
              >
                {/* Top Banner / Visual Header */}
                <div
                  className={`relative p-6 sm:p-7 bg-gradient-to-br ${project.gradient} dark:from-[#23171d] dark:via-[#191418] dark:to-[#121214] border-b border-black/5 dark:border-white/10`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/80 dark:bg-white/10 text-gray-800 dark:text-white/90 backdrop-blur-xs">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="w-8 h-8 rounded-full bg-white/90 dark:bg-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 transition-transform shadow-xs"
                        >
                          <SiGithub size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="glare-button flex items-center gap-1 text-xs font-medium text-white bg-[#c2185b] hover:bg-[#a0134a] px-3 py-1.5 rounded-full shadow-xs transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span>Live</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-instrument font-semibold text-2xl text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-medium text-gray-700 dark:text-white/80">
                    {project.tagline}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <p className="font-sans text-sm text-gray-600 dark:text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div>
                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/70"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FCE7EC]/60 dark:bg-white/5 text-[#c2185b] dark:text-[#f3b9c8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
