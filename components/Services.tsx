
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  MessageCircle,
  UsersRound,
  Smartphone,
  Cloud,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Automate repetitive tasks and save valuable time.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "AI Chatbots",
    description:
      "Engage and support customers with intelligent AI bots.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "CRM & Workflow Solutions",
    description:
      "Streamline your CRM, data, and sales workflows.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Mobile Apps",
    description:
      "Powerful mobile apps built around your business needs.",
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Cloud & Deployment",
    description:
      "Secure, scalable cloud solutions built for performance.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Custom software built to solve your unique challenges.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          AMBIENT LIGHTING
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute left-[12%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#bca46a]/[0.035] blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="absolute right-[12%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#c5d900]/[0.025] blur-[150px]"
        />

        <div className="absolute bottom-[10%] left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#c5d900]/[0.018] blur-[120px]" />
      </div>

      {/* =========================================================
          SECTION LABEL
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
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
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-30 mx-auto flex max-w-[1500px] items-center gap-5 px-6 pt-10 lg:px-12"
      >
        

        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/75 md:text-xs">
          Services / What We Do
        </span>
      </motion.div>

      {/* =========================================================
          MAIN ARCHITECTURAL AREA
      ========================================================= */}

      <div className="relative mx-auto min-h-[850px] max-w-[1600px] overflow-hidden">
        {/* =======================================================
            LEFT WALL
        ======================================================= */}

        <div className="absolute bottom-0 left-0 top-0 hidden w-[32%] overflow-hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#0b0b0a] to-[#11100d]" />

          <div
            className="absolute inset-y-[12%] left-0 right-[12%] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(190,170,120,.18) 13px, transparent 15px)",
            }}
          />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="absolute bottom-[12%] left-[7%] right-[5%] h-px origin-left bg-gradient-to-r from-transparent via-[#c6ae73]/60 to-transparent"
          />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="absolute right-0 top-[12%] h-[76%] w-px origin-top bg-gradient-to-b from-transparent via-[#d0bc82]/60 to-transparent"
          />
        </div>

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -55,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative z-20 flex min-h-[850px] items-center px-8 py-24 lg:absolute lg:left-[6%] lg:w-[30%] lg:px-0"
        >
          <div className="max-w-[430px]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mb-7 text-[11px] font-medium uppercase tracking-[0.28em] text-[#c5d900]"
            >
              Our Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] md:text-5xl"
            >
              Intelligent Solutions.
              <br />
              <span className="text-[#c5d900]">Real Impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-7 max-w-[390px] text-sm leading-7 text-white/60"
            >
              We help businesses automate, integrate, and scale with smart AI
              solutions that save time, reduce costs, and drive real growth.
            </motion.p>

            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              whileHover={{
                x: 5,
                backgroundColor: "#c5d900",
                color: "#000000",
              }}
              className="mt-10 flex h-12 items-center gap-12 border border-[#c5d900] px-5 text-xs text-[#c5d900] transition-all duration-300 cursor-pointer"
            >
              Explore All Services

              <ArrowUpRight size={17} strokeWidth={1.5} />
            </motion.button>
          </div>
        </motion.div>

        {/* =======================================================
            RIGHT ARCHITECTURAL ROOM
        ======================================================= */}

        <div className="relative ml-auto min-h-[850px] w-full overflow-hidden lg:w-[68%]">
          {/* =====================================================
              OUTER FRAME
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="absolute bottom-[7%] left-[5%] right-[4%] top-[7%] border border-white/[0.06]"
          >
            {/* =================================================
                LEFT DOOR
            ================================================= */}

            <motion.div
              initial={{
                x: -45,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 top-0 w-[14%] border-r border-[#d0bc82]/30 bg-[#090a0a]"
              style={{
                clipPath: "polygon(0 0, 100% 7%, 100% 93%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-1/2 top-1/2 h-[60%] w-px -translate-y-1/2 bg-white/20" />
              </div>
            </motion.div>

            {/* =================================================
                RIGHT DOOR
            ================================================= */}

            <motion.div
              initial={{
                x: 45,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="absolute bottom-0 right-0 top-0 w-[14%] border-l border-[#d0bc82]/30 bg-[#090a0a]"
              style={{
                clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 93%)",
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-1/2 top-1/2 h-[60%] w-px -translate-y-1/2 bg-white/20" />
              </div>
            </motion.div>

            {/* =================================================
                INNER ROOM
            ================================================= */}

            <div className="absolute inset-x-[14%] inset-y-[7%] border-x border-white/[0.05] bg-[#0a0a0a]">
              {/* Ceiling light */}
              <motion.div
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="absolute left-0 right-0 top-0 h-px origin-center bg-[#d4bc80]/80 shadow-[0_0_18px_rgba(212,188,128,.45)]"
              />

              {/* Floor light */}
              <motion.div
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.45,
                  ease: "easeOut",
                }}
                className="absolute bottom-0 left-0 right-0 h-px origin-center bg-[#d4bc80]/70 shadow-[0_0_20px_rgba(212,188,128,.35)]"
              />

              {/* =================================================
                  SERVICE CARDS
              ================================================= */}

              <div className="relative grid h-full grid-cols-1 gap-5 p-7 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.number}
                      initial={{
                        opacity: 0,
                        y: 55,
                        scale: 0.94,
                        filter: "blur(10px)",
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      viewport={{
                        once: true,
                        amount: 0.22,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.16,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -7,
                        scale: 1.018,
                        transition: {
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      }}
                      className="group relative flex min-h-[230px] flex-col overflow-hidden border border-white/[0.12] bg-[#090909]/90 p-5"
                    >
                      {/* Card glow */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#c5d900]/[0.07] blur-[60px]" />

                        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#c5d900]/[0.045] blur-[60px]" />
                      </div>

                      {/* Light sweep */}
                      <motion.div
                        initial={{
                          x: "-150%",
                        }}
                        whileInView={{
                          x: "150%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.25,
                          delay: index * 0.16 + 0.45,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-[42%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#c5d900]/[0.07] to-transparent"
                      />

                      {/* Number */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.16 + 0.2,
                        }}
                        className="relative z-10 text-[11px] text-[#c5d900]"
                      >
                        {service.number}
                      </motion.span>

                      {/* Icon */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.65,
                          rotate: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.16 + 0.3,
                          ease: "easeOut",
                        }}
                        className="relative z-10 mt-5 w-fit"
                      >
                        <Icon
                          size={31}
                          strokeWidth={1.2}
                          className="text-[#c5d900] transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.16 + 0.42,
                          ease: "easeOut",
                        }}
                        className="relative z-10 mt-5 text-[16px] font-medium leading-6 text-white"
                      >
                        {service.title}
                      </motion.h3>

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
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.65,
                          delay: index * 0.16 + 0.52,
                          ease: "easeOut",
                        }}
                        className="relative z-10 mt-3 text-[12px] leading-6 text-white/55"
                      >
                        {service.description}
                      </motion.p>

                      {/* Bottom line */}
                      <motion.span
                        initial={{
                          width: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          width: 28,
                          opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.16 + 0.62,
                          ease: "easeOut",
                        }}
                        className="relative z-10 mt-auto block h-px bg-[#c5d900]"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              FLOOR
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="absolute bottom-0 left-0 right-0 h-[8%] border-t border-white/[0.06] bg-[#070707]"
          />

          {/* Perspective line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: "easeOut",
            }}
            className="absolute bottom-0 left-[15%] right-[15%] h-px origin-center bg-[#c7b276]/20"
          />
        </div>
      </div>
    </section>
  );
}
