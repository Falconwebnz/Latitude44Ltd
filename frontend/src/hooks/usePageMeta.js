import React, { useEffect } from "react";

const PROD_ORIGIN = "https://latitude44.co.nz";

/**
 * usePageMeta — sets per-route document metadata for SEO and social sharing.
 *
 *   usePageMeta({
 *     title: "Page title",
 *     description: "Short meta description",
 *     path: "/services",           // canonical path on latitude44.co.nz
 *   });
 *
 * Updates:
 *   • <title>
 *   • <meta name="description">
 *   • <link rel="canonical">
 *   • <meta property="og:title">
 *   • <meta property="og:description">
 *   • <meta property="og:url">
 *   • <meta name="twitter:title">
 *   • <meta name="twitter:description">
 *
 * Original values are restored on unmount so we never leak across routes.
 */
const setMeta = (selector, attr, value) => {
  const el = document.querySelector(selector);
  const prev = el?.getAttribute(attr);
  if (el && value != null) el.setAttribute(attr, value);
  return { el, prev };
};

const usePageMeta = ({ title, description, path }) => {
  useEffect(() => {
    const prev = { title: document.title };
    const canonicalUrl = path ? `${PROD_ORIGIN}${path}` : null;

    if (title) document.title = title;
    prev.desc = setMeta('meta[name="description"]', "content", description);
    prev.ogTitle = setMeta('meta[property="og:title"]', "content", title);
    prev.ogDesc = setMeta('meta[property="og:description"]', "content", description);
    prev.ogUrl = setMeta('meta[property="og:url"]', "content", canonicalUrl);
    prev.twTitle = setMeta('meta[name="twitter:title"]', "content", title);
    prev.twDesc = setMeta('meta[name="twitter:description"]', "content", description);
    prev.canonical = setMeta('link[rel="canonical"]', "href", canonicalUrl);

    return () => {
      document.title = prev.title;
      Object.values(prev).forEach((entry) => {
        if (entry && typeof entry === "object" && entry.el && entry.prev != null) {
          const isHref = entry.el.tagName === "LINK";
          entry.el.setAttribute(isHref ? "href" : "content", entry.prev);
        }
      });
    };
  }, [title, description, path]);
};

export default usePageMeta;
