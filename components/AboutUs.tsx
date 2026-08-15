"use client";

import { motion } from "framer-motion";
import {
  Target,
  BrainCircuit,
  Settings2,
  ShieldCheck,
  ChartNoAxesCombined,
  Users,
  Network,
  Clock3,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategic First",
    description:
      "We start with strategy to build automation that actually moves the needle.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    description:
      "Leverage cutting-edge AI to automate smarter and make data-driven decisions.",
  },
  {
    icon: Settings2,
    title: "End-to-End",
    description:
      "From planning to deployment and optimization — we handle everything.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "We follow best practices to ensure security, accuracy, and long-term reliability.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Built to Scale",
    description:
      "Solutions designed to grow with your business and adapt to change.",
  },
  {
    icon: Users,
    title: "Partners, Not Vendors",
    description:
      "We work as an extension of your team, focused on your long-term success.",
  },
];

const stats = [
  {
    icon: Network,
    value: "10+",
    title: "Projects Delivered",
    text: "Across Industries",
  },
  {
    icon: Users,
    value: "5+",
    title: "Industries Served",
    text: "And Empowered",
  },
  {
    icon: Clock3,
    value: "24/7",
    title: "Automations",
    text: "Built for Efficiency",
  },
  {
    icon: Rocket,
    value: "Future-Ready",
    title: "Solutions for Sustainable",
    text: "Growth",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white md:px-10 lg:px-[9.5%]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        aria-hidden
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[12%] h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-[#b7d900]/[0.035] blur-[130px]"
      />

      {/* Left light */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-[100px] bg-[linear-gradient(90deg,rgba(184,220,0,.09),transparent)]"
      />

      {/* Right light */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 40 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="pointer-events-none absolute right-0 top-0 h-full w-[100px] bg-[linear-gradient(-90deg,rgba(184,220,0,.09),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              letterSpacing: "0.08em",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              letterSpacing: "0.24em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-5 text-[11px] font-medium uppercase text-[#b7d900]"
          >
            Why Xora
          </motion.div>

          <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
            We Automate.
            <br />

            <motion.span
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-[#b7d900]"
            >
              You Scale.
            </motion.span>
          </h2>

          <motion.p
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
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-white/60 md:text-base"
          >
            We combine strategy, AI, and automation to eliminate repetitive
            work, streamline operations, and help businesses grow faster.
          </motion.p>

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 36,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mx-auto mt-5 h-[2px] bg-[#b7d900]"
          />
        </motion.div>

        {/* =====================================================
            WHY XORA CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[265px] overflow-hidden rounded-md border border-white/[0.14] bg-gradient-to-b from-[#111111] to-[#080808] px-5 py-7"
              >
                {/* Card glow */}
                <motion.div
                  className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#b7d900]/10 blur-[45px]"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                />

                {/* Top scanning line */}
                <motion.div
                  className="absolute left-0 top-0 h-px bg-[#b7d900]"
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.08,
                  }}
                />

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#b7d900]/60 shadow-[0_0_12px_#b7d900]" />

                {/* Number */}
                <div className="absolute right-4 top-4 text-[10px] font-medium tracking-[0.2em] text-white/20">
                  0{index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#b7d900]/30 text-[#b7d900] transition-all duration-500 group-hover:border-[#b7d900] group-hover:shadow-[0_0_28px_rgba(183,217,0,.18)]"
                >
                  <Icon
                    size={31}
                    strokeWidth={1.4}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="mt-5 text-center text-[16px] font-medium">
                  {item.title}
                </h3>

                <div className="mx-auto my-4 h-[2px] w-5 bg-[#b7d900]" />

                {/* Description */}
                <p className="text-center text-[13px] leading-6 text-white/55">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 overflow-hidden rounded-lg border border-white/[0.14] bg-[#090909]"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    backgroundColor: "rgba(183,217,0,0.025)",
                  }}
                  className={`group flex min-h-[125px] items-center gap-5 px-8 py-6 ${
                    index !== 0
                      ? "border-t border-white/10 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#101010] text-[#b7d900] transition-all duration-300 group-hover:border-[#b7d900]/40 group-hover:shadow-[0_0_20px_rgba(183,217,0,.1)]"
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.4}
                    />
                  </motion.div>

                  <div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                      }}
                      className="text-2xl font-medium text-[#b7d900]"
                    >
                      {stat.value}
                    </motion.div>

                    <div className="mt-1 text-sm text-white/80">
                      {stat.title}
                    </div>

                    {stat.text && (
                      <div className="mt-0.5 text-sm text-white/50">
                        {stat.text}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Animated bottom line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[2px] origin-left bg-[#b7d900] shadow-[0_0_14px_rgba(183,217,0,.35)]"
          />
        </motion.div>

        {/* =====================================================
            MISSION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 55,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-9 overflow-hidden rounded-lg border border-white/[0.08] bg-[#070707] px-6 py-12 text-center md:px-12"
        >
          {/* Mission glow */}
          <motion.div
            aria-hidden
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_center,rgba(183,217,0,.10),transparent_70%)]"
          />

          {/* Moving light */}
          <motion.div
            aria-hidden
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute top-0 h-px w-[35%] bg-gradient-to-r from-transparent via-[#b7d900]/60 to-transparent"
          />

          <div className="relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mb-3 text-5xl font-bold leading-none text-[#b7d900]"
            >
              “
            </motion.div>

            <motion.h3
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
                duration: 0.7,
                delay: 0.25,
              }}
              className="mx-auto max-w-[850px] text-xl font-medium leading-relaxed md:text-2xl"
            >
              Our mission is simple:
              <br />

              <span className="text-white">
                Automate what slows you down so you can focus on what moves
                you forward.
              </span>
            </motion.h3>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 36,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mx-auto mt-6 h-[2px] bg-[#b7d900]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}