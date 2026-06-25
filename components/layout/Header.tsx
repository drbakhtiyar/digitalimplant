"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { nav, langs, langNames, routes } from "@/lib/i18n";

const HexIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <polygon
      points="14,2 25,8 25,20 14,26 3,20 3,8"
      fill="none"
      stroke="url(#hex-grad)"
      strokeWidth="1.5"
    />
    <circle cx="14" cy="14" r="3" fill="url(#hex-grad)" />
    <line x1="14" y1="6" x2="14" y2="10" stroke="url(#hex-grad)" strokeWidth="1" />
    <line x1="14" y1="18" x2="14" y2="22" stroke="url(#hex-grad)" strokeWidth="1" />
    <line x1="7" y1="10" x2="10.5" y2="12" stroke="url(#hex-grad)" strokeWidth="1" />
    <line x1="17.5" y1="16" x2="21" y2="18" stroke="url(#hex-grad)" strokeWidth="1" />
    <defs>
      <linearGradient id="hex-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0057FF" />
        <stop offset="100%" stopColor="#00E5FF" />
      </linearGradient>
    </defs>
  </svg>
);

interface HeaderProps {
  lang: Lang;
}

const navKeys = ["planning", "guided", "shape", "brands", "blog", "contact"] as const;

export default function Header({ lang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const t = nav[lang];

  function navHref(key: string) {
    const r = routes[key] ?? key;
    return `/${lang}/${r}`;
  }

  function switchLang(l: Lang) {
    const parts = pathname.split("/");
    parts[1] = l;
    return parts.join("/") || `/${l}`;
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2.5 shrink-0">
          <HexIcon />
          <div>
            <p className="font-display font-bold text-white text-sm tracking-wider leading-none">
              DIGITAL IMPLANT
            </p>
            <p className="text-sky text-[9px] tracking-[0.3em] uppercase leading-none mt-0.5">
              Rəqəmsal İmplantologiya
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navKeys.map((key) => {
            const href = navHref(key);
            const active = pathname.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                className={`px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded ${
                  active ? "text-sky" : "text-white/60 hover:text-white"
                }`}
              >
                {t[key]}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <div className="hidden sm:flex items-center gap-1 border border-white/10 rounded px-1 py-0.5">
            {langs.map((l) => (
              <Link
                key={l}
                href={switchLang(l)}
                className={`px-2 py-0.5 text-[10px] font-display font-semibold rounded transition-colors ${
                  l === lang
                    ? "bg-blue text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {langNames[l]}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/${lang}/appointment`}
            className="hidden sm:inline-flex items-center gap-1.5 bg-blue hover:bg-blue-light text-white text-xs font-display font-semibold px-4 py-2 transition-colors shadow-[0_0_20px_rgba(0,87,255,0.4)]"
          >
            {t.appointment}
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
            aria-label="Menyu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark-2/95 backdrop-blur-xl border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-5 py-6 space-y-1">
            {navKeys.map((key) => (
              <Link
                key={key}
                href={navHref(key)}
                className="block px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {t[key]}
              </Link>
            ))}
            <Link
              href={`/${lang}/appointment`}
              className="block mt-4 px-4 py-3 bg-blue text-white text-sm font-semibold text-center"
            >
              {t.appointment}
            </Link>
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/5">
              {langs.map((l) => (
                <Link
                  key={l}
                  href={switchLang(l)}
                  className={`px-3 py-1.5 text-xs font-semibold border rounded transition-colors ${
                    l === lang
                      ? "border-blue bg-blue text-white"
                      : "border-white/10 text-white/50 hover:text-white"
                  }`}
                >
                  {langNames[l]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
