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
      "Smart automation that eliminates repetitive tasks and saves valuable time.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "AI Chatbots",
    description:
      "Intelligent bots that engage, qualify, and support customers 24/7.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "CRM & Workflow Solutions",
    description:
      "Automated CRM systems that organize data and streamline your sales pipeline.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Mobile Apps",
    description:
      "Powerful mobile applications tailored to your business goals.",
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Cloud & Deployment",
    description:
      "Scalable, secure, and high-performing cloud solutions.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Bespoke software built around your unique business needs.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-14"
    >
      {/* =========================================================
          AMBIENT LIGHTING
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[5%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#bca46a]/[0.035] blur-[130px] sm:h-[520px] sm:w-[520px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.2 }}
          className="absolute right-[5%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#c5d900]/[0.025] blur-[140px] sm:h-[500px] sm:w-[500px]"
        />
      </div>

      {/* =========================================================
          TOP LABEL
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-20 mx-auto mb-10 flex max-w-[1500px] items-center px-1 lg:mb-14"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 sm:text-[11px]">
          Services / What We Do
        </span>
      </motion.div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[minmax(280px,0.36fr)_minmax(0,1fr)]
            lg:items-stretch
            lg:gap-8
            xl:grid-cols-[390px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              min-h-[430px]
              items-center
              border-l
              border-white/[0.06]
              bg-gradient-to-r
              from-[#090909]
              to-transparent
              px-7
              py-12
              sm:px-10
              lg:min-h-[650px]
              lg:border-l-0
              lg:border-r
              lg:px-8
              xl:min-h-[700px]
              xl:px-10
            "
          >
            {/* Architectural lines */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-[10%]
                left-0
                w-[1px]
                bg-gradient-to-b
                from-transparent
                via-[#d0bc82]/50
                to-transparent
                lg:left-auto
                lg:right-0
              "
            />

            <div className="pointer-events-none absolute inset-y-[12%] left-0 w-[35%] opacity-50">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(190,170,120,.14) 13px, transparent 15px)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-[420px]">
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#c5d900] sm:text-[11px]"
              >
                Our Services
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="
                  text-[2.5rem]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.045em]
                  sm:text-5xl
                  lg:text-[46px]
                  xl:text-[52px]
                "
              >
                Intelligent Solutions.
                <br />
                <span className="text-[#c5d900]">
                  Real Impact.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="
                  mt-6
                  max-w-[390px]
                  text-[13px]
                  leading-6
                  text-white/55
                  sm:text-sm
                  sm:leading-7
                "
              >
                We help businesses automate, integrate, and scale with
                intelligent solutions that save time, reduce costs, and
                create measurable growth.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{
                  x: 5,
                  backgroundColor: "#c5d900",
                  color: "#000000",
                }}
                className="
                  mt-8
                  flex
                  h-11
                  cursor-pointer
                  items-center
                  gap-8
                  border
                  border-[#c5d900]
                  px-4
                  text-[11px]
                  text-[#c5d900]
                  transition-all
                  duration-300
                  sm:h-12
                  sm:gap-12
                  sm:px-5
                  sm:text-xs
                "
              >
                Explore All Services
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SERVICE GRID
          ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-white/[0.06]
              bg-[#080808]
              p-4
              sm:p-5
              lg:p-6
              xl:p-7
            "
          >
            {/* Top architectural light */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4bc80]/70 to-transparent shadow-[0_0_18px_rgba(212,188,128,.35)]" />

            {/* Bottom architectural light */}

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4bc80]/50 to-transparent" />

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    initial={{
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                      filter: "blur(8px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[210px]
                      flex-col
                      overflow-hidden
                      border
                      border-white/[0.1]
                      bg-[#090909]
                      p-5
                      transition-colors
                      duration-300
                      sm:min-h-[220px]
                      lg:min-h-[235px]
                      xl:min-h-[225px]
                    "
                  >
                    {/* Hover glow */}

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#c5d900]/[0.07] blur-[55px]" />
                      <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-[#c5d900]/[0.04] blur-[55px]" />
                    </div>

                    {/* Light sweep */}

                    <motion.div
                      initial={{ x: "-150%" }}
                      whileInView={{ x: "150%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: index * 0.1 + 0.35,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-[40%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#c5d900]/[0.06] to-transparent"
                    />

                    {/* Number */}

                    <span className="relative z-10 text-[10px] text-[#c5d900]">
                      {service.number}
                    </span>

                    {/* Icon */}

                    <div className="relative z-10 mt-4 w-fit">
                      <Icon
                        size={28}
                        strokeWidth={1.2}
                        className="text-[#c5d900] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Title */}

                    <h3 className="relative z-10 mt-4 text-[15px] font-medium leading-6 text-white">
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p className="relative z-10 mt-2 text-[11px] leading-5 text-white/50 sm:text-[12px] sm:leading-5">
                      {service.description}
                    </p>

                    {/* Bottom line */}

                    <span className="relative z-10 mt-auto block h-px w-7 bg-[#c5d900] opacity-80" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}