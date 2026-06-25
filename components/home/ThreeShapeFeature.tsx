import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    label: "3Shape İmplant Studio",
    title: "Dünyada Lider Rəqəmsal Planlaşdırma Proqramı",
    body: "3Shape Implant Studio CBCT tomoqrafiya məlumatlarını rəqəmsal diş modeli ilə birləşdirərək hər implantın üç ölçülü mühitdə planlaşdırılmasına imkan yaradır. Prostetik əsaslı yanaşma sayəsində ilk növbədə bitmiş protezin forması müəyyən edilir, sonra isə bu nəticəyə uyğun olaraq implantın mövqeyi hesablanır.",
    features: [
      "CBCT + rəqəmsal tarama inteqrasiyası",
      "Prostetik əsaslı implant planlaşdırması",
      "Virtual cərrahi simulyasiya",
      "STL formatında şablon ixracı",
    ],
    cta: "3Shape haqqında ətraflı",
    href: "/az/3shape",
  },
  en: {
    label: "3Shape Implant Studio",
    title: "World's Leading Digital Planning Software",
    body: "3Shape Implant Studio combines CBCT data with a digital tooth model to enable three-dimensional planning of every implant. The prosthetically driven approach first determines the shape of the finished prosthesis, then calculates the ideal implant position to achieve that result.",
    features: [
      "CBCT + digital scan integration",
      "Prosthetically driven implant planning",
      "Virtual surgical simulation",
      "STL guide export",
    ],
    cta: "Learn more about 3Shape",
    href: "/en/3shape",
  },
  ru: {
    label: "3Shape Implant Studio",
    title: "Ведущее Программное Обеспечение для Планирования",
    body: "3Shape Implant Studio объединяет данные КТ с цифровой моделью зубов для трёхмерного планирования каждого импланта. Протетически ориентированный подход сначала определяет форму готового протеза, а затем рассчитывает идеальное положение импланта.",
    features: [
      "Интеграция КТ + цифровое сканирование",
      "Протетически ориентированное планирование",
      "Виртуальная хирургическая симуляция",
      "Экспорт шаблона в формате STL",
    ],
    cta: "Подробнее о 3Shape",
    href: "/ru/3shape",
  },
};

