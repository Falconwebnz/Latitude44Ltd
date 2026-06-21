import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  ShoppingBag,
  Wrench,
  HardDriveDownload,
  ArrowRight,
} from "lucide-react";

import usePageMeta from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";

/**
 * Services page — each of the 6 disciplines gets a full card with image,
 * icon, title and description. Mobile-first responsive grid.
 */

const SERVICES = [
  {
    id: "web",
    icon: Code2,
    title: "Front-end Web Development",
    desc: "Modern, accessible React and Next.js interfaces. Fast, responsive and built to convert — with design systems you can grow.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer keyboard with code editor",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile and PWA experiences — thoughtful UX, clean integrations and reliable release pipelines.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile devices and app design",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Integration",
    desc: "LLM copilots, retrieval pipelines and automation embedded into real workflows — with evaluation and guardrails in mind.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract AI / neural visualisation",
  },
  {
    id: "products",
    icon: ShoppingBag,
    title: "Product Sales",
    desc: "Curated hardware and software — supplied, configured and supported, so the tools are ready the day they arrive.",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern laptop and peripherals on a desk",
  },
  {
    id: "hardware",
    icon: Wrench,
    title: "Hardware Support",
    desc: "Diagnostics, upgrades and troubleshooting for laptops, desktops and peripherals — keeping critical kit running.",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80",
    alt: "Hands repairing a circuit board",
  },
  {
    id: "recovery",
    icon: HardDriveDownload,
    title: "Data Recovery",
    desc: "Specialist recovery from 3.5″ floppy disks, Super 8, VHS and failing hard drives. Preserve what matters.",
    image:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&fit=crop&w=1200&q=80",
    alt: "Vintage floppy disks stacked",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServicesPage = () => {
  usePageMeta({
    title: "Services — Web, App, AI, Product Sales, Hardware & Data Recovery | Latitude44",
    description:
      "Six disciplines, one standard. Front-end web and app development, AI integration, product sales, hardware support and specialist data recovery — from Latitude44 in Canterbury, New Zealand.",
    path: "/services",
  });

  return (
    <>
      <PageBanner
        eyebrow="What we do"
        title="Six disciplines, one standard."
        blurb="From greenfield web builds and AI integration to recovering decades-old media, Latitude44 brings a single, considered standard to every engagement."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Macro circuit board photograph"
        testId="services-banner"
      />

      <section
        id="services"
        data-testid="services-section"
        className="l44-section pt-0"
        style={{ backgroundColor: "var(--l44-navy)" }}
      >
        <div className="l44-container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.id}
                  data-testid="service-card"
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl flex flex-col"
                  style={{
                    border: "1px solid var(--l44-border-hairline)",
                    background: "var(--l44-navy-veil-85)",
                    boxShadow: "var(--shadow-soft)",
                    transition:
                      "border-color 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--l44-border-gold-hairline)";
                    e.currentTarget.style.boxShadow = "var(--shadow-gold-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--l44-border-hairline)";
                    e.currentTarget.style.boxShadow = "var(--shadow-soft)";
                  }}
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,26,42,0.20) 0%, rgba(10,26,42,0.55) 60%, rgba(10,26,42,0.92) 100%)",
                      }}
                    />
                    <span
                      className="absolute top-3 left-3 h-10 w-10 rounded-xl inline-flex items-center justify-center"
                      style={{
                        border: "1px solid var(--l44-border-gold-hairline)",
                        background: "var(--l44-navy-veil-85)",
                        color: "var(--l44-gold)",
                      }}
                      aria-hidden
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 p-5 sm:p-6 flex-1">
                    <h3
                      className="text-lg sm:text-xl font-semibold leading-snug"
                      style={{ color: "var(--l44-white)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--l44-white-70)" }}
                    >
                      {s.desc}
                    </p>
                    <div
                      aria-hidden
                      className="h-px w-10 mt-3"
                      style={{ background: "var(--l44-gold-28)" }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              data-testid="services-contact-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Discuss your project <ArrowRight size={16} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase border"
              style={{
                borderColor: "var(--l44-border-gold-hairline)",
                color: "var(--l44-white)",
                background: "var(--l44-gold-08)",
              }}
            >
              See recent work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
