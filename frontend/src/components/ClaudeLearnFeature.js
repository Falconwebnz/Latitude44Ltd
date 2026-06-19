import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Wand2,
  CheckCheck,
  Bot,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GooglePlayBadge from "./GooglePlayBadge";

/**
 * <ClaudeLearnFeature />
 *
 * Adaptive promo section for the Claude Learn app.
 *  • Desktop (≥ lg): two-column — copy/CTAs left · promo gallery right.
 *  • Tablet (md): same two-column with smaller gallery.
 *  • Mobile: stacks; gallery becomes a swipeable carousel with thumbnails below.
 *
 * Gallery uses real promo images served via WebP + JPG @ 3 widths.
 */

const PROMOS = [
  {
    id: "feature",
    label: "Launch graphic",
    short: "Master Claude AI",
    name: "feature_graphic",
    orientation: "landscape", // 1024 × 500 → ~2.05:1
    aspect: 1024 / 500,
    widths: [960, 1280, 1600],
    alt: "Latitude44 · Claude Learn — Master Claude AI launch graphic",
  },
  {
    id: "work",
    label: "Work alongside Claude.ai",
    short: "Pair with Claude.ai",
    name: "screenshot_work",
    orientation: "portrait", // 1080 × 1920
    aspect: 1080 / 1920,
    widths: [640, 960, 1280],
    alt: "Claude Learn screen — Work alongside Claude.ai with daily practice",
  },
  {
    id: "tenmin",
    label: "10 minutes a day · 90 days",
    short: "10 min a day · 90 days",
    name: "screenshot_10min",
    orientation: "portrait",
    aspect: 1080 / 1920,
    widths: [640, 960, 1280],
    alt: "Claude Learn screen — 10 minutes a day, 90 days to Claude",
  },
];

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

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const ClaudeLearnFeature = ({ embedded = false }) => {
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
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 420px at 85% 10%, rgba(200,162,90,0.08), transparent 60%), radial-gradient(700px 320px at 10% 90%, rgba(200,162,90,0.06), transparent 65%)",
        }}
      />

      <div className="l44-container relative">
        {!embedded && (
          <motion.div {...fadeUp} className="flex flex-col gap-3 mb-10 sm:mb-14 max-w-3xl">
            <span className="l44-eyebrow inline-flex items-center gap-3 flex-wrap">
              <span className="l44-gold-rule" />
              Latest Project
              <span
                data-testid="claude-learn-status-badge"
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.01em] leading-[1.05]"
              style={{ color: "var(--l44-white)" }}
            >
              Claude Learn<span style={{ color: "var(--l44-gold)" }}>.</span>
              <br />
              <span
                className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2"
                style={{ color: "var(--l44-white-85)" }}
              >
                AI tutoring powered by Anthropic&apos;s Claude.
              </span>
            </h2>
            <p
              className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "var(--l44-white-70)" }}
            >
              Our newest product. Claude Learn is a focused, conversational tutor that meets students,
              educators, professionals and lifelong learners exactly where they are — and walks them
              toward mastery, one thoughtful explanation at a time.
            </p>
          </motion.div>
        )}

        {embedded && (
          <motion.p
            {...fadeUp}
            className="max-w-2xl mb-8 text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: "var(--l44-white-70)" }}
          >
            Claude Learn is a focused, conversational tutor that meets students, educators,
            professionals and lifelong learners exactly where they are — and walks them toward
            mastery, one thoughtful explanation at a time.
          </motion.p>
        )}

        {/* ============== Adaptive two-column layout ============== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* Left: features + CTAs + store badges */}
          <motion.div {...fadeUp} className="lg:col-span-5 xl:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
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
                      <p
                        className="mt-1 text-xs leading-relaxed"
                        style={{ color: "var(--l44-white-70)" }}
                      >
                        {copy}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://latitude44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="claude-learn-visit-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-[background-color,box-shadow] duration-200"
                  style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
                >
                  Visit latitude44.app
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#contact"
                  data-testid="claude-learn-waitlist-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase whitespace-nowrap border transition-colors duration-200"
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

              {/* Store badge row */}
              <div className="flex flex-col gap-3 mt-1">
                <span
                  className="text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: "var(--l44-white-55)" }}
                >
                  Coming soon to
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <GooglePlayBadge
                    href="https://play.google.com/store/apps"
                    height={56}
                    testId="claude-learn-google-play"
                    ariaLabel="Get Claude Learn on Google Play (coming soon)"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs mt-1" style={{ color: "var(--l44-white-55)" }}>
              For students, educators, professionals and lifelong learners — all welcome.
            </p>
          </motion.div>

          {/* Right: Promo gallery */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2 w-full"
          >
            <ClaudeLearnGallery />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────
   <ClaudeLearnGallery />
   Adaptive promo gallery — large active slide + thumbnail rail.
   Mobile: same UI, just smaller frame + scrollable thumbs.
   ────────────────────────────────────────────────────────────── */

const ClaudeLearnGallery = () => {
  const [active, setActive] = useState(0);
  const slide = PROMOS[active];

  // Auto-advance every 6.5s; pause on hover/focus.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % PROMOS.length), 6500);
    return () => clearInterval(t);
  }, [paused, active]);

  const advance = (delta) => setActive((i) => (i + delta + PROMOS.length) % PROMOS.length);

  return (
    <div
      data-testid="claude-learn-gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="flex flex-col gap-3"
    >
      {/* Active frame — fluid aspect that adapts to the active image's orientation */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          border: "1px solid var(--l44-border-gold-hairline)",
          boxShadow: "var(--shadow-gold-glow)",
          background:
            "linear-gradient(180deg, rgba(10,26,42,0.95) 0%, rgba(10,26,42,1) 100%)",
        }}
      >
        <div
          className="relative w-full"
          style={{
            aspectRatio: slide.orientation === "portrait" ? "10 / 12" : "16 / 9",
            maxHeight: slide.orientation === "portrait" ? "min(70vh, 720px)" : undefined,
            transition: "aspect-ratio 350ms ease",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <GalleryImage slide={slide} />
            </motion.div>
          </AnimatePresence>

          {/* Subtle navy fade at bottom for the caption */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,26,42,0) 0%, rgba(10,26,42,0.85) 100%)",
            }}
          />

          {/* Caption */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-center justify-between gap-3">
            <span
              className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--l44-gold)" }}
              data-testid="claude-learn-gallery-label"
            >
              {slide.label}
            </span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: "var(--l44-navy-veil-70)",
                border: "1px solid var(--l44-border-hairline)",
                color: "var(--l44-white-85)",
              }}
            >
              {String(active + 1).padStart(2, "0")} / {String(PROMOS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={() => advance(-1)}
            aria-label="Previous screenshot"
            data-testid="claude-learn-prev"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border inline-flex items-center justify-center"
            style={{
              borderColor: "var(--l44-border-gold-hairline)",
              background: "var(--l44-navy-veil-70)",
              color: "var(--l44-gold)",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            aria-label="Next screenshot"
            data-testid="claude-learn-next"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border inline-flex items-center justify-center"
            style={{
              borderColor: "var(--l44-border-gold-hairline)",
              background: "var(--l44-navy-veil-70)",
              color: "var(--l44-gold)",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Thumbnail rail — equal aspect for visual balance */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {PROMOS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${p.label}`}
            aria-current={i === active}
            data-testid={`claude-learn-thumb-${p.id}`}
            className="relative rounded-xl overflow-hidden transition-all"
            style={{
              border:
                i === active
                  ? "1px solid var(--l44-border-gold-hairline)"
                  : "1px solid var(--l44-border-hairline)",
              outline:
                i === active ? "1px solid var(--l44-border-gold-hairline)" : "none",
              outlineOffset: 2,
              opacity: i === active ? 1 : 0.78,
              aspectRatio: "4 / 3",
              background: "var(--l44-navy-veil-85)",
            }}
          >
            <GalleryImage slide={p} sizes="(max-width: 768px) 33vw, 16vw" thumb />
            <span
              className="absolute bottom-0 left-0 right-0 px-2 py-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase truncate"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,26,42,0) 0%, rgba(10,26,42,0.92) 100%)",
                color: i === active ? "var(--l44-gold)" : "var(--l44-white-85)",
              }}
            >
              {p.short}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   <GalleryImage /> — responsive <picture> with WebP + JPG fallback.
   `thumb` = letter-box (object-contain) to keep full image visible.
   Active stage frame uses object-cover for an edge-to-edge hero.
   ────────────────────────────────────────────────────────────── */
const GalleryImage = ({ slide, thumb = false, sizes }) => {
  const base = `/claude-learn/${slide.name}-v1`;
  const ws = slide.widths;
  const computedSizes =
    sizes ||
    (slide.orientation === "portrait"
      ? "(max-width: 1024px) 80vw, 480px"
      : "(max-width: 1024px) 92vw, 720px");
  const fitClass = thumb
    ? "absolute inset-0 h-full w-full object-contain p-1"
    : slide.orientation === "portrait"
      ? "absolute inset-0 h-full w-full object-contain"
      : "absolute inset-0 h-full w-full object-cover";
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={ws.map((w) => `${base}-${w}.webp ${w}w`).join(", ")}
        sizes={computedSizes}
      />
      <img
        src={`${base}-${ws[1]}.jpg`}
        srcSet={ws.map((w) => `${base}-${w}.jpg ${w}w`).join(", ")}
        sizes={computedSizes}
        alt={thumb ? "" : slide.alt}
        loading={thumb ? "lazy" : "eager"}
        decoding="async"
        className={fitClass}
      />
    </picture>
  );
};

export default ClaudeLearnFeature;
