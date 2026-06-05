import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading, s as stagger, a as services, w as whyUs } from "./router-Coy76NXa.mjs";
import { S as ServiceCard } from "./ServiceCard-C1kRA0tz.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Services", title: "Premium software engineering, end to end", subtitle: "Eight focused practices that combine to ship products your customers love and your team can scale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...s }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why choose us", title: "The qualities that define our engineering", subtitle: "What you get when you work with Zylos Tech — and why our clients stay with us for years." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: whyUs.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...w }, w.title)) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
