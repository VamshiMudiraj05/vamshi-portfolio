import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Video,
  Sparkles,
  ExternalLink,
  Play,
  TrendingUp,
  Smile,
  GraduationCap,
  Code2,
  Rocket,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { FaYoutube, FaInstagram, FaLaughSquint } from "react-icons/fa";
import { contentCreationData } from "../data/portfolioData";

export default function ContentCreation({ onViewChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Student Life", "Coding & Tech", "Campus Memes", "Career & Placement"];

  const filteredItems =
    activeFilter === "All"
      ? contentCreationData.showcaseItems
      : contentCreationData.showcaseItems.filter((item) => {
          if (activeFilter === "Student Life") return item.category.includes("Student");
          if (activeFilter === "Coding & Tech") return item.category.includes("Tech") || item.category.includes("Coding");
          if (activeFilter === "Campus Memes") return item.category.includes("Student Life") || item.platform.includes("Meme");
          if (activeFilter === "Career & Placement") return item.category.includes("Career") || item.tag.includes("Roadmap");
          return true;
        });

  return (
    <section id="content-creation" className="w-full relative z-20 pt-28 md:pt-36 pb-28">
      <div className="w-full max-w-[960px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-18 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7EC] dark:bg-[#c2185b]/20 border border-[#F3B9C8]/60 dark:border-[#c2185b]/30 mb-4"
          >
            <Sparkles size={14} className="text-[#c2185b] dark:text-[#f3b9c8]" />
            <span className="text-xs font-semibold tracking-wider text-[#c2185b] dark:text-[#f3b9c8] uppercase">
              Creator & Community
            </span>
          </motion.div>

          <h1 className="font-instrument font-semibold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 max-w-2xl">
            Empowering & Entertaining{" "}
            <span className="text-[#c2185b] dark:text-[#f3b9c8]">35K+ Students</span>
          </h1>

          <p className="font-sans text-gray-600 dark:text-white/65 text-sm sm:text-base max-w-2xl leading-relaxed">
            I craft student-centric tech roadmaps, honest engineering guidance, and viral campus memes. From demystifying coding to capturing everyday college chaos, here's how I connect with students.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mt-10">
            <div className="dashed-border-anim rounded-2xl p-4 bg-white/70 dark:bg-[#141416]/70 backdrop-blur-xs flex flex-col items-center justify-center text-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-1.5">
                <FaYoutube size={16} />
              </div>
              <span className="font-instrument text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                15K+
              </span>
              <span className="text-xs text-gray-500 dark:text-white/60 font-medium">
                YouTube Subs
              </span>
            </div>

            <div className="dashed-border-anim rounded-2xl p-4 bg-white/70 dark:bg-[#141416]/70 backdrop-blur-xs flex flex-col items-center justify-center text-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-1.5">
                <FaLaughSquint size={16} />
              </div>
              <span className="font-instrument text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                15K+
              </span>
              <span className="text-xs text-gray-500 dark:text-white/60 font-medium">
                Meme Community
              </span>
            </div>

            <div className="dashed-border-anim rounded-2xl p-4 bg-white/70 dark:bg-[#141416]/70 backdrop-blur-xs flex flex-col items-center justify-center text-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center mb-1.5">
                <FaInstagram size={16} />
              </div>
              <span className="font-instrument text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                5K+
              </span>
              <span className="text-xs text-gray-500 dark:text-white/60 font-medium">
                Insta Followers
              </span>
            </div>

            <div className="dashed-border-anim rounded-2xl p-4 bg-white/70 dark:bg-[#141416]/70 backdrop-blur-xs flex flex-col items-center justify-center text-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mb-1.5">
                <Users size={16} />
              </div>
              <span className="font-instrument text-2xl sm:text-3xl font-bold text-[#c2185b] dark:text-[#f3b9c8]">
                35K+
              </span>
              <span className="text-xs text-gray-500 dark:text-white/60 font-medium">
                Total Reach
              </span>
            </div>
          </div>
        </div>

        {/* 3 Channels / Platforms Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-instrument text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
              Primary Platforms & Communities
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white/50">
              Active Channels
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentCreationData.platforms.map((platform, idx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="dashed-border-anim rounded-3xl bg-white dark:bg-[#141416] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all"
              >
                {/* Background ambient glow */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${platform.gradient} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center">
                      {platform.iconType === "youtube" && (
                        <FaYoutube size={24} className="text-red-500" />
                      )}
                      {platform.iconType === "laugh" && (
                        <FaLaughSquint size={24} className="text-amber-500" />
                      )}
                      {platform.iconType === "instagram" && (
                        <FaInstagram size={24} className="text-pink-500" />
                      )}
                    </div>

                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${platform.badgeColor}`}
                    >
                      {platform.highlightMetric}
                    </span>
                  </div>

                  {/* Title & Handle */}
                  <h3 className="font-instrument text-xl font-bold text-gray-900 dark:text-white mb-0.5">
                    {platform.name}
                  </h3>
                  <p className="font-mono text-xs text-[#c2185b] dark:text-[#f3b9c8] font-medium mb-3">
                    {platform.handle}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-5">
                    {platform.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-black/5 dark:border-white/10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {platform.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glare-button flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-xs font-semibold text-gray-800 dark:text-white transition-colors cursor-pointer"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Pillars / What I Create */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c2185b] dark:text-[#f3b9c8] uppercase mb-2 block">
              Core Pillars
            </span>
            <h2 className="font-instrument text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              Why Student Content Hits Different
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
              Blending authentic college struggles with technical knowledge to create content that educates, entertains, and inspires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contentCreationData.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141416] p-6 shadow-xs"
              >
                <h3 className="font-instrument font-bold text-xl text-gray-900 dark:text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#c2185b] dark:text-[#f3b9c8] mb-2.5">
                  {pillar.subtitle}
                </p>
                <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content & Viral Moments Showcase */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c2185b] dark:text-[#f3b9c8] uppercase mb-2 block">
                Portfolio Highlights
              </span>
              <h2 className="font-instrument text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                Featured Videos, Memes & Reels
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`glare-button px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#c2185b] text-white shadow-xs"
                      : "bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="dashed-border-anim rounded-2xl bg-white dark:bg-[#141416] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  {/* Top Meta */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80">
                          {item.platform}
                        </span>
                        <span className="text-[11px] font-medium text-gray-500 dark:text-white/50">
                          • {item.tag}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#c2185b] dark:text-[#f3b9c8] bg-[#FCE7EC]/70 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                        <TrendingUp size={12} />
                        {item.views}
                      </span>
                    </div>

                    <h3 className="font-instrument font-semibold text-xl text-gray-900 dark:text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-white/60 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Duration & Mock Action */}
                  <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-white/50">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Play size={12} className="text-[#c2185b] dark:text-[#f3b9c8]" />
                      {item.duration}
                    </span>

                    <span className="text-xs text-gray-500 dark:text-white/50 font-medium">
                      High Retention & Relatability
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Collaboration / Sponsor Callout Banner */}
        <div className="dashed-border-anim rounded-3xl bg-gradient-to-br from-[#FFF5F7] via-white to-[#F9E8EC] dark:from-[#1c1218] dark:via-[#141416] dark:to-[#1a1215] p-8 sm:p-10 text-center flex flex-col items-center relative overflow-hidden shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#c2185b]/10 text-[#c2185b] dark:text-[#f3b9c8] flex items-center justify-center mb-4">
            <Share2 size={24} />
          </div>

          <h3 className="font-instrument font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2">
            Want to Reach 35K+ College Students?
          </h3>

          <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-white/70 max-w-lg leading-relaxed mb-6">
            Whether you're a student brand, edtech startup, dev tooling company, or university initiative looking to run engaging campaigns, sponsor roadmaps, or collaborate on student-targeted content, let's connect!
          </p>

          <button
            onClick={() => {
              if (onViewChange) onViewChange("contact");
              else {
                const event = new CustomEvent("navigate-to", { detail: "contact" });
                window.dispatchEvent(event);
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="glare-button px-7 py-3.5 rounded-full bg-[#c2185b] hover:bg-[#a0134a] text-white text-sm font-medium shadow-md transition-colors cursor-pointer"
          >
            Let's Collaborate on Content
          </button>
        </div>
      </div>
    </section>
  );
}
