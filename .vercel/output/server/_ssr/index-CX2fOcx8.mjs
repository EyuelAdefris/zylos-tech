import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal, s as stagger, c as stats, b as staggerItem, S as SectionHeading, a as services, p as projects, w as whyUs, t as testimonials } from "./router-Coy76NXa.mjs";
import { S as ServiceCard } from "./ServiceCard-C1kRA0tz.mjs";
import { P as ProjectCard } from "./ProjectCard-B1CfL0sl.mjs";
import { p as Sparkles, q as ArrowRight, Q as Quote, r as ChevronLeft, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImage = "/assets/hero-dashboard-DMv3HBFG.jpg";
const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
const variants = {
  primary: "bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)] hover:scale-[1.03]",
  ghost: "border border-border/80 bg-card/40 text-foreground backdrop-blur hover:border-primary/60 hover:bg-card"
};
function MotionLink({
  to,
  children,
  variant = "primary",
  withArrow = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: `${base} ${variants[variant]}`, children: [
    children,
    withArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
  ] });
}
function TestimonialCarousel() {
  const [i, setI] = reactExports.useState(0);
  const t = testimonials[i];
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-primary-glow/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.4 },
          className: "mt-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed sm:text-xl", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: t.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
            ] })
          ]
        },
        i
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI((v) => (v - 1 + testimonials.length) % testimonials.length),
          "aria-label": "Previous",
          className: "grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/60 hover:border-primary/60",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: testimonials.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": `Slide ${idx + 1}`,
          onClick: () => setI(idx),
          className: `h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`
        },
        idx
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI((v) => (v + 1) % testimonials.length),
          "aria-label": "Next",
          className: "grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/60 hover:border-primary/60",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background:var(--gradient-hero)] -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-32 lg:pt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            "Engineering excellence from Ethiopia"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl", children: [
            "Building Powerful",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Software Solutions" }),
            " ",
            "For The Future"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg", children: "Zylos Tech develops high-performance websites, enterprise systems, and scalable software solutions that help businesses grow globally." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MotionLink, { to: "/contact", children: "Start a Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MotionLink, { to: "/services", variant: "ghost", withArrow: false, children: "View Services" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.dl, { initial: "hidden", whileInView: "show", viewport: {
            once: true
          }, variants: stagger, className: "mt-12 grid max-w-md grid-cols-2 gap-6 sm:max-w-lg sm:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: staggerItem, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-2xl font-semibold text-gradient sm:text-3xl", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.96,
          y: 24
        }, animate: {
          opacity: 1,
          scale: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            y: [0, -14, 0]
          }, transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "Zylos Tech analytics dashboard preview", width: 1600, height: 1200, className: "block w-full" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { "aria-hidden": true, animate: {
            y: [0, 12, 0]
          }, transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -left-6 -bottom-6 hidden rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur sm:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Uptime" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-gradient", children: "99.9%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { "aria-hidden": true, animate: {
            y: [0, -10, 0]
          }, transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -right-4 top-10 hidden rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur sm:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg. Build" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-gradient", children: "6 weeks" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What we do", title: "Engineering across the full stack", subtitle: "From product strategy to production deployment, our teams cover every layer of modern software." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: services.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...s }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MotionLink, { to: "/services", variant: "ghost", children: "See all services" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Selected work", title: "Software that ships and scales", subtitle: "A glimpse at the platforms we've built for clients across industries." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }, p.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MotionLink, { to: "/portfolio", variant: "ghost", children: "View portfolio" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why teams choose us", title: "A partner you can build with for years" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: whyUs.slice(0, 6).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...w }, w.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What clients say", title: "Trusted by founders and enterprise teams" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCarousel, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border/60 bg-[image:var(--gradient-card)] px-6 py-12 text-center sm:px-12 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background:var(--gradient-hero)] opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: [
          "Let's build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "great together" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Tell us about your project. We respond within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MotionLink, { to: "/contact", children: "Start a Project" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
