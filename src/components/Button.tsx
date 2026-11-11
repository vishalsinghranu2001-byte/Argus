import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "lime" | "ghost" | "outline-light";

const base =
  "inline-flex items-center justify-center font-semibold text-body tracking-[0.054em] transition-colors";

const variants: Record<Variant, string> = {
  // Primary conversion action. The only saturated color on the page.
  lime: "bg-electric-lime text-near-black-ink rounded-button px-5 py-2.5 border border-electric-lime hover:bg-electric-lime/90",
  // Secondary action — underline-style affordance via 11% bottom border.
  ghost:
    "text-near-black-ink rounded-none px-3 pt-3 pb-0 border-b border-b-[rgba(17,17,13,0.11)] hover:border-b-near-black-ink",
  // Outline button for use on dark (Forest Canopy) surfaces.
  "outline-light":
    "text-pure-white rounded-button px-5 py-2.5 border border-pure-white hover:bg-pure-white/10",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "lime",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
