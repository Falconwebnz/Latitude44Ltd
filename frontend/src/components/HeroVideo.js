import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FalconMark, Wordmark, Tagline } from "./LogoMark";

// Stable, royalty-free Pexels stock video (NZ-feel mountain/drone aerials)
const VIDEO_SOURCES = [
  "https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_24fps.mp4", // mountains drone
  "https://videos.pexels.com/video-files/2098988/2098988-uhd_2560_1440_30fps.mp4", // alpine
];
const POSTER = "https://images.pexels.com/photos/34033017/pexels-photo-34033017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1500";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Try to play if paused by browser policies
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden l44-noise"
      style={{ backgroundColor: "var(--l44-navy)" }}
    >
      {/* Poster fallback (always visible beneath video) */}
      <img
        src={POSTER}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: videoReady ? 0 : 0.55, transition: "opacity 600ms ease" }}
      />

      {/* Background video */}
      <video
        ref={videoRef}
        data-testid="hero-video"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        onCanPlay={() => setVideoReady(true)}
        onLoadedData={() => setVideoReady(true)}
        style={{ opacity: videoReady ? 0.75 : 0 }}
      >
        {VIDEO_SOURCES.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      {/* Navy veil + gradient (hero only) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,42,0.60) 0%, rgba(10,26,42,0.70) 55%, rgba(10,26,42,0.95) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(200,162,90,0.08), transparent 60%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 min-h-[100svh] pt-28 pb-20 flex items-center">
        <div className="w-full max-w-3xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <FalconMark size={56} />
            <Wordmark size="lg" />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <Tagline />
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-headline"
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.01em]"
            style={{ color: "var(--l44-white)" }}
          >
            Precision digital solutions
            <span style={{ color: "var(--l44-gold)" }}>.</span>
            <br />
            Engineered in New Zealand.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--l44-white-85)" }}
          >
            Latitude44 builds fast, reliable web and app products, integrates modern AI,
            and rescues critical data — from old 3.5″ floppy disks and VHS to failing
            hard drives. Based in Leithfield, Canterbury. Serving all of New Zealand.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              data-testid="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap transition-[background-color,box-shadow] duration-200"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap border transition-colors duration-200"
              style={{
                borderColor: "var(--l44-border-gold-hairline)",
                color: "var(--l44-white)",
                background: "var(--l44-gold-08)",
              }}
            >
              Explore Services
            </a>
            <a
              href="mailto:admin@latitude44.co.nz"
              data-testid="hero-email-link"
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.14em] uppercase ml-0 sm:ml-2 sm:self-center"
              style={{ color: "var(--l44-white-85)" }}
            >
              <Mail size={14} />
              admin@latitude44.co.nz
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--l44-gold-28), transparent)" }}
        aria-hidden
      />
    </section>
  );
};

export default HeroVideo;
