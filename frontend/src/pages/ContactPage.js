import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";
import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  usePageMeta({
    title: "Contact — Latitude44 (NZ) Limited | Rangiora, Canterbury",
    description:
      "Get in touch with Latitude44 (NZ) Limited. Email latitude44@protonmail.com. Based in Rangiora 7400, Canterbury — serving all of New Zealand. Web: latitude44.co.nz.",
    path: "/contact",
  });

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Tell us what you're building."
        blurb="A few sentences are plenty. We typically respond within one business day (NZST). For data recovery enquiries, please note the media type (VHS, Super 8, 3.5&Prime; floppy, HDD/SSD)."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Calm New Zealand-style mountain landscape"
        testId="contact-banner"
      />
      <ContactSection embedded />
    </>
  );
};

export default ContactPage;
