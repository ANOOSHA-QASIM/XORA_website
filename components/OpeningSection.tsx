"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";

import Hero from "@/components/Hero";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function OpeningGate() {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Hero />;
  }

  return <OpeningExperience />;
}

/* =========================================================
   OPENING EXPERIENCE

   HERO:
   Always mounted in normal document flow.

   GATE:
   Fixed cinematic overlay.

   FIRST SCROLL:
   Opens gate only.
   Page does NOT scroll.

   LIGHT:
   Starts from the door seam and continues over Hero
   during the reveal.

   AFTER ANIMATION:
   Gate is removed.
   Native scrolling works normally.
========================================================= */

function OpeningExperience() {
  const [gateOpen, setGateOpen] = useState(false);
  const [heroLight, setHeroLight] = useState(false);

  return (
    <section className="relative w-full">
      {/* =====================================================
          HERO
          ALWAYS MOUNTED
      ===================================================== */}

      <div className="relative z-0 w-full">
        <Hero />
      </div>

      {/* =====================================================
          HERO REVEAL LIGHT

          This sits ABOVE the Hero but BELOW the Gate.

          It starts when the doors begin opening and continues
          for a little while after the gate disappears.
      ===================================================== */}

      {heroLight && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.45,
            ease: "easeInOut",
            times: [0, 0.34, 1],
          }}
        >
          {/* =================================================
              WIDE HERO LIGHT SPILL
          ================================================= */}

          <motion.div
            className="absolute left-1/2 top-0 h-full -translate-x-1/2"
            initial={{
              width: "40px",
              opacity: 0,
            }}
            animate={{
              width: ["40px", "clamp(100px, 16vw, 280px)", "clamp(180px, 30vw, 520px)"],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 1.45,
              ease: EASE,
              times: [0, 0.42, 1],
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(217,255,0,0.22) 50%, transparent)",
              filter: "blur(28px)",
            }}
          />

          {/* =================================================
              SOFT CENTRAL GLOW
          ================================================= */}

          <motion.div
            className="absolute left-1/2 top-1/2 h-[70vh] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            initial={{
              opacity: 0,
              scale: 0.45,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.45, 1, 1.5],
            }}
            transition={{
              duration: 1.35,
              ease: "easeOut",
              times: [0, 0.4, 1],
            }}
            style={{
              background:
                "radial-gradient(ellipse, rgba(217,255,0,0.16) 0%, rgba(217,255,0,0.07) 32%, transparent 72%)",
              filter: "blur(35px)",
            }}
          />

          {/* =================================================
              SHARP CENTRAL LIGHT BEAM
          ================================================= */}

          <motion.div
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
              times: [0, 0.28, 1],
            }}
            style={{
              background:
                "linear-gradient(to bottom, transparent 4%, rgba(232,255,180,0.98) 45%, #d9ff00 50%, rgba(232,255,180,0.9) 55%, transparent 96%)",

              boxShadow:
                "0 0 8px rgba(217,255,0,1), 0 0 25px rgba(217,255,0,0.9), 0 0 65px rgba(217,255,0,0.55), 0 0 110px rgba(217,255,0,0.2)",
            }}
          />

          {/* =================================================
              HORIZONTAL LIGHT WASH
          ================================================= */}

          <motion.div
            className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.55, 0],
            }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
              times: [0, 0.42, 1],
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(217,255,0,0.55) 50%, transparent)",
              filter: "blur(5px)",
              boxShadow: "0 0 30px rgba(217,255,0,0.35)",
            }}
          />
        </motion.div>
      )}

      {/* =====================================================
          GATE

          Removed completely after animation.
      ===================================================== */}

      {!gateOpen && (
        <GateOverlay
          onOpening={() => {
            /*
              Start the Hero light at the exact moment
              the doors begin opening.
            */
            setHeroLight(true);
          }}
          onOpened={() => {
            setGateOpen(true);
          }}
        />
      )}
    </section>
  );
}

/* =========================================================
   GATE OVERLAY
========================================================= */

