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
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        px-4
        py-16
        text-white
        sm:px-5
        sm:py-20
        md:px-8
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <div className="mx-auto mb-7 flex max-w-[1400px] items-center gap-5 sm:mb-8">
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/75
            sm:text-[11px]
            md:text-xs
          "
        >
          Intro / Statement Section
        </span>
      </div>

      {/* =====================================================
          MAIN ARCHITECTURAL STAGE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
          overflow-hidden
          border
          border-white/[0.08]
          bg-[#080808]
        "
      >
        {/* ===================================================
            AMBIENT CENTER GLOW
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[42%]
            h-[320px]
            w-[90%]
            -translate-x-1/2
            -translate-y-1/2
            bg-[radial-gradient(ellipse,rgba(197,217,0,0.055),transparent_68%)]
            sm:h-[400px]
            sm:w-[80%]
            md:h-[420px]
            md:w-[620px]
          "
        />

        {/* ===================================================
            LEFT ARCHITECTURAL WALL
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            top-0
            hidden
            w-[13%]
            overflow-hidden
            border-r
            border-white/[0.06]
            md:block
          "
        >
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

        {/* ===================================================
            RIGHT ARCHITECTURAL WALL
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-0
            top-0
            hidden
            w-[13%]
            overflow-hidden
            border-l
            border-white/[0.06]
            md:block
          "
        >
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

        {/* ===================================================
            CENTRAL ARCHITECTURAL PANEL
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-[3%]
            right-[3%]
            top-0
            overflow-hidden
            sm:left-[5%]
            sm:right-[5%]
            md:left-[12%]
            md:right-[12%]
          "
          style={{
            clipPath:
              "polygon(0 12%, 38% 12%, 50% 0, 62% 12%, 100% 12%, 100% 100%, 0 100%)",
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

          {/* architectural lines */}

          <div className="absolute left-[10%] top-[22%] h-px w-[22%] rotate-[24deg] bg-white/[0.045] sm:left-[12%] sm:w-[25%]" />

          <div className="absolute right-[10%] top-[22%] h-px w-[22%] -rotate-[24deg] bg-white/[0.045] sm:right-[12%] sm:w-[25%]" />

          <div className="absolute bottom-[18%] left-[15%] h-px w-[17%] -rotate-[20deg] bg-white/[0.035]" />

          <div className="absolute bottom-[18%] right-[15%] h-px w-[17%] rotate-[20deg] bg-white/[0.035]" />

          {/* center glow line */}

          <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c5d900]/10 to-[#c5d900]/30" />
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[620px]
            flex-col
            items-center
            justify-center
            px-5
            pb-40
            pt-28
            text-center
            sm:min-h-[600px]
            sm:px-8
            sm:pb-36
            md:min-h-[540px]
            md:px-12
            md:pb-32
            md:pt-28
          "
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className="
              mb-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#c5d900]
              sm:text-[10px]
            "
          >
            Our Statement
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.65,
            }}
            className="
              max-w-[850px]
              text-[29px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
            "
          >
            We automate the work.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
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
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="
              mt-5
              max-w-[620px]
              text-[12px]
              font-light
              leading-6
              text-white/55
              sm:mt-6
              sm:text-sm
              sm:leading-7
              md:text-[15px]
            "
          >
            XORA builds intelligent automation systems that
            connect your tools, streamline your workflows,
            and eliminate repetitive work — so your business
            can move faster with less manual effort.
          </motion.p>

          {/* Divider */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 36,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
            className="mt-7 h-px bg-[#c5d900] sm:mt-8"
          />
        </div>

        {/* ===================================================
            FEATURE ROW
        =================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            w-[92%]
            -translate-x-1/2
            sm:bottom-6
            sm:w-[88%]
            md:bottom-7
            md:w-[78%]
          "
        >
          <div
            className="
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-white/[0.10]
              md:grid-cols-4
              md:divide-y-0
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    px-2
                    py-3
                    sm:gap-3
                    sm:px-4
                    sm:py-2
                    md:px-5
                    lg:px-6
                  "
                >
                  <Icon
                    size={21}
                    strokeWidth={1.2}
                    className="
                      shrink-0
                      text-[#c5d900]
                      sm:h-6
                      sm:w-6
                    "
                  />

                  <div className="min-w-0 text-left">
                    <p
                      className="
                        truncate
                        text-[9px]
                        font-medium
                        text-white/90
                        sm:text-[11px]
                        md:text-xs
                      "
                    >
                      {feature.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        hidden
                        text-[9px]
                        font-light
                        leading-4
                        text-white/40
                        sm:block
                        md:text-[10px]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM CENTER LIGHT
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-20
            hidden
            h-12
            w-px
            -translate-x-1/2
            bg-gradient-to-t
            from-[#c5d900]/50
            to-transparent
            sm:block
          "
        />
      </motion.div>
    </section>
  );
}