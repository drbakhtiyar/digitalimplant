"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    eyebrow: "Bakıda Rəqəmsal İmplantologiya",
    h1a: "Rəqəmsal Dəqiqliklə.",
    h1b: "Mükəmməl Nəticə.",
    sub: "3Shape Implant Studio, rehberli cərrahiyyə və CBCT planlaşdırma ilə implantologiyada yeni standart. Hər implant virtual olaraq planlaşdırılır.",
    cta1: "Randevu Al",
    cta2: "Xidmətlər",
    stats: [
      { n: "3100+", l: "İmplant" },
      { n: "15+", l: "İl Təcrübə" },
      { n: "0.1mm", l: "Dəqiqlik" },
      { n: "98%", l: "Uğur Nisbəti" },
    ],
  },
  en: {
    eyebrow: "Digital Implantology in Baku",
    h1a: "Digital Precision.",
    h1b: "Perfect Outcomes.",
    sub: "A new standard in implantology with 3Shape Implant Studio, guided surgery and CBCT planning. Every implant is planned virtually.",
    cta1: "Book Appointment",
    cta2: "Our Services",
    stats: [
      { n: "3100+", l: "Implants" },
      { n: "15+", l: "Years Experience" },
      { n: "0.1mm", l: "Precision" },
      { n: "98%", l: "Success Rate" },
    ],
  },
  ru: {
    eyebrow: "Цифровая Имплантология в Баку",
    h1a: "Цифровая Точность.",
    h1b: "Идеальный Результат.",
    sub: "Новый стандарт в имплантологии с 3Shape Implant Studio, направляемой хирургией и КЛКТ-планированием. Каждый имплант планируется виртуально.",
    cta1: "Записаться",
    cta2: "Наши услуги",
    stats: [
      { n: "3100+", l: "Имплантов" },
      { n: "15+", l: "Лет Опыта" },
      { n: "0.1мм", l: "Точность" },
      { n: "98%", l: "Успеха" },
    ],
  },
};

const ImplantDiagram = () => (
  <svg viewBox="0 0 320 320" className="w-full max-w-xs" aria-hidden>
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,87,255,0.15)" />
        <stop offset="100%" stopColor="rgba(0,87,255,0)" />
      </radialGradient>
      <linearGradient id="implantGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00AEFF" />
        <stop offset="100%" stopColor="#0057FF" />
      </linearGradient>
      <linearGradient id="crownGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF4FF" />
        <stop offset="100%" stopColor="#7E9EC0" />
      </linearGradient>
    </defs>
    {/* Glow background */}
    <circle cx="160" cy="160" r="140" fill="url(#bgGlow)" />
    {/* Orbit rings */}
    <circle cx="160" cy="160" r="120" fill="none" stroke="rgba(0,87,255,0.15)" strokeWidth="1" strokeDasharray="4 6" />
    <circle cx="160" cy="160" r="90" fill="none" stroke="rgba(0,174,255,0.12)" strokeWidth="1" strokeDasharray="3 5" />
    {/* Bone (grey rectangle) */}
    <rect x="120" y="170" width="80" height="60" rx="4" fill="rgba(126,158,192,0.18)" stroke="rgba(126,158,192,0.3)" strokeWidth="1" />
    {/* Implant body (threaded post) */}
    <rect x="148" y="140" width="24" height="80" rx="12" fill="url(#implantGrad)" />
    {/* Thread lines */}
    {[150, 160, 170, 180, 190, 200].map((y, i) => (
      <line key={i} x1="148" y1={y} x2="172" y2={y} stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" />
    ))}
    {/* Abutment */}
    <rect x="152" y="116" width="16" height="28" rx="2" fill="rgba(0,174,255,0.8)" />
    {/* Crown */}
    <ellipse cx="160" cy="108" rx="22" ry="14" fill="url(#crownGrad)" />
    <ellipse cx="160" cy="106" rx="18" ry="10" fill="rgba(255,255,255,0.9)" />
    {/* Data points */}
    <circle cx="110" cy="130" r="3" fill="#00E5FF" />
    <line x1="113" y1="130" x2="148" y2="140" stroke="rgba(0,229,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="210" cy="125" r="3" fill="#0057FF" />
    <line x1="207" y1="125" x2="172" y2="138" stroke="rgba(0,87,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Corner brackets */}
    {[
      [40, 40, 40, 50, 50, 40],
      [280, 40, 280, 50, 270, 40],
      [40, 280, 40, 270, 50, 280],
      [280, 280, 280, 270, 270, 280],
    ].map(([x1, y1, x2, y2, x3, y3], i) => (
      <g key={i}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,87,255,0.5)" strokeWidth="1.5" />
        <line x1={x1} y1={y1} x2={x3} y2={y3} stroke="rgba(0,87,255,0.5)" strokeWidth="1.5" />
      </g>
    ))}
  </svg>
);

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const c = content[lang];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Blue glow orb */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 px-3 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                <span className="text-sky text-[10px] font-display font-semibold tracking-[0.4em] uppercase">
                  {c.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-bold leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                <span className="text-white">{c.h1a}</span>
                <br />
                <span className="text-gradient">{c.h1b}</span>
              </h1>

              <p className="text-muted text-lg leading-relaxed max-w-xl mb-10">
                {c.sub}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${lang}/appointment`}
                  className="inline-flex items-center gap-2 bg-blue hover:bg-blue-light text-white font-display font-semibold text-sm px-7 py-3.5 transition-colors shadow-[0_0_30px_rgba(0,87,255,0.5)]"
                >
                  {c.cta1}
                </Link>
                <Link
                  href={`/${lang}/planning`}
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-sky text-white/70 hover:text-sky font-display font-semibold text-sm px-7 py-3.5 transition-colors"
                >
                  {c.cta2}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue/10 rounded-full blur-3xl" />
              <ImplantDiagram />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {c.stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display font-bold text-3xl text-gradient mb-1">{s.n}</p>
              <p className="text-muted text-xs tracking-widest uppercase">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
