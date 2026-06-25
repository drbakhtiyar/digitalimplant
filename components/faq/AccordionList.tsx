"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

function AccordionItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display font-medium text-white text-sm leading-relaxed">{q}</span>
        <ChevronDown
          size={16}
          className={`text-sky shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/5">
          <p className="text-muted text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function AccordionList({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <AccordionItem key={item.q} {...item} />
      ))}
    </div>
  );
}
