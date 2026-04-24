{
  "brand": {
    "name": "Latitude44",
    "domain": "latitude44.co.nz",
    "attributes": [
      "minimal",
      "classy",
      "corporate",
      "premium",
      "precision",
      "trustworthy",
      "NZ-anchored"
    ],
    "do_not_change": {
      "palette": {
        "primary_navy": "#0A1A2A",
        "accent_gold": "#C8A25A",
        "light_gray": "#E6E6E6",
        "white": "#FFFFFF"
      },
      "typography": {
        "family": "Montserrat",
        "weights": [200, 500, 600]
      }
    }
  },
  "seo_head": {
    "meta_title": "Latitude44 | Web & App Development, AI Integration, IT Support | Canterbury, NZ",
    "meta_description": "Latitude44 delivers front-end web and app development, AI integration, consulting, education, product sales, hardware support, and specialist data recovery across Canterbury and New Zealand. Precision digital solutions with a premium, corporate approach.",
    "meta_keywords": [
      "web development New Zealand",
      "app development Canterbury",
      "AI integration NZ",
      "IT consulting Canterbury",
      "hardware support NZ",
      "data recovery Canterbury",
      "VHS Super8 floppy disk recovery",
      "Leithfield web developer"
    ],
    "open_graph": {
      "og:title": "Latitude44 — Digital Solutions. Precision. Performance.",
      "og:description": "Premium web/app development and AI integration with hardware support and specialist data recovery in NZ.",
      "og:type": "website",
      "og:locale": "en_NZ",
      "og:url": "https://latitude44.co.nz",
      "og:image": "<add once you have a hosted social image>"
    },
    "twitter": {
      "twitter:card": "summary_large_image",
      "twitter:title": "Latitude44 | Digital Solutions",
      "twitter:description": "Web/app development, AI integration, consulting, education, hardware support & data recovery — NZ."
    },
    "json_ld_local_business": {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Latitude44",
      "url": "https://latitude44.co.nz",
      "email": "admin@latitude44.co.nz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Terrace Road",
        "addressLocality": "Leithfield",
        "addressRegion": "Canterbury",
        "addressCountry": "NZ"
      },
      "areaServed": "New Zealand",
      "description": "Front-end web and app development, AI integration, consulting, education, product sales, hardware support, and specialist data recovery."
    }
  },
  "information_architecture": {
    "pages": [
      {
        "route": "/",
        "sections": [
          "Hero (video)",
          "Slider (3 images)",
          "Services (8 cards)",
          "Trust strip",
          "Contact",
          "Footer"
        ]
      }
    ],
    "primary_ctas": [
      "Contact",
      "Email admin@latitude44.co.nz"
    ],
    "success_actions": [
      "User submits contact form",
      "User clicks email link",
      "User scrolls services and understands breadth (digital + hardware + recovery)"
    ]
  },
  "design_tokens": {
    "css_custom_properties": {
      "notes": "Implement in /app/frontend/src/index.css under @layer base :root and .dark. Use ONLY the provided palette; derive tints via opacity, not new hex colors.",
      "colors": {
        "--l44-navy": "#0A1A2A",
        "--l44-gold": "#C8A25A",
        "--l44-gray": "#E6E6E6",
        "--l44-white": "#FFFFFF",
        "--l44-navy-veil-70": "rgba(10, 26, 42, 0.70)",
        "--l44-navy-veil-85": "rgba(10, 26, 42, 0.85)",
        "--l44-gold-10": "rgba(200, 162, 90, 0.10)",
        "--l44-gold-18": "rgba(200, 162, 90, 0.18)",
        "--l44-gold-28": "rgba(200, 162, 90, 0.28)",
        "--l44-white-85": "rgba(255, 255, 255, 0.85)",
        "--l44-white-70": "rgba(255, 255, 255, 0.70)",
        "--l44-border-hairline": "rgba(230, 230, 230, 0.14)",
        "--l44-border-gold-hairline": "rgba(200, 162, 90, 0.22)"
      },
      "shadcn_mapping": {
        "notes": "Map shadcn HSL tokens to match the brand. Keep dark mode as default by applying className=\"dark\" on <html> or <body>.",
        "--background": "navy",
        "--foreground": "white",
        "--card": "rgba(navy, 0.55)",
        "--card-foreground": "white",
        "--popover": "navy",
        "--popover-foreground": "white",
        "--primary": "gold",
        "--primary-foreground": "navy",
        "--secondary": "rgba(white, 0.06)",
        "--secondary-foreground": "white",
        "--muted": "rgba(white, 0.08)",
        "--muted-foreground": "rgba(white, 0.70)",
        "--accent": "rgba(gold, 0.12)",
        "--accent-foreground": "white",
        "--border": "hairline",
        "--input": "hairline",
        "--ring": "gold",
        "--radius": "0.75rem"
      },
      "typography": {
        "--font-sans": "Montserrat, ui-sans-serif, system-ui",
        "--tracking-tight": "-0.02em",
        "--tracking-wide": "0.08em"
      },
      "spacing": {
        "--container-max": "72rem",
        "--section-py": "clamp(3.5rem, 6vw, 6rem)",
        "--card-pad": "clamp(1rem, 2.2vw, 1.5rem)"
      },
      "shadows": {
        "--shadow-soft": "0 10px 30px rgba(0,0,0,0.35)",
        "--shadow-gold-glow": "0 0 0 1px rgba(200,162,90,0.22), 0 18px 50px rgba(0,0,0,0.45)"
      }
    },
    "tailwind_usage": {
      "notes": "Prefer Tailwind utilities; use CSS vars for brand colors. Avoid gradients except hero overlay (<=20% viewport).",
      "container": "mx-auto max-w-6xl px-4 sm:px-6",
      "section": "py-[var(--section-py)]",
      "hairline_divider": "border-t border-[color:var(--l44-border-hairline)]",
      "gold_hairline_divider": "border-t border-[color:var(--l44-border-gold-hairline)]"
    }
  },
  "typography": {
    "font": {
      "google_fonts_import": "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;600&display=swap",
      "usage": {
        "h1": "Montserrat 600",
        "h2": "Montserrat 500",
        "body": "Montserrat 200/500 mix (body default 500, supporting text 200)",
        "micro": "Montserrat 500 with tracking"
      }
    },
    "scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl",
      "h2": "text-base md:text-lg",
      "section_title": "text-2xl sm:text-3xl",
      "card_title": "text-lg",
      "body": "text-sm sm:text-base",
      "small": "text-xs"
    },
    "rules": [
      "Use generous line-height on dark backgrounds: leading-relaxed for paragraphs.",
      "Use subtle letterspacing for nav + eyebrow labels: tracking-[0.12em] uppercase.",
      "Avoid heavy bold blocks; keep premium restraint (600 max)."
    ]
  },
  "layout": {
    "grid": {
      "system": "12-col on desktop, 4-col on mobile",
      "services_grid": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
      "slider_grid": "single slide at a time; content aligned left; image with overlay caption"
    },
    "section_order": [
      "Hero",
      "Slider",
      "Services",
      "Trust strip",
      "Contact",
      "Footer"
    ],
    "scroll": {
      "anchor_behavior": "smooth scrolling; offset for sticky navbar",
      "navbar_height": "h-16"
    }
  },
  "components": {
    "component_path": {
      "shadcn_ui": {
        "Button": "/app/frontend/src/components/ui/button.jsx",
        "Card": "/app/frontend/src/components/ui/card.jsx",
        "Input": "/app/frontend/src/components/ui/input.jsx",
        "Textarea": "/app/frontend/src/components/ui/textarea.jsx",
        "Label": "/app/frontend/src/components/ui/label.jsx",
        "Separator": "/app/frontend/src/components/ui/separator.jsx",
        "NavigationMenu": "/app/frontend/src/components/ui/navigation-menu.jsx",
        "Sheet": "/app/frontend/src/components/ui/sheet.jsx",
        "Sonner": "/app/frontend/src/components/ui/sonner.jsx"
      },
      "new_components_to_create": [
        "/app/frontend/src/components/Latitude44Navbar.js",
        "/app/frontend/src/components/HeroVideo.js",
        "/app/frontend/src/components/ServicesSlider.js",
        "/app/frontend/src/components/ServicesGrid.js",
        "/app/frontend/src/components/ContactSection.js",
        "/app/frontend/src/components/Footer.js",
        "/app/frontend/src/components/FaviconSvg.js"
      ]
    },
    "navbar": {
      "behavior": [
        "Sticky top; starts transparent over hero video.",
        "On scroll past hero (IntersectionObserver), background becomes solid navy with subtle blur.",
        "Active anchor gets gold underline that animates in (scaleX)."
      ],
      "tailwind": {
        "wrapper": "fixed top-0 inset-x-0 z-50",
        "inner": "mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between",
        "transparent_state": "bg-transparent",
        "scrolled_state": "bg-[color:var(--l44-navy-veil-85)] backdrop-blur-md border-b border-[color:var(--l44-border-hairline)]",
        "link": "text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)]",
        "link_active_underline": "after:content-[''] after:block after:h-px after:bg-[color:var(--l44-gold)] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
      },
      "data_testids": {
        "nav": "site-navbar",
        "home_link": "nav-home-link",
        "services_link": "nav-services-link",
        "contact_link": "nav-contact-link",
        "mobile_menu_button": "nav-mobile-menu-button"
      }
    },
    "hero": {
      "structure": [
        "Full viewport section with looping muted video background.",
        "Dark navy overlay (gradient + veil) for legibility.",
        "Left-aligned content block: logo lockup, headline, subheading, CTAs.",
        "Subtle animated gold hairline divider under tagline."
      ],
      "video": {
        "requirements": [
          "autoplay",
          "loop",
          "muted",
          "playsInline",
          "poster fallback"
        ],
        "overlay": "Use a navy veil + mild top-to-bottom gradient; keep gradient area limited to hero only (<=20% viewport rule applies to gradients elsewhere)."
      },
      "tailwind": {
        "section": "relative min-h-[100svh] overflow-hidden bg-[color:var(--l44-navy)]",
        "video": "absolute inset-0 h-full w-full object-cover",
        "overlay": "absolute inset-0 bg-[color:var(--l44-navy-veil-70)]",
        "content": "relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 min-h-[100svh] flex items-end",
        "content_inner": "w-full max-w-2xl",
        "eyebrow": "text-xs tracking-[0.18em] uppercase text-[color:var(--l44-white-70)]",
        "h1": "mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[var(--tracking-tight)] text-[color:var(--l44-white)]",
        "sub": "mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--l44-white-85)]",
        "cta_row": "mt-8 flex flex-col sm:flex-row gap-3"
      },
      "cta_buttons": {
        "primary": {
          "component": "Button",
          "variant": "default",
          "className": "bg-[color:var(--l44-gold)] text-[color:var(--l44-navy)] hover:bg-[color:var(--l44-gold)]/90 focus-visible:ring-[color:var(--l44-gold)]",
          "data-testid": "hero-primary-cta"
        },
        "secondary": {
          "component": "Button",
          "variant": "outline",
          "className": "border-[color:var(--l44-border-gold-hairline)] text-[color:var(--l44-white)] hover:bg-[color:var(--l44-gold-10)]",
          "data-testid": "hero-secondary-cta"
        }
      }
    },
    "slider": {
      "library": "Swiper",
      "slides": [
        "Front-end web & app development",
        "AI integration tools & methods",
        "Hardware support & data recovery"
      ],
      "behavior": [
        "Autoplay with fade crossfade.",
        "Pause on hover (desktop) but continue after interaction.",
        "Pagination bullets in gold; active bullet slightly elongated pill."
      ],
      "tailwind": {
        "section": "relative",
        "frame": "rounded-2xl border border-[color:var(--l44-border-hairline)] overflow-hidden shadow-[var(--shadow-soft)]",
        "caption": "absolute bottom-0 left-0 right-0 p-5 bg-[color:var(--l44-navy-veil-85)] border-t border-[color:var(--l44-border-hairline)]"
      },
      "data_testids": {
        "slider": "services-image-slider",
        "slide": "services-image-slide",
        "pagination": "services-image-slider-pagination"
      }
    },
    "services": {
      "cards": {
        "count": 8,
        "items": [
          "Front-end Web Development",
          "App Development",
          "AI Integration",
          "Consulting",
          "Education",
          "Product Sales",
          "Hardware Support",
          "Data Recovery"
        ],
        "card_style": [
          "Dark navy surface with hairline border.",
          "Gold micro-accent: icon + top hairline.",
          "Hover: subtle lift + gold glow ring (no big gradients)."
        ],
        "tailwind": {
          "grid": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
          "card": "group relative rounded-2xl border border-[color:var(--l44-border-hairline)] bg-[color:var(--l44-navy-veil-85)] p-[var(--card-pad)] shadow-[var(--shadow-soft)]",
          "card_hover": "hover:border-[color:var(--l44-border-gold-hairline)] hover:shadow-[var(--shadow-gold-glow)]",
          "title": "mt-4 text-lg font-semibold text-[color:var(--l44-white)]",
          "desc": "mt-2 text-sm leading-relaxed text-[color:var(--l44-white-70)]",
          "icon_wrap": "h-10 w-10 rounded-xl border border-[color:var(--l44-border-gold-hairline)] bg-[color:var(--l44-gold-10)] flex items-center justify-center"
        },
        "micro_interaction_css": {
          "notes": "No transition: all. Only transition border-color, box-shadow, background-color, opacity.",
          "recommended": "transition-[border-color,box-shadow,background-color,opacity] duration-300"
        },
        "data_testids": {
          "section": "services-section",
          "card": "service-card",
          "card_cta": "service-card-cta"
        }
      }
    },
    "contact": {
      "form_fields": [
        "Name",
        "Email",
        "Subject",
        "Message"
      ],
      "layout": "Two-column on desktop: form left, contact details right; stacked on mobile.",
      "tailwind": {
        "section": "border-t border-[color:var(--l44-border-hairline)]",
        "grid": "grid grid-cols-1 lg:grid-cols-12 gap-8",
        "form_col": "lg:col-span-7",
        "info_col": "lg:col-span-5",
        "panel": "rounded-2xl border border-[color:var(--l44-border-hairline)] bg-[color:var(--l44-navy-veil-85)] p-6",
        "label": "text-xs tracking-[0.14em] uppercase text-[color:var(--l44-white-70)]",
        "input": "bg-transparent border-[color:var(--l44-border-hairline)] text-[color:var(--l44-white)] placeholder:text-[color:var(--l44-white-70)] focus-visible:ring-[color:var(--l44-gold)]",
        "submit": "w-full sm:w-auto bg-[color:var(--l44-gold)] text-[color:var(--l44-navy)] hover:bg-[color:var(--l44-gold)]/90"
      },
      "data_testids": {
        "section": "contact-section",
        "form": "contact-form",
        "name": "contact-form-name-input",
        "email": "contact-form-email-input",
        "subject": "contact-form-subject-input",
        "message": "contact-form-message-textarea",
        "submit": "contact-form-submit-button",
        "email_link": "contact-email-link"
      }
    },
    "footer": {
      "content": [
        "Logo wordmark",
        "Email link",
        "Address",
        "Copyright"
      ],
      "tailwind": {
        "wrapper": "border-t border-[color:var(--l44-border-hairline)] py-10",
        "text": "text-sm text-[color:var(--l44-white-70)]",
        "link": "text-[color:var(--l44-white-85)] hover:text-[color:var(--l44-white)]"
      },
      "data_testids": {
        "footer": "site-footer"
      }
    }
  },
  "motion_and_microinteractions": {
    "library": "Framer Motion",
    "principles": [
      "Use motion for entrance + hover polish; keep amplitude low (corporate).",
      "Prefer opacity + y translate (6-12px) on reveal.",
      "Hover: 1-2px lift, subtle gold ring, no bouncy easing."
    ],
    "recommended_variants": {
      "reveal": {
        "initial": "{ opacity: 0, y: 10 }",
        "whileInView": "{ opacity: 1, y: 0 }",
        "transition": "{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
      },
      "button_press": {
        "whileTap": "{ scale: 0.98 }"
      }
    },
    "scroll_effects": [
      "Hero: very subtle parallax on overlay noise layer (translateY 0..-12px).",
      "Services cards: stagger reveal on scroll (0.06s).",
      "Navbar: background fade-in on scroll threshold."
    ]
  },
  "texture_and_background": {
    "noise": {
      "usage": "Add a subtle noise overlay on navy sections to avoid flatness.",
      "implementation": "Use a tiny SVG noise as background-image with low opacity (0.05-0.08) on a pseudo-element; do not affect readability.",
      "tailwind_hint": "after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.06] after:pointer-events-none"
    },
    "gradient_policy": {
      "allowed": [
        "Hero overlay only (navy veil + mild gradient)."
      ],
      "forbidden": [
        "Any saturated multi-color gradients",
        "Gradients on cards, footer, or text-heavy areas",
        "Gradients on small UI elements"
      ]
    }
  },
  "image_urls": {
    "hero_video": {
      "category": "video",
      "description": "Full-viewport looping background video. Prefer Pexels NZ mountains/falcon footage. Use poster fallback image.",
      "recommended_source": "Pexels (search: 'New Zealand mountains drone', 'falcon flying mountains')",
      "implementation_note": "If direct MP4 URL is not stable, download and serve from /public/videos/hero.mp4."
    },
    "hero_poster": {
      "category": "image",
      "description": "Poster image for video fallback (mobile data saver / reduced motion).",
      "urls": [
        "https://images.pexels.com/photos/34033017/pexels-photo-34033017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ]
    },
    "slider_images": {
      "category": "image",
      "description": "3-image rotating slider: dev, AI integration, hardware/data recovery.",
      "urls": [
        {
          "theme": "Development",
          "url": "https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          "theme": "AI / Integration",
          "url": "https://images.pexels.com/photos/30530410/pexels-photo-30530410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          "theme": "Hardware / Recovery",
          "url": "https://images.unsplash.com/photo-1652120268427-9ba66e870467?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        }
      ]
    }
  },
  "favicon": {
    "format": "svg",
    "concept": "Simplified falcon head silhouette facing right + a single angular gold bolt/mountain cut. Use navy background shape with gold negative space or vice versa.",
    "svg_guidance": {
      "viewBox": "0 0 64 64",
      "colors": [
        "#0A1A2A",
        "#C8A25A"
      ],
      "rules": [
        "Keep shapes bold; favicon must read at 16px.",
        "Avoid thin strokes; use filled paths.",
        "No gradients."
      ]
    }
  },
  "accessibility": {
    "requirements": [
      "WCAG AA contrast: white text on navy; gold used for accents and buttons with navy text.",
      "Visible focus rings: ring in gold.",
      "Respect prefers-reduced-motion: disable autoplay animations and video if requested; show poster image.",
      "Keyboard navigable slider controls and mobile menu."
    ]
  },
  "libraries": {
    "required": [
      {
        "name": "framer-motion",
        "install": "npm i framer-motion",
        "usage": "Scroll reveal + subtle hover motion"
      },
      {
        "name": "swiper",
        "install": "npm i swiper",
        "usage": "3-image slider with fade + autoplay"
      },
      {
        "name": "lucide-react",
        "install": "npm i lucide-react",
        "usage": "Service icons (minimal line icons)"
      }
    ],
    "notes": [
      "Use shadcn Button/Card/Input/Textarea/Sheet for consistent a11y.",
      "Use sonner for form submission toast feedback."
    ]
  },
  "instructions_to_main_agent": {
    "global": [
      "Remove CRA demo styles in App.css (spinning logo etc). Do NOT center align the app container.",
      "Set dark theme as default by applying className=\"dark\" at the root (html/body wrapper).",
      "Update /app/frontend/src/index.css tokens to match Latitude44 palette; do not introduce new hex colors.",
      "Import Montserrat via Google Fonts in index.html or CSS and set as default font.",
      "Every interactive element must include data-testid (buttons, links, inputs, slider controls, nav links)."
    ],
    "page_build": [
      "Implement single-page sections with IDs: #home, #services, #contact.",
      "Hero: video background with overlay; left-aligned content; primary CTA scrolls to contact.",
      "Slider: Swiper fade autoplay; 3 slides with caption; gold pagination.",
      "Services: 8 cards grid; subtle gold hover ring; icons from lucide-react.",
      "Contact: minimal form + contact details; submit triggers toast; backend integration via FastAPI endpoint.",
      "Footer: minimal, hairline divider, email + address."
    ],
    "testing": [
      "Use stable kebab-case data-testid values as specified in this doc.",
      "Ensure slider and navbar scroll state are testable (e.g., data-testid on navbar and slider)."
    ]
  }
}

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
