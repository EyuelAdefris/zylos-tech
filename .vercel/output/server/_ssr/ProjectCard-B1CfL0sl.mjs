import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as staggerItem } from "./router-Coy76NXa.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function ProjectCard({ project }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      variants: staggerItem,
      className: "card-glow group relative overflow-hidden rounded-2xl border border-border/60 bg-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.image,
              alt: project.title,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90", children: project.desc }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs text-primary-glow",
                children: t
              },
              t
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: project.demoUrl ?? "#", className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/80", children: "Live Demo" }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProjectCard as P
};
