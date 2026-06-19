import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";
import ClaudeLearnFeature from "../components/ClaudeLearnFeature";

const ClaudeLearnPage = () => {
  usePageMeta({
    title:
      "Claude Learn — AI tutoring powered by Anthropic’s Claude | Latitude44",
    description:
      "Claude Learn by Latitude44 — AI tutoring powered by Anthropic’s Claude. Personalised lessons, adaptive practice and instant feedback for students, educators and professionals. Launching soon at latitude44.app.",
  });

  return (
    <>
      <PageBanner
        eyebrow="Latest project · Launching soon"
        title="Claude Learn."
        blurb="AI tutoring powered by Anthropic’s Claude. A focused, conversational tutor that meets every learner where they are — and walks them toward mastery, one explanation at a time."
        image="https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Soft, modern AI / learning illustration"
        testId="claude-learn-banner"
      />
      <ClaudeLearnFeature embedded />
    </>
  );
};

export default ClaudeLearnPage;
