"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Metocean Data",
    description: "Offshore weather intelligence platform for marine and energy sectors. Interactive MBTiles mapping, analytics dashboard, and user authentication.",
    url: "https://metocean-data.org",
  },
  {
    name: "Terra Weather CRM",
    description: "Internal AI-powered CRM with scheduling-based agent automation, cold email generation, and prospect intelligence gathering.",
    url: "#",
  },
  {
    name: "DigitalSkola AI Counselor",
    description: "LLM-powered career platform with CV review and interview simulation. Used by DigitalSkola as a customer acquisition tool.",
    url: "#",
  },
  {
    name: "SmojoVM",
    description: "Virtual machine architecture enabling single Smojo programs to run anywhere: locally/servers via Java, and inside websites via JavaScript.",
    url: "https://smojo.ai",
  },
];

export default function Projects() {
  return (
    <div className="flex justify-start">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-divider gap-[1px] border border-divider w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="bg-background p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[350px] group transition-colors duration-500 hover:bg-foreground/[0.02]"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                {project.name}
              </h3>
              <p className="font-mono text-sm text-muted leading-relaxed max-w-sm">
                {project.description}
              </p>
            </div>
            <div className="mt-8 overflow-hidden">
              <a
                href={project.url}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground inline-flex items-center gap-2 transition-all duration-300 relative group"
              >
                <span className="relative z-10">View Project</span>
                <span className="text-xs group-hover:translate-x-2 transition-transform duration-300">→</span>
                <motion.div 
                  className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
