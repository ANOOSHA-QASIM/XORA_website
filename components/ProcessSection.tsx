"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: "⌕",
    description:
      "We analyze your business, challenges, and goals to identify the right opportunities.",
  },
  {
    number: "02",
    title: "Design",
    icon: "♧",
    description:
      "We design tailored automation strategies and workflows built around your objectives.",
  },
  {
    number: "03",
    title: "Build",
    icon: "</>",
    description:
      "We build, integrate, and configure everything with precision and best practices.",
  },
  {
    number: "04",
    title: "Deploy",
    icon: "↗",
    description:
      "We deploy the systems seamlessly and ensure everything runs smoothly.",
  },
  {
    number: "05",
    title: "Optimize",
    icon: "▥",
    description:
      "We monitor, optimize, and scale for maximum performance and continuous growth.",
  },
];

const benefits = [
  {
    icon: "◇",
    title: "Secure",
    text: "Enterprise-grade security",
  },
  {
    icon: "⌁",
    title: "Scalable",
    text: "Built to grow with you",
  },
  {
    icon: "◷",
    title: "Efficient",
    text: "Save time and reduce costs",
  },
  {
    icon: "◎",
    title: "Results-Driven",
    text: "Focused on measurable business impact",
  },
];

const cardOffsets = [18, -8, 12, -12, 20];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-[#030303] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[15%] h-[55%] w-[55%] -translate-x-1/2 rounded-full bg-[#b8d600]/[0.035] blur-[120px]" />

        <div className="absolute left-0 top-0 h-full w-[8%] border-r border-[#b89b58]/20 bg-gradient-to-r from-[#17130d] to-transparent">
          <div className="absolute inset-y-0 right-5 w-px bg-[#c7a85c]/30" />
          <div className="absolute inset-y-0 right-9 w-px bg-[#c7a85c]/20" />
          <div className="absolute inset-y-0 right-14 w-px bg-[#c7a85c]/15" />

          <motion.div
            animate={{
              opacity: [0.25, 0.8, 0.25],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-2 top-[22%] h-[42%] w-[2px] origin-center bg-gradient-to-b from-transparent via-[#d5ae55] to-transparent shadow-[0_0_18px_#d5ae55]"
          />
        </div>

        <div className="absolute right-0 top-0 h-full w-[8%] border-l border-[#b89b58]/20 bg-gradient-to-l from-[#17130d] to-transparent">
          <div className="absolute inset-y-0 left-5 w-px bg-[#c7a85c]/30" />
          <div className="absolute inset-y-0 left-9 w-px bg-[#c7a85c]/20" />
          <div className="absolute inset-y-0 left-14 w-px bg-[#c7a85c]/15" />

          <motion.div
            animate={{
              opacity: [0.25, 0.8, 0.25],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute left-2 top-[22%] h-[42%] w-[2px] origin-center bg-gradient-to-b from-transparent via-[#d5ae55] to-transparent shadow-[0_0_18px_#d5ae55]"
          />
        </div>

        <div className="absolute left-[12%] right-[12%] top-[8%] h-[55%] border border-white/[0.025]" />
        <div className="absolute left-[18%] right-[18%] top-[12%] h-[45%] border border-white/[0.02]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#c1d900]">
            Our Process
          </p>

          <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl">
            A Simple Process.
            <br />
            <span className="text-[#bdd500]">Powerful Results.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            We follow a proven process to deliver automation
            <br className="hidden md:block" />
            solutions that drive real impact.
          </p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 36, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 h-px bg-[#c5dc00] shadow-[0_0_10px_rgba(197,220,0,.45)]"
          />
        </motion.div>

        {/* ================= PROCESS CARDS ================= */}

        <div className="relative mt-20">

          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.4,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "center" }}
            className="absolute left-[8%] right-[8%] top-[72px] hidden h-px bg-gradient-to-r from-transparent via-[#c8d900]/70 to-transparent lg:block"
          />

          {/* Moving light on line */}
          <motion.div
            animate={{
              x: ["-20%", "120%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute top-[69px] hidden h-[7px] w-[100px] rounded-full bg-[#d7e900]/60 blur-md lg:block"
          />

          {/* Nodes */}
          <div className="absolute left-[20%] right-[20%] top-[68px] hidden justify-between lg:flex">
            {[1, 2, 3, 4].map((node, index) => (
              <motion.span
                key={node}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: 0.5 + index * 0.12,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                }}
                className="h-[9px] w-[9px] rounded-full bg-[#d7e900] shadow-[0_0_12px_4px_rgba(215,233,0,.35)]"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? 75 : -75,
                  scale: 0.92,
                  rotate: index % 2 === 0 ? -1.5 : 1.5,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: cardOffsets[index],
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: cardOffsets[index] - 10,
                  scale: 1.025,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[420px] overflow-hidden border border-white/[0.13] bg-gradient-to-b from-[#0d0d0d] via-[#080808] to-[#050505] px-6 pb-7 pt-7"
              >
                {/* Animated top glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35 + index * 0.13,
                    duration: 0.8,
                  }}
                  className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-[#c8d900]/[0.055] blur-3xl"
                />

                {/* Hover sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#c8d900]/[0.06] to-transparent skew-x-[-18deg]"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 12,
                  }}
                  className="relative z-10 mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#b89b58]/30 bg-[#050505] shadow-[inset_0_0_25px_rgba(255,255,255,.025)]"
                >
                  <div className="absolute inset-[7px] rounded-full border border-white/[0.06]" />

                  <span className="text-3xl font-light text-[#d1e300]">
                    {step.icon}
                  </span>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.55 + index * 0.13,
                    duration: 0.5,
                  }}
                  className="relative mt-7 text-center text-lg font-medium tracking-wide text-[#c8dc00]"
                >
                  {step.number}
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.62 + index * 0.13,
                    duration: 0.5,
                  }}
                  className="relative mt-3 text-center text-xl font-medium"
                >
                  {step.title}
                </motion.h3>

                {/* Divider */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 28, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + index * 0.13,
                    duration: 0.45,
                  }}
                  className="relative mx-auto mt-4 h-px bg-[#c9dc00] shadow-[0_0_8px_rgba(201,220,0,.3)]"
                />

                {/* Description */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.75 + index * 0.13,
                    duration: 0.55,
                  }}
                  className="relative mx-auto mt-5 max-w-[190px] text-center text-sm leading-6 text-white/60"
                >
                  {step.description}
                </motion.p>

                {/* Large background number */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.13,
                    duration: 0.8,
                  }}
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 select-none text-[74px] font-light leading-none text-white/[0.035]"
                >
                  {step.number}
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= BENEFITS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 overflow-hidden rounded-xl border border-[#a98c48]/30 bg-[#050505]/80"
        >
          <div className="grid md:grid-cols-[1.25fr_repeat(4,1fr)]">

            {/* Main statement */}
            <div className="flex items-center gap-5 border-b border-white/[0.08] px-7 py-6 md:border-b-0 md:border-r">
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c3d900]/30 text-2xl text-[#c9df00]"
              >
                ◇
              </motion.div>

              <p className="max-w-xs text-sm leading-6 text-white/80">
                Every solution we deliver is built for scalability,
                security, and long-term success.
              </p>
            </div>

            {/* Benefits */}
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-4 border-b border-white/[0.08] px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  className="text-2xl text-[#c9df00]"
                >
                  {benefit.icon}
                </motion.span>

                <div>
                  <h4 className="text-sm font-medium text-white">
                    {benefit.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom floor glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.8, 0.25],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-[#b89b58]/30 shadow-[0_0_30px_#b89b58]"
      />
    </section>
  );
}