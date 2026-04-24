import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Lightbulb,
  GraduationCap,
  ShoppingBag,
  Wrench,
  HardDriveDownload,
} from "lucide-react";

const SERVICES = [
  {
    id: "web",
    icon: Code2,
    title: "Front-end Web Development",
    desc: "Modern, accessible React and Next.js interfaces. Fast, responsive and built to convert — with design systems you can grow.",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile and PWA experiences — thoughtful UX, clean integrations and reliable release pipelines.",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Integration",
    desc: "LLM copilots, retrieval pipelines and automation embedded into real workflows — with evaluation and guardrails in mind.",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Consulting",
    desc: "Product, architecture and delivery guidance for NZ businesses — pragmatic strategy that respects your timeline and budget.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    desc: "Hands-on workshops and team training across web, mobile and AI — from fundamentals to modern engineering practice.",
  },
  {
    id: "products",
    icon: ShoppingBag,
    title: "Product Sales",
    desc: "Curated hardware and software — supplied, configured and supported, so the tools are ready the day they arrive.",
  },
  {
    id: "hardware",
    icon: Wrench,
    title: "Hardware Support",
    desc: "Diagnostics, upgrades and troubleshooting for laptops, desktops and peripherals — keeping critical kit running.",
  },
  {
    id: "recovery",
    icon: HardDriveDownload,
    title: "Data Recovery",
    desc: "Specialist recovery from 3.5″ floppy disks, Super 8, VHS and failing hard drives. Preserve what matters.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ServicesGrid = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="l44-section"
      style={{
        backgroundColor: "var(--l44-navy)",
        borderTop: "1px solid var(--l44-border-hairline)",
      }}
    >
      <div className="l44-container">
        <div className="flex flex-col gap-3 mb-10 sm:mb-14 max-w-3xl">
          <span className="l44-eyebrow">
            <span className="l44-gold-rule" /> What we do
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
            style={{ color: "var(--l44-white)" }}
          >
            Eight disciplines, one standard — precision.
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--l44-white-70)" }}
          >
            From greenfield web builds and AI integration to recovering decades-old
            media, Latitude44 brings a single, considered standard to every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                whileHover={{ y: -2 }}
                className="group relative rounded-2xl p-6 flex flex-col gap-4"
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
                  className="h-11 w-11 rounded-xl flex items-center justify-center"
                  style={{
                    border: "1px solid var(--l44-border-gold-hairline)",
                    background: "var(--l44-gold-10)",
                    color: "var(--l44-gold)",
                  }}
                  aria-hidden
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold leading-snug"
                    style={{ color: "var(--l44-white)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--l44-white-70)" }}
                  >
                    {s.desc}
                  </p>
                </div>
                <div
                  aria-hidden
                  className="h-px w-10 mt-auto"
                  style={{ background: "var(--l44-gold-28)" }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