const ScreenMockup = () => (
  <svg viewBox="0 0 400 280" className="w-full max-w-md" aria-hidden>
    <defs>
      <linearGradient id="screen-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0D2045" />
        <stop offset="100%" stopColor="#020B18" />
      </linearGradient>
      <linearGradient id="bar-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0057FF" />
        <stop offset="100%" stopColor="#00E5FF" />
      </linearGradient>
    </defs>

    {/* Monitor frame */}
    <rect x="20" y="10" width="360" height="230" rx="6" fill="#061428" stroke="rgba(0,87,255,0.3)" strokeWidth="1" />
    {/* Title bar */}
    <rect x="20" y="10" width="360" height="24" rx="6" fill="rgba(0,87,255,0.15)" />
    <circle cx="38" cy="22" r="4" fill="rgba(255,100,100,0.5)" />
    <circle cx="52" cy="22" r="4" fill="rgba(255,200,50,0.5)" />
    <circle cx="66" cy="22" r="4" fill="rgba(50,200,100,0.5)" />
    <text x="200" y="27" textAnchor="middle" fill="rgba(0,174,255,0.7)" fontSize="9" fontFamily="monospace">3Shape Implant Studio</text>

    {/* Left panel */}
    <rect x="28" y="42" width="80" height="190" rx="3" fill="rgba(0,87,255,0.05)" stroke="rgba(0,87,255,0.1)" strokeWidth="1" />
    {["CBCT Scan", "3D Model", "Implant", "Prosthetic", "Guide"].map((label, i) => (
      <g key={label}>
        <rect x="32" y={50 + i * 34} width="72" height="26" rx="2"
          fill={i === 2 ? "rgba(0,87,255,0.3)" : "rgba(255,255,255,0.03)"}
          stroke={i === 2 ? "rgba(0,87,255,0.5)" : "transparent"}
        />
        <text x="68" y={50 + i * 34 + 17} textAnchor="middle" fill={i === 2 ? "#00AEFF" : "rgba(255,255,255,0.4)"} fontSize="8" fontFamily="monospace">{label}</text>
      </g>
    ))}

    {/* Main viewport - 3D view placeholder */}
    <rect x="116" y="42" width="196" height="140" rx="3" fill="url(#screen-bg)" stroke="rgba(0,87,255,0.15)" strokeWidth="1" />

    {/* Simplified 3D bone cross-section */}
    <ellipse cx="214" cy="112" rx="70" ry="30" fill="rgba(126,158,192,0.12)" stroke="rgba(126,158,192,0.2)" strokeWidth="1" />
    <ellipse cx="214" cy="112" rx="50" ry="20" fill="rgba(126,158,192,0.08)" />
    {/* Implant in 3D view */}
    <rect x="208" y="72" width="12" height="50" rx="6" fill="url(#bar-grad)" opacity="0.9" />
    <rect x="210" y="62" width="8" height="14" rx="1" fill="rgba(0,174,255,0.7)" />
    {/* Dashed axis line */}
    <line x1="214" y1="56" x2="214" y2="130" stroke="rgba(0,229,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Dimension markers */}
    <line x1="230" y1="72" x2="230" y2="122" stroke="rgba(0,87,255,0.4)" strokeWidth="1" />
    <line x1="226" y1="72" x2="234" y2="72" stroke="rgba(0,87,255,0.4)" strokeWidth="1" />
    <line x1="226" y1="122" x2="234" y2="122" stroke="rgba(0,87,255,0.4)" strokeWidth="1" />
    <text x="236" y="100" fill="rgba(0,174,255,0.6)" fontSize="7" fontFamily="monospace">11mm</text>
    {/* Angle indicator */}
    <text x="120" y="60" fill="rgba(0,229,255,0.5)" fontSize="7" fontFamily="monospace">∠ 90°</text>

    {/* Bottom panel */}
    <rect x="116" y="188" width="196" height="36" rx="3" fill="rgba(0,87,255,0.05)" stroke="rgba(0,87,255,0.1)" strokeWidth="1" />
    {["Straumann BL Ø4.1×10", "Depth: 2.0mm sub", "Angle: 90° axial"].map((txt, i) => (
      <text key={txt} x="214" y={199 + i * 11} textAnchor="middle" fill="rgba(0,174,255,0.55)" fontSize="7" fontFamily="monospace">{txt}</text>
    ))}

    {/* Right panel - measurement */}
    <rect x="318" y="42" width="54" height="190" rx="3" fill="rgba(0,87,255,0.04)" stroke="rgba(0,87,255,0.08)" strokeWidth="1" />
    <text x="345" y="60" textAnchor="middle" fill="rgba(0,229,255,0.5)" fontSize="7" fontFamily="monospace">ANALYSIS</text>
    {[["Density", "D2"], ["Width", "6.2mm"], ["Depth", "14mm"], ["Quality", "A+"]].map(([k, v], i) => (
      <g key={k}>
        <text x="345" y={78 + i * 28} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">{k}</text>
        <text x="345" y={90 + i * 28} textAnchor="middle" fill="rgba(0,174,255,0.7)" fontSize="9" fontFamily="monospace" fontWeight="bold">{v}</text>
      </g>
    ))}

    {/* Stand */}
    <rect x="178" y="240" width="44" height="8" rx="2" fill="#061428" stroke="rgba(0,87,255,0.2)" strokeWidth="1" />
    <rect x="155" y="248" width="90" height="6" rx="2" fill="#061428" stroke="rgba(0,87,255,0.15)" strokeWidth="1" />
  </svg>
);

interface ThreeShapeFeatureProps {
  lang: Lang;
}

export default function ThreeShapeFeature({ lang }: ThreeShapeFeatureProps) {
  const c = content[lang];

  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
              {c.title}
            </h2>
            <p className="text-muted leading-relaxed mb-8">{c.body}</p>

            <ul className="space-y-3 mb-10">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                  <span className="text-off-white text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={c.href}
              className="inline-flex items-center gap-2 border border-blue/40 hover:border-sky text-sky hover:text-cyan font-display font-semibold text-sm px-6 py-3 transition-colors"
            >
              {c.cta}
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Right: mockup */}
          <div className="flex justify-center">
            <div className="relative p-1">
              <div className="absolute inset-0 bg-blue/5 blur-2xl" />
              <ScreenMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
