import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/**
 * <WorkShowcase /> — Ken Burns style slideshow of latest work (Container pattern).
 *
 * Container:
 *   WorkShowcase
 *     ├── stage (AnimatePresence: only the active slide is mounted, crossfade via Framer)
 *     │     └── KenBurnsSlide
 *     ├── caption (AnimatePresence: tags / title / blurb / link slide-in)
 *     └── controls (prev / next / play-pause / dots / thumbnail rail)
 *
 * Each slide owns its own pan-zoom animation via a CSS keyframe preset.
 *
 * Images are served via <picture> with WebP source + JPEG fallback and a
 * `srcset` covering 1280 / 1600 / 1920 widths — the browser picks the
 * smallest file that fits the current viewport. Originals (1.0–1.9 MB PNGs)
 * become ~50–150 KB WebP each.
 */

const SLIDES = [
  {
    id: "southern_bullion",
    title: "Southern Bullion Exchange",
    blurb:
      "Premium e-commerce landing for a Christchurch bullion dealer — live precious-metal prices, booking flow and educational hub.",
    tags: ["E-commerce", "Live pricing", "Brand"],
    href: "https://www.southernbullion.co.nz",
    image: "southern_bullion",
    motion: "tl-to-br",
  },
  {
    id: "augustine_academy",
    title: "Augustine Academy",
    blurb:
      "Refined site for a liberal-arts academy — admissions, faculty profiles and a refreshed donor pathway.",
    tags: ["Education", "Donations", "CMS"],
    href: "",
    image: "augustine_academy",
    motion: "br-to-tl",
  },
  {
    id: "so_long_south_america",
    title: "So Long, South America",
    blurb:
      "Book launch site for author Pat Barrett — cinematic hero, sales links and review wall for the new Kiwi adventure novel.",
    tags: ["Author", "Storefront", "Marketing"],
    href: "",
    image: "so_long_south_america",
    motion: "tr-to-bl",
  },
  {
    id: "armoured_llama",
    title: "Armoured Llama Auto",
    blurb:
      "Conversion-focused site for a Christchurch mechanic offering a personal pickup-and-delivery service.",
    tags: ["Automotive", "Local SEO", "Lead-gen"],
    href: "",
    image: "armoured_llama",
    motion: "bl-to-tr",
  },
  {
    id: "bens_plumbing",
    title: "Ben's Plumbing",
    blurb:
      "Direct, no-nonsense plumbing and drainlaying site across North Canterbury — bold visuals and quick contact.",
    tags: ["Trades", "Local SEO", "Brand"],
    href: "",
    image: "bens_plumbing",
    motion: "center-zoom",
  },
];

const SLIDE_INTERVAL_MS = 6500;
const FADE_MS = 1100;
// File naming suffix — bump (e.g. `-fix2`) on the renamed files in /public/work
// AND here together when re-encoding assets. This bypasses any sticky CDN/HTTP
// cache for old image paths.
const ASSET_SUFFIX = "-v3";

const WorkShowcase = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const advance = useCallback(
    (delta = 1) => setActive((i) => (i + delta + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused || reducedMotion) return;
    intervalRef.current = setInterval(() => advance(1), SLIDE_INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [paused, reducedMotion, advance, active]);

  const onKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight") advance(1);
      if (e.key === "ArrowLeft") advance(-1);
      if (e.key === " ") {
        e.preventDefault();
        setPaused((p) => !p);
      }
    },
    [advance],
  );

  const activeSlide = SLIDES[active];

  return (
    <section
      id="work"
      data-testid="work-showcase-section"
      className="l44-section"
      style={{
        backgroundColor: "var(--l44-navy)",
        borderTop: "1px solid var(--l44-border-hairline)",
      }}
      aria-roledescription="carousel"
      aria-label="Latest work by Latitude44"
    >
      <div className="l44-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 mb-8 sm:mb-12 max-w-3xl"
        >
          <span className="l44-eyebrow inline-flex items-center gap-3">
            <span className="l44-gold-rule" />
            Recent Work
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
            style={{ color: "var(--l44-white)" }}
          >
            A few of the latest builds.
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--l44-white-70)" }}
          >
            Snapshots of recent client websites — from bullion dealers and academies to authors and
            local trades. Every project is shipped with the same standard of precision.
          </p>
        </motion.div>

        {/* Container: stage + caption + controls */}
        <div
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          data-testid="work-showcase-stage-container"
          className="relative rounded-2xl overflow-hidden focus:outline-none"
          style={{
            border: "1px solid var(--l44-border-gold-hairline)",
            boxShadow: "var(--shadow-gold-glow)",
            background: "var(--l44-navy)",
          }}
        >
          {/* Stage */}
          <div
            data-testid="work-showcase-stage"
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16 / 9" }}
          >
            <AnimatePresence mode="sync" initial={false}>
              <KenBurnsSlide
                key={activeSlide.id}
                slide={activeSlide}
                reducedMotion={reducedMotion}
              />
            </AnimatePresence>

            {/* Bottom navy fade so caption is always readable */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-[2]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,26,42,0) 0%, rgba(10,26,42,0.55) 50%, rgba(10,26,42,0.92) 100%)",
              }}
            />

            <WorkShowcaseCaption slide={activeSlide} />
          </div>

          <WorkShowcaseControls
            count={SLIDES.length}
            active={active}
            setActive={setActive}
            advance={advance}
            paused={paused}
            setPaused={setPaused}
          />
        </div>

        {/* Bottom thumbnail / tag rail */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              data-testid={`work-thumb-${s.id}`}
              className="text-[11px] tracking-[0.16em] uppercase rounded-full px-3 py-1.5 transition-colors"
              aria-label={`Show ${s.title}`}
              style={{
                border: i === active
                  ? "1px solid var(--l44-border-gold-hairline)"
                  : "1px solid var(--l44-border-hairline)",
                background: i === active ? "var(--l44-gold-10)" : "transparent",
                color: i === active ? "var(--l44-white)" : "var(--l44-white-70)",
              }}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────── Sub-components ───────────────────── */

const KenBurnsSlide = ({ slide, reducedMotion }) => {
  const motionClass = !reducedMotion ? `kb-${slide.motion}` : "";
  const base = `/work/${slide.image}${ASSET_SUFFIX}`;
  return (
    <motion.div
      data-testid={`work-slide-${slide.id}`}
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      role="group"
      aria-roledescription="slide"
      aria-label={slide.title}
    >
      <picture>
        <source
          type="image/webp"
          srcSet={`${base}-1280.webp 1280w, ${base}-1600.webp 1600w, ${base}-1920.webp 1920w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        />
        <img
          src={`${base}-1600.jpg`}
          srcSet={`${base}-1280.jpg 1280w, ${base}-1600.jpg 1600w, ${base}-1920.jpg 1920w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          alt={`${slide.title} — Latitude44 web project`}
          loading="eager"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${motionClass}`}
          style={{ transformOrigin: "center center" }}
        />
      </picture>
    </motion.div>
  );
};

const WorkShowcaseCaption = ({ slide }) => (
  <div
    data-testid="work-showcase-caption"
    className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9 z-[3]"
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <div className="l44-eyebrow mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          {slide.tags.map((t, i) => (
            <React.Fragment key={t}>
              {i > 0 && (
                <span aria-hidden style={{ color: "var(--l44-white-55)" }}>·</span>
              )}
              <span style={{ color: "var(--l44-gold)" }}>{t}</span>
            </React.Fragment>
          ))}
        </div>
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
          style={{ color: "var(--l44-white)" }}
        >
          {slide.title}
        </h3>
        <p
          className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed"
          style={{ color: "var(--l44-white-85)" }}
        >
          {slide.blurb}
        </p>
        {slide.href && slide.href.startsWith("http") && (
          <a
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`work-slide-link-${slide.id}`}
            className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold"
            style={{ color: "var(--l44-gold)" }}
          >
            Visit site <ArrowUpRight size={14} />
          </a>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
);

const WorkShowcaseControls = ({ count, active, setActive, advance, paused, setPaused }) => (
  <>
    <button
      type="button"
      onClick={() => advance(-1)}
      aria-label="Previous project"
      data-testid="work-prev-button"
      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-[4] h-10 w-10 rounded-full border inline-flex items-center justify-center transition-colors"
      style={{
        borderColor: "var(--l44-border-gold-hairline)",
        background: "var(--l44-navy-veil-70)",
        color: "var(--l44-gold)",
      }}
    >
      <ChevronLeft size={18} />
    </button>
    <button
      type="button"
      onClick={() => advance(1)}
      aria-label="Next project"
      data-testid="work-next-button"
      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[4] h-10 w-10 rounded-full border inline-flex items-center justify-center transition-colors"
      style={{
        borderColor: "var(--l44-border-gold-hairline)",
        background: "var(--l44-navy-veil-70)",
        color: "var(--l44-gold)",
      }}
    >
      <ChevronRight size={18} />
    </button>

    <div
      className="absolute top-3 sm:top-5 right-3 sm:right-5 z-[4] flex items-center gap-2"
      data-testid="work-meta"
    >
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        data-testid="work-play-pause"
        className="h-8 w-8 rounded-full border inline-flex items-center justify-center"
        style={{
          borderColor: "var(--l44-border-gold-hairline)",
          background: "var(--l44-navy-veil-70)",
          color: "var(--l44-gold)",
        }}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
      <span
        className="text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
        style={{
          background: "var(--l44-navy-veil-70)",
          border: "1px solid var(--l44-border-hairline)",
          color: "var(--l44-white-85)",
        }}
      >
        {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </span>
    </div>

    <div
      className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-[4] flex gap-2"
      data-testid="work-pagination"
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === active}
          className="h-1.5 rounded-full transition-all"
          style={{
            width: i === active ? 26 : 8,
            background: i === active ? "var(--l44-gold)" : "rgba(255,255,255,0.45)",
          }}
        />
      ))}
    </div>
  </>
);

export default WorkShowcase;
