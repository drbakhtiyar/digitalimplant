import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/home/CTASection";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const content = {
  az: {
    label: "Klinik Nəticələr",
    title: "Vaka Qalereya",
    sub: "Rəqəmsal planlaşdırma ilə həyata keçirilmiş müvəffəqiyyətli implant vakalarından seçmə nümunələr.",
    metaTitle: "İmplant Vaka Qalereya | Digital Implant Bakı",
    metaDesc: "Digital Implant klinikasının rəqəmsal planlaşdırma ilə aparılmış implant vakalarından nümunələr. Before/after, All-on-4, tək implant.",
    cases: [
      { id: 1, title: "All-on-4 Tam Çənə Rehabilitasiyası", tag: "All-on-4", detail: "4 implant · Eyni gün protez · Alt çənə" },
      { id: 2, title: "Ön Bölgə Tək İmplant", tag: "Estetik Zone", detail: "Tək implant · Sinus mənşəli tac · 21 dış" },
      { id: 3, title: "Çoxlu İmplant Rehberli Cərrahiyyə", tag: "Rehberli Cərrahiyyə", detail: "6 implant · Cərrahi şablon · Üst çənə" },
      { id: 4, title: "Dərhal Yükləmə Protokolu", tag: "Dərhal Yükləmə", detail: "Straumann BLX · 4 implant · 1 gündə protez" },
      { id: 5, title: "Dar Qabırğa Horizontal Genişlənmə + İmplant", tag: "Sümük Artırımı", detail: "GBR + implant · 2 mərhələ · 4 ay" },
      { id: 6, title: "Full Arch Bredent copaSKY", tag: "Fast & Fixed", detail: "copaSKY · 6 implant · Angulated abutment" },
      { id: 7, title: "Posterior Tək Molар İmplant", tag: "Posterior Zone", detail: "Tək implant · 46 dış · Sinus lifti olmadan" },
      { id: 8, title: "Rəqəmsal İş Axını — 3Shape + Şablon", tag: "Rəqəmsal Workflow", detail: "3Shape Studio · STL export · 3D çap şablon" },
      { id: 9, title: "Üst Çənə Tam Reabilitasiya", tag: "Full Arch", detail: "8 implant · Üst çənə · Sabit zirkonium körpü" },
    ],
    ctaLabel: "Öz Vakansını Planlaşdır",
  },
  en: {
    label: "Clinical Results",
    title: "Case Gallery",
    sub: "Selected successful implant cases performed with digital planning.",
    metaTitle: "Implant Case Gallery | Digital Implant Baku",
    metaDesc: "Case gallery from Digital Implant clinic — digitally planned cases including All-on-4, single implants, guided surgery.",
    cases: [
      { id: 1, title: "All-on-4 Full Arch Rehabilitation", tag: "All-on-4", detail: "4 implants · Same-day prosthesis · Lower jaw" },
      { id: 2, title: "Anterior Single Implant", tag: "Esthetic Zone", detail: "Single implant · Porcelain crown · Tooth 21" },
      { id: 3, title: "Multiple Implants Guided Surgery", tag: "Guided Surgery", detail: "6 implants · Surgical guide · Upper jaw" },
      { id: 4, title: "Immediate Loading Protocol", tag: "Immediate Loading", detail: "Straumann BLX · 4 implants · Prosthesis day 1" },
      { id: 5, title: "Narrow Ridge GBR + Implant", tag: "Bone Augmentation", detail: "GBR + implant · 2 stages · 4 months" },
      { id: 6, title: "Full Arch Bredent copaSKY", tag: "Fast & Fixed", detail: "copaSKY · 6 implants · Angulated abutments" },
      { id: 7, title: "Posterior Single Molar Implant", tag: "Posterior Zone", detail: "Single implant · Tooth 46 · No sinus lift" },
      { id: 8, title: "Digital Workflow — 3Shape + Guide", tag: "Digital Workflow", detail: "3Shape Studio · STL export · 3D-printed guide" },
      { id: 9, title: "Upper Jaw Full Rehabilitation", tag: "Full Arch", detail: "8 implants · Upper jaw · Fixed zirconia bridge" },
    ],
    ctaLabel: "Plan Your Own Case",
  },
  ru: {
    label: "Клинические Результаты",
    title: "Галерея Клинических Случаев",
    sub: "Избранные успешные клинические случаи, выполненные с цифровым планированием.",
    metaTitle: "Галерея Клинических Случаев | Digital Implant Баку",
    metaDesc: "Галерея клиники Digital Implant — цифровое планирование, All-on-4, одиночные импланты, направляемая хирургия.",
    cases: [
      { id: 1, title: "All-on-4 Полная Реабилитация Челюсти", tag: "All-on-4", detail: "4 импланта · Протез в день · Нижняя челюсть" },
      { id: 2, title: "Одиночный Имплант в Зоне Улыбки", tag: "Эстетическая Зона", detail: "1 имплант · Фарфоровая коронка · Зуб 21" },
      { id: 3, title: "Множественные Импланты + Шаблон", tag: "Направляемая Хирургия", detail: "6 имплантов · Хирургический шаблон · Верхняя челюсть" },
      { id: 4, title: "Протокол Немедленной Нагрузки", tag: "Немедленная Нагрузка", detail: "Straumann BLX · 4 импланта · Протез в 1 день" },
      { id: 5, title: "Узкий Гребень GBR + Имплант", tag: "Костная Аугментация", detail: "GBR + имплант · 2 этапа · 4 месяца" },
      { id: 6, title: "Полная Дуга Bredent copaSKY", tag: "Fast & Fixed", detail: "copaSKY · 6 имплантов · Угловые абатменты" },
      { id: 7, title: "Одиночный Моляр Заднего Отдела", tag: "Задний Отдел", detail: "1 имплант · Зуб 46 · Без синус-лифта" },
      { id: 8, title: "Цифровой Рабочий Процесс 3Shape", tag: "Цифровой Процесс", detail: "3Shape Studio · Экспорт STL · 3D-шаблон" },
      { id: 9, title: "Полная Реабилитация Верхней Челюсти", tag: "Полная Дуга", detail: "8 имплантов · Верхняя челюсть · Мост из циркония" },
    ],
    ctaLabel: "Запланировать Свой Случай",
  },
};

