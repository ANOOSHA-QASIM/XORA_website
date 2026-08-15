"use client";

import Image from "next/image";
import { GitBranch, Mail, LinkIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Anusha Qasim",
    role: "FOUNDER & CEO",
    image: "/anusha-qasim.png",
    linkedin: "#https://www.linkedin.com/in/anusha-qasim/",
    
  },
  {
    name: "Rohan Majeed",
    role: "CO-FOUNDER & CTO",
    image: "/rohan-majeed.png",
    linkedin: "https://www.linkedin.com/in/rohan-majeed-6b55a1352/",
  },
  {
    name: "Alishba Naz",
    role: "CO-FOUNDER & CTO",
    image: "/alishba-naz.png",
    linkedin: "https://www.linkedin.com/in/alishba-naz-872843407/",
   
  },
];

type Position = "left" | "center" | "right" | "hidden";

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeRef = useRef(0);
  const animatingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * ---------------------------------------------------------
   * CHANGE THESE VALUES IF YOU WANT TO TUNE THE FEEL
   * ---------------------------------------------------------
   */

  const ANIMATION_DURATION = 0.72;
  const WHEEL_COOLDOWN = 780;

  /*
   * ---------------------------------------------------------
   * GET CARD POSITION
   * ---------------------------------------------------------
   */

  const getPosition = (index: number): Position => {
    const total = team.length;

    let diff = index - activeIndex;

    /*
     * Make the cards circular so that:
     *
     * active = 0
     * previous = 2
     * next = 1
     */

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";

    return "hidden";
  };

  /*
   * ---------------------------------------------------------
   * MOVE TO NEXT / PREVIOUS CARD
   * ---------------------------------------------------------
   */

  const moveCard = (direction: 1 | -1) => {
    if (animatingRef.current) return;

    const current = activeRef.current;

    /*
     * Don't trap the user at the beginning/end.
     * Normal page scrolling will continue.
     */

    if (direction === 1 && current === team.length - 1) {
      return;
    }

    if (direction === -1 && current === 0) {
      return;
    }

    const next = current + direction;

    animatingRef.current = true;
    activeRef.current = next;
    setActiveIndex(next);

    window.setTimeout(() => {
      animatingRef.current = false;
    }, WHEEL_COOLDOWN);
  };

  /*
   * ---------------------------------------------------------
   * WHEEL SCROLL
   *
   * Both vertical and horizontal wheel scrolling work.
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      /*
       * Only capture the wheel while the Team section
       * is actually visible in the viewport.
       */

      const visible =
        rect.top < viewportHeight * 0.65 &&
        rect.bottom > viewportHeight * 0.35;

      if (!visible) return;

      /*
       * Use whichever scroll direction is stronger.
       *
       * This allows:
       * mouse wheel
       * trackpad
       * horizontal trackpad
       * shift + wheel
       */

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (Math.abs(delta) < 8) return;

      const direction: 1 | -1 = delta > 0 ? 1 : -1;

      const current = activeRef.current;

      /*
       * At first card + scrolling upward:
       * let page scroll normally.
       */

      if (direction === -1 && current === 0) {
        return;
      }

      /*
       * At last card + scrolling downward:
       * let page continue normally.
       */

      if (
        direction === 1 &&
        current === team.length - 1
      ) {
        return;
      }

      /*
       * Prevent page movement while changing cards.
       */

      event.preventDefault();

      moveCard(direction);
    };

    section.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * TOUCH SWIPE
   * ---------------------------------------------------------
   */

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (
    event: React.TouchEvent<HTMLElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLElement>
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const diffX = endX - touchStartX.current;
    const diffY = endY - touchStartY.current;

    /*
     * Detect the stronger direction.
     */

    if (
      Math.abs(diffX) < 45 &&
      Math.abs(diffY) < 45
    ) {
      return;
    }

    if (Math.abs(diffX) > Math.abs(diffY)) {
      /*
       * Swipe left = next
       * Swipe right = previous
       */

      if (diffX < 0) {
        moveCard(1);
      } else {
        moveCard(-1);
      }
    } else {
      /*
       * Vertical swipe
       */

      if (diffY < 0) {
        moveCard(1);
      } else {
        moveCard(-1);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="
        relative
        min-h-[100vh]
        overflow-hidden
        bg-[#030303]
        px-5
        py-24
        text-white
        md:px-8
        lg:px-12
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[500px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#b7ff00]/[0.035]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#c8ff00]/[0.035]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[390px]
            w-[390px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#c8ff00]/[0.025]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1250px]">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="
            mb-4
            text-xs
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#c8ff00]
            sm:text-sm
          ">
            OUR TEAM
          </p>

          <h2 className="
            text-4xl
            font-semibold
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-[60px]
            lg:leading-[1.05]
          ">
            Meet The Team Behind{" "}
            <span className="text-[#baff00]">
              XORA
            </span>
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-white/55
            sm:text-base
            sm:leading-7
          ">
            A team of innovators, problem solvers, and
            automation experts building smarter systems
            that drive real results.
          </p>

          <div className="
            mx-auto
            mt-5
            h-[2px]
            w-10
            bg-[#c8ff00]
            shadow-[0_0_12px_rgba(200,255,0,0.35)]
          " />
        </div>

        {/* ===================================================
            CARD STAGE
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            h-[510px]
            w-full
            max-w-[980px]
            items-center
            justify-center
            [perspective:1400px]
          "
        >
          {team.map((member, index) => {
            const position = getPosition(index);

            return (
              <TeamCard
                key={member.name}
                member={member}
                position={position}
                duration={ANIMATION_DURATION}
              />
            );
          })}
        </div>

        {/* ===================================================
            SCROLL HINT
        =================================================== */}

        <div className="mt-2 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/30">
  <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20"></div>

  <span>Scroll to explore team</span>

  <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20"></div>
</div>

        {/* ===================================================
            CARD INDICATORS
        =================================================== */}

        <div className="
          mt-5
          flex
          justify-center
          gap-2
        ">
          {team.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show team member ${index + 1}`}
              onClick={() => {
                if (animatingRef.current) return;

                activeRef.current = index;
                setActiveIndex(index);
              }}
              className={`
                h-1
                rounded-full
                transition-all
                duration-500
                ${
                  activeIndex === index
                    ? "w-8 bg-[#c8ff00]"
                    : "w-2 bg-white/20"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TEAM CARD
========================================================= */

function TeamCard({
  member,
  position,
  duration,
}: {
  member: (typeof team)[number];
  position: Position;
  duration: number;
}) {
  /*
   * ---------------------------------------------------------
   * POSITION SETTINGS
   *
   * Center = main card
   * Left / Right = cards behind
   * Hidden = moved far away
   * ---------------------------------------------------------
   */

  const variants = {
    center: {
      x: "0%",
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      filter: "brightness(1)",
    },

    left: {
      x: "-73%",
      y: 28,
      rotate: -11,
      scale: 0.86,
      opacity: 0.82,
      zIndex: 10,
      filter: "brightness(0.58)",
    },

    right: {
      x: "73%",
      y: 28,
      rotate: 11,
      scale: 0.86,
      opacity: 0.82,
      zIndex: 10,
      filter: "brightness(0.58)",
    },

    hidden: {
      x: "0%",
      y: 80,
      rotate: 0,
      scale: 0.65,
      opacity: 0,
      zIndex: 0,
      filter: "brightness(0.4)",
    },
  };

  return (
    <motion.article
      initial={false}
      animate={position}
      variants={variants}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-1/2
        top-1/2
        h-[425px]
        w-[285px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.14]
        bg-[#0a0b0a]
        shadow-[0_30px_80px_rgba(0,0,0,0.65)]
        will-change-transform
        sm:h-[445px]
        sm:w-[300px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="
        absolute
        inset-x-0
        top-0
        h-[245px]
        overflow-hidden
      ">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={position === "center"}
          className="
            object-cover
            object-top
          "
          sizes="300px"
        />

        {/* Image gradient */}

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0a0b0a]
          via-transparent
          to-transparent
        " />

        {/* Green top glow */}

        <div className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-24
          w-40
          -translate-x-1/2
          rounded-full
          bg-[#c8ff00]/[0.08]
          blur-[45px]
        " />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="
        absolute
        inset-x-0
        bottom-0
        px-6
        pb-6
        pt-8
      ">
        {/* Role */}

        <p className="
          text-[9px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-[#c8ff00]
        ">
          {member.role}
        </p>

        {/* Name */}

        <h3 className="
          mt-2
          text-[24px]
          font-medium
          tracking-[-0.025em]
          text-white
        ">
          {member.name}
        </h3>

        {/* Divider */}

        <div className="
          my-3
          h-px
          w-8
          bg-[#c8ff00]
          shadow-[0_0_8px_rgba(200,255,0,0.35)]
        " />

        {/* View Profile */}
<a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-4
    inline-flex
    items-center
    gap-2
    text-[11px]
    font-medium
    uppercase
    tracking-[0.14em]
    text-[#c8ff00]
    transition-all
    duration-300
    hover:gap-3
    hover:text-white
  "
>
  View Profile
  <ArrowUpRight size={14} strokeWidth={1.7} />
</a>

        {/* Description */}

        <p className="
          text-[12px]
          leading-5
          text-white/50
        ">
          
        </p>

        
      </div>

      {/* =====================================================
          CARD BORDER GLOW
      ===================================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-0
        rounded-[22px]
        border
        border-[#c8ff00]/[0.06]
      " />

      {/* Bottom glow */}

      <div className="
        pointer-events-none
        absolute
        bottom-[-80px]
        left-1/2
        h-40
        w-56
        -translate-x-1/2
        rounded-full
        bg-[#c8ff00]/[0.08]
        blur-[55px]
      " />
    </motion.article>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        border
        border-white/10
        bg-white/[0.025]
        text-white/70
        transition-all
        duration-300
        hover:border-[#c8ff00]/50
        hover:bg-[#c8ff00]/10
        hover:text-[#c8ff00]
      "
    >
      {children}
    </a>
  );
}

