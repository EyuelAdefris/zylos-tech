import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { stagger } from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Zylos Tech" },
      {
        name: "description",
        content: "Selected projects: ERP, hotel and rental management systems, tourism platforms, e-commerce, and SaaS applications built by Zylos Tech.",
      },
      { property: "og:title", content: "Portfolio — Zylos Tech" },
      { property: "og:description", content: "Selected platforms we've built for clients across industries." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            description: p.desc,
          })),
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="A track record of shipped software"
        subtitle="Hover any project to learn more about what we built and the technologies behind it."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </motion.div>
    </section>
  );
}
