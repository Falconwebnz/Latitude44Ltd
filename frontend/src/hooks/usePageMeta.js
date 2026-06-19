import React, { useEffect } from "react";

/**
 * usePageMeta — small hook that sets per-route <title> and meta description.
 * Restores the previous values on unmount so we don't leak between routes.
 */
const usePageMeta = ({ title, description }) => {
  useEffect(() => {
    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag?.getAttribute("content");

    if (title) document.title = title;
    if (description && descTag) descTag.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc != null) descTag.setAttribute("content", prevDesc);
    };
  }, [title, description]);
};

export default usePageMeta;
