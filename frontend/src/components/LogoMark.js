import React from "react";

/**
 * Latitude44 logo lockup (Option 2 — dark palette usage)
 * - Falcon silhouette facing right in white
 * - Integrated gold lightning-bolt / mountain accent
 * - Wordmark: LATITUDE44 (44 in gold)
 *
 * Sizes are controlled via props so we can reuse in navbar, hero, and footer.
 */
export const FalconMark = ({ size = 48, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    role="img"
    aria-label="Latitude44 falcon mark"
  >
    {/*
      Stylised falcon head facing right.
      Proportions inspired by Option 2 of the brand sheet:
      - rounded crown tapering to a pointed beak on the right
      - angular cheek cut
      - small gold eye
      - integrated gold mountain / lightning bolt beneath
    */}
    {/* Falcon head silhouette */}
    <path
      fill="#FFFFFF"
      d="
        M 18 50
        C 18 34, 30 22, 48 22
        C 60 22, 70 27, 76 35
        L 92 33
        L 78 46
        L 84 50
        L 72 52
        L 72 57
        L 62 55
        L 56 60
        L 34 60
        L 24 54
        Z
      "
    />
    {/* Sharp beak tip accent */}
    <path fill="#FFFFFF" d="M 76 35 L 92 33 L 78 46 Z" />
    {/* Cheek/jaw cut (defines face) */}
    <path
      fill="#0A1A2A"
      d="
        M 42 34
        L 68 34
        L 62 42
        L 40 42
        Z
      "
    />
    {/* Eye */}
    <circle cx="62" cy="38" r="2.4" fill="#C8A25A" />
    {/* Gold mountain + integrated lightning bolt */}
    <path
      fill="#C8A25A"
      d="
        M 20 86
        L 42 56
        L 50 66
        L 58 50
        L 52 66
        L 64 64
        L 44 90
        L 48 78
        L 36 82
        Z
      "
    />
  </svg>
);

export const Wordmark = ({ className = "", size = "md" }) => {
  const sizeMap = {
    sm: "text-base sm:text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-5xl sm:text-6xl",
  };
  return (
    <span
      className={`font-semibold tracking-[0.18em] ${sizeMap[size] || sizeMap.md} ${className}`}
      style={{ color: "var(--l44-white)" }}
    >
      LATITUDE
      <span style={{ color: "var(--l44-gold)" }}>44</span>
    </span>
  );
};

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
