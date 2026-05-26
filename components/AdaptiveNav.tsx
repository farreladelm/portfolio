"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

type NavPhase = "scroll" | "box-reveal" | "expanding" | "complete";

export default function AdaptiveNav() {
  const [phase, setPhase] = useState<NavPhase>("scroll");
  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const [navWidth, setNavWidth] = useState(0);
  const navMeasureRef = useRef<HTMLUListElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const { scrollY } = useScroll();

  const STICKY_TOP = 24;
  const INITIAL_OFFSET = 0.7;
  const SCROLL_COMPONENT_HEIGHT = 180;
  const NAV_COMPONENT_HEIGHT = 48;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up timeouts on unmount
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (navMeasureRef.current) {
      setNavWidth(navMeasureRef.current.offsetWidth + 48);
    }
  }, [windowHeight]);

  const initialTop = (windowHeight || 0) * INITIAL_OFFSET;
  const scrollThreshold = initialTop - STICKY_TOP;

  const topPos = useTransform(
    scrollY,
    [0, scrollThreshold],
    [initialTop, STICKY_TOP],
    { clamp: true }
  );

  const startTransition = () => {
    setPhase("box-reveal");
    
    const t1 = setTimeout(() => {
      setPhase("expanding");
      
      const t2 = setTimeout(() => {
        setPhase("complete");
      }, 400);
      
      timeoutsRef.current.push(t2);
    }, 400);

    timeoutsRef.current.push(t1);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (phase !== "scroll" || !windowHeight) return;

    const collisionPoint = STICKY_TOP + SCROLL_COMPONENT_HEIGHT;
    const projectSectionFromTop = windowHeight - latest;

    if (projectSectionFromTop <= collisionPoint) {
      startTransition();
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <ul
        ref={navMeasureRef}
        className="fixed opacity-0 pointer-events-none flex flex-row items-center gap-6 md:gap-8 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        {links.map((link) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>

      <div className="fixed inset-x-0 top-0 z-50 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1400px] h-0">
          <motion.div
            style={{ 
              top: phase === "scroll" ? topPos : STICKY_TOP,
              opacity: windowHeight === null ? 0 : 1 
            }}
            className="absolute right-6 md:right-12 pointer-events-none"
          >
            <motion.nav
              layout
              initial={false}
              animate={
                phase === "scroll" 
                  ? { height: "auto", width: 40 } 
                  : phase === "box-reveal"
                  ? { height: NAV_COMPONENT_HEIGHT, width: 40 }
                  : phase === "expanding"
                  ? { height: NAV_COMPONENT_HEIGHT, width: navWidth }
                  : { height: "auto", width: "auto" }
              }
              transition={{ 
                duration: 0.4, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`pointer-events-auto flex items-center justify-center overflow-hidden bg-background/80 backdrop-blur-md ${
                phase !== "scroll" 
                  ? "border border-divider" 
                  : "border-0 p-0"
              } ${phase === "complete" ? "px-6 py-3" : ""}`}
            >
              <AnimatePresence mode="wait">
                {phase === "scroll" ? (
                  <motion.div
                    key="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-8 relative py-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted [writing-mode:vertical-lr] inline-block">
                      Scroll
                    </span>
                    <div className="flex flex-col items-center -space-y-1">
                      {[0, 1, 2].map((i) => (
                        <motion.svg
                          key={i}
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          animate={{ 
                            opacity: [0.1, 1, 0.1],
                            y: [0, 8, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2,
                            ease: "easeInOut" 
                          }}
                          className="text-muted"
                        >
                          <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      ))}
                    </div>
                  </motion.div>
                ) : phase === "complete" ? (
                  <motion.ul
                    key="nav-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-row items-center gap-6 md:gap-8 whitespace-nowrap"
                  >
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => handleClick(e, link.href)}
                          className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.div key="void" className="w-full h-full" />
                )}
              </AnimatePresence>
            </motion.nav>
          </motion.div>
        </div>
      </div>
    </>
  );
}