const caseColors = [
  { from: "#0057FF", to: "#00E5FF" },
  { from: "#0057FF", to: "#00B4FF" },
  { from: "#0044CC", to: "#00E5FF" },
  { from: "#003FBB", to: "#0057FF" },
  { from: "#0057FF", to: "#00E5FF" },
  { from: "#0044CC", to: "#00B4FF" },
  { from: "#0057FF", to: "#00E5FF" },
  { from: "#003FBB", to: "#00B4FF" },
  { from: "#0057FF", to: "#00E5FF" },
];

function CasePlaceholder({ id, from, to }: { id: number; from: string; to: string }) {
  return (
    <svg viewBox="0 0 400 240" className="w-full" aria-hidden>
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} stopOpacity="0.12" />
          <stop offset="100%" stopColor={to} stopOpacity="0.06" />
        </linearGradient>
        <radialGradient id={`rg${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={from} stopOpacity="0.25" />
          <stop offset="100%" stopColor={from} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#g${id})`} />
      <circle cx="200" cy="120" r="80" fill={`url(#rg${id})`} />
      {/* Implant cross-section */}
      <rect x="182" y="80" width="36" height="90" rx="18" fill="none" stroke={to} strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="182" y1="100" x2="218" y2="100" stroke={to} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="182" y1="112" x2="218" y2="112" stroke={to} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="182" y1="124" x2="218" y2="124" stroke={to} strokeWidth="1" strokeOpacity="0.3" />
      <line x1="182" y1="136" x2="218" y2="136" stroke={to} strokeWidth="1" strokeOpacity="0.3" />
      <rect x="187" y="62" width="26" height="22" rx="2" fill={from} fillOpacity="0.4" />
      <ellipse cx="200" cy="56" rx="30" ry="14" fill="none" stroke={to} strokeWidth="1.5" strokeOpacity="0.5" />
      <ellipse cx="200" cy="52" rx="24" ry="10" fill={to} fillOpacity="0.15" />
      {/* Data points */}
      <circle cx="140" cy="90" r="3" fill={to} fillOpacity="0.7" />
      <line x1="143" y1="90" x2="182" y2="96" stroke={to} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
      <circle cx="260" cy="86" r="3" fill={from} fillOpacity="0.7" />
      <line x1="257" y1="86" x2="218" y2="92" stroke={from} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
      {/* Grid lines */}
      {[60, 120, 180, 240, 300, 360].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      ))}
      {[60, 120, 180].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      ))}
      {/* Case number */}
      <text x="20" y="30" fontFamily="monospace" fontSize="11" fill={to} fillOpacity="0.5" letterSpacing="2">
        CASE {String(id).padStart(2, "0")}
      </text>
    </svg>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const c = content[lang as Lang];
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { languages: hrefLangs("/gallery") },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const c = content[l];

  return (
    <>
      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/6 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionLabel className="justify-center">{c.label}</SectionLabel>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            {c.title}
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">{c.sub}</p>
        </div>
      </section>

      <section className="py-16 bg-dark-2">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.cases.map((cas, i) => (
              <div key={cas.id} className="glass overflow-hidden group">
                <div className="overflow-hidden">
                  <CasePlaceholder id={cas.id} from={caseColors[i].from} to={caseColors[i].to} />
                </div>
                <div className="p-5">
                  <span className="text-sky text-[10px] tracking-widest uppercase border border-blue/20 px-2 py-0.5">
                    {cas.tag}
                  </span>
                  <h3 className="font-display font-semibold text-white text-sm mt-3 mb-2 leading-tight">
                    {cas.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">{cas.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
