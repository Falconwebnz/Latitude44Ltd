import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";
import ClaudeLearnFeature from "../components/ClaudeLearnFeature";

const ClaudeLearnPage = () => {
  usePageMeta({
    title:
      "Ten By Ninety - Learn AI Mastery — AI tutoring powered by Anthropic's Claude | Latitude44",
    description:
      "Ten By Ninety - Learn AI Mastery by Latitude44 — AI tutoring powered by Anthropic's Claude. Personalised lessons, adaptive practice and instant feedback for students, educators and professionals.",
    path: "/claude-learn",
  });

  return (
    <>
      <PageBanner
        eyebrow="Latest project · Now on Google Play"
        title="Ten By Ninety - Learn AI Mastery."
        blurb="AI tutoring powered by Anthropic's Claude. A focused, conversational tutor that meets every learner where they are — and walks them toward mastery, one explanation at a time."
        image="/claude-learn/feature-1280.jpg"
        imageAlt="Ten by Ninety — ten minutes a day, ninety days, real AI fluency"
        imageFit="contain"
        testId="claude-learn-banner"
      />
      <ClaudeLearnFeature embedded />
    </>
  );
};

export default ClaudeLearnPage;
