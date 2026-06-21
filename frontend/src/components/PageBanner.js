import React from "react";
import { motion } from "framer-motion";

/**
 * <PageBanner /> — reusable banner used at the top of every interior page.
 *
 *   <PageBanner
 *      eyebrow="Services"
 *      title="Six disciplines, one standard."
 *      blurb="Optional short paragraph..."
 *      image="https://..."
 *      imageAlt="..."
 *   />
 *
 * Visual goals:
 *  • Generous whitespace, navy ground.
 *  • Subtle parallax-style image on right (desktop) / above (mobile).
 *  • Gold accent rule + eyebrow for consistency with the rest of the site.
 */
const PageBanner = ({
  eyebrow,
  title,
  blurb,
  image,
  imageAlt = "",
  align = "left",
  testId = "page-banner",
  children,
}) => {
  return (
    <section
      data-testid={testId}
      className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden l44-noise"
      style={{ backgroundColor: "var(--l44-navy)" }}
    >
      {/* Soft gold radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 380px at 90% 8%, rgba(200,162,90,0.10), transparent 60%), radial-gradient(700px 320px at 0% 100%, rgba(200,162,90,0.06), transparent 60%)",
        }}
      />

      <div className="l44-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`order-2 lg:order-1 ${image ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col gap-4`}
            style={{ textAlign: align }}
          >
            {eyebrow && (
              <span className="l44-eyebrow inline-flex items-center gap-3">
                <span className="l44-gold-rule" />
                {eyebrow}
              </span>
            )}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-[-0.015em]"
              style={{ color: "var(--l44-white)" }}
            >
              {title}
            </h1>
            {blurb && (
              <p
                className="mt-2 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed"
                style={{ color: "var(--l44-white-70)" }}
              >
                {blurb}
              </p>
            )}
            {children && <div className="mt-4">{children}</div>}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:col-span-5 w-full"
            >
              <div
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--l44-border-gold-hairline)",
                  boxShadow: "var(--shadow-gold-glow)",
                }}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* subtle navy veil for legibility & brand cohesion */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,26,42,0) 0%, rgba(10,26,42,0.55) 100%)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
