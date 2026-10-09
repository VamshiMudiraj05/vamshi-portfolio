import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onViewChange }) {
  return (
    <footer className="w-full pt-16 pb-24 md:pb-12 flex flex-col items-center justify-center bg-white dark:bg-[#0b0b0d] border-t border-black/5 dark:border-white/10 transition-colors duration-200 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-radial-blush pointer-events-none opacity-40" />

      <div className="flex flex-col items-center text-center mb-10 px-6 relative z-10 max-w-lg">
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#181818] dark:text-white mb-6 leading-tight">
          Have an idea or a role in mind?
          <br />
          <span className="text-gray-600 dark:text-white/80">Let's build something great together.</span>
        </p>

        <button
          onClick={() => {
            onViewChange("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="glare-button group flex items-center gap-2.5 px-7 py-3.5 bg-white dark:bg-[#181818] border border-black/10 dark:border-white/15 rounded-full shadow-soft font-medium text-sm text-gray-800 dark:text-white hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          <span>Let's Talk</span>
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 text-[#c2185b] dark:text-[#f3b9c8]" />
        </button>
      </div>

      <p className="relative z-10 text-xs sm:text-sm text-gray-500 dark:text-white/50 text-center mb-8 flex items-center justify-center gap-1.5 flex-wrap">
        <span>Made with</span>
        <span className="text-[#c2185b] dark:text-[#f3b9c8]">♥</span>
        <span>and clean code by</span>
        <span className="font-signature text-xl text-black dark:text-white ml-1">
          {personalInfo.brandName}
        </span>
      </p>

      {/* Floating Sparkles & Heart Elements */}
      <div className="relative w-full max-w-xs h-8 flex justify-center items-center pointer-events-none select-none">
        <motion.div
          className="absolute text-[#F3B9C8] dark:text-[#c2185b]"
          style={{ left: "20%" }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <Sparkles size={14} />
        </motion.div>

        <motion.div
          className="absolute text-[#F3B9C8] dark:text-[#c2185b]"
          style={{ right: "20%" }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.9, 0.3], scale: [0.7, 1.2, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <Heart size={14} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute text-[#F3B9C8] dark:text-[#c2185b]"
          style={{ left: "50%" }}
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={16} />
        </motion.div>
      </div>
    </footer>
  );
}
