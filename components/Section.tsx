"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  label?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  showDivider?: boolean;
}

export default function Section({
  label,
  children,
  className = "",
  id,
  showDivider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 ${className}`}
    >
      {showDivider && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-divider origin-left"
        />
      )}
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block font-mono text-[10px] tracking-[0.2em] text-muted uppercase mb-12"
        >
          {label}
        </motion.span>
      )}
      <div>{children}</div>
    </section>
  );
}
