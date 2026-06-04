import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { stagger, staggerItem } from "@/components/Reveal";
import { techStack } from "@/lib/site-data";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Zylos Tech" },
      {
        name: "description",
        content: "Our modern stack: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, AWS, Vercel, and Docker.",
      },
      { property: "og:title", content: "Technologies — Zylos Tech" },
      { property: "og:description", content: "The modern, battle-tested stack we ship production software with." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Technologies"
        title="A modern stack chosen for the job"
        subtitle="We pick proven tools, not trends — and we know them deeply enough to push them past the docs."
      />
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {(Object.entries(techStack) as [string, readonly string[]][]).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
              {group}
            </h3>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {items.map((t) => (
                <motion.li
                  key={t}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="card-glow rounded-xl border border-border/60 bg-card/60 p-4 text-center text-sm font-medium"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
}
