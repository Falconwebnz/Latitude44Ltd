import React from "react";

/**
 * Official Latitude44 brand assets (Option 2).
 * All variants are exported as plain React components so they can be dropped
 * anywhere in the layout. Assets are sourced from /public/brand/ and produced
 * from the client-provided brand sheet.
 */

// Sizes are pure passthroughs — callers control layout via className / height.

/** White-on-transparent falcon + mountain inside the gold ring. */
export const FalconMark = ({ size = 48, className = "", alt = "Latitude44" }) => (
  <img
    src="/brand/latitude44_icon_circle_light.png"
    alt={alt}
    width={size}
    height={size}
    className={className}
    style={{ objectFit: "contain", objectPosition: "center", display: "block" }}
    loading="eager"
    decoding="async"
  />
);

/** Full lockup (icon + LATITUDE44 wordmark + tagline), white/gold for dark bg.
 *  Pass `height` for a fixed pixel size, OR omit it and control via the
 *  `className` (e.g. `w-full max-w-[480px] h-auto`) for fluid layouts.
 */
export const PrimaryLockup = ({
  className = "",
  height,
  alt = "Latitude44 — Digital Solutions. Precision. Performance.",
}) => {
  const inlineStyle =
    height != null
      ? { height, width: "auto", display: "block" }
      : { display: "block", maxWidth: "100%", height: "auto" };
  return (
    <img
      src="/brand/latitude44_primary_lockup_light.png"
      alt={alt}
      {...(height != null ? { height } : {})}
      className={className}
      style={inlineStyle}
      loading="eager"
      decoding="async"
    />
  );
};

/** Wordmark only: LATITUDE44 + tagline (white/gold). */
export const Wordmark = ({ className = "", size = "md" }) => {
  const sizeMap = {
    sm: 22,
    md: 32,
    lg: 46,
    xl: 64,
  };
  const h = sizeMap[size] || sizeMap.md;
  return (
    <img
      src="/brand/latitude44_wordmark_only_light.png"
      alt="LATITUDE44"
      height={h}
      className={className}
      style={{ height: h, width: "auto", display: "block" }}
      loading="eager"
      decoding="async"
    />
  );
};

/**
 * Horizontal lockup for navbars / footers: icon + wordmark, side by side.
 */
export const LogoLockup = ({ wordmarkSize = "md", markSize = 44, stacked = false, className = "" }) => {
  if (stacked) {
    return (
      <div className={`flex flex-col items-start gap-2 ${className}`}>
        <FalconMark size={markSize} />
        <Wordmark size={wordmarkSize} />
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <FalconMark size={markSize} />
      <Wordmark size={wordmarkSize} />
    </div>
  );
};

/** The decorative tagline with gold rules on either side (for inline use). */
export const Tagline = ({ className = "" }) => (
  <div
    className={`flex items-center gap-3 text-[0.72rem] sm:text-xs tracking-[0.26em] uppercase ${className}`}
    style={{ color: "var(--l44-white-70)" }}
  >
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: 28,
        height: 1,
        background: "var(--l44-gold)",
      }}
    />
    <span>Digital Solutions. Precision. Performance.</span>
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: 28,
        height: 1,
        background: "var(--l44-gold)",
      }}
    />
  </div>
);

export default LogoLockup;
