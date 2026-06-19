import React from "react";

/**
 * Official-style Google Play badge — inline SVG so it scales perfectly,
 * works on any background, and ships zero KB beyond the markup.
 * Uses Google Play's signature multi-colour triangle mark and the
 * "GET IT ON · Google Play" lockup, with brand-safe colours.
 *
 * Pass `href` to link to your listing. Default opens a tab to play store.
 */
const GooglePlayBadge = ({
  href = "https://play.google.com/store/apps",
  className = "",
  height = 56,
  testId = "google-play-badge",
  ariaLabel = "Get it on Google Play",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    data-testid={testId}
    className={`inline-flex items-center transition-transform hover:-translate-y-[1px] focus:-translate-y-[1px] focus:outline-none ${className}`}
    style={{ height }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 56"
      height={height}
      width={(180 / 56) * height}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gp-yellow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFD000" />
          <stop offset="1" stopColor="#FFB000" />
        </linearGradient>
        <linearGradient id="gp-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF4338" />
          <stop offset="1" stopColor="#E83329" />
        </linearGradient>
        <linearGradient id="gp-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00C257" />
          <stop offset="1" stopColor="#00A03E" />
        </linearGradient>
        <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00C0FF" />
          <stop offset="1" stopColor="#0089E7" />
        </linearGradient>
      </defs>

      {/* Outer rounded button */}
      <rect
        x="0.5"
        y="0.5"
        width="179"
        height="55"
        rx="10"
        ry="10"
        fill="#000000"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1"
      />

      {/* Google Play triangle (left side) */}
      <g transform="translate(14, 12)">
        {/* Blue triangle (back) */}
        <path
          d="M0.6 0.5 L17.6 16 L0.6 31.5 C0.2 31.2 0 30.6 0 30 L0 2 C0 1.4 0.2 0.8 0.6 0.5 Z"
          fill="url(#gp-blue)"
        />
        {/* Green triangle (top-right) */}
        <path
          d="M21.5 12.5 L17.6 16 L0.6 0.5 C0.9 0.3 1.3 0.2 1.7 0.2 C2 0.2 2.4 0.3 2.7 0.4 L21.5 11 C22 11.3 22.3 11.8 22.4 12.2 L21.5 12.5 Z"
          fill="url(#gp-green)"
        />
        {/* Yellow triangle (bottom-right) */}
        <path
          d="M21.5 19.5 L22.4 19.8 C22.3 20.2 22 20.7 21.5 21 L2.7 31.6 C2.4 31.7 2 31.8 1.7 31.8 C1.3 31.8 0.9 31.7 0.6 31.5 L17.6 16 L21.5 19.5 Z"
          fill="url(#gp-yellow)"
        />
        {/* Red triangle (front overlay) */}
        <path
          d="M21.5 11 L25.5 13.3 C26.5 13.9 27 14.9 27 16 C27 17.1 26.5 18.1 25.5 18.7 L21.5 21 L17.6 16 L21.5 11 Z"
          fill="url(#gp-red)"
        />
      </g>

      {/* "GET IT ON" tagline */}
      <text
        x="52"
        y="22"
        fill="#FFFFFF"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="0.5"
      >
        GET IT ON
      </text>
      {/* "Google Play" wordmark */}
      <text
        x="52"
        y="42"
        fill="#FFFFFF"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="0.2"
      >
        Google Play
      </text>
    </svg>
  </a>
);

export default GooglePlayBadge;
