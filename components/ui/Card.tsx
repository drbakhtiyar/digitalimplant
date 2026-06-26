import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className, glow }: CardProps) {
  return (
    <div
      className={clsx(
        "glass p-7 transition-all duration-300",
        glow && "hover:border-blue/30 hover:shadow-[0_0_40px_rgba(0,87,255,0.12)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
