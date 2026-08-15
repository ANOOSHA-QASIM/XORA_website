"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Link2,
  ChartNoAxesCombined,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Work less, achieve more.",
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description: "Connect your favorite tools.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Scalable Solutions",
    description: "Built to grow with you.",
  },
  {
    icon: Target,
    title: "Real Impact",
    description: "Drive measurable results.",
  },
];

export default function IntroStatement() {
  return (
    <section
      id="intro"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-20 text-white md:px-8 lg:px-10"
    >
      {/* Section heading */}
      <div className="mx-auto mb-8 flex max-w-[1400px] items-center gap-5">
        

        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/75 md:text-xs">
          Intro / Statement Section
        </span>
      </div>

      {/* Main architectural stage */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto min-h-[540px] max-w-[1400px] overflow-hidden border border-white/[0.08] bg-[#080808]"
      >
        {/* Ambient center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(197,217,0,0.055),transparent_68%)]" />

        {/* LEFT architectural wall */}
        <div className="absolute bottom-0 left-0 top-0 hidden w-[13%] overflow-hidden border-r border-white/[0.06] md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#11100d] via-[#15130f] to-[#080808]" />

          <div
            className="absolute inset-y-0 right-0 w-[82%] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 7px, rgba(208,190,145,0.24) 8px, transparent 10px)",
            }}
          />

          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#c9b36e]/40 to-transparent" />
        </div>

        {/* RIGHT architectural wall */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-[13%] overflow-hidden border-l border-white/[0.06] md:block">
          <div className="absolute inset-0 bg-gradient-to-l from-[#11100d] via-[#15130f] to-[#080808]" />

          <div
            className="absolute inset-y-0 left-0 w-[82%] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 7px, rgba(208,190,145,0.24) 8px, transparent 10px)",
            }}
          />

          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#c9b36e]/40 to-transparent" />
        </div>

        {/* Central architectural panel */}
        <div
          className="absolute inset-x-[7%] bottom-0 top-[0%] md:inset-x-[12%]"
          style={{
            clipPath:
              "polygon(0 15%, 38% 15%, 50% 0, 62% 15%, 100% 15%, 100% 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[#090909]" />

          {/* subtle panel texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.04) 30%, transparent 31%), linear-gradient(65deg, transparent 0%, rgba(255,255,255,0.025) 48%, transparent 49%)",
            }}
          />

          {/* subtle architectural lines */}
          <div className="absolute left-[12%] top-[22%] h-[1px] w-[25%] rotate-[24deg] bg-white/[0.045]" />
          <div className="absolute right-[12%] top-[22%] h-[1px] w-[25%] -rotate-[24deg] bg-white/[0.045]" />
          <div className="absolute bottom-[18%] left-[18%] h-[1px] w-[18%] -rotate-[20deg] bg-white/[0.035]" />
          <div className="absolute bottom-[18%] right-[18%] h-[1px] w-[18%] rotate-[20deg] bg-white/[0.035]" />

          {/* center glow line */}
          <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c5d900]/10 to-[#c5d900]/30" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex min-h-[540px] flex-col items-center justify-center px-6 pb-32 pt-28 text-center md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#c5d900]"
          >
            Our Statement
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="max-w-[720px] text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white md:text-5xl lg:text-[48px]"
          >
            We automate the work.
            <br />
            You{" "}
            <span className="text-[#c5d900]">
              accelerate
            </span>{" "}
            the growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-[620px] text-sm font-light leading-7 text-white/55 md:text-[15px]"
          >
            XORA builds intelligent automation systems that connect your tools,
            streamline your workflows, and eliminate repetitive work —
            <br className="hidden md:block" />
            so your business can move faster with less manual effort.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 36, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 h-px bg-[#c5d900]"
          />
        </div>

        {/* Feature row */}
        <div className="absolute bottom-7 left-1/2 z-20 w-[92%] -translate-x-1/2 md:w-[78%]">
          <div className="grid grid-cols-2 divide-x divide-white/[0.10] md:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 0.5,
                  }}
                  className={`flex items-center gap-3 px-3 py-2 md:px-6 ${
                    index > 1 ? "mt-4 md:mt-0" : ""
                  }`}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.2}
                    className="shrink-0 text-[#c5d900]"
                  />

                  <div className="text-left">
                    <p className="text-[11px] font-medium text-white/90 md:text-xs">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[9px] font-light text-white/40 md:text-[10px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom center light */}
        <div className="absolute bottom-0 left-1/2 z-20 h-12 w-px -translate-x-1/2 bg-gradient-to-t from-[#c5d900]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
