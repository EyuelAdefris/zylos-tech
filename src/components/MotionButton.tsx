import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)] hover:scale-[1.03]",
  ghost:
    "border border-border/80 bg-card/40 text-foreground backdrop-blur hover:border-primary/60 hover:bg-card",
};

export function MotionLink({
  to,
  children,
  variant = "primary",
  withArrow = true,
}: {
  to: ComponentProps<typeof Link>["to"];
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function MotionButton({
  children,
  variant = "primary",
  withArrow = true,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
} & ComponentProps<"button">) {
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${rest.className ?? ""}`}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
