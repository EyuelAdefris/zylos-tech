import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, stagger, staggerItem } from "@/components/Reveal";
import { values } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zylos Tech" },
      {
        name: "description",
        content: "Zylos Tech is a software engineering company based in Ethiopia, building world-class digital products for international clients.",
      },
      { property: "og:title", content: "About Zylos Tech" },
      { property: "og:description", content: "Our mission, vision, and the values that drive our engineering teams." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About us"
          title="A software engineering company built for the next decade"
          subtitle="We're a team of senior engineers, designers, and product strategists in Addis Ababa, partnering with companies worldwide to ship software that matters."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-glow rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                Empowering businesses through innovative software solutions, scalable systems, and
                world-class digital experiences.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-glow rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To become Africa's leading software engineering company recognized globally for
                excellence, innovation, and reliability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Core values" title="What we stand for" />
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {values.map((v, i) => (
            <motion.li key={v.title} variants={staggerItem} className="relative pl-14 pb-10 last:pb-0">
              <div className="absolute left-0 grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-sm font-semibold text-white shadow-[var(--shadow-glow)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-lg font-semibold">{v.title}</h4>
              <p className="mt-2 text-muted-foreground">{v.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </>
  );
}
