import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full max-w-[880px] mx-auto px-6 md:px-12 my-16">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#c2185b] dark:text-[#f3b9c8] uppercase mb-3 block">
          Experience & Education
        </span>
        <h2 className="font-instrument font-semibold text-3xl md:text-5xl text-gray-800 dark:text-white tracking-tight mb-4">
          Where I've Contributed
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-white/60 max-w-lg">
          Practical engineering experience in production systems, microservices, and modern web applications.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {experienceData.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141414] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full p-6 md:p-7 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FCE7EC] dark:bg-[#2a1b22] text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-instrument font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs md:text-sm text-gray-500 dark:text-white/50 mt-1">
                      <span className="font-medium text-gray-700 dark:text-white/80">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/70">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-7 md:pb-7 pt-2 border-t border-black/5 dark:border-white/10 text-sm text-gray-600 dark:text-white/70">
                      <p className="leading-relaxed mb-4">{exp.description}</p>

                      <div className="mb-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/40 mb-2.5">
                          Key Responsibilities & Highlights
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-[#c2185b] dark:text-[#f3b9c8] shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-white/80">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center flex-wrap gap-2 pt-2">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FCE7EC]/50 dark:bg-white/10 text-[#c2185b] dark:text-white/80"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
