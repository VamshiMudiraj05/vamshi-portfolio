import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data/portfolioData";

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("writing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("holding"), 500);
    const t2 = setTimeout(() => setPhase("falling"), 750);
    const t3 = setTimeout(() => {
      setPhase("done");
      setTimeout(onComplete, 250);
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fffefd] dark:bg-[#0b0b0d] overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "falling" ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="overflow-hidden whitespace-nowrap"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.45, ease: "linear", delay: 0.05 }}
            >
              <div className="font-signature text-4xl md:text-6xl text-black dark:text-white py-2 pr-6 pl-2 tracking-wide">
                {personalInfo.brandName}
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {phase === "falling" && (
              <motion.div
                className="absolute top-[-20%]"
                initial={{ x: "-10vw", y: "-10vh", rotate: 0, opacity: 0 }}
                animate={{
                  y: "120vh",
                  x: "30vw",
                  rotate: 360,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeInOut",
                  opacity: { times: [0, 0.2, 0.8, 1] },
                }}
                style={{ width: 32, height: 44, filter: "blur(1px)" }}
              >
                <svg
                  viewBox="0 0 100 140"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-[#ffb7c5]"
                >
                  <path d="M50 0C60 40 100 80 50 140C0 80 40 40 50 0Z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
