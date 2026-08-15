"use client";

import {
  ArrowRight,
  Lock,
  Mail,
  Send,
  ShieldCheck,
  Share2,
  Zap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] px-5 pb-3 pt-8 text-white md:px-6">

      {/* top glow */}
      <div className="pointer-events-none absolute left-1/2 top-7 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c6ff00] shadow-[0_0_16px_6px_rgba(198,255,0,0.3)]" />

      <div className="relative mx-auto max-w-[1490px] overflow-hidden rounded-[14px] border border-[#c6ff00]/25 bg-[#050606]">

        {/* MAIN */}
        <div className="grid gap-8 px-7 py-8 md:px-10 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.1fr] lg:gap-10 lg:px-12">

          {/* BRAND */}
          <div>

            <div className="text-[42px] font-light tracking-[0.2em] leading-none">
              XOR
              <span className="relative">
                A
                <span className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c6ff00]" />
              </span>
            </div>

            <p className="mt-1 text-[11px] tracking-[0.17em] text-[#c6ff00]">
              AI AUTOMATION AGENCY
            </p>

            <p className="mt-4 max-w-[300px] text-[13px] leading-5 text-white/55">
              Smart automation solutions that streamline operations
              and help businesses scale with AI.
            </p>

            <div className="my-5 h-px w-5 bg-[#c6ff00]" />

            <div className="space-y-3">

              <Feature
                icon={<Zap size={17} />}
                title="AI Automation"
                text="Intelligent workflows that save time."
              />

              <Feature
                icon={<Share2 size={17} />}
                title="Seamless Integration"
                text="Connecting tools and simplifying processes."
              />

            </div>

          </div>


          {/* COMPANY */}
<Column title="COMPANY">
  <Link text="About Us" href="#about" />
  <Link text="Our Team" href="#team" />
  <Link text="Contact Us" href="#contact" />
</Column>


{/* SERVICES */}
<Column title="SERVICES">
  <Link text="AI Automation" href="#services" />
  <Link text="Workflow Automation" href="#process" />
  <Link text="CRM Solutions" href="#services" />
  <Link text="Custom Solutions" href="#work" />
</Column>


          {/* RESOURCES */}
          <div>

            <h3 className="mb-5 text-[12px] font-semibold tracking-[0.15em] text-[#c6ff00]">
              RESOURCES
            </h3>

            <div className="space-y-4">
  <Link text="Blog" href="#work" />
  <Link text="Case Studies" href="#work" />
  <Link text="Guides" href="#process" />
  <Link text="FAQs" href="#faq" />
</div>

            {/* NEWSLETTER */}

            <h3 className="mb-3 mt-7 text-[12px] font-semibold tracking-[0.15em] text-[#c6ff00]">
              STAY UPDATED
            </h3>

            <p className="mb-3 text-[12px] leading-5 text-white/50">
              Latest AI and automation insights.
            </p>

            <div className="flex gap-2">

              <div className="flex h-9 flex-1 items-center rounded-lg border border-white/10 bg-black px-3">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/35"
                />

              </div>

              <button
                aria-label="Subscribe"
                className="flex h-9 w-11 items-center justify-center rounded-lg bg-[#c6ff00] text-black"
              >
                <Send size={16} />
              </button>

            </div>

            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/35">
              <Lock size={10} />
              No spam. Unsubscribe anytime.
            </div>

            {/* SOCIAL */}

            <div className="mt-5 flex items-center gap-2">

              <Social label="in" />
              <Social label="●" />
              <Social icon={<Mail size={16} />} />

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/10 px-7 py-4 md:px-12">

          <div className="flex flex-col items-center justify-between gap-3 text-[11px] text-white/40 md:flex-row">

            <p>
              © 2024 XORA. All rights reserved.
            </p>

            <div className="flex items-center gap-3">

              <span>Privacy Policy</span>

              <span className="h-3 w-px bg-[#c6ff00]" />

              <span>Terms of Service</span>

              <span className="h-3 w-px bg-[#c6ff00]" />

              <span>Cookie Policy</span>

            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#c6ff00]" />
              Secure. Private. Professional.
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* ================= COLUMN ================= */

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l border-white/10 pl-6">

      <h3 className="mb-5 text-[12px] font-semibold tracking-[0.15em] text-[#c6ff00]">
        {title}
      </h3>

      <div className="space-y-4">
        {children}
      </div>

    </div>
  );
}


/* ================= LINK ================= */

function Link({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block text-[13px] text-white/60 transition hover:text-[#c6ff00]"
    >
      {text}
    </a>
  );
}


/* ================= FEATURE ================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#c6ff00]/35 text-[#c6ff00]">
        {icon}
      </div>

      <div>

        <p className="text-[12px] text-white">
          {title}
        </p>

        <p className="text-[10px] text-white/35">
          {text}
        </p>

      </div>

    </div>
  );
}


/* ================= SOCIAL ================= */

function Social({
  label,
  icon,
}: {
  label?: string;
  icon?: React.ReactNode;
}) {
  return (
    <button className="flex h-9 w-10 items-center justify-center rounded-lg border border-white/10 text-sm text-white transition hover:border-[#c6ff00] hover:text-[#c6ff00]">
      {icon || label}
    </button>
  );
}