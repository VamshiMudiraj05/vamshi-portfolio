import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Eye } from "lucide-react";
import { personalInfo, rotatingRoles } from "../data/portfolioData";

export default function Hero({ onViewChange }) {
  // Typing role animation
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [typingState, setTypingState] = useState("typing"); // 'typing' | 'pausing' | 'deleting'

  // Live Visitor Counter
  const [views, setViews] = useState(1420);

  useEffect(() => {
    const fullText = rotatingRoles[roleIndex];
    let timer;

    if (typingState === "typing") {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setTypingState("pausing"), 1500);
      }
    } else if (typingState === "pausing") {
      timer = setTimeout(() => setTypingState("deleting"), 900);
    } else if (typingState === "deleting") {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setTypingState("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, typingState, roleIndex]);

  useEffect(() => {
    // Visitor counter increment
    const stored = localStorage.getItem("vamshi_portfolio_views");
    const count = stored ? parseInt(stored, 10) + 1 : 1420 + Math.floor(Math.random() * 50);
    localStorage.setItem("vamshi_portfolio_views", count);
    setViews(count);
  }, []);

  return (
    <section className="w-full relative z-20 pt-24 md:pt-28 pb-8 flex flex-col items-center">
      <div className="w-full max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Outer Dashed Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-[28px] sm:rounded-[36px] border border-dashed border-black/15 dark:border-white/15 p-3 sm:p-5 md:p-6 bg-white/40 dark:bg-[#111113]/40 backdrop-blur-xs transition-colors duration-200"
        >
          {/* Scenic Cover Banner */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs">
            <img
              src="/hero-banner.jpg"
              alt="Scenic winter twilight banner"
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Avatar and Action Buttons Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between px-2 sm:px-4 -mt-12 sm:-mt-16 md:-mt-20 gap-4 mb-4">
            {/* Circular Avatar with Pink Border Ring */}
            <div className="relative z-10 self-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-white dark:bg-[#111113] ring-4 ring-[#F3B9C8] dark:ring-[#c2185b] shadow-lg transition-transform duration-200 hover:scale-105">
                <img
                  src="/profile-avatar.png"
                  alt={personalInfo.displayName}
                  className="w-full h-full rounded-full object-cover object-center bg-pink-50 dark:bg-zinc-800"
                />
              </div>
            </div>

            {/* Action Buttons (Content Creation & View Resume) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 self-end sm:self-auto pb-1">
              <button
                onClick={() => onViewChange("content")}
                className="glare-button group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#242424] hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-full font-medium text-xs sm:text-sm shadow-md transition-all duration-150 cursor-pointer"
              >
                <span>Content Creation</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="glare-button group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white border border-black/10 dark:border-white/15 hover:border-black/25 dark:hover:border-white/30 rounded-full font-medium text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-150 cursor-pointer"
              >
                <span>View Resume</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Profile Details (Name, Verified Badge, Role, Location) */}
          <div className="px-2 sm:px-4 pt-1 pb-3">
            {/* Name + Verified Badge */}
            <div className="flex items-center gap-2">
              <h1 className="font-instrument font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              {/* Blue Verified Badge */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D9BF0] fill-current shrink-0"
                viewBox="0 0 24 24"
                title="Verified"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.24 4.5l-3.535-3.536 1.414-1.414 2.121 2.121 5.657-5.657 1.414 1.414L10.26 17z" />
              </svg>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="h-9 sm:h-11 flex items-center mt-1">
              <span className="font-instrument-sans font-semibold text-2xl sm:text-3xl md:text-4xl text-[#c2185b] dark:text-[#f3b9c8] flex items-center tracking-tight">
                {currentText}
                <span className="ml-1 w-[2.5px] h-[0.9em] bg-[#c2185b] dark:bg-[#f3b9c8] animate-pulse" />
              </span>
            </div>

            {/* Location & Status Meta */}
            <div className="flex items-center justify-between flex-wrap gap-2 mt-2 pt-1 border-t border-black/5 dark:border-white/5 text-xs sm:text-sm text-gray-500 dark:text-white/60">
              <span className="font-medium text-gray-600 dark:text-white/70">
                {personalInfo.location}
              </span>

              <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/40">
                <Eye size={13} />
                <span>{views.toLocaleString()} visits</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
