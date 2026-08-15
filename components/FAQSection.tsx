"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What does XORA actually automate?",
    answer:
      "We automate repetitive business processes such as lead management, CRM updates, customer communication, data processing, internal workflows, and system integrations — so your team can focus on higher-value work.",
  },
  {
    question: "Can you build a custom automation for my business?",
    answer:
      "Absolutely. Every business has different workflows, tools, and goals. We design custom automation systems around your existing processes, tech stack, and specific requirements.",
  },
  {
    question: "What tools and platforms can you integrate?",
    answer:
      "We can connect CRMs, forms, spreadsheets, email platforms, APIs, webhooks, databases, AI models, and other business tools. The exact stack depends on your workflow and requirements.",
  },
  {
    question: "Do I need technical knowledge to work with XORA?",
    answer:
      "No. We handle the technical implementation for you. We explain the system clearly, manage the integrations, and make sure your team can use the final solution without needing to understand the underlying code.",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "It depends on the complexity of the workflow. Smaller automations can be completed quickly, while larger systems involving multiple integrations, AI, and CRM workflows require more planning and development.",
  },
  {
    question: "Can you improve an automation system I already have?",
    answer:
      "Yes. We can review existing workflows, identify bottlenecks, fix unreliable processes, improve performance, and extend your current automation instead of rebuilding everything from scratch.",
  },
  {
    question: "Do you provide support after the project?",
    answer:
      "Yes. We can provide ongoing monitoring, optimization, troubleshooting, and improvements so your automation continues to perform as your business grows.",
  },
  {
    question: "How do I get started with XORA?",
    answer:
      "Simply get in touch with us and tell us what you're trying to improve or automate. We'll understand your workflow, identify opportunities, and recommend the most practical solution.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030303] px-5 py-24 text-white md:px-10 lg:px-[8%]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.035, 0.065, 0.035],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[15%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#c6ff00] blur-[150px]"
        />

        {/* Side lights */}
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#c6ff00]/10 to-transparent blur-2xl" />
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#c6ff00]/10 to-transparent blur-2xl" />

        {/* Architectural lines */}
        <div className="absolute left-[8%] right-[8%] top-[8%] h-[80%] border border-white/[0.025]" />
        <div className="absolute left-[14%] right-[14%] top-[15%] h-[65%] border border-white/[0.018]" />

        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c6ff00]/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#c6ff00]/20 bg-[#c6ff00]/[0.04] px-4 py-2"
          >
            <MessageCircleQuestion
              size={14}
              className="text-[#c6ff00]"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#c6ff00]">
              Frequently Asked Questions
            </span>
          </motion.div>

          <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Questions?
            <br />
            <span className="text-[#c6ff00]">We&apos;ve Got Answers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/55 md:text-base">
            Everything you need to know about working with XORA,
            automation, integrations, and building smarter systems.
          </p>

          <div className="mx-auto mt-7 h-px w-10 bg-[#c6ff00] shadow-[0_0_12px_#c6ff00]" />
        </motion.div>

        {/* =========================================================
            FAQ LIST
        ========================================================= */}

        <div className="mx-auto mt-14 max-w-[900px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Animated outer glow */}
                <motion.div
                  animate={{
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute -inset-[1px] rounded-xl bg-[#c6ff00]/20 blur-md"
                />

                <div
                  className={`relative overflow-hidden rounded-xl border bg-[#080808]/90 backdrop-blur-md transition-all duration-500 ${
                    isOpen
                      ? "border-[#c6ff00]/50 shadow-[0_0_35px_rgba(198,255,0,0.07)]"
                      : "border-white/[0.11] hover:border-[#c6ff00]/30"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center gap-5 px-5 py-5 text-left md:px-7 md:py-6"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}
                    <span
                      className={`hidden text-[11px] font-medium tracking-[0.15em] transition-colors duration-300 sm:block ${
                        isOpen
                          ? "text-[#c6ff00]"
                          : "text-white/25"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon box */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 90 : 0,
                        scale: isOpen ? 1.05 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isOpen
                          ? "border-[#c6ff00]/50 bg-[#c6ff00]/10 text-[#c6ff00]"
                          : "border-white/10 bg-white/[0.025] text-white/45 group-hover:border-[#c6ff00]/30 group-hover:text-[#c6ff00]"
                      }`}
                    >
                      <Sparkles size={17} />
                    </motion.div>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm font-medium transition-colors duration-300 md:text-[15px] ${
                        isOpen
                          ? "text-[#c6ff00]"
                          : "text-white/85"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#c6ff00]/50 bg-[#c6ff00] text-black"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 border-t border-white/[0.08] md:mx-7" />

                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.05,
                          }}
                          className="px-5 pb-6 pt-5 sm:pl-[100px] md:px-7 md:pb-7 md:pl-[112px]"
                        >
                          <p className="max-w-[690px] text-sm leading-7 text-white/55">
                            {faq.answer}
                          </p>

                          {/* Bottom accent */}
                          <div className="mt-5 flex items-center gap-3">
                            <div className="h-px w-8 bg-[#c6ff00] shadow-[0_0_8px_#c6ff00]" />
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#c6ff00]/60">
                              XORA
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom animated line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#c6ff00] shadow-[0_0_12px_#c6ff00]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080808] p-7 text-center md:p-9"
        >
          {/* CTA glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6ff00] blur-[100px]"
          />

          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#c6ff00]/30 bg-[#c6ff00]/[0.05] text-[#c6ff00]">
              <MessageCircleQuestion size={20} />
            </div>

            <h3 className="text-xl font-medium md:text-2xl">
              Still have questions?
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/50">
              Let&apos;s talk about your workflow and find the right
              automation opportunity for your business.
            </p>

            <a
              href="#contact"
              className="group mx-auto mt-6 inline-flex h-11 items-center gap-3 rounded-lg bg-[#c6ff00] px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d5ff45] hover:shadow-[0_0_30px_rgba(198,255,0,0.25)]"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom floor light */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c6ff00]/50 to-transparent shadow-[0_0_20px_#c6ff00]" />
    </section>
  );
}