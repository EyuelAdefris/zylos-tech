import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { staggerItem } from "./Reveal";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className="card-glow group relative overflow-hidden rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-primary/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </motion.article>
  );
}
