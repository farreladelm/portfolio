"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollRevealText from "@/components/ScrollRevealText";
import AdaptiveNav from "@/components/AdaptiveNav";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Sticky Adaptive Navigation */}
      <AdaptiveNav />

      {/* Hero */}
      <Section className="min-h-screen flex flex-col justify-center">
        <Hero />
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects" showDivider>
        <Projects />
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience" showDivider>
        <Experience />
      </Section>

      {/* Large Scroll Animation */}
      <ScrollRevealText text="From pixel to production. I design systems, build full-stack products, and integrate AI where it actually creates value." />

      {/* About */}
      <Section id="about" label="About" showDivider>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-5xl leading-tight"
            >
              Software Engineer with 3+ years of experience building full-stack web
              applications and AI-powered systems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-mono text-sm text-muted leading-relaxed flex flex-col gap-6 max-w-xl"
            >
              <p>
                Based in Surabaya, Indonesia. I work across the full development
                lifecycle: from Figma design systems to backend architecture and AI
                agent automation.
              </p>
              <p>
                Currently at Terra Weather Pte. Ltd., building offshore weather
                intelligence platforms and extensible AI automation pipelines.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="border border-divider p-8 flex flex-col gap-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Education
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-xl leading-tight">
                  Bachelor of Informatics
                </p>
                <p className="font-mono text-xs text-muted">Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur</p>
                <p className="font-mono text-[10px] text-muted mt-1">2020 - 2024 · GPA 3.9/4.0</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="border border-divider p-8 flex flex-col gap-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Certifications
              </span>
              <div className="flex flex-col divide-y divide-divider/30">
                {[
                  { name: "Junior Web Developer", issuer: "BNSP", date: "2023" },
                  { name: "Fullstack Web Development", issuer: "MBKM MSIB", date: "2022" },
                  { name: "Fullstack Web Developer", issuer: "Udemy", date: "2022" },
                  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2022" },
                  { name: "AI4IMPACT Digipreneursfest", issuer: "Digital Bootcamp", date: "2022" },
                ].map((cert, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-1">
                    <p className="font-serif text-lg leading-tight text-foreground">
                      {cert.name}
                    </p>
                    <div className="flex justify-between items-center font-mono text-[10px] text-muted uppercase tracking-wider">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section label="Skills" showDivider>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {[
            {
              label: "Frontend",
              items: ["React", "Next.js", "TypeScript", "Vanilla JavaScript", "HTML", "CSS", "Bootstrap", "Figma"],
            },
            {
              label: "Backend",
              items: ["Python (FastAPI)", "PHP (Laravel, CodeIgniter 3)", "Smojo", "REST API Design"],
            },
            {
              label: "AI / Agent",
              items: ["OpenAI GPT API", "RAG", "Chatbot Development", "Prompt Engineering", "AI Agent Workflows" ],
            },
            {
              label: "Tools",
              items: ["Git", "Docker", "Node.js", "TypeScript", "Linux", "PostgreSQL", "mySQL"],
            },
          ].map((group, idx) => (
            <motion.div 
              key={group.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {group.label}
              </span>
              <ul className="font-mono text-sm flex flex-col gap-2 text-foreground">
                {group.items.map((item) => (
                  <li key={item} className="hover:translate-x-1 transition-transform duration-300 cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact" showDivider className="pb-32 md:pb-48">
        <Contact />
      </Section>

      {/* Footer Label */}
      <footer className="px-6 md:px-12 py-12 border-t border-divider flex justify-between items-center bg-background">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          © 2026 Farrel Adel Mohammad
        </span>
        <div className="flex gap-8">
          <a
            href="https://github.com/farreladelm"
            target="_blank"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-foreground transition-all duration-300 hover:tracking-[0.3em]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farreladelm"
            target="_blank"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-foreground transition-all duration-300 hover:tracking-[0.3em]"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