function GateOverlay({
  onOpening,
  onOpened,
}: {
  onOpening: () => void;
  onOpened: () => void;
}) {
  const controls = useAnimationControls();

  const [phase, setPhase] = useState<"closed" | "opening">("closed");

  /* ---------------------------------------------------------
     LOCK BODY SCROLL
  --------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ---------------------------------------------------------
     OPEN GATE
  --------------------------------------------------------- */

  const openGate = async () => {
    if (phase !== "closed") return;

    setPhase("opening");

    /*
      Start Hero light immediately.

      This happens BEFORE the door animation so the
      light feels like it is physically coming through
      the opening.
    */

    onOpening();

    /*
      Animate doors + center seam + brand + floor light.
    */

    await controls.start("open");

    /*
      Unlock native page scrolling.
    */

    document.body.style.overflow = "";

    /*
      Remove gate after animation.

      Hero is already mounted underneath.
    */

    onOpened();
  };

  /* ---------------------------------------------------------
     FIRST SCROLL / KEY / TOUCH
  --------------------------------------------------------- */

  useEffect(() => {
    if (phase !== "closed") return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        openGate();
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === "Enter" ||
        e.key === " " ||
        e.key === "Spacebar"
      ) {
        e.preventDefault();
        openGate();
      }
    };

    const handleTouch = () => {
      openGate();
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("keydown", handleKey);

    window.addEventListener("touchstart", handleTouch, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [phase]);

  return (
    <div
      className="fixed inset-0 z-[9999] h-screen w-screen overflow-hidden"
      onClick={openGate}
    >
      {/* =====================================================
          COMPLETE DARK CINEMATIC ROOM
      ===================================================== */}

      <div className="absolute inset-0 bg-[#020202]" />

      {/* Central subtle illumination */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 50% 45%, rgba(255,218,145,0.055) 0%, rgba(255,218,145,0.018) 35%, transparent 70%)",
        }}
      />

      {/* =====================================================
          ARCHITECTURAL SIDE WALLS
      ===================================================== */}

      <ArchitecturalSide side="left" />
      <ArchitecturalSide side="right" />

      {/* =====================================================
          CENTRAL DOOR FRAME
      ===================================================== */}

      <div
        className="absolute left-1/2 top-[7%] bottom-0 w-[59%] -translate-x-1/2"
        style={{
          perspective: "1800px",
        }}
      >
        {/* =================================================
            OUTER FRAME
        ================================================= */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #111213 0%, #080909 100%)",
            border: "1px solid rgba(255,255,255,0.065)",
            boxShadow:
              "0 0 100px rgba(0,0,0,0.95), inset 0 0 60px rgba(0,0,0,0.8)",
          }}
        />

        {/* =================================================
            TOP FRAME
        ================================================= */}

        <div
          className="absolute left-0 right-0 top-0 h-[14px]"
          style={{
            background:
              "linear-gradient(180deg, #292a29 0%, #151616 55%, #050505 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        />

        {/* =================================================
            LEFT FRAME BEAM
        ================================================= */}

        <div
          className="absolute left-0 top-0 bottom-0 w-[11px]"
          style={{
            background:
              "linear-gradient(to right, #050505, #202120, #080808)",
            borderRight: "1px solid rgba(255,255,255,0.045)",
          }}
        />

        {/* =================================================
            RIGHT FRAME BEAM
        ================================================= */}

        <div
          className="absolute right-0 top-0 bottom-0 w-[11px]"
          style={{
            background:
              "linear-gradient(to left, #050505, #202120, #080808)",
            borderLeft: "1px solid rgba(255,255,255,0.045)",
          }}
        />

        {/* =================================================
            LEFT DOOR
        ================================================= */}

        <motion.div
          className="absolute left-[11px] top-[14px] bottom-0 w-[calc(50%-11px)]"
          initial="closed"
          animate={controls}
          variants={{
            closed: {
              x: "0%",
              rotateY: 0,
            },

            open: {
              x: "-108%",
              rotateY: -5,

              transition: {
                duration: 1.15,
                ease: EASE,
              },
            },
          }}
          style={{
            transformOrigin: "left center",
            backfaceVisibility: "hidden",
          }}
        >
          <DoorPanel side="left" />
        </motion.div>

        {/* =================================================
            RIGHT DOOR
        ================================================= */}

        <motion.div
          className="absolute right-[11px] top-[14px] bottom-0 w-[calc(50%-11px)]"
          initial="closed"
          animate={controls}
          variants={{
            closed: {
              x: "0%",
              rotateY: 0,
            },

            open: {
              x: "108%",
              rotateY: 5,

              transition: {
                duration: 1.15,
                ease: EASE,
              },
            },
          }}
          style={{
            transformOrigin: "right center",
            backfaceVisibility: "hidden",
          }}
        >
          <DoorPanel side="right" />
        </motion.div>

        {/* =================================================
            CENTER SEAM
        ================================================= */}

        <motion.div
          className="absolute left-1/2 top-0 bottom-0 z-50 w-[2px] -translate-x-1/2"
          initial={{ opacity: 1 }}
          animate={controls}
          variants={{
            closed: {
              opacity: 1,
            },

            open: {
              opacity: [1, 1, 0],

              transition: {
                duration: 1.15,
                ease: "easeInOut",
                times: [0, 0.42, 1],
              },
            },
          }}
          style={{
            background:
              "linear-gradient(180deg, rgba(221,255,80,0.85), #d9ff00 45%, rgba(255,226,145,0.8))",

            boxShadow:
              "0 0 5px rgba(217,255,0,0.95), 0 0 18px rgba(217,255,0,0.65), 0 0 40px rgba(217,255,0,0.3)",
          }}
        />

        {/* =================================================
            CENTER LIGHT SPILL

            This is the light physically coming through
            the doors.
        ================================================= */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 z-40 w-[100px] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            closed: {
              opacity: 0,
            },

            open: {
              opacity: [0, 0.9, 0],

              transition: {
                duration: 1.15,
                ease: "easeInOut",
                times: [0, 0.42, 1],
              },
            },
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(217,255,0,0.3), transparent)",
            filter: "blur(18px)",
          }}
        />

        {/* =================================================
            XORA BRAND
        ================================================= */}

        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={controls}
          variants={{
            closed: {
              opacity: 1,
              scale: 1,
            },

            open: {
              opacity: 0,
              scale: 0.96,

              transition: {
                duration: 0.6,
                ease: EASE,
              },
            },
          }}
        >
          <div className="flex flex-col items-center text-center">
            {/* XORA */}

            <div
              className="font-light text-white"
              style={{
                fontSize: "clamp(3.2rem, 6vw, 6rem)",
                letterSpacing: "0.28em",
                lineHeight: 1,
                paddingLeft: "0.28em",
                textShadow:
                  "0 0 25px rgba(255,255,255,0.08)",
              }}
            >
              XORA
            </div>

            {/* AGENCY */}

            <div
              className="mt-4 uppercase"
              style={{
                color: "#d9ff00",
                fontSize:
                  "clamp(0.55rem, 0.9vw, 0.78rem)",
                letterSpacing: "0.42em",
                paddingLeft: "0.42em",
                textShadow:
                  "0 0 14px rgba(217,255,0,0.4)",
              }}
            >
              AI AUTOMATION AGENCY
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FLOOR GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[20%]"
        style={{
          background:
            "linear-gradient(to top, rgba(120,85,35,0.07), transparent)",
        }}
      />

      {/* =====================================================
          FLOOR LIGHT
      ===================================================== */}

      <motion.div
        className="absolute bottom-0 left-1/2 z-40 h-[3px] w-[18%] -translate-x-1/2"
        initial={{ opacity: 0.8 }}
        animate={controls}
        variants={{
          closed: {
            opacity: 0.75,
          },

          open: {
            opacity: [0.75, 1, 0],

            transition: {
              duration: 1.7,
              ease: "easeInOut",
            },
          },
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,255,0,0.7), transparent)",

          boxShadow:
            "0 0 18px rgba(217,255,0,0.45)",
        }}
      />

      {/* =====================================================
          CINEMATIC VIGNETTE
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 85% at center, transparent 38%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* =====================================================
          SCROLL TO ENTER
      ===================================================== */}

      <motion.div
        className="absolute bottom-7 left-1/2 z-[70] -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={controls}
        variants={{
          closed: {
            opacity: 1,
          },

          open: {
            opacity: 0,
            y: 8,

            transition: {
              duration: 0.45,
            },
          },
        }}
      >
        <div
          className="rounded-full border px-5 py-2 backdrop-blur-sm"
          style={{
            borderColor: "rgba(217,255,0,0.18)",
            background: "rgba(0,0,0,0.35)",
          }}
        >
          <span
            className="uppercase"
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "9px",
              letterSpacing: "0.32em",
              paddingLeft: "0.32em",
            }}
          >
            Scroll to enter
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   ARCHITECTURAL SIDE WALL
========================================================= */

function ArchitecturalSide({
  side,
}: {
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-[7%] bottom-0 ${
        isLeft ? "left-[1.8%]" : "right-[1.8%]"
      } w-[13.5%] overflow-hidden`}
      style={{
        background:
          "linear-gradient(180deg, #080808 0%, #030303 60%, #090704 100%)",

        border:
          "1px solid rgba(255,255,255,0.035)",

        boxShadow:
          "inset 0 0 40px rgba(0,0,0,0.85)",
      }}
    >
      {/* Warm upper illumination */}

      <div
        className="absolute left-0 right-0 top-0 h-[22%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,222,155,0.17), transparent)",
        }}
      />

      {/* Architectural slats */}

      <div className="absolute inset-0 flex justify-between px-[7%]">
        {Array.from({ length: 13 }).map((_, index) => (
          <div
            key={index}
            className="relative h-full w-[1px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,225,160,0.58) 0%, rgba(255,225,160,0.22) 32%, rgba(255,225,160,0.06) 72%, rgba(255,225,160,0.01) 100%)",

              boxShadow:
                "0 0 5px rgba(255,220,150,0.15)",
            }}
          />
        ))}
      </div>

      {/* Dark separator */}

      <div
        className="absolute top-[5%] bottom-0 w-[8px]"
        style={{
          [isLeft ? "right" : "left"]: "7%",

          background:
            "linear-gradient(90deg, rgba(0,0,0,0.8), rgba(20,20,20,0.3), rgba(0,0,0,0.8))",
        }}
      />

      {/* Inner golden edge */}

      <div
        className={`absolute top-[12%] bottom-[18%] ${
          isLeft ? "right-0" : "left-0"
        } w-[3px]`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,235,180,0.75), rgba(255,218,140,0.38), transparent)",

          boxShadow:
            "0 0 12px rgba(255,220,150,0.25)",
        }}
      />
    </div>
  );
}

/* =========================================================
   PREMIUM XORA DOOR PANEL
========================================================= */

function DoorPanel({
  side,
}: {
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #171819 0%, #111213 45%, #080909 100%)",

        boxShadow:
          "inset 0 0 80px rgba(0,0,0,0.8)",
      }}
    >
      {/* Metallic illumination */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.045), transparent 65%)",
        }}
      />

      {/* Subtle vertical texture */}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(255,255,255,0.008) 4px)",
        }}
      />

      {/* Outer panel frame */}

      <div
        className="absolute inset-[5%]"
        style={{
          border:
            "1px solid rgba(255,255,255,0.045)",

          boxShadow:
            "inset 0 0 45px rgba(0,0,0,0.75)",
        }}
      />

      {/* Upper geometric detail */}

      <div
        className={`absolute top-[8%] ${
          isLeft ? "right-[18%]" : "left-[18%]"
        } h-[23%] w-[48%]`}
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.055)",

          borderLeft: !isLeft
            ? "1px solid rgba(255,255,255,0.055)"
            : "none",

          borderRight: isLeft
            ? "1px solid rgba(255,255,255,0.055)"
            : "none",

          transform: isLeft
            ? "skewY(38deg)"
            : "skewY(-38deg)",
        }}
      />

      {/* Lower geometric detail */}

      <div
        className={`absolute bottom-[8%] ${
          isLeft ? "right-[18%]" : "left-[18%]"
        } h-[23%] w-[48%]`}
        style={{
          borderBottom:
            "1px solid rgba(255,255,255,0.04)",

          borderLeft: !isLeft
            ? "1px solid rgba(255,255,255,0.04)"
            : "none",

          borderRight: isLeft
            ? "1px solid rgba(255,255,255,0.04)"
            : "none",

          transform: isLeft
            ? "skewY(-38deg)"
            : "skewY(38deg)",
        }}
      />

      {/* Subtle vertical line */}

      <div
        className="absolute top-[5%] bottom-[5%] w-[1px]"
        style={{
          [isLeft ? "right" : "left"]: "5%",

          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.035), transparent)",
        }}
      />

      {/* Inner edge glow */}

      <div
        className={`absolute top-0 bottom-0 ${
          isLeft ? "right-0" : "left-0"
        } w-[5px]`}
        style={{
          background:
            "linear-gradient(180deg, rgba(221,255,95,0.85), rgba(217,255,0,0.9) 45%, rgba(255,226,145,0.7))",

          boxShadow:
            "0 0 7px rgba(217,255,0,0.85), 0 0 20px rgba(217,255,0,0.35)",
        }}
      />

      {/* Outer dark edge */}

      <div
        className={`absolute inset-y-0 ${
          isLeft ? "left-0" : "right-0"
        } w-[12%]`}
        style={{
          background: isLeft
            ? "linear-gradient(to right, rgba(0,0,0,0.85), transparent)"
            : "linear-gradient(to left, rgba(0,0,0,0.85), transparent)",
        }}
      />
    </div>
  );
}