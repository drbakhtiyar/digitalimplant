import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({ children, className, size = "xl" }: ContainerProps) {
  return (
    <div className={clsx("mx-auto px-5 lg:px-10", sizes[size], className)}>
      {children}
    </div>
  );
}
