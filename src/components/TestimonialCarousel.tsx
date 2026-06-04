import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-8 sm:p-12">
        <Quote className="h-8 w-8 text-primary-glow/70" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <p className="text-lg leading-relaxed sm:text-xl">"{t.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous"
          className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/60 hover:border-primary/60"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => setI((v) => (v + 1) % testimonials.length)}
          aria-label="Next"
          className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/60 hover:border-primary/60"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
