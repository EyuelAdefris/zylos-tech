import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading, R as Reveal, s as stagger, v as values, b as staggerItem } from "./router-Coy76NXa.mjs";
import { o as Target, E as Eye } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "About us", title: "A software engineering company built for the next decade", subtitle: "We're a team of senior engineers, designers, and product strategists in Addis Ababa, partnering with companies worldwide to ship software that matters." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Empowering businesses through innovative software solutions, scalable systems, and world-class digital experiences." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glow rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Our Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "To become Africa's leading software engineering company recognized globally for excellence, innovation, and reliability." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Core values", title: "What we stand for" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.ol, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "relative mx-auto mt-16 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" }),
        values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { variants: staggerItem, className: "relative pl-14 pb-10 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-sm font-semibold text-white shadow-[var(--shadow-glow)]", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: v.desc })
        ] }, v.title))
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
