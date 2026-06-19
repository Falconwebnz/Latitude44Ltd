import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { FalconMark, Wordmark } from "./LogoMark";

const navItems = [
  { label: "Home", to: "/", testId: "nav-home-link" },
  { label: "Claude Learn", to: "/claude-learn", testId: "nav-claude-learn-link" },
  { label: "Work", to: "/work", testId: "nav-work-link" },
  { label: "Services", to: "/services", testId: "nav-services-link" },
  { label: "Contact", to: "/contact", testId: "nav-contact-link" },
];

const Latitude44Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const desktopLinkClass = ({ isActive }) =>
    `relative text-sm tracking-[0.14em] uppercase transition-colors duration-200 
     after:content-[''] after:block after:h-px after:bg-[color:var(--l44-gold)] after:origin-left after:transition-transform after:duration-300 
     ${
       isActive
         ? "text-[color:var(--l44-white)] after:scale-x-100"
         : "text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)] after:scale-x-0 hover:after:scale-x-100"
     }`;

  const mobileLinkClass = ({ isActive }) =>
    `py-3 text-sm tracking-[0.14em] uppercase transition-colors 
     ${isActive ? "text-[color:var(--l44-gold)]" : "text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)]"}`;

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[color:var(--l44-navy-veil-92)] backdrop-blur-md border-b border-[color:var(--l44-border-hairline)]"
          : "bg-[color:var(--l44-navy-veil-50)] backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-testid="nav-logo"
          aria-label="Latitude44 home"
        >
          <FalconMark size={34} />
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={item.testId}
              className={desktopLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-cta-primary"
            className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-[background-color,color,box-shadow] duration-200"
            style={{
              background: "var(--l44-gold)",
              color: "var(--l44-navy)",
            }}
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          data-testid="nav-mobile-menu-button"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden bg-[color:var(--l44-navy-veil-92)] backdrop-blur-md border-t border-[color:var(--l44-border-hairline)]"
          data-testid="nav-mobile-panel"
        >
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMobile}
                data-testid={`${item.testId}-mobile`}
                className={mobileLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-3 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Latitude44Navbar;
