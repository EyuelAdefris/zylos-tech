import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { S as SectionHeading, R as Reveal, a as services } from "./router-Coy76NXa.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { k as CircleCheck, l as LoaderCircle, b as Mail, m as MapPin, n as Phone } from "../_libs/lucide-react.mjs";
import { o as object, s as string, l as literal } from "../_libs/zod.mjs";

import "../_libs/unenv.mjs";


import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const schema = object({
  name: string().trim().min(1, "Name is required").max(100),
  email: string().trim().email("Enter a valid email").max(255),
  company: string().trim().max(150).optional().or(literal("")),
  service: string().min(1, "Pick a service"),
  message: string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2e3)
});
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState(null);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(schema)
  });
  async function onSubmit(values) {
    setErr(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Could not send right now. Try again in a moment.");
      }
      setSent(true);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Contact", title: "Let's build something great together", subtitle: "Tell us about your project. We respond within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-3 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(onSubmit), className: "rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6 sm:p-8 h-full flex flex-col justify-between", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "flex flex-col items-center py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-primary-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold", children: "Message sent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: "Thanks for reaching out. A member of our team will reply within one business day." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("name"), className: inputCls, placeholder: "Jane Doe" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", ...register("email"), className: inputCls, placeholder: "jane@company.com" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", error: errors.company?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("company"), className: inputCls, placeholder: "Acme Inc." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service", error: errors.service?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("service"), className: inputCls, defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service…" }),
            services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.title, children: s.title }, s.title))
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...register("message"), rows: 5, className: `${inputCls} resize-none`, placeholder: "Tell us about your project, timelines, and goals." }) }),
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isSubmitting, className: "group inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60", children: [
          isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null,
          isSubmitting ? "Sending…" : "Send message"
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-2 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }), title: "Email", value: "hello@zylostech.com", href: "mailto:hello@zylostech.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }), title: "Location", value: "Addis Ababa, Ethiopia" }),
        [{
          value: "+251 922 111 222",
          href: "tel:+251922111222"
        }, {
          value: "+251 933 333 444",
          href: "tel:+251933333444"
        }, {
          value: "+251 944 555 666",
          href: "tel:+251944555666"
        }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(InfoItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }), title: "Phone", value: p.value, href: p.href }, i))
      ] }) })
    ] })
  ] });
}
const inputCls = "w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40";
function Field({
  label,
  children,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
function InfoItem({
  icon,
  title,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-5 transition-colors hover:border-primary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary-glow ring-1 ring-primary/20", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm font-medium", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, children: inner }) : inner;
}
export {
  ContactPage as component
};
