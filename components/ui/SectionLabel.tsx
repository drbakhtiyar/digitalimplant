import { clsx } from "clsx";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={clsx("flex items-center gap-3 mb-4", className)}>
      <div className="h-px w-8 bg-gradient-to-r from-blue to-cyan" />
      <span className="text-sky text-[10px] font-display font-semibold tracking-[0.5em] uppercase">
        {children}
      </span>
    </div>
  );
}
