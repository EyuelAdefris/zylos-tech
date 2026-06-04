import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { stagger } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zylos Tech" },
      {
        name: "description",
        content: "Custom web development, SaaS, enterprise systems, UI/UX, APIs, databases, and cloud deployment — engineered for performance and scale.",
      },
      { property: "og:title", content: "Services — Zylos Tech" },
      { property: "og:description", content: "End-to-end software engineering services for startups, SMEs, and enterprises." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Premium software engineering, end to end"
        subtitle="Eight focused practices that combine to ship products your customers love and your team can scale."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>
    </section>
  );
}
