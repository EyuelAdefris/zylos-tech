import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-white"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zylos Tech — Software Engineering Company in Ethiopia" },
      {
        name: "description",
        content:
          "Zylos Tech builds high-performance websites, enterprise systems, and scalable SaaS for international clients. Software development from Ethiopia, world-class delivery.",
      },
      { name: "author", content: "Zylos Tech" },
      { name: "keywords", content: "Web Development Ethiopia, Software Development Ethiopia, SaaS Development, Enterprise Software Solutions, System Development Company" },
      { name: "theme-color", content: "#0B1320" },
      { property: "og:site_name", content: "Zylos Tech" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Zylos Tech — Software Engineering Company in Ethiopia" },
      {
        property: "og:description",
        content:
          "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zylos Tech — Software Engineering Company in Ethiopia" },
      { name: "twitter:description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { name: "description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { property: "og:description", content: "High-performance websites, enterprise systems, and scalable SaaS, engineered in Ethiopia for the world." },
      { property: "og:image", content: "https://zylos-tech.com/og-image.png" },
      { name: "twitter:image", content: "https://zylos-tech.com/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
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
          description:
            "Software engineering company building websites, enterprise systems, and SaaS for international clients.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "ET",
          },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
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
            `,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedBackground />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
