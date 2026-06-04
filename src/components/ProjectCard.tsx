import { motion } from "framer-motion";
import type { Project } from "@/lib/site-data";
import { staggerItem } from "./Reveal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      className="card-glow group relative overflow-hidden rounded-2xl border border-border/60 bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm text-foreground/90">{project.desc}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs text-primary-glow"
            >
              {t}
            </span>
          ))}
          <div className="mt-4 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a href={project.demoUrl ?? "#"} className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/80">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
