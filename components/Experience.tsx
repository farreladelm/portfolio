"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Terra Weather Pte. Ltd.",
    role: "Software Engineer",
    period: "2025 - Present",
    achievements: [
      "Full ownership of the development lifecycle for Metocean Data (metocean-data.org): from UI/UX design and design system architecture to building the frontend (Vanilla HTML/CSS/JS) and custom Smojo backend.",
      "Engineered the platform's core interactive mapping feature using MBTiles (SQLite vector tiles), enabling high-performance coordinate pinpointing without heavy third-party mapping libraries.",
      "Architected an internal AI-powered CRM from scratch using React and FastAPI, designing the database schema and a scheduling-based AI agent system for automated prospect intelligence and verified cold email delivery.",
      "Responsible for full-stack feature engineering, system scalability, and ensuring high-fidelity design implementation across internal and client-facing marine intelligence tools.",
    ],
  },
  {
    company: "Terra AI",
    role: "Software Engineer",
    period: "2023 - 2025",
    achievements: [
      "Led end-to-end development of DigitalSkola AI Counselor: LLM-powered CV review and interview simulation with automated scoring and personalized feedback.",
      "Developed a suite of specialized AI chatbots across multiple fields: including Bogor Tourism (Laras Manis), Smojo community onboarding, and a presidential election monitoring bot.",
      "Built a RAG-based chatbot for DigitalSkola, enabling enrolled learners to query course-specific materials through a conversational interface.",
      "Engineered a ChatGPT API integration layer for the Smojo ecosystem, expanding LLM capabilities across various project domains.",
    ],
  },
  {
    company: "Kementerian Pendidikan dan Kebudayaan",
    role: "Full Stack Developer Intern",
    period: "Jan 2023 - Feb 2023",
    achievements: [
      "Developed a case study full-stack web application using Laravel and MySQL for the Vocational High School Directorate (SMKPK Lanjutan) to streamline complex school data collection.",
      "Implemented secure authentication, dynamic form handling, and automated PDF report generation during an intensive one-month internship.",
    ],
  },
  {
    company: "Bineka Chatbot 2.0",
    role: "Chatbot Developer",
    period: "Oct 2022 - Feb 2023",
    achievements: [
      "Developed Bineka Chatbot 2.0, an interactive platform promoting cross-cultural understanding and religious harmony, now used regularly by YPSIM for student education.",
      "Scaled the platform to achieve 36,000+ total visits through optimized conversational flows and religious harmony curriculum integration.",
    ],
  },
  {
    company: "PT Arkatama Multi Solusindo",
    role: "Full-Stack Web Developer Apprentice",
    period: "Aug 2022 - Jan 2023",
    achievements: [
      "Mastered full-stack fundamentals: from system and database design to building high-fidelity UI mockups in Figma and basic CI/CD pipeline management.",
      "Developed a complete e-commerce case study (frontend, backend, and admin dashboard) in 2 weeks using CodeIgniter 3 and Bootstrap to meet rigorous apprentice graduation criteria.",
      "Engineered REST API endpoints and integrated them with responsive frontend interfaces for seamless data handling.",
    ],
  },
  {
    company: "Terra AI",
    role: "Smojo Developer Intern",
    period: "Aug 2022 - Jan 2023",
    achievements: [
      "Completed a 6-month intensive Smojo programming internship, culminating in the development of the SmojoVM architecture.",
      "Developed the compilation logic that transforms Smojo code into a universal, metadata-rich JSON instruction set (SmojoVM app).",
      "Engineered the JavaScript execution layer, enabling these single compiled applications to run consistently across local servers (via Java) and directly inside web browsers (via JavaScript).",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => (
        <motion.div 
          key={`${exp.company}-${exp.role}`} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="border-b border-divider"
        >
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-10 text-left group"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-24">
              <span className="font-mono text-[10px] text-muted w-24 shrink-0">
                {exp.period}
              </span>
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-serif">
                  {exp.role}
                </h3>
                <span className="font-mono text-sm text-muted">
                  {exp.company}
                </span>
              </div>
            </div>
            <span className="font-mono text-xl text-muted group-hover:text-foreground transition-colors">
              {expandedIndex === index ? "×" : "+"}
            </span>
          </button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-12 pl-0 md:pl-48 pr-8">
                  <ul className="flex flex-col gap-5">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="font-mono text-sm text-muted leading-relaxed relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-divider"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
