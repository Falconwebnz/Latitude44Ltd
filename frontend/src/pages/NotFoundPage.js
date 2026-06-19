import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const NotFoundPage = () => {
  usePageMeta({
    title: "Page not found | Latitude44",
    description: "The page you were looking for doesn’t exist.",
  });
  return (
    <section
      data-testid="not-found-page"
      className="min-h-[100svh] flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--l44-navy)" }}
    >
      <div className="max-w-xl text-center flex flex-col items-center gap-4">
        <span
          className="text-7xl sm:text-8xl font-semibold"
          style={{ color: "var(--l44-gold)" }}
        >
          404
        </span>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em]"
          style={{ color: "var(--l44-white)" }}
        >
          That page has wandered off.
        </h1>
        <p className="text-sm sm:text-base" style={{ color: "var(--l44-white-70)" }}>
          The link you followed may be broken, or the page may have moved. Let&apos;s
          get you back on course.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase"
          style={{ background: "var(--l44-gold)", color: "var(--l44-navy)" }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
