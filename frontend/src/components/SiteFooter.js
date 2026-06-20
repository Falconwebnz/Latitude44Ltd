import React from "react";
import { Link } from "react-router-dom";
import { FalconMark, Wordmark } from "./LogoMark";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative"
      style={{
        backgroundColor: "var(--l44-navy)",
        borderTop: "1px solid var(--l44-border-hairline)",
      }}
    >
      <div className="l44-container py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Latitude44 home">
              <FalconMark size={36} />
              <Wordmark size="sm" />
            </Link>
            <p className="mt-3 text-sm max-w-xs" style={{ color: "var(--l44-white-70)" }}>
              Digital Solutions. Precision. Performance. — Engineered in New Zealand.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="l44-eyebrow">Contact</span>
            <a
              href="mailto:latitude44@protonmail.com"
              data-testid="footer-email-link"
              className="text-sm"
              style={{ color: "var(--l44-white-85)" }}
            >
              latitude44@protonmail.com
            </a>
            <address
              className="not-italic text-sm leading-relaxed"
              style={{ color: "var(--l44-white-70)" }}
            >
              123 King Street, Rangiora
              <br />
              Canterbury 7400, New Zealand
            </address>
          </div>

          <div className="flex flex-col gap-2">
            <span className="l44-eyebrow">Navigate</span>
            <nav className="flex flex-col gap-1.5 text-sm" aria-label="Footer">
              <Link to="/" className="hover:text-white" style={{ color: "var(--l44-white-85)" }}>
                Home
              </Link>
              <Link to="/claude-learn" className="hover:text-white" style={{ color: "var(--l44-white-85)" }}>
                Claude Learn
              </Link>
              <Link to="/work" className="hover:text-white" style={{ color: "var(--l44-white-85)" }}>
                Work
              </Link>
              <Link to="/services" className="hover:text-white" style={{ color: "var(--l44-white-85)" }}>
                Services
              </Link>
              <Link to="/contact" className="hover:text-white" style={{ color: "var(--l44-white-85)" }}>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--l44-border-hairline)" }}
        >
          <p className="text-xs" style={{ color: "var(--l44-white-55)" }}>
            &copy; {year} Latitude44 (NZ) Limited. All rights reserved.
          </p>
          <a
            href="https://latitude44.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-domain-link"
            className="text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-[color:var(--l44-gold)]"
            style={{ color: "var(--l44-white-55)" }}
          >
            latitude44.co.nz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
