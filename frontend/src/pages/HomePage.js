import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code2, Sparkles, Wrench } from "lucide-react";

import usePageMeta from "../hooks/usePageMeta";
import HeroVideo from "../components/HeroVideo";

/**
 * Home page — deliberately concise. Visitors get the brand identity from
 * the hero, then four signposted next-steps that link to deeper pages.
 */

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    eyebrow: "Latest project",
    title: "Claude Learn",
    blurb:
      "AI tutoring powered by Anthropic’s Claude — personalised lessons, adaptive practice and instant feedback.",
    to: "/claude-learn",
    cta: "Explore Claude Learn",
    localBase: "/highlights/claude-learn-card",
    widths: [640, 960, 1280],
    imageAlt:
      "Smiling professional studying with her phone, laptop and an open book in a library",
  },
  {
    icon: Code2,
    eyebrow: "Recent work",
    title: "Built across NZ",
    blurb:
      "Web and app builds for bullion dealers, academies, authors and local trades — quietly performant, beautifully designed.",
    to: "/work",
    cta: "See the work",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "NZ landscape",
  },
  {
    icon: BrainCircuit,
    eyebrow: "What we do",
    title: "Eight services",
    blurb:
      "From greenfield web and app builds to AI integration, consulting, hardware support and specialist data recovery.",
    to: "/services",
    cta: "Browse services",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Circuit board macro",
  },
  {
    icon: Wrench,
    eyebrow: "Specialist",
    title: "Data recovery",
    blurb:
      "Preserve what matters. Specialist recovery from 3.5″ floppy, Super 8, VHS and failing hard drives.",
    to: "/services",
    cta: "Recover my media",
    image:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Vintage floppy disks",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const HomePage = () => {
  usePageMeta({
    title:
      "Latitude44 | Digital Solutions, Precision, Performance — Canterbury, New Zealand",
  });

  return (
    <>
      <HeroVideo />

      {/* ===== Quick navigation cards ===== */}
      <section
        id="home-highlights"
        data-testid="home-highlights"
        className="l44-section"
        style={{
          backgroundColor: "var(--l44-navy)",
          borderTop: "1px solid var(--l44-border-hairline)",
        }}
      >
        <div className="l44-container">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-3 mb-10 sm:mb-14 max-w-3xl"
          >
            <span className="l44-eyebrow inline-flex items-center gap-3">
              <span className="l44-gold-rule" />
              Where to next
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.01em] leading-[1.1]"
              style={{ color: "var(--l44-white)" }}
            >
              A focused studio. Pick a direction.
            </h2>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "var(--l44-white-70)" }}
            >
              Latitude44 is a Canterbury-based digital studio building precise web and
              mobile products, integrating AI, and rescuing critical data — with the same
              standard applied to every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {HIGHLIGHTS.map(({ icon: Icon, ...h }, i) => (
              <motion.article
                key={h.title}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`home-highlight-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-2xl flex flex-col"
                style={{
                  border: "1px solid var(--l44-border-hairline)",
                  background: "var(--l44-navy-veil-85)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  {h.localBase ? (
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={h.widths
                          .map((w) => `${h.localBase}-${w}.webp ${w}w`)
                          .join(", ")}
                        sizes="(max-width: 768px) 92vw, 600px"
                      />
                      <img
                        src={`${h.localBase}-${h.widths[1]}.jpg`}
                        srcSet={h.widths
                          .map((w) => `${h.localBase}-${w}.jpg ${w}w`)
                          .join(", ")}
                        sizes="(max-width: 768px) 92vw, 600px"
                        alt={h.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    </picture>
                  ) : (
                    <img
                      src={h.image}
                      alt={h.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,26,42,0.25) 0%, rgba(10,26,42,0.65) 75%, rgba(10,26,42,0.92) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase"
                      style={{
                        border: "1px solid var(--l44-border-gold-hairline)",
                        background: "var(--l44-gold-10)",
                        color: "var(--l44-gold)",
                      }}
                    >
                      <Icon size={11} />
                      {h.eyebrow}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5 sm:p-6">
                  <h3
                    className="text-xl sm:text-2xl font-semibold tracking-[-0.01em]"
                    style={{ color: "var(--l44-white)" }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--l44-white-70)" }}
                  >
                    {h.blurb}
                  </p>
                  <Link
                    to={h.to}
                    data-testid={`home-highlight-cta-${h.to.replace("/", "") || "home"}`}
                    className="mt-3 inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--l44-gold)" }}
                  >
                    {h.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact CTA banner ===== */}
      <section
        data-testid="home-contact-cta"
        className="l44-section"
        style={{
          backgroundColor: "var(--l44-navy)",
          borderTop: "1px solid var(--l44-border-hairline)",
        }}
      >
        <div className="l44-container">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-2xl px-6 py-10 sm:px-12 sm:py-14 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{
              border: "1px solid var(--l44-border-gold-hairline)",
              background:
                "linear-gradient(135deg, rgba(10,26,42,1) 0%, rgba(10,26,42,0.85) 50%, rgba(200,162,90,0.10) 100%)",
            }}
          >
            <div className="max-w-2xl">
              <span className="l44-eyebrow">Start a conversation</span>
              <h3
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
                style={{ color: "var(--l44-white)" }}
              >
                Tell us what you&apos;re building.
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--l44-white-85)" }}
              >
                A few sentences are enough — we&apos;ll reply from
                latitude44@protonmail.com within one business day (NZST).
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="home-contact-cta-button"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
