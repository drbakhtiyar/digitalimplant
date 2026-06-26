import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "muted";
  className?: string;
}

const variants = {
  blue: "bg-blue/10 text-sky border-blue/20",
  cyan: "bg-cyan/10 text-cyan border-cyan/20",
  muted: "bg-white/5 text-muted border-white/10",
};

export default function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border text-[10px] font-display font-semibold tracking-[0.35em] uppercase px-2.5 py-1",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
