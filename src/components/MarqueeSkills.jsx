import React from "react";
import {
  SiReact,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillIcons = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Java", icon: FaJava, color: "#EA2D2E" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#68A063" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#8B5CF6" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

export default function MarqueeSkills() {
  return (
    <div className="w-full py-8 my-8 relative overflow-hidden">
      {/* Edge Gradients for Smooth Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fffefd] dark:from-[#0b0b0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fffefd] dark:from-[#0b0b0d] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-6">
          {[...skillIcons, ...skillIcons].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-150 shrink-0"
              >
                <Icon size={18} style={{ color: skill.color }} />
                <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {skill.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/30 ml-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
