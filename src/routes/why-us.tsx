import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { stagger } from "@/components/Reveal";
import { whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Zylos Tech" },
      {
        name: "description",
        content: "Fast delivery, scalable architecture, secure development, modern technologies, long-term support, global standards.",
      },
      { property: "og:title", content: "Why Choose Zylos Tech" },
      { property: "og:description", content: "Six reasons international clients trust us to ship their most important software." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why choose us"
        title="The qualities that define our engineering"
        subtitle="What you get when you work with Zylos Tech — and why our clients stay with us for years."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyUs.map((w) => (
          <ServiceCard key={w.title} {...w} />
        ))}
      </motion.div>
    </section>
  );
}
