"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const labels: Record<Lang, { call: string; whatsapp: string; book: string }> = {
  az: { call: "Zəng et", whatsapp: "WhatsApp", book: "Randevu Al" },
  en: { call: "Call", whatsapp: "WhatsApp", book: "Book Now" },
  ru: { call: "Позвонить", whatsapp: "WhatsApp", book: "Записаться" },
};

export default function StickyMobileCTA({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false);
  const t = labels[lang];

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-dark-2/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-bottom">
        <div className="flex gap-2">
          <a
            href="tel:+994105010107"
            className="flex-1 flex items-center justify-center gap-2 border border-white/15 text-white/80 text-xs font-display font-semibold py-3 hover:border-sky hover:text-sky transition-colors"
          >
            <Phone size={14} />
            {t.call}
          </a>
          <a
            href="https://wa.me/994105010107"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-white/15 text-white/80 text-xs font-display font-semibold py-3 hover:border-green-400 hover:text-green-400 transition-colors"
          >
            <MessageCircle size={14} />
            {t.whatsapp}
          </a>
          <Link
            href={`/${lang}/appointment`}
            className="flex-1 flex items-center justify-center gap-1 bg-blue text-white text-xs font-display font-semibold py-3 shadow-[0_0_20px_rgba(0,87,255,0.4)]"
          >
            {t.book}
          </Link>
        </div>
      </div>
    </div>
  );
}
