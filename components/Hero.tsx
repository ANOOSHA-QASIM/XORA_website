"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  MessageSquare,
  UserRound,
  Settings,
  Play,
} from "lucide-react";
import { useEffect } from "react";

const heroEase = [0.16, 1, 0.3, 1] as const;

const headingWords = ["Let Your", "Business"];

export default function Hero() {
  /* =========================================================
     MOUSE PARALLAX
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
    mass: 0.6,
  });

  const ringX = useTransform(smoothX, [-500, 500], [-18, 18]);
  const ringY = useTransform(smoothY, [-500, 500], [-12, 12]);

  const contentX = useTransform(smoothX, [-500, 500], [-5, 5]);
  const contentY = useTransform(smoothY, [-500, 500], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      aria-label="XORA Hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Main ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        style={{
          background: `
            radial-gradient(
              ellipse 55% 65% at 50% 45%,
              rgba(198,255,0,0.07) 0%,
              rgba(198,255,0,0.025) 35%,
              transparent 72%
            )
          `,
        }}
      />

      {/* =========================================================
          RADAR SYSTEM
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[48%]"
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c6ff00]/[0.075]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c6ff00] shadow-[0_0_15px_#c6ff00]" />
        </motion.div>

        {/* Second ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c6ff00]/[0.065]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 52,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="absolute right-[12%] top-[8%] h-1.5 w-1.5 rounded-full bg-[#c6ff00] shadow-[0_0_12px_#c6ff00]" />
        </motion.div>

        {/* Third ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c6ff00]/[0.055]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c6ff00]/[0.045]"
          animate={{
            scale: [1, 1.035, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* =========================================================
          RADAR SCANNER
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[48%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(198,255,0,0.08) 28deg, transparent 45deg)",
            filter: "blur(3px)",
          }}
        />
      </motion.div>

      {/* =========================================================
          CENTER LINES
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c6ff00]/[0.11] to-transparent"
        animate={{
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-[48%] h-px w-full bg-gradient-to-r from-transparent via-[#c6ff00]/[0.1] to-transparent"
      />

      {/* =========================================================
          FLOATING RADAR DOTS
      ========================================================= */}

      {[
        ["left-[25%]", "top-[39%]", 0],
        ["left-[34%]", "top-[22%]", 0.8],
        ["left-[66%]", "top-[22%]", 1.4],
        ["right-[25%]", "top-[39%]", 0.5],
        ["left-1/2", "top-[72%]", 1.8],
      ].map(([left, top, delay], index) => (
        <motion.div
          key={index}
          aria-hidden
          className={`pointer-events-none absolute ${left} ${top} h-1 w-1 rounded-full bg-[#c6ff00] shadow-[0_0_10px_#c6ff00]`}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.7, 1.7, 0.7],
          }}
          transition={{
            duration: 2.8,
            delay: Number(delay),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          LEFT FUTURISTIC DOOR
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-[5.5rem] hidden h-[calc(100%-5.5rem)] w-[15%] overflow-hidden md:block"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.2,
          ease: heroEase,
        }}
      >
        <div
          className="absolute inset-y-[4%] left-[5%] w-[72%] border-r border-[#9b7b43]/30"
          style={{
            background:
              "linear-gradient(105deg, #080808 0%, #11100d 55%, #080808 100%)",
            clipPath: "polygon(0 0, 72% 7%, 72% 93%, 0 100%)",
          }}
        />

        <div
          className="absolute left-[10%] top-[9%] h-[82%] w-[55%] border border-[#b39155]/20"
          style={{
            clipPath: "polygon(0 0, 100% 7%, 100% 93%, 0 100%)",
          }}
        />

        {/* Moving light */}
        <motion.div
          className="absolute right-[8%] top-[10%] h-[18%] w-[3px] bg-[#e6ffad] shadow-[0_0_8px_#c6ff00,0_0_25px_rgba(198,255,0,0.8)]"
          animate={{
            y: ["0%", "350%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute right-0 top-[8%] h-[84%] w-[30%] bg-gradient-to-r from-transparent to-[#c6ff00]/[0.08] blur-[10px]" />
      </motion.div>

      {/* =========================================================
          RIGHT FUTURISTIC DOOR
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-[5.5rem] hidden h-[calc(100%-5.5rem)] w-[15%] overflow-hidden md:block"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.2,
          ease: heroEase,
        }}
      >
        <div
          className="absolute inset-y-[4%] right-[5%] w-[72%] border-l border-[#9b7b43]/30"
          style={{
            background:
              "linear-gradient(255deg, #080808 0%, #11100d 55%, #080808 100%)",
            clipPath: "polygon(28% 7%, 100% 0, 100% 100%, 28% 93%)",
          }}
        />

        <div
          className="absolute right-[10%] top-[9%] h-[82%] w-[55%] border border-[#b39155]/20"
          style={{
            clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 93%)",
          }}
        />

        <motion.div
          className="absolute left-[8%] top-[10%] h-[18%] w-[3px] bg-[#e6ffad] shadow-[0_0_8px_#c6ff00,0_0_25px_rgba(198,255,0,0.8)]"
          animate={{
            y: ["0%", "350%", "0%"],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute left-0 top-[8%] h-[84%] w-[30%] bg-gradient-to-l from-transparent to-[#c6ff00]/[0.08] blur-[10px]" />
      </motion.div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col items-center px-5 pb-10 pt-[125px] sm:px-8 lg:px-12"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: heroEase,
          }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-2 backdrop-blur-md"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[#c6ff00] shadow-[0_0_10px_#c6ff00]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c6ff00] sm:text-xs">
            AI Automation Agency
          </span>
        </motion.div>

        {/* =========================================================
            HEADING REVEAL
        ========================================================= */}

        <h1
          className="max-w-[1000px] text-center font-semibold leading-[0.94] tracking-[-0.045em]"
          style={{
            fontSize: "clamp(3.4rem, 7vw, 6.8rem)",
            textShadow: "0 0 60px rgba(255,255,255,0.04)",
          }}
        >
          <span className="block overflow-hidden">
            {headingWords.map((word, index) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block text-white"
                initial={{
                  opacity: 0,
                  y: 90,
                  rotateX: 70,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.65 + index * 0.12,
                  ease: heroEase,
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>

          <span className="mt-2 block overflow-hidden">
            <motion.span
              className="inline-block text-[#c6ff00] italic font-light"
              initial={{
                opacity: 0,
                y: 90,
                rotateX: 70,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                delay: 0.9,
                ease: heroEase,
              }}
            >
              Work For You.
            </motion.span>
          </span>
        </h1>

        {/* Green underline pulse */}
        <motion.div
          className="mt-5 h-[2px] bg-[#c6ff00]"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: ["0px", "70px", "45px"],
            opacity: [0, 1, 0.7],
          }}
          transition={{
            duration: 1,
            delay: 1.65,
            ease: heroEase,
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.55,
            ease: heroEase,
          }}
          className="mt-8 max-w-[690px] text-center text-[15px] leading-7 text-white/65 sm:text-[17px] sm:leading-8"
        >
          We build intelligent automation systems that streamline operations,
          <br className="hidden sm:block" />
          boost productivity, and drive real business growth.
        </motion.p>

        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: heroEase,
          }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          {/* Primary CTA */}
          <a
            href="#services"
            className="group relative inline-flex h-[56px] min-w-[235px] items-center justify-center gap-5 overflow-hidden rounded-xl bg-[#c6ff00] px-7 text-[15px] font-semibold text-black shadow-[0_0_30px_rgba(198,255,0,0.18)] transition-all duration-300 hover:bg-[#d2ff35] hover:shadow-[0_0_45px_rgba(198,255,0,0.3)]"
          >
            {/* Shine */}
            <motion.span
              className="absolute inset-y-0 -left-[80px] w-[45px] rotate-[20deg] bg-white/50 blur-md"
              animate={{
                x: ["0px", "360px"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">Explore Services</span>

            <ArrowUpRight
              size={21}
              strokeWidth={2.2}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Secondary */}
          <a
            href="#work"
            className="group inline-flex h-[56px] min-w-[220px] items-center justify-center gap-4 rounded-xl border border-white/20 bg-black/25 px-7 text-[15px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#c6ff00]/50 hover:bg-white/[0.04]"
          >
            View Our Work

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c6ff00]/70 transition-all duration-300 group-hover:bg-[#c6ff00] group-hover:text-black">
              <Play size={13} fill="currentColor" />
            </span>
          </a>
        </motion.div>

        {/* =========================================================
            SERVICE CARDS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.05,
            ease: heroEase,
          }}
          className="mt-9 grid w-full max-w-[810px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          <FloatingServiceCard
            delay={0}
            icon={<Bot size={30} strokeWidth={1.4} />}
            title="AI Automation"
            subtitle="Smarter Workflows"
          />

          <FloatingServiceCard
            delay={0.7}
            icon={<MessageSquare size={30} strokeWidth={1.4} />}
            title="AI Chatbots"
            subtitle="Intelligent Conversations"
          />

          <FloatingServiceCard
            delay={1.2}
            icon={<UserRound size={30} strokeWidth={1.4} />}
            title="CRM Solutions"
            subtitle="Organize & Scale"
          />

          <FloatingServiceCard
            delay={0.4}
            icon={<Settings size={30} strokeWidth={1.4} />}
            title="Custom Systems"
            subtitle="Built for You"
          />
        </motion.div>

        {/* =========================================================
            TRUSTED BY
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.35,
            ease: heroEase,
          }}
          className="mt-10 w-full max-w-[810px]"
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c6ff00]/30"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>

          
        </motion.div>
      </motion.div>

      {/* =========================================================
          BOTTOM FLOOR GLOW
      ========================================================= */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[150px] w-[700px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(198,255,0,0.18) 0%, rgba(198,255,0,0.045) 35%, transparent 72%)",
          filter: "blur(15px)",
        }}
        animate={{
          scaleX: [0.85, 1.08, 0.85],
          opacity: [0.45, 0.85, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom scanning line */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[5%] left-1/2 h-[2px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c6ff00]/70 to-transparent shadow-[0_0_18px_rgba(198,255,0,0.5)]"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: ["0px", "420px", "280px"],
          opacity: [0, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          delay: 2,
          ease: heroEase,
        }}
      />
    </section>
  );
}

/* =========================================================
   FLOATING SERVICE CARD
========================================================= */

function FloatingServiceCard({
  icon,
  title,
  subtitle,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0, 5, 0],
        rotateZ: [0, 0.25, 0, -0.25, 0],
      }}
      transition={{
        duration: 5.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.025,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="group relative flex min-h-[155px] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#080909]/75 px-3 py-5 text-center backdrop-blur-md transition-colors duration-300 hover:border-[#c6ff00]/40 hover:bg-[#0b0d08]"
    >
      {/* Animated bottom energy */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-[#c6ff00] to-transparent opacity-50"
        animate={{
          x: ["-30%", "30%"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#c6ff00]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#c6ff00]/45 text-[#c6ff00] shadow-[0_0_18px_rgba(198,255,0,0.04)]"
        animate={{
          boxShadow: [
            "0 0 18px rgba(198,255,0,0.03)",
            "0 0 30px rgba(198,255,0,0.13)",
            "0 0 18px rgba(198,255,0,0.03)",
          ],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon}
      </motion.div>

      <h3 className="relative mt-4 text-[15px] font-medium text-white sm:text-[16px]">
        {title}
      </h3>

      <p className="relative mt-1.5 text-[12px] text-white/45 sm:text-[13px]">
        {subtitle}
      </p>
    </motion.div>
  );
}