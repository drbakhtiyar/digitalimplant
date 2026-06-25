import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

  const variants = {
    primary:
      "bg-blue text-white hover:bg-blue-light shadow-[0_0_24px_rgba(0,87,255,0.4)] hover:shadow-[0_0_36px_rgba(0,87,255,0.6)]",
    outline:
      "border border-white/20 text-white hover:border-sky hover:text-sky bg-transparent",
    ghost: "text-muted hover:text-white bg-transparent",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-sm px-8 py-4 gap-2",
  };

  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
