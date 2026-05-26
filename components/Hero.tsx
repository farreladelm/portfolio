"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const roles = ["Fullstack", "Frontend", "Backend", "Software"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [targetWidth, setTargetWidth] = useState<number | "auto">("auto");
  const measureRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = (targetText: string) => {
    let iteration = 0;
    const duration = 1200;
    const steps = targetText.length * 3;
    const intervalTime = duration / steps;

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1/3;
    }, intervalTime);
  };

  const startTransition = (targetText: string, nextIndex: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRoleIndex(nextIndex);
    scramble(targetText);
  };

  useEffect(() => {
    // Switch to setTimeout to prevent overlapping transitions
    const timer = setTimeout(() => {
      const nextIndex = (roleIndex + 1) % roles.length;
      startTransition(roles[nextIndex], nextIndex);
    }, 4500);

    return () => clearTimeout(timer);
  }, [roleIndex]);

  useEffect(() => {
    if (measureRef.current) {
      setTargetWidth(measureRef.current.offsetWidth);
    }
  }, [roleIndex]);

  return (
    <div className="relative flex flex-col justify-center min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-16rem)] overflow-hidden">
      <span 
        ref={measureRef} 
        className="absolute opacity-0 pointer-events-none whitespace-nowrap text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight"
        aria-hidden="true"
      >
        {roles[roleIndex]}
      </span>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-lg tracking-wider text-foreground/80 uppercase">
            Farrel Adel Mohammad
          </span>
        </motion.div>

        <div className="py-8">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-tight tracking-tight flex flex-col items-start">
            <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  width: targetWidth,
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  width: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
                  y: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
                }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                {displayText}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block pb-6"
              >
                Engineer
              </motion.span>
            </div>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          {["Indonesia", "AI Integration", "Design Systems"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
              className="font-mono text-[10px] uppercase tracking-widest text-muted border border-divider px-3 py-1 bg-background/50 backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
