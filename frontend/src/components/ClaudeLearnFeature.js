import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Wand2,
  CheckCheck,
  Bot,
  BookOpen,
  Brain,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const FEATURES = [
  {
    icon: Wand2,
    title: "Personalised lesson plans",
    copy: "Adaptive paths shaped to each learner — pace, depth and style.",
  },
  {
    icon: Brain,
    title: "Adaptive practice",
    copy: "Drills that get harder as you improve and softer when you stumble.",
  },
  {
    icon: CheckCheck,
    title: "Instant, honest feedback",
    copy: "Constructive review on writing, code and reasoning — line by line.",
  },
  {
    icon: Bot,
    title: "Built on Anthropic's Claude",
    copy: "Powered by frontier reasoning models tuned for safe, accurate tutoring.",
  },
];

const ClaudeLearnFeature = () => {
  return (
    <section
      id="claude-learn"
      data-testid="claude-learn-section"
      className="relative l44-section l44-noise overflow-hidden"
      style={{
        backgroundColor: "var(--l44-navy)",
        borderTop: "1px solid var(--l44-border-hairline)",
      }}
    >
      {/* Decorative gold radial accents (kept subtle) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 420px at 85% 10%, rgba(200,162,90,0.08), transparent 60%), radial-gradient(700px 320px at 10% 90%, rgba(200,162,90,0.06), transparent 65%)",
        }}
      />

      <div className="l44-container relative">
        <motion.div {...fadeUp} className="flex flex-col gap-3 mb-10 sm:mb-14 max-w-3xl">
          <span className="l44-eyebrow inline-flex items-center gap-3">
            <span className="l44-gold-rule" />
            Latest Project
            <span
              data-testid="claude-learn-status-badge"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
              style={{
                border: "1px solid var(--l44-border-gold-hairline)",
                background: "var(--l44-gold-10)",
                color: "var(--l44-gold)",
              }}
            >
              <Sparkles size={11} />
              Launching Soon
            </span>
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.01em] leading-[1.05]"
            style={{ color: "var(--l44-white)" }}
          >
            Claude Learn<span style={{ color: "var(--l44-gold)" }}>.</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: "var(--l44-white-85)" }}>
              AI tutoring powered by Anthropic&apos;s Claude.
            </span>
          </h2>
          <p
            className="max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--l44-white-70)" }}
          >
            Our newest product. Claude Learn is a focused, conversational tutor that meets students,
            educators, professionals and lifelong learners exactly where they are — and walks them
            toward mastery, one thoughtful explanation at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: features + CTAs */}
          <motion.div {...fadeUp} className="lg:col-span-6 flex flex-col gap-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map(({ icon: Icon, title, copy }) => (
                <li
                  key={title}
                  data-testid="claude-learn-feature"
                  className="rounded-2xl p-5"
                  style={{
                    border: "1px solid var(--l44-border-hairline)",
                    background: "var(--l44-navy-veil-85)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="h-9 w-9 rounded-xl inline-flex items-center justify-center flex-shrink-0"
                      style={{
                        border: "1px solid var(--l44-border-gold-hairline)",
                        background: "var(--l44-gold-10)",
                        color: "var(--l44-gold)",
                      }}
                      aria-hidden
                    >
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: "var(--l44-white)" }}>
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--l44-white-70)" }}>
                        {copy}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://latitude44.app"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="claude-learn-visit-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap transition-[background-color,box-shadow] duration-200"
                style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
              >
                Visit latitude44.app
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                data-testid="claude-learn-waitlist-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap border transition-colors duration-200"
                style={{
                  borderColor: "var(--l44-border-gold-hairline)",
                  color: "var(--l44-white)",
                  background: "var(--l44-gold-08)",
                }}
              >
                <GraduationCap size={16} />
                Join the Waitlist
              </a>
            </div>

            <p className="text-xs" style={{ color: "var(--l44-white-55)" }}>
              For students, educators, professionals and lifelong learners — all welcome.
            </p>
          </motion.div>

          {/* Right: stylised browser mockup of latitude44.app */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <ClaudeLearnMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Stylised, on-brand browser preview of latitude44.app — pure CSS,
 * no external screenshots. Designed to look premium and corporate.
 */
const ClaudeLearnMockup = () => {
  return (
    <div
      data-testid="claude-learn-mockup"
      className="relative rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--l44-border-gold-hairline)",
        background:
          "linear-gradient(180deg, rgba(10,26,42,0.95) 0%, rgba(10,26,42,1) 100%)",
        boxShadow: "var(--shadow-gold-glow)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid var(--l44-border-hairline)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        <div
          className="mx-3 flex-1 h-7 rounded-full flex items-center justify-center text-[11px] tracking-[0.18em] uppercase"
          style={{
            border: "1px solid var(--l44-border-hairline)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--l44-white-70)",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full mr-2"
            style={{ background: "var(--l44-gold)" }}
          />
          latitude44.app
        </div>
      </div>

      {/* App body */}
      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <aside
          className="col-span-3 hidden sm:flex flex-col gap-1.5 p-4"
          style={{ borderRight: "1px solid var(--l44-border-hairline)" }}
        >
          <div
            className="text-[10px] tracking-[0.22em] uppercase mb-2"
            style={{ color: "var(--l44-white-55)" }}
          >
            Courses
          </div>
          {[
            { label: "Calculus I", active: true },
            { label: "Macroeconomics" },
            { label: "Te Reo Māori" },
            { label: "Python Basics" },
            { label: "NCEA Biology" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-lg px-2.5 py-2"
              style={{
                background: item.active ? "var(--l44-gold-10)" : "transparent",
                border: item.active
                  ? "1px solid var(--l44-border-gold-hairline)"
                  : "1px solid transparent",
                color: item.active ? "var(--l44-white)" : "var(--l44-white-70)",
              }}
            >
              <BookOpen size={12} style={{ color: item.active ? "var(--l44-gold)" : "var(--l44-white-55)" }} />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Conversation pane */}
        <main className="col-span-12 sm:col-span-9 p-4 sm:p-5 flex flex-col gap-3">
          {/* Lesson chip */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase"
              style={{
                border: "1px solid var(--l44-border-gold-hairline)",
                color: "var(--l44-gold)",
                background: "var(--l44-gold-10)",
              }}
            >
              <Sparkles size={11} />
              Lesson 3 · Limits & continuity
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--l44-white-55)" }}>
              live tutoring
            </span>
          </div>

          {/* User bubble */}
          <div className="flex justify-end">
            <div
              className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--l44-border-hairline)",
                color: "var(--l44-white)",
              }}
            >
              <p className="text-xs sm:text-sm leading-relaxed">
                I keep getting stuck on this limit problem. Why does substituting <em>x = 2</em> give 0/0?
              </p>
            </div>
          </div>

          {/* AI bubble */}
          <div className="flex">
            <div
              className="max-w-[88%] rounded-2xl rounded-tl-sm px-4 py-3"
              style={{
                background: "var(--l44-gold-10)",
                border: "1px solid var(--l44-border-gold-hairline)",
                color: "var(--l44-white)",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="h-5 w-5 rounded-full inline-flex items-center justify-center"
                  style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
                >
                  <Sparkles size={11} />
                </span>
                <span
                  className="text-[10px] tracking-[0.18em] uppercase font-semibold"
                  style={{ color: "var(--l44-gold)" }}
                >
                  Claude · Tutor
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                Great catch — that&apos;s an{" "}
                <span style={{ color: "var(--l44-gold)" }}>indeterminate form</span>. The numerator and
                denominator both vanish at <em>x = 2</em>, so we need to factor. Try factoring{" "}
                <span className="font-mono" style={{ color: "var(--l44-gold)" }}>x² − 4</span> first.
              </p>
              <div
                className="mt-3 rounded-lg p-3 font-mono text-[11px] sm:text-xs"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid var(--l44-border-hairline)",
                  color: "var(--l44-white-85)",
                }}
              >
                <span style={{ color: "var(--l44-gold)" }}>lim</span> <sub>x→2</sub>{" "}
                (x² − 4) / (x − 2)
                <br />= <span style={{ color: "var(--l44-gold)" }}>lim</span> <sub>x→2</sub>{" "}
                (x − 2)(x + 2) / (x − 2)
                <br />= <span style={{ color: "var(--l44-gold)" }}>lim</span> <sub>x→2</sub> (x + 2) ={" "}
                <span style={{ color: "var(--l44-gold)" }}>4</span>
              </div>
            </div>
          </div>

          {/* Suggested replies */}
          <div className="mt-1 flex flex-wrap gap-2">
            {["Show me another", "Quiz me", "Explain like I'm 15"].map((s) => (
              <button
                key={s}
                type="button"
                className="text-[11px] tracking-[0.12em] uppercase rounded-full px-3 py-1.5 transition-colors"
                style={{
                  border: "1px solid var(--l44-border-hairline)",
                  color: "var(--l44-white-85)",
                  background: "transparent",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Composer */}
          <div
            className="mt-3 flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              border: "1px solid var(--l44-border-hairline)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <span className="text-xs" style={{ color: "var(--l44-white-55)" }}>
              Ask Claude a question…
            </span>
            <span
              className="ml-auto inline-flex items-center justify-center h-7 w-7 rounded-full"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
              aria-hidden
            >
              <ArrowUpRight size={14} />
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClaudeLearnFeature;
