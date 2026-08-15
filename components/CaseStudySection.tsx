
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Grid2X2,
  Users,
  Zap,
} from "lucide-react";

const technologies = [
  "n8n",
  "Google Forms",
  "Google Sheets",
  "Gmail",
  "REST APIs",
  "Webhooks",
  "JSON",
  "JavaScript",
  "CRM Integration",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function OurWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white md:px-10 lg:px-[7.5%]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[20%] h-[500px] w-[300px] rounded-full bg-[#b7d900]/[0.07] blur-[130px]" />

        <div className="absolute right-[-8%] top-[35%] h-[500px] w-[300px] rounded-full bg-[#b7d900]/[0.045] blur-[130px]" />

        <div className="absolute left-1/2 top-[50%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#b7d900]/[0.025] blur-[150px]" />
      </div>

      {/* Architectural side lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#b7d900]/40 to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#b7d900]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =========================================================
            SECTION LABEL
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 flex items-center gap-5"
        >
          

          <div className="h-px w-12 bg-[#b7d900]/60" />

          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/60">
            Our Work / Case Study
          </span>
        </motion.div>

        {/* =========================================================
            MAIN PROJECT
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative"
          >
            {/* Project tag */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b7d900]/25 bg-[#b7d900]/[0.04] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7d900] shadow-[0_0_10px_#b7d900]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b7d900]">
                Featured Project
              </span>
            </div>

            <h2 className="max-w-[600px] text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-[58px]">
              AI Lead Generation
              <br />
              & CRM{" "}
              <span className="text-[#b7d900]">
                Automation
              </span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-white/55 md:text-[15px]">
              An intelligent workflow system that captures, qualifies, scores,
              and manages leads automatically — reducing manual work and
              accelerating the sales process.
            </p>

            {/* Accent line */}
            <div className="my-7 h-px w-12 bg-[#b7d900]" />

            {/* =================================================
                PROJECT META
            ================================================= */}

            <div className="max-w-[520px]">
              <MetaRow
                icon={<CheckCircle2 size={20} />}
                label="Client"
                value="Team Xora"
              />

              <MetaRow
                icon={<CalendarDays size={20} />}
                label="Project"
                value="Custom Automation"
              />

              <MetaRow
                icon={<Grid2X2 size={20} />}
                label="Platform"
                value="n8n + CRM"
              />
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            
          </motion.div>

          {/* =====================================================
              RIGHT WORKFLOW CARD
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={imageReveal}
            className="relative"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[#b7d900]/[0.035] blur-[45px]" />

            <div className="relative overflow-hidden rounded-[22px] border border-[#b7d900]/25 bg-[#080808] shadow-[0_25px_80px_rgba(0,0,0,.5)]">

              {/* Top bar */}
              <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">

                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#b7d900]/70" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    XORA / Automation
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-[#b7d900]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b7d900] shadow-[0_0_8px_#b7d900]" />
                  LIVE SYSTEM
                </div>
              </div>

              {/* Workflow image */}
              <div className="relative aspect-[1.65/1] overflow-hidden bg-[#050505]">

                <Image
                  src="/workflow.png"
                  alt="XORA AI automation workflow"
                  fill
                  priority
                  className="object-contain p-3 transition-transform duration-[1200ms] ease-out hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Dark cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/35 via-transparent to-transparent" />

                {/* Scanning light */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "200%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    delay: 0.4,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-[25%] bg-gradient-to-r from-transparent via-[#b7d900]/[0.06] to-transparent skew-x-[-15deg]"
                />

                {/* Workflow status */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/75 px-3 py-2 backdrop-blur-md">
                  <Zap size={13} className="text-[#b7d900]" />

                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                    Automated Pipeline
                  </span>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 border-t border-white/10">

                <ProjectStat
                  value="24/7"
                  label="Automation"
                />

                <ProjectStat
                  value="100%"
                  label="Workflow"
                />

                <ProjectStat
                  value="n8n"
                  label="Engine"
                />

              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT OVERVIEW
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
        >

          {/* Overview */}
          <div className="rounded-[18px] border border-white/10 bg-[#080808]/80 p-6 md:p-8">

            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg border border-[#b7d900]/25 bg-[#b7d900]/[0.05] flex items-center justify-center">
                <Zap size={16} className="text-[#b7d900]" />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b7d900]">
                Project Overview
              </span>
            </div>

            <p className="max-w-[720px] text-[14px] leading-7 text-white/55">
              XORA built an end-to-end lead automation pipeline using n8n,
              connecting forms, data processing, APIs, email, and CRM workflows
              into one intelligent system.
            </p>

            {/* Special Thanks */}
            <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#b7d900]/20 bg-[#b7d900]/[0.04]">
                <Users size={18} className="text-[#b7d900]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b7d900]">
                  Collaboration
                </p>

                <p className="mt-1 text-xs text-white/45">
                  Built with the XORA team.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-[18px] border border-white/10 bg-[#080808]/80 p-6 md:p-8">

            <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#b7d900]">
              Technologies
            </div>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px] text-white/55 transition-all duration-300 hover:border-[#b7d900]/35 hover:bg-[#b7d900]/[0.04] hover:text-white"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   META ROW
========================================================= */

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group flex items-center gap-4 border-b border-white/10 py-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[#b7d900] transition-all duration-300 group-hover:border-[#b7d900]/35 group-hover:bg-[#b7d900]/[0.05]">
        {icon}
      </div>

      <div>
        <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#b7d900]">
          {label}
        </div>

        <div className="mt-1 text-sm text-white/65">
          {value}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT STAT
========================================================= */

function ProjectStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-4 text-center">
      <span className="text-lg font-medium tracking-tight text-white">
        {value}
      </span>

      <span className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </span>
    </div>
  );
}

