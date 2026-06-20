import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import usePageMeta from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";
import WorkShowcase from "../components/WorkShowcase";

/** Quick stats / signal-of-trust strip. */
const STATS = [
  { value: "100%", label: "NZ owned & operated" },
  { value: "8", label: "core disciplines" },
  { value: "24h", label: "first response, business days" },
  { value: "∞", label: "care after launch" },
];

/** Project list (under the Ken-Burns showcase). Mirrors the showcase. */
const PROJECTS = [
  {
    id: "southern_bullion",
    title: "Southern Bullion Exchange",
    tags: "E-commerce · Live pricing · Brand",
    blurb:
      "Premium landing for a Christchurch bullion dealer — live precious-metal prices, booking flow and educational hub.",
    href: "https://www.southernbullionex.co.nz",
  },
  {
    id: "augustine_academy",
    title: "Augustine Academy",
    tags: "Education · Donations · CMS",
    blurb:
      "Refined site for a liberal-arts academy — admissions, faculty profiles and a refreshed donor pathway.",
  },
  {
    id: "so_long_south_america",
    title: "So Long, South America",
    tags: "Author · Storefront · Marketing",
    blurb:
      "Book launch site for author Pat Barrett — cinematic hero, sales links and review wall.",
  },
  {
    id: "armoured_llama",
    title: "Armoured Llama Auto",
    tags: "Automotive · Local SEO · Lead-gen",
    blurb:
      "Conversion-focused site for a Christchurch mechanic offering a personal pickup-and-delivery service.",
  },
  {
    id: "bens_plumbing",
    title: "Ben’s Plumbing",
    tags: "Trades · Local SEO · Brand",
    blurb:
      "Direct, no-nonsense plumbing and drainlaying site across North Canterbury — bold visuals, quick contact.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const WorkPage = () => {
  usePageMeta({
    title: "Work — Selected projects across New Zealand | Latitude44",
    description:
      "Selected web and app projects by Latitude44 — for NZ bullion dealers, academies, authors, trades and more.",
  });

  return (
    <>
      <PageBanner
        eyebrow="Recent Work"
        title="Work that quietly performs."
        blurb="A glimpse at recent client builds — from a Christchurch bullion dealer to a North Canterbury plumbing business, and an author’s book launch in between."
        image="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Designer working on a screen with code and visual layouts"
        testId="work-banner"
      />

      <WorkShowcase />

      {/* Stats strip */}
      <section
        data-testid="work-stats"
        className="l44-section pt-0"
        style={{ backgroundColor: "var(--l44-navy)" }}
      >
        <div className="l44-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-1"
                style={{
                  border: "1px solid var(--l44-border-hairline)",
                  background: "var(--l44-navy-veil-85)",
                }}
              >
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--l44-gold)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[11px] tracking-[0.16em] uppercase leading-snug"
                  style={{ color: "var(--l44-white-70)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project list (text-first details) */}
      <section
        data-testid="work-list"
        className="l44-section pt-0"
        style={{ backgroundColor: "var(--l44-navy)" }}
      >
        <div className="l44-container">
          <motion.div {...fadeUp} className="max-w-3xl mb-10 sm:mb-12">
            <span className="l44-eyebrow">
              <span className="l44-gold-rule" /> Project notes
            </span>
            <h2
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
              style={{ color: "var(--l44-white)" }}
            >
              A closer read on each build.
            </h2>
          </motion.div>

          <ul className="flex flex-col">
            {PROJECTS.map((p, i) => (
              <motion.li
                key={p.id}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`work-project-${p.id}`}
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-[3rem_1fr_auto] sm:items-start gap-x-4 sm:gap-x-6 gap-y-2"
                style={{ borderTop: "1px solid var(--l44-border-hairline)" }}
              >
                {/* Column 1 — Project number */}
                <span
                  className="text-[11px] tracking-[0.22em] uppercase font-semibold sm:pt-1"
                  style={{ color: "var(--l44-gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Column 2 — Tags + title + blurb */}
                <div className="min-w-0">
                  <div
                    className="text-[11px] tracking-[0.22em] uppercase"
                    style={{ color: "var(--l44-gold)" }}
                  >
                    {p.tags}
                  </div>
                  <h3
                    className="mt-1.5 text-lg sm:text-xl font-semibold leading-snug"
                    style={{ color: "var(--l44-white)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-1.5 text-sm leading-relaxed max-w-3xl"
                    style={{ color: "var(--l44-white-70)" }}
                  >
                    {p.blurb}
                  </p>
                </div>

                {/* Column 3 — Visit link (right-aligned) */}
                <div className="sm:pt-1 flex sm:justify-end">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`work-project-link-${p.id}`}
                      className="inline-flex items-center gap-1 text-[11px] tracking-[0.18em] uppercase font-semibold whitespace-nowrap transition-colors"
                      style={{ color: "var(--l44-gold)" }}
                    >
                      Visit <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span
                      className="hidden sm:inline-flex items-center text-[11px] tracking-[0.18em] uppercase whitespace-nowrap"
                      style={{ color: "var(--l44-white-55)" }}
                      aria-hidden
                    >
                      —
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Start your project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase border"
              style={{
                borderColor: "var(--l44-border-gold-hairline)",
                color: "var(--l44-white)",
                background: "var(--l44-gold-08)",
              }}
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
