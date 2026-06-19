import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FalconMark, Wordmark } from "./LogoMark";

const navItems = [
  { label: "Home", href: "#home", testId: "nav-home-link" },
  { label: "Claude Learn", href: "#claude-learn", testId: "nav-claude-learn-link" },
  { label: "Work", href: "#work", testId: "nav-work-link" },
  { label: "Services", href: "#services", testId: "nav-services-link" },
  { label: "Contact", href: "#contact", testId: "nav-contact-link" },
];

const Latitude44Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[color:var(--l44-navy-veil-92)] backdrop-blur-md border-b border-[color:var(--l44-border-hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          data-testid="nav-logo"
          aria-label="Latitude44 home"
        >
          <FalconMark size={34} />
          <Wordmark size="sm" />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={item.testId}
              className="relative text-sm tracking-[0.14em] uppercase text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)] transition-colors duration-200
                         after:content-[''] after:block after:h-px after:bg-[color:var(--l44-gold)] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta-primary"
            className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-[background-color,color,box-shadow] duration-200"
            style={{
              background: "var(--l44-gold)",
              color: "var(--l44-navy)",
            }}
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          type="button"
          data-testid="nav-mobile-menu-button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden bg-[color:var(--l44-navy-veil-92)] backdrop-blur-md border-t border-[color:var(--l44-border-hairline)]"
          data-testid="nav-mobile-panel"
        >
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                data-testid={`${item.testId}-mobile`}
                className="py-3 text-sm tracking-[0.14em] uppercase text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-3 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Latitude44Navbar;
