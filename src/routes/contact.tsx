import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().min(1, "Pick a service"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});
type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zylos Tech" },
      {
        name: "description",
        content: "Tell us about your project. Zylos Tech responds within one business day. Based in Addis Ababa, Ethiopia, serving clients worldwide.",
      },
      { property: "og:title", content: "Contact Zylos Tech" },
      { property: "og:description", content: "Let's build something great together. Reach our team today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zylos Tech",
          mainEntity: {
            "@type": "Organization",
            name: "Zylos Tech",
            email: "hello@zylostech.com",
            telephone: "+251 911 000 000",
            address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setErr(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Could not send right now. Try again in a moment.");
      }
      setSent(true);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        subtitle="Tell us about your project. We respond within one business day."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6 sm:p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-primary-glow" />
                <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. A member of our team will reply within one business day.
                </p>
              </motion.div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} className={inputCls} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input type="email" {...register("email")} className={inputCls} placeholder="jane@company.com" />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" error={errors.company?.message}>
                    <input {...register("company")} className={inputCls} placeholder="Acme Inc." />
                  </Field>
                  <Field label="Service" error={errors.service?.message}>
                    <select {...register("service")} className={inputCls} defaultValue="">
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about your project, timelines, and goals."
                  />
                </Field>
                {err && <p className="text-sm text-destructive">{err}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="space-y-6">
            <InfoItem icon={<Mail className="h-5 w-5" />} title="Email" value="hello@zylostech.com" href="mailto:hello@zylostech.com" />
            <InfoItem icon={<Phone className="h-5 w-5" />} title="Phone" value="+251 911 000 000" href="tel:+251911000000" />
            <InfoItem icon={<MapPin className="h-5 w-5" />} title="Location" value="Addis Ababa, Ethiopia" />
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="Zylos Tech location"
                src="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function InfoItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-5 transition-colors hover:border-primary/40">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary-glow ring-1 ring-primary/20">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
