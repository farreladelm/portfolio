"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
}

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  
  // Track the highest scroll progress reached so far
  const highestProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > highestProgress.get()) {
      highestProgress.set(latest);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[350vh] w-full bg-background">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 md:px-12">
        <p className="flex flex-wrap justify-center text-center font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight max-w-6xl">
          {words.map((word, i) => {
            // Highlight all words within the first 70% of scroll
            // This leaves 30% of the 350vh as a 'buffer' to read the finished text
            const start = (i / words.length) * 0.7;
            const end = ((i + 1) / words.length) * 0.7;
            return (
              <Word key={i} progress={highestProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  // Now maps to highestProgress, so it never fades back
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-4 mt-2">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
