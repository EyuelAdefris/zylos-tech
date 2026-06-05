import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading, s as stagger, p as projects } from "./router-Coy76NXa.mjs";
import { P as ProjectCard } from "./ProjectCard-B1CfL0sl.mjs";
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
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Projects", title: "A track record of shipped projects", subtitle: "Hover any project to learn more about what we built and the technologies behind it." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-80px"
    }, variants: stagger, className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }, p.title)) })
  ] });
}
export {
  PortfolioPage as component
};
