import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;
const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null;

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = ({ embedded = false }) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please share a few details (min. 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      if (API) {
        // FastAPI backend path
        const resp = await axios.post(`${API}/contact`, form, {
          headers: { "Content-Type": "application/json" },
          timeout: 15000,
        });
        toast.success(resp?.data?.message || "Thanks — your message has been received.");
      } else if (FORMSPREE_ENDPOINT) {
        // Formspree path (static hosting on GitHub Pages)
        const resp = await axios.post(FORMSPREE_ENDPOINT, form, {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          timeout: 15000,
        });
        if (resp.status >= 200 && resp.status < 300) {
          toast.success(
            "Thanks — your message has been sent. We'll reply from latitude44@protonmail.com.",
          );
        } else {
          throw new Error("Formspree returned " + resp.status);
        }
      } else {
        // No backend configured at all — graceful fallback
        toast.error(
          "Contact form isn't configured yet. Please email latitude44@protonmail.com directly.",
        );
        return;
      }
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.errors?.[0]?.message ||
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        "Something went wrong. Please try again or email latitude44@protonmail.com directly.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="l44-section"
      style={{
        backgroundColor: "var(--l44-navy)",
        borderTop: "1px solid var(--l44-border-hairline)",
      }}
    >
      <div className="l44-container">
        {!embedded && (
          <motion.div {...fadeUp} className="max-w-3xl mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="l44-eyebrow">
              <span className="l44-gold-rule" /> Contact
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.01em]"
              style={{ color: "var(--l44-white)" }}
            >
              Tell us what you&apos;re building.
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--l44-white-70)" }}
            >
              Share a few details and we&apos;ll reply from <span style={{ color: "var(--l44-white)" }}>latitude44@protonmail.com</span>. For data recovery enquiries, please note the media type (VHS, Super 8, 3.5&#8243; floppy, HDD/SSD).
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Form */}
          <motion.form
            {...fadeUp}
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
            style={{
              border: "1px solid var(--l44-border-hairline)",
              background: "var(--l44-navy-veil-85)",
              boxShadow: "var(--shadow-soft)",
            }}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--l44-white-70)" }}
                >
                  Name
                </Label>
                <Input
                  id="name"
                  data-testid="contact-form-name-input"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Your full name"
                  autoComplete="name"
                  className="h-11 bg-transparent border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)] placeholder:text-[color:var(--l44-white-55)] focus-visible:ring-[color:var(--l44-gold)]"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="text-xs" style={{ color: "#ff8e8e" }}>
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--l44-white-70)" }}
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="contact-form-email-input"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@domain.co.nz"
                  autoComplete="email"
                  className="h-11 bg-transparent border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)] placeholder:text-[color:var(--l44-white-55)] focus-visible:ring-[color:var(--l44-gold)]"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="text-xs" style={{ color: "#ff8e8e" }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="subject"
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ color: "var(--l44-white-70)" }}
              >
                Subject
              </Label>
              <Input
                id="subject"
                data-testid="contact-form-subject-input"
                value={form.subject}
                onChange={onChange("subject")}
                placeholder="e.g. Web build, AI integration, VHS transfer…"
                className="h-11 bg-transparent border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)] placeholder:text-[color:var(--l44-white-55)] focus-visible:ring-[color:var(--l44-gold)]"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <span className="text-xs" style={{ color: "#ff8e8e" }}>
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="message"
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ color: "var(--l44-white-70)" }}
              >
                Message
              </Label>
              <Textarea
                id="message"
                data-testid="contact-form-message-textarea"
                value={form.message}
                onChange={onChange("message")}
                rows={6}
                placeholder="A few sentences about your project, timeline and budget."
                className="bg-transparent border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)] placeholder:text-[color:var(--l44-white-55)] focus-visible:ring-[color:var(--l44-gold)] min-h-[140px]"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="text-xs" style={{ color: "#ff8e8e" }}>
                  {errors.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <p
                className="text-xs leading-relaxed max-w-sm"
                style={{ color: "var(--l44-white-55)" }}
              >
                We typically respond within one business day (NZST).
              </p>
              <Button
                type="submit"
                disabled={submitting}
                data-testid="contact-form-submit-button"
                className="h-11 px-6 rounded-full font-semibold tracking-[0.18em] uppercase text-xs"
                style={{
                  background: "var(--l44-gold)",
                  color: "var(--l44-navy)",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.aside
            {...fadeUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-6 sm:p-7"
              style={{
                border: "1px solid var(--l44-border-hairline)",
                background: "var(--l44-navy-veil-85)",
              }}
            >
              <span className="l44-eyebrow">Email</span>
              <a
                href="mailto:latitude44@protonmail.com"
                data-testid="contact-email-link"
                className="mt-3 inline-flex items-center gap-3 text-base font-medium break-all"
                style={{ color: "var(--l44-white)" }}
              >
                <span
                  className="h-9 w-9 rounded-full inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1px solid var(--l44-border-gold-hairline)",
                    background: "var(--l44-gold-10)",
                    color: "var(--l44-gold)",
                  }}
                  aria-hidden
                >
                  <Mail size={16} />
                </span>
                latitude44@protonmail.com
              </a>
              <p className="mt-3 text-xs" style={{ color: "var(--l44-white-55)" }}>
                We reply directly to the address you submit.
              </p>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-7"
              style={{
                border: "1px solid var(--l44-border-hairline)",
                background: "var(--l44-navy-veil-85)",
              }}
            >
              <span className="l44-eyebrow">Studio</span>
              <div
                className="mt-3 flex items-start gap-3"
                data-testid="contact-address"
              >
                <span
                  className="h-9 w-9 rounded-full inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1px solid var(--l44-border-gold-hairline)",
                    background: "var(--l44-gold-10)",
                    color: "var(--l44-gold)",
                  }}
                  aria-hidden
                >
                  <MapPin size={16} />
                </span>
                <address className="not-italic text-sm leading-relaxed" style={{ color: "var(--l44-white-85)" }}>
                  Latitude44 (NZ) Limited
                  <br />
                  Rangiora 7400
                  <br />
                  New Zealand
                </address>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rangiora+7400+New+Zealand"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-map-link"
                className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase"
                style={{ color: "var(--l44-gold)" }}
              >
                View on Google Maps →
              </a>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-7"
              style={{
                border: "1px solid var(--l44-border-hairline)",
                background: "var(--l44-navy-veil-85)",
              }}
            >
              <span className="l44-eyebrow">Hours</span>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--l44-white-85)" }}
              >
                Mon – Fri &nbsp;·&nbsp; 09:00 – 17:00 NZST
                <br />
                Weekends by appointment
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
