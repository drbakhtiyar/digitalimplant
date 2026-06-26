import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-muted">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={10} className="text-muted/50 shrink-0" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-sky transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-off-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
