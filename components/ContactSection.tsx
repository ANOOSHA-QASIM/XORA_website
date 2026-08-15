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
import { useState } from "react";

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
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);

    setStatus({
      type: null,
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type") || "";

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();

        console.error("API returned non-JSON:", text);

        throw new Error(
          "Server error. Please try again in a moment."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#030303]
        px-5
        py-20
        text-white
        sm:px-6
        md:px-10
        md:py-24
        lg:px-16
      "
    >
      {/* ================= BACKGROUND ================= */}

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
          className="
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#c8ff00]
            blur-[150px]
            sm:h-[500px]
            sm:w-[800px]
          "
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
          className="
            absolute
            left-0
            top-0
            h-full
            w-16
            bg-gradient-to-r
            from-[#c8ff00]/10
            to-transparent
            blur-xl
            sm:w-20
          "
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
          className="
            absolute
            right-0
            top-0
            h-full
            w-16
            bg-gradient-to-l
            from-[#c8ff00]/10
            to-transparent
            blur-xl
            sm:w-20
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1250px]">

        {/* ================= HEADER ================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-14
          "
        >
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 40,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mx-auto
              mb-5
              h-[2px]
              bg-[#c8ff00]
            "
          />

          <p
            className="
              mb-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#c8ff00]
              sm:text-sm
            "
          >
            LET&apos;S WORK TOGETHER
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-5xl
              lg:text-[60px]
            "
          >
            Ready to Automate
            <br />
            Your{" "}
            <span className="text-[#c8ff00]">
              Business?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-white/65
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            Tell us about your goals and challenges —
            we&apos;ll design an automation solution that
            drives real results.
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 40,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-6
              h-[2px]
              bg-[#c8ff00]
            "
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
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
            className="
              group
              rounded-2xl
              border
              border-white/[0.14]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-[#c8ff00]/30
              sm:p-7
              md:p-9
            "
          >

            {/* FORM HEADER */}

            <div
              className="
                mb-6
                flex
                items-start
                gap-4
                sm:items-center
                sm:gap-5
              "
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#c8ff00]/40
                  bg-[#c8ff00]/[0.04]
                  text-[#c8ff00]
                  sm:h-13
                  sm:w-13
                "
              >
                <Send size={22} />
              </motion.div>

              <div>
                <h3 className="text-lg font-medium sm:text-xl">
                  Start a Conversation
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">
                  Fill out the form and we&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-3 sm:grid-cols-2">

                <AnimatedInput
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <AnimatedInput
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

              </div>

              {/* COMPANY */}

              <AnimatedInput
                type="text"
                name="company"
                placeholder="Company Name"
              />

              {/* ================= DROPDOWN ================= */}

              <div className="relative">

                <select
                  name="service"
                  defaultValue=""
                  required
                  className="
                    h-12
                    w-full
                    cursor-pointer
                    appearance-none
                    rounded-lg
                    border
                    border-white/[0.14]
                    bg-[#0a0a0a]
                    px-4
                    pr-12
                    text-sm
                    text-white/70
                    outline-none
                    transition-all
                    duration-300
                    hover:border-white/25
                    focus:border-[#c8ff00]/60
                    focus:ring-1
                    focus:ring-[#c8ff00]/20
                  "
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#0a0a0a] text-white/50"
                  >
                    What are you looking to automate?
                  </option>

                  <option
                    value="AI Automation"
                    className="bg-[#0a0a0a] text-white"
                  >
                    AI Automation
                  </option>

                  <option
                    value="CRM Automation"
                    className="bg-[#0a0a0a] text-white"
                  >
                    CRM Automation
                  </option>

                  <option
                    value="Workflow Automation"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Workflow Automation
                  </option>

                  <option
                    value="AI Chatbots"
                    className="bg-[#0a0a0a] text-white"
                  >
                    AI Chatbots
                  </option>

                  <option
                    value="Custom Software"
                    className="bg-[#0a0a0a] text-white"
                  >
                    Custom Software
                  </option>

                </select>

                <ArrowRight
                  size={15}
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    rotate-90
                    text-[#c8ff00]
                  "
                />

              </div>

              {/* MESSAGE */}

              <motion.textarea
                name="message"
                required
                whileFocus={{
                  scale: 1.01,
                }}
                rows={5}
                placeholder="Tell us about your project or goals..."
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-white/[0.14]
                  bg-black/30
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/40
                  focus:border-[#c8ff00]/60
                  focus:shadow-[0_0_20px_rgba(200,255,0,0.06)]
                "
              />

              {/* SEND BUTTON */}

              <motion.button
                whileHover={{
                  scale: isSending ? 1 : 1.015,
                  boxShadow: isSending
                    ? "none"
                    : "0 0 30px rgba(200,255,0,0.18)",
                }}
                whileTap={{
                  scale: isSending ? 1 : 0.98,
                }}
                disabled={isSending}
                type="submit"
                className="
                  flex
                  h-12
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-[#c8ff00]
                  font-medium
                  text-black
                  transition-all
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {isSending ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-black/30
                        border-t-black
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}

              </motion.button>

            </form>

            {/* STATUS */}

            {status.type && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`
                  mt-4
                  rounded-lg
                  border
                  px-4
                  py-3
                  text-center
                  text-xs
                  ${
                    status.type === "success"
                      ? "border-[#c8ff00]/30 bg-[#c8ff00]/[0.06] text-[#c8ff00]"
                      : "border-red-500/30 bg-red-500/[0.06] text-red-300"
                  }
                `}
              >
                {status.message}
              </motion.div>
            )}

            {/* PRIVACY */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
                text-center
                text-[10px]
                leading-4
                text-white/45
                sm:text-xs
              "
            >
              <Lock
                size={13}
                className="shrink-0 text-[#c8ff00]"
              />

              We respect your privacy. Your information is safe with us.
            </div>

          </motion.div>

          {/* ================= WHY XORA ================= */}

          <motion.div
            variants={cardReveal}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
            className="
              group
              rounded-2xl
              border
              border-white/[0.14]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-[#c8ff00]/30
              sm:p-7
              md:p-9
            "
          >

            <div
              className="
                mb-5
                flex
                items-center
                gap-4
                sm:mb-7
                sm:gap-5
              "
            >

              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.08,
                }}
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#c8ff00]/40
                  bg-[#c8ff00]/[0.04]
                  text-[#c8ff00]
                  sm:h-13
                  sm:w-13
                "
              >
                <Star size={22} />
              </motion.div>

              <h3 className="text-lg font-medium sm:text-xl">
                Why Work With XORA?
              </h3>

            </div>

            <div>

              <Benefit
                icon={<Zap size={21} />}
                title="Custom Automation Solutions"
                text="Tailored workflows designed around your business goals and challenges."
                delay={0.2}
              />

              <Benefit
                icon={<Shield size={21} />}
                title="Expertise You Can Trust"
                text="Deep experience in AI automation, integrations, and scalable system design."
                delay={0.3}
              />

              <Benefit
                icon={<TrendingUp size={21} />}
                title="Efficiency & Growth"
                text="Save time, reduce costs, and unlock new opportunities for growth."
                delay={0.4}
              />

              <Benefit
                icon={<Headphones size={21} />}
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
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.3,
            },
          }}
          className="
            mt-5
            rounded-2xl
            border
            border-white/[0.14]
            bg-white/[0.015]
            p-5
            transition-colors
            duration-500
            hover:border-[#c8ff00]/30
            sm:p-6
            md:px-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div
              className="
                flex
                items-start
                gap-4
                sm:items-center
                sm:gap-5
              "
            >

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#c8ff00]/40
                  bg-[#c8ff00]/[0.04]
                  text-[#c8ff00]
                  sm:h-13
                  sm:w-13
                "
              >
                <CalendarDays size={22} />
              </motion.div>

              <div>

                <h3 className="text-base font-medium sm:text-lg">
                  Prefer a Quick Chat?
                </h3>

                <p
                  className="
                    mt-1
                    max-w-xl
                    text-xs
                    leading-5
                    text-white/55
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Schedule a free discovery call and let&apos;s explore
                  how we can automate your success.
                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                sm:flex-row
                lg:w-auto
              "
            >

              {/* GOOGLE CALENDAR */}

              <motion.a
                href="https://calendar.app.google/vXNQVxL9w2JSUqkb6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  border
                  border-[#c8ff00]/60
                  px-6
                  text-sm
                  font-medium
                  text-[#c8ff00]
                  transition-all
                  hover:bg-[#c8ff00]/10
                  sm:w-auto
                "
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </motion.a>

              {/* LINKEDIN */}

              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 4,
                }}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  text-sm
                  text-[#c8ff00]
                  transition-colors
                  hover:text-white
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-sm
                    border
                    border-[#c8ff00]
                    text-[11px]
                    font-bold
                  "
                >
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
  name,
  placeholder,
  required = false,
}: {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <motion.input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      whileFocus={{
        scale: 1.01,
      }}
      className="
        h-12
        w-full
        rounded-lg
        border
        border-white/[0.14]
        bg-black/30
        px-4
        text-sm
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-white/40
        focus:border-[#c8ff00]/60
        focus:shadow-[0_0_20px_rgba(200,255,0,0.06)]
      "
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
      className={`
        group
        flex
        gap-4
        py-4
        sm:gap-5
        sm:py-5
        ${!last ? "border-b border-white/[0.10]" : ""}
      `}
    >

      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-[#c8ff00]/30
          bg-[#c8ff00]/[0.025]
          text-[#c8ff00]
          transition-all
          duration-300
          group-hover:border-[#c8ff00]/70
          group-hover:shadow-[0_0_20px_rgba(200,255,0,0.08)]
          sm:h-12
          sm:w-12
        "
      >
        {icon}
      </motion.div>

      <div className="min-w-0">

        <h4
          className="
            text-sm
            font-medium
            text-[#c8ff00]
            sm:text-[15px]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            max-w-md
            text-xs
            leading-5
            text-white/60
            sm:text-sm
            sm:leading-6
          "
        >
          {text}
        </p>

      </div>

    </motion.div>
  );
}