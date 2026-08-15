"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Headphones,
  Lock,
  Send,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      {/* ================= AMBIENT BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.035, 0.06, 0.035],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#c8ff00] blur-[150px]"
        />

        <motion.div
          animate={{
            y: [0, 70, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#c8ff00]/10 to-transparent blur-xl"
        />

        <motion.div
          animate={{
            y: [70, 0, 70],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#c8ff00]/10 to-transparent blur-xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1250px]">

        {/* ================= HEADER ================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-5 h-[2px] bg-[#c8ff00]"
          />

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#c8ff00]">
            LET&apos;S WORK TOGETHER
          </p>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-[60px]">
            Ready to Automate
            <br />
            Your{" "}
            <span className="text-[#c8ff00]">
              Business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            Tell us about your goals and challenges — we&apos;ll design
            <br className="hidden md:block" />
            an automation solution that drives real results.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 h-[2px] bg-[#c8ff00]"
          />
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-5 lg:grid-cols-2">

          {/* ================= CONTACT FORM ================= */}

          <motion.div
            variants={cardReveal}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group rounded-2xl border border-white/[0.14] bg-white/[0.015] p-7 transition-colors duration-500 hover:border-[#c8ff00]/30 md:p-9"
          >
            <div className="mb-6 flex items-center gap-5">

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{ duration: 0.25 }}
                className="flex h-13 w-13 items-center justify-center rounded-lg border border-[#c8ff00]/40 bg-[#c8ff00]/[0.04] text-[#c8ff00]"
              >
                <Send size={24} />
              </motion.div>

              <div>
                <h3 className="text-xl font-medium">
                  Start a Conversation
                </h3>

                <p className="mt-1 text-sm text-white/55">
                  Fill out the form and we&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            <form className="space-y-3">

              <div className="grid gap-3 sm:grid-cols-2">

                <AnimatedInput
                  type="text"
                  placeholder="Your Name"
                />

                <AnimatedInput
                  type="email"
                  placeholder="Your Email"
                />

              </div>

              <AnimatedInput
                type="text"
                placeholder="Company Name"
              />

              <motion.select
                whileFocus={{ scale: 1.01 }}
                defaultValue=""
                className="h-12 w-full rounded-lg border border-white/[0.14] bg-black/30 px-4 text-sm text-white/60 outline-none transition-all duration-300 focus:border-[#c8ff00]/60 focus:shadow-[0_0_20px_rgba(200,255,0,0.06)]"
              >
                <option value="" disabled>
                  What are you looking to automate?
                </option>
                <option>AI Automation</option>
                <option>CRM Automation</option>
                <option>Workflow Automation</option>
                <option>AI Chatbots</option>
                <option>Custom Software</option>
              </motion.select>

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={4}
                placeholder="Tell us about your project or goals..."
                className="w-full resize-none rounded-lg border border-white/[0.14] bg-black/30 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-[#c8ff00]/60 focus:shadow-[0_0_20px_rgba(200,255,0,0.06)]"
              />

              <motion.button
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0 0 30px rgba(200,255,0,0.18)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#c8ff00] font-medium text-black cursor-pointer"
              >
                Send Message
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

            </form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-5 flex items-center justify-center gap-2 text-xs text-white/45"
            >
              <Lock size={13} className="text-[#c8ff00]" />
              We respect your privacy. Your information is safe with us.
            </motion.div>
          </motion.div>

          {/* ================= WHY XORA ================= */}

          <motion.div
            variants={cardReveal}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group rounded-2xl border border-white/[0.14] bg-white/[0.015] p-7 transition-colors duration-500 hover:border-[#c8ff00]/30 md:p-9"
          >
            <div className="mb-7 flex items-center gap-5">

              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.08,
                }}
                transition={{ duration: 0.25 }}
                className="flex h-13 w-13 items-center justify-center rounded-lg border border-[#c8ff00]/40 bg-[#c8ff00]/[0.04] text-[#c8ff00]"
              >
                <Star size={24} />
              </motion.div>

              <h3 className="text-xl font-medium">
                Why Work With XORA?
              </h3>
            </div>

            <div className="space-y-0">

              <Benefit
                icon={<Zap size={22} />}
                title="Custom Automation Solutions"
                text="Tailored workflows designed around your business goals and challenges."
                delay={0.2}
              />

              <Benefit
                icon={<Shield size={22} />}
                title="Expertise You Can Trust"
                text="Deep experience in AI automation, integrations, and scalable system design."
                delay={0.3}
              />

              <Benefit
                icon={<TrendingUp size={22} />}
                title="Efficiency & Growth"
                text="Save time, reduce costs, and unlock new opportunities for growth."
                delay={0.4}
              />

              <Benefit
                icon={<Headphones size={22} />}
                title="Ongoing Support"
                text="We're with you at every step — from planning to scaling and beyond."
                delay={0.5}
                last
              />

            </div>
          </motion.div>
        </div>

        {/* ================= QUICK CHAT ================= */}

        <motion.div
          variants={cardReveal}
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            y: -4,
            transition: { duration: 0.3 },
          }}
          className="mt-5 rounded-2xl border border-white/[0.14] bg-white/[0.015] p-6 transition-colors duration-500 hover:border-[#c8ff00]/30 md:px-8"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-5">

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-13 w-13 shrink-0 items-center justify-center rounded-lg border border-[#c8ff00]/40 bg-[#c8ff00]/[0.04] text-[#c8ff00]"
              >
                <CalendarDays size={23} />
              </motion.div>

              <div>
                <h3 className="text-lg font-medium">
                  Prefer a Quick Chat?
                </h3>

                <p className="mt-1 text-sm text-white/55">
                  Schedule a free discovery call and let&apos;s explore how we
                  can automate your success.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.03,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#c8ff00]/60 px-6 text-sm font-medium text-[#c8ff00] transition-all hover:bg-[#c8ff00]/10"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </motion.a>

              <span className="hidden text-white/35 sm:block">
                or
              </span>

              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="flex items-center justify-center gap-2 text-sm text-[#c8ff00] transition-colors hover:text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#c8ff00] text-[11px] font-bold">
                  in
                </span>

                Message Us on LinkedIn
              </motion.a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ================= ANIMATED INPUT ================= */

function AnimatedInput({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      whileFocus={{
        scale: 1.01,
      }}
      className="h-12 w-full rounded-lg border border-white/[0.14] bg-black/30 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-[#c8ff00]/60 focus:shadow-[0_0_20px_rgba(200,255,0,0.06)]"
    />
  );
}


/* ================= BENEFIT ================= */

function Benefit({
  icon,
  title,
  text,
  delay,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
  last?: boolean;
}) {
  return (
    <motion.div
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        x: 5,
      }}
      className={`group flex gap-5 py-5 ${
        !last ? "border-b border-white/[0.10]" : ""
      }`}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#c8ff00]/30 bg-[#c8ff00]/[0.025] text-[#c8ff00] transition-all duration-300 group-hover:border-[#c8ff00]/70 group-hover:shadow-[0_0_20px_rgba(200,255,0,0.08)]"
      >
        {icon}
      </motion.div>

      <div>
        <h4 className="text-[15px] font-medium text-[#c8ff00]">
          {title}
        </h4>

        <p className="mt-1 max-w-md text-sm leading-6 text-white/60">
          {text}
        </p>
      </div>
    </motion.div>
  );
}