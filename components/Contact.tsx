"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-4xl md:text-6xl font-serif max-w-2xl leading-tight">
          Let&apos;s grow together.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="mailto:farrel.adel@gmail.com"
          className="inline-block font-mono text-xs uppercase tracking-[0.2em] border border-divider px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-500"
        >
          farrel.adel@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
