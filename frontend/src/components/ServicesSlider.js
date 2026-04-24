import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SLIDES = [
  {
    id: "development",
    tag: "Build",
    title: "Front-end Web &amp; App Development",
    copy: "Modern React interfaces, progressive web apps and native-feel mobile experiences — performant, accessible and built to scale.",
    image:
      "https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
  {
    id: "ai",
    tag: "Integrate",
    title: "AI Integration Tools &amp; Methods",
    copy: "Pragmatic AI built into the workflows that matter — from LLM copilots and automation to custom data pipelines and evaluation.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
  {
    id: "hardware",
    tag: "Recover",
    title: "Hardware Support &amp; Data Recovery",
    copy: "Legacy media rescue — 3.5″ floppy, Super 8, VHS, failing hard drives — plus upgrades, diagnostics and long-term IT support.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const ServicesSlider = () => {
  return (
    <section
      id="work"
      data-testid="slider-section"
      className="l44-section l44-noise"
      style={{ backgroundColor: "var(--l44-navy)" }}
    >
      <div className="l44-container">
        <motion.div {...fadeUp} className="mb-8 sm:mb-10 flex flex-col gap-3">
          <span className="l44-eyebrow">
            <span className="l44-gold-rule" /> Capabilities in motion
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
            style={{ color: "var(--l44-white)" }}
          >
            Work that quietly performs.
          </h2>
          <p
            className="max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--l44-white-70)" }}
          >
            A glimpse at the disciplines Latitude44 operates across — from modern web
            builds to AI integration and vintage media data recovery.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl border"
          style={{
            borderColor: "var(--l44-border-hairline)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <Swiper
            data-testid="services-image-slider"
            modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            keyboard={{ enabled: true }}
            pagination={{ clickable: true, el: ".l44-slider-pagination" }}
            navigation={{
              nextEl: ".l44-slider-next",
              prevEl: ".l44-slider-prev",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={900}
            className="w-full aspect-[16/9] sm:aspect-[21/9]"
          >
            {SLIDES.map((s, i) => (
              <SwiperSlide key={s.id} data-testid={`services-image-slide-${i}`}>
                <div className="relative h-full w-full">
                  <img
                    src={s.image}
                    alt={s.title.replace(/&amp;/g, "&")}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(10,26,42,0.92) 0%, rgba(10,26,42,0.62) 45%, rgba(10,26,42,0.25) 100%)",
                    }}
                    aria-hidden
                  />
                  <div className="relative h-full w-full flex items-end">
                    <div className="p-6 sm:p-10 max-w-2xl">
                      <div className="l44-eyebrow mb-2">
                        <span className="l44-gold-rule" /> {s.tag}
                      </div>
                      <h3
                        className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-[-0.01em]"
                        style={{ color: "var(--l44-white)" }}
                        dangerouslySetInnerHTML={{ __html: s.title }}
                      />
                      <p
                        className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed"
                        style={{ color: "var(--l44-white-85)" }}
                      >
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom controls */}
          <button
            type="button"
            aria-label="Previous slide"
            data-testid="slider-prev-button"
            className="l44-slider-prev absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border inline-flex items-center justify-center"
            style={{
              borderColor: "var(--l44-border-gold-hairline)",
              background: "var(--l44-navy-veil-70)",
              color: "var(--l44-gold)",
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            data-testid="slider-next-button"
            className="l44-slider-next absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border inline-flex items-center justify-center"
            style={{
              borderColor: "var(--l44-border-gold-hairline)",
              background: "var(--l44-navy-veil-70)",
              color: "var(--l44-gold)",
            }}
          >
            ›
          </button>

          <div
            className="l44-slider-pagination absolute bottom-3 sm:bottom-5 left-0 right-0 z-10 flex justify-center gap-2"
            data-testid="services-image-slider-pagination"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSlider;
