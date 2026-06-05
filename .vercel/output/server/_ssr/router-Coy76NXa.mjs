import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { C as CodeXml, S as Sun, M as Moon, X, a as Menu, G as Github, L as Linkedin, T as Twitter, b as Mail, c as Cloud, D as Database, d as Server, Z as Zap, e as Shield, f as Code, g as LifeBuoy, A as Award, h as Globe, i as ShoppingCart, B as Building2, P as Palette, j as Plug } from "../_libs/lucide-react.mjs";
import { o as object, s as string, l as literal } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-d8pnCZOj.css";
const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const isLight = !document.documentElement.classList.contains("dark");
    setTheme(isLight ? "light" : "dark");
  }, []);
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold tracking-tight", children: [
              "Zylos",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Tech" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: l.to,
              className: "group relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
              activeProps: { className: "text-foreground" },
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-primary)] transition-transform duration-300 group-hover:scale-x-100" })
              ]
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-4 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleTheme,
                className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                "aria-label": "Toggle theme",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105",
                children: "Start a Project"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleTheme,
                className: "rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground",
                "aria-label": "Toggle theme",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Toggle menu",
                className: "text-foreground",
                onClick: () => setOpen((v) => !v),
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-4 py-3", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                  activeProps: { className: "text-foreground bg-accent" },
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "mt-2 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-white",
                  children: "Start a Project"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-24 border-t border-border/60 bg-background/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-5 w-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold", children: [
            "Zylos",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Tech" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "Building innovative software solutions from Ethiopia for the world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "GitHub", className: "hover:text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "hover:text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "hover:text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@zylostech.com", "aria-label": "Email", className: "hover:text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-foreground", children: "Portfolio" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/why-us", className: "hover:text-foreground", children: "Why Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Web Development" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "SaaS Development" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Enterprise Systems" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "UI/UX Design" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Cloud Deployment" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "hello@zylostech.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+251 911 000 000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+251 911 000 000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+251 911 000 000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Addis Ababa, Ethiopia" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Zylos Tech. All rights reserved." }) }) })
  ] });
}
function AnimatedBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px]",
        animate: { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-[var(--primary-glow)]/20 blur-[140px]",
        animate: { x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] },
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]",
        animate: { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] },
        transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute top-20 right-1/4 h-24 w-24 rounded-2xl border border-primary/30",
        animate: { rotate: 360 },
        transition: { duration: 40, repeat: Infinity, ease: "linear" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute bottom-32 left-16 h-16 w-16 rounded-full border border-[var(--primary-glow)]/40",
        animate: { y: [0, -20, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/",
        className: "mt-6 inline-flex rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-white",
        children: "Go home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    console.error(error);
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-white",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-border px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zylos Tech — Software Engineering Company in Ethiopia" },
      {
        name: "description",
        content: "Zylos Tech builds high-performance websites, enterprise systems, and scalable SaaS for international clients. Software development from Ethiopia, world-class delivery."
      },
      { name: "author", content: "Zylos Tech" },
      { name: "keywords", content: "Web Development Ethiopia, Software Development Ethiopia, SaaS Development, Enterprise Software Solutions, System Development Company" },
      { name: "theme-color", content: "#0B1320" },
      { property: "og:site_name", content: "Zylos Tech" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Zylos Tech — Software Engineering Company in Ethiopia" },
      {
        property: "og:description",
        content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zylos Tech — Software Engineering Company in Ethiopia" },
      { name: "twitter:description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { name: "description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { property: "og:description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { property: "og:image", content: "https://zylos-tech.com/og-image.png" },
      { name: "twitter:image", content: "https://zylos-tech.com/og-image.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zylos Tech",
          url: "/",
          email: "hello@zylostech.com",
          description: "Software engineering company building websites, enterprise systems, and SaaS for international clients.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "ET"
          },
          areaServed: "Worldwide"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./why-us-VPKQhrTF.mjs");
const Route$7 = createFileRoute("/why-us")({
  head: () => ({
    meta: [{
      title: "Why Choose Us — Zylos Tech"
    }, {
      name: "description",
      content: "Fast delivery, scalable architecture, secure development, modern technologies, long-term support, global standards."
    }, {
      property: "og:title",
      content: "Why Choose Zylos Tech"
    }, {
      property: "og:description",
      content: "Six reasons international clients trust us to ship their most important software."
    }, {
      property: "og:url",
      content: "/why-us"
    }],
    links: [{
      rel: "canonical",
      href: "/why-us"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};
function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div"
}) {
  const Comp = motion[As];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants,
      transition: { delay },
      children
    }
  );
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${alignCls}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary-glow uppercase", children: eyebrow }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl", children: title }) }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: subtitle }) })
  ] });
}
const projectErp = "/assets/project-erp-CnpkY6hi.jpg";
const projectHotel = "/assets/project-hotel-BXW9Nwzv.jpg";
const projectRental = "/assets/project-rental-CIIXQZAR.jpg";
const projectTourism = "/assets/project-tourism-DFm8WJi9.jpg";
const projectEcommerce = "/assets/project-ecommerce-BNRIlhYs.jpg";
const projectSaas = "/assets/project-saas-IvQDbKZF.jpg";
const projectAiSupport = "/assets/project-ai-support-BlUn__mX.jpg";
const projectTelemedicine = "/assets/project-telemedicine-BHoh6czy.jpg";
const projectLogistics = "/assets/project-logistics-Bss3SUBX.jpg";
const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites optimized for performance, accessibility, and scalability." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Secure online stores with payment integration and conversion-focused UX." },
  { icon: Building2, title: "Enterprise Systems", desc: "Business management systems and workflow automation tailored to your ops." },
  { icon: Cloud, title: "SaaS Development", desc: "Cloud-based software platforms built for multi-tenant scale from day one." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces and experiences validated through research." },
  { icon: Plug, title: "API Integration", desc: "Third-party and custom API development with rock-solid contracts." },
  { icon: Database, title: "Database Architecture", desc: "Scalable database systems engineered for performance and reliability." },
  { icon: Server, title: "Cloud Deployment", desc: "AWS, Vercel, and Docker deployments with CI/CD and observability." }
];
const projects = [
  {
    title: "Enterprise ERP Platform",
    desc: "End-to-end resource planning for a regional manufacturer—HR, inventory, finance, and analytics in one suite.",
    image: projectErp,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    demoUrl: "#"
  },
  {
    title: "Hotel Management System",
    desc: "Reservations, housekeeping, billing, and channel sync for a 200-room property group.",
    image: projectHotel,
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    demoUrl: "#"
  },
  {
    title: "Rental Management Suite",
    desc: "Property listings, contracts, and tenant portals with automated payment workflows.",
    image: projectRental,
    tech: ["TypeScript", "Express", "PostgreSQL"],
    demoUrl: "#"
  },
  {
    title: "Tourism Booking Platform",
    desc: "Multi-vendor marketplace for tours and stays, integrated with Stripe and global payments.",
    image: projectTourism,
    tech: ["Next.js", "Stripe", "Tailwind", "Vercel"],
    demoUrl: "#"
  },
  {
    title: "E-Commerce Marketplace",
    desc: "Headless commerce platform with custom checkout, inventory, and merchant dashboard.",
    image: projectEcommerce,
    tech: ["React", "GraphQL", "MySQL", "AWS"],
    demoUrl: "#"
  },
  {
    title: "SaaS Analytics Application",
    desc: "Real-time business intelligence dashboard with role-based access and white-label theming.",
    image: projectSaas,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    demoUrl: "#"
  },
  {
    title: "AI-Powered Customer Support Bot",
    desc: "Integrated AI assistant answering queries, handling order tracking, and auto-routing complex tickets.",
    image: projectAiSupport,
    tech: ["React", "Python", "OpenAI API", "FastAPI"],
    demoUrl: "#"
  },
  {
    title: "Telemedicine Clinic Hub",
    desc: "Appointment scheduling, virtual video calls, electronic health records (EHR) compliance, and prescriptions.",
    image: projectTelemedicine,
    tech: ["Next.js", "WebRTC", "Node.js", "PostgreSQL"],
    demoUrl: "#"
  },
  {
    title: "Smart Logistics Tracker",
    desc: "Real-time fleet tracking, geofencing alerts, route optimization engine, and delivery dispatch dashboard.",
    image: projectLogistics,
    tech: ["React", "TypeScript", "Google Maps", "NestJS"],
    demoUrl: "#"
  },
  {
    title: "AI Analytics Dashboard",
    desc: "Interactive analytics dashboard with AI-driven insights and custom visualizations.",
    image: projectAiSupport,
    tech: ["React", "D3.js", "Python", "FastAPI"],
    demoUrl: "#"
  },
  {
    title: "IoT Monitoring Platform",
    desc: "Scalable platform for monitoring and managing IoT devices in real-time.",
    image: projectTelemedicine,
    tech: ["Node.js", "WebSockets", "MongoDB", "AWS IoT"],
    demoUrl: "#"
  },
  {
    title: "Blockchain Payment Gateway",
    desc: "Secure payment gateway leveraging blockchain for transparent transactions.",
    image: projectSaas,
    tech: ["Solidity", "Web3.js", "Ethereum", "Node.js"],
    demoUrl: "#"
  }
];
const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Tight cycles, weekly demos, and shipped value—no quarter-long surprises." },
  { icon: Server, title: "Scalable Architecture", desc: "Systems engineered for growth from your first 10 to your millionth user." },
  { icon: Shield, title: "Secure Development", desc: "Security-by-default with code reviews, SAST, and best-in-class auth flows." },
  { icon: Code, title: "Modern Technologies", desc: "Battle-tested modern stacks chosen for the job—not because they're trendy." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "Maintenance, observability, and on-call coverage long after launch." },
  { icon: Award, title: "Global Standards", desc: "Engineering practices benchmarked against the best teams in the world." }
];
const values = [
  { title: "Innovation", desc: "We treat every product as an opportunity to push what's possible." },
  { title: "Excellence", desc: "Craft is non-negotiable. Quality compounds." },
  { title: "Reliability", desc: "We say what we'll do, then we do it—on time, on spec." },
  { title: "Transparency", desc: "Open communication, honest tradeoffs, no surprises." },
  { title: "Client Success", desc: "Your business outcomes are the only metric that matters." }
];
const testimonials = [
  {
    quote: "Zylos Tech delivered our ERP rollout three weeks ahead of schedule and the system has been rock solid. The team is exceptional.",
    author: "Sara Mekonnen",
    role: "CTO, NorthBridge Holdings"
  },
  {
    quote: "They rebuilt our SaaS platform from the ground up. Page loads dropped from 4s to under 800ms and conversions are up 38%.",
    author: "Daniel Hartmann",
    role: "VP Engineering, Aerialink"
  },
  {
    quote: "Working with Zylos felt like adding a senior engineering team in a week. The communication and quality bar are world-class.",
    author: "Liya Tesfaye",
    role: "Founder, Mela Studios"
  },
  {
    quote: "Our booking platform handles 4x the traffic on the same infrastructure thanks to their architecture work. Outstanding partner.",
    author: "Marcus O'Brien",
    role: "Product Director, RoamCo"
  },
  {
    quote: "From discovery to deployment, every milestone hit. Zylos is the kind of partner you wish you'd hired three years earlier.",
    author: "Hanna Yusuf",
    role: "COO, Selam Logistics"
  }
];
const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "9+", label: "Clients Worldwide" },
  { value: "4+", label: "Years of Experience" },
  { value: "99.9%", label: "Uptime Delivered" }
];
const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "NestJS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  Cloud: ["AWS", "Vercel", "Docker"]
};
const Route$6 = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Zylos Tech" },
      {
        name: "description",
        content: "Our modern stack: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, AWS, Vercel, and Docker."
      },
      { property: "og:title", content: "Technologies — Zylos Tech" },
      { property: "og:description", content: "The modern, battle‑tested stack we ship production software with." },
      { property: "og:url", content: "/technologies" }
    ],
    links: [{ rel: "canonical", href: "/technologies" }]
  }),
  component: TechPage
});
function TechPage() {
  const getIcon = (group) => {
    switch (group) {
      case "Frontend":
        return CodeXml;
      case "Backend":
        return Server;
      case "Databases":
        return Database;
      case "Cloud":
        return Cloud;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Technologies",
        title: "A modern stack chosen for the job",
        subtitle: "We pick proven tools, not trends — and we know them deeply enough to push them past the docs."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 md:grid-cols-2", children: Object.entries(techStack).map(([group, items]) => {
      const Icon = getIcon(group);
      const isLeft = group === "Frontend" || group === "Databases";
      const containerVariants = isLeft ? { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } } : { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } };
      const headingClass = `flex items-center text-sm font-semibold uppercase tracking-wider text-primary-glow ${isLeft ? "justify-start" : "justify-end"}`;
      const itemJustify = isLeft ? "justify-start" : "justify-end";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6",
          variants: containerVariants,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: headingClass, children: [
              Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mr-2 h-4 w-4" }),
              group
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.ul,
              {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-40px" },
                variants: stagger,
                className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
                children: items.map((t) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.li,
                    {
                      variants: staggerItem,
                      whileHover: { y: -4 },
                      className: `card-glow rounded-xl border border-border/60 bg-card/60 p-4 text-sm font-medium flex ${itemJustify} items-center`,
                      children: [
                        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mr-2 h-4 w-4" }),
                        t
                      ]
                    },
                    t
                  );
                })
              }
            )
          ]
        },
        group
      );
    }) })
  ] });
}
const BASE_URL = "https://zylos-tech.com";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
          { path: "/technologies", changefreq: "monthly", priority: "0.6" },
          { path: "/why-us", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-Bk02S-HP.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Zylos Tech"
    }, {
      name: "description",
      content: "Custom web development, SaaS, enterprise systems, UI/UX, APIs, databases, and cloud deployment — engineered for performance and scale."
    }, {
      property: "og:title",
      content: "Services — Zylos Tech"
    }, {
      property: "og:description",
      content: "End-to-end software engineering services for startups, SMEs, and enterprises."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-DJUg4_dM.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Projects — Zylos Tech"
    }, {
      name: "description",
      content: "Selected projects: ERP, hotel and rental management systems, tourism platforms, e-commerce, and SaaS applications built by Zylos Tech."
    }, {
      property: "og:title",
      content: "Projects — Zylos Tech"
    }, {
      property: "og:description",
      content: "Selected platforms we've built for clients across industries."
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          description: p.desc
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-D1E4E8PT.mjs");
object({
  name: string().trim().min(1, "Name is required").max(100),
  email: string().trim().email("Enter a valid email").max(255),
  company: string().trim().max(150).optional().or(literal("")),
  service: string().min(1, "Pick a service"),
  message: string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2e3)
});
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Zylos Tech"
    }, {
      name: "description",
      content: "Tell us about your project. Zylos Tech responds within one business day. Based in Addis Ababa, Ethiopia, serving clients worldwide."
    }, {
      property: "og:title",
      content: "Contact Zylos Tech"
    }, {
      property: "og:description",
      content: "Let's build something great together. Reach our team today."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Zylos Tech",
        mainEntity: {
          "@type": "Organization",
          name: "Zylos Tech",
          email: "hello@zylostech.com",
          telephone: "+251 911 000 000",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "ET"
          }
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-HBPtlCQD.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Zylos Tech"
    }, {
      name: "description",
      content: "Zylos Tech is a software engineering company based in Ethiopia, building world-class digital products for international clients."
    }, {
      property: "og:title",
      content: "About Zylos Tech"
    }, {
      property: "og:description",
      content: "Our mission, vision, and the values that drive our engineering teams."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CX2fOcx8.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Zylos Tech — Building Powerful Software Solutions"
    }, {
      name: "description",
      content: "Zylos Tech develops high-performance websites, enterprise systems, and scalable SaaS platforms that help businesses grow globally."
    }, {
      property: "og:title",
      content: "Zylos Tech — Building Powerful Software Solutions"
    }, {
      property: "og:description",
      content: "High-performance websites, enterprise systems, and scalable SaaS for international clients."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WhyUsRoute = Route$7.update({
  id: "/why-us",
  path: "/why-us",
  getParentRoute: () => Route$8
});
const TechnologiesRoute = Route$6.update({
  id: "/technologies",
  path: "/technologies",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TechnologiesRoute,
  WhyUsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Reveal as R,
  SectionHeading as S,
  services as a,
  staggerItem as b,
  stats as c,
  projects as p,
  router as r,
  stagger as s,
  testimonials as t,
  values as v,
  whyUs as w
};
