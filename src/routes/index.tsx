import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import { MotionLink } from "@/components/MotionButton";
import { Reveal, stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services, projects, stats, whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zylos Tech — Building Powerful Software Solutions" },
      {
        name: "description",
        content:
          "Zylos Tech develops high-performance websites, enterprise systems, and scalable SaaS platforms that help businesses grow globally.",
      },
      { property: "og:title", content: "Zylos Tech — Building Powerful Software Solutions" },
      {
        property: "og:description",
        content: "High-performance websites, enterprise systems, and scalable SaaS for international clients.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 [background:var(--gradient-hero)] -z-10" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
                <Sparkles className="h-3.5 w-3.5" />
                Engineering excellence from Ethiopia
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Building Powerful{" "}
                <span className="text-gradient">Software Solutions</span>{" "}
                For The Future
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Zylos Tech develops high-performance websites, enterprise systems, and scalable
                software solutions that help businesses grow globally.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <MotionLink to="/contact">Start a Project</MotionLink>
                <MotionLink to="/services" variant="ghost" withArrow={false}>
                  View Services
                </MotionLink>
              </div>
            </Reveal>
            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-12 grid max-w-md grid-cols-2 gap-6 sm:max-w-lg sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={staggerItem}>
                  <dt className="text-2xl font-semibold text-gradient sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-glow)]"
            >
              <img
                src={heroImage}
                alt="Zylos Tech analytics dashboard preview"
                width={1600}
                height={1200}
                className="block w-full"
              />
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 -bottom-6 hidden rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur sm:block"
            >
              <p className="text-xs text-muted-foreground">Uptime</p>
              <p className="text-xl font-semibold text-gradient">99.9%</p>
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-10 hidden rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur sm:block"
            >
              <p className="text-xs text-muted-foreground">Avg. Build</p>
              <p className="text-xl font-semibold text-gradient">6 weeks</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering across the full stack"
          subtitle="From product strategy to production deployment, our teams cover every layer of modern software."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </motion.div>
        <div className="mt-8 flex justify-center">
          <MotionLink to="/services" variant="ghost">
            See all services
          </MotionLink>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Software that ships and scales"
          subtitle="A glimpse at the platforms we've built for clients across industries."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, 6).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
        <div className="mt-8 flex justify-center">
          <MotionLink to="/portfolio" variant="ghost">
            View portfolio
          </MotionLink>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why teams choose us"
          title="A partner you can build with for years"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyUs.slice(0, 6).map((w) => (
            <ServiceCard key={w.title} {...w} />
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What clients say" title="Trusted by founders and enterprise teams" />
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[image:var(--gradient-card)] px-6 py-12 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-0 [background:var(--gradient-hero)] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Let's build something <span className="text-gradient">great together</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project. We respond within one business day.
              </p>
              <div className="mt-8 flex justify-center">
                <MotionLink to="/contact">Start a Project</MotionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
