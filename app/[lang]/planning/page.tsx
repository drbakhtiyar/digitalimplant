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
    label: "Rəqəmsal Planlaşdırma",
    title: "Rəqəmsal İmplant Planlaşdırması",
    sub: "Hər implantın yerləşdirilməsindən əvvəl üç ölçülü virtual mühitdə dəqiqliklə planlaşdırılması.",
    metaTitle: "Rəqəmsal İmplant Planlaşdırması Bakı | Digital Implant",
    metaDesc: "3Shape Implant Studio və CBCT tomoqrafiya əsasında rəqəmsal implant planlaşdırması. Bakıda virtual cərrahiyyə planlaması.",
    intro: "Rəqəmsal implant planlaşdırması ənənəvi implant cərrahiyyəsindən köklü şəkildə fərqlənir. Əməliyyatdan əvvəl həkim CBCT tomoqrafiya məlumatlarını xüsusi proqrama yükləyir və hər implantı üç ölçülü mühitdə tam dəqiqliklə virtual olaraq yerləşdirir. Bu proses zamanı sümük sıxlığı, hacmi, ağız boşluğu anatomiyası və gələcək protezin forması birlikdə nəzərə alınır.",
    steps: [
      { n: "01", title: "CBCT Tomoqrafiya", body: "Konik şüa tomoqrafiyası ilə çənənin tam üç ölçülü görüntüsü əldə edilir. DICOM formatında verilənlər planlaşdırma proqramına ötürülür." },
      { n: "02", title: "Rəqəmsal Tarama", body: "İntraoral skaner ilə alınan diş modeli tomoqrafiya məlumatı ilə birləşdirilir. Bu proses superimposition adlanır." },
      { n: "03", title: "Prostetik Planlaşdırma", body: "Əvvəlcə bitmiş protezin forması müəyyən edilir. Sonra bu formaya uyğun olaraq implantın mövqeyi, açısı və dərinliyi hesablanır." },
      { n: "04", title: "Virtual Cərrahiyyə", body: "3Shape Implant Studio proqramında virtual cərrahiyyə simulyasiyası aparılır. Xəstə əməliyyatdan əvvəl nəticəni görür." },
      { n: "05", title: "Cərrahi Şablon", body: "Planlaşdırılmış implant mövqeyi STL faylına ixrac edilir. Bu fayl əsasında 3D çap ilə dəqiq cərrahi şablon hazırlanır." },
      { n: "06", title: "Dəqiq Cərrahiyyə", body: "Şablon vasitəsilə implant planlaşdırılmış mövqedə tam dəqiqliklə yerləşdirilir. Nəticə planla millimikin onda biri qədər uyğun gəlir." },
    ],
    benefits: [
      "Cərrahiyyədən əvvəl nəticənin tam şəffaflığı",
      "Sinir, damar kanallarının dəqiq müəyyənləşdirilməsi",
      "Minimal invaziv müdaxilə, az travma",
      "Sürətli bərpa müddəti",
      "Prostetik əsaslı yerləşdirmə — uzunmüddətli sabitlik",
    ],
  },
  en: {
    label: "Digital Planning",
    title: "Digital Implant Planning",
    sub: "Precise virtual planning of every implant in a three-dimensional environment before placement.",
    metaTitle: "Digital Implant Planning Baku | Digital Implant",
    metaDesc: "Digital implant planning with 3Shape Implant Studio and CBCT. Virtual surgical planning in Baku.",
    intro: "Digital implant planning differs fundamentally from traditional implant surgery. Before the procedure, the physician uploads CBCT data to specialized software and virtually places each implant with full precision in a three-dimensional environment. During this process, bone density, volume, oral anatomy and the shape of the future prosthesis are all considered together.",
    steps: [
      { n: "01", title: "CBCT Scan", body: "A complete three-dimensional image of the jaw is obtained via cone beam CT. DICOM data is transferred to the planning software." },
      { n: "02", title: "Digital Scan", body: "An intraoral scan is merged with the CT data — a process called superimposition." },
      { n: "03", title: "Prosthetic Planning", body: "The shape of the finished prosthesis is determined first. Then the implant position, angle and depth are calculated to match that shape." },
      { n: "04", title: "Virtual Surgery", body: "A virtual surgical simulation is run in 3Shape Implant Studio. The patient sees the result before the procedure." },
      { n: "05", title: "Surgical Guide", body: "The planned implant position is exported as an STL file. A precise surgical guide is 3D-printed from this file." },
      { n: "06", title: "Precise Surgery", body: "The implant is placed at the planned position with full accuracy via the guide. The result matches the plan to within one tenth of a millimetre." },
    ],
    benefits: [
      "Full transparency of the result before surgery",
      "Precise identification of nerves and vascular canals",
      "Minimally invasive, less trauma",
      "Faster recovery time",
      "Prosthetically driven placement — long-term stability",
    ],
  },
  ru: {
    label: "Цифровое Планирование",
    title: "Цифровое Планирование Имплантов",
    sub: "Точное виртуальное планирование каждого импланта в трёхмерной среде перед установкой.",
    metaTitle: "Цифровое Планирование Имплантов Баку | Digital Implant",
    metaDesc: "Цифровое планирование имплантов с 3Shape Implant Studio и КТ. Виртуальная хирургия в Баку.",
    intro: "Цифровое планирование имплантов принципиально отличается от традиционной имплантационной хирургии. До процедуры врач загружает данные КТ в специализированное ПО и виртуально размещает каждый имплант с полной точностью в трёхмерной среде.",
    steps: [
      { n: "01", title: "КТ-сканирование", body: "Полное 3D-изображение челюсти получается с помощью конусно-лучевой КТ. Данные DICOM передаются в программу планирования." },
      { n: "02", title: "Цифровое Сканирование", body: "Интраоральный скан совмещается с данными КТ — процесс называется суперимпозицией." },
      { n: "03", title: "Протетическое Планирование", body: "Сначала определяется форма готового протеза. Затем рассчитываются положение, угол и глубина импланта." },
      { n: "04", title: "Виртуальная Хирургия", body: "В 3Shape Implant Studio проводится виртуальная хирургическая симуляция. Пациент видит результат до процедуры." },
      { n: "05", title: "Хирургический Шаблон", body: "Запланированное положение импланта экспортируется в STL-файл, по которому 3D-печатается точный шаблон." },
      { n: "06", title: "Точная Хирургия", body: "Имплант устанавливается в запланированное положение с полной точностью через шаблон — результат соответствует плану с точностью 0,1 мм." },
    ],
    benefits: [
      "Полная прозрачность результата до операции",
      "Точное определение нервных и сосудистых каналов",
      "Малоинвазивное вмешательство, меньше травмы",
      "Более быстрое восстановление",
      "Протетически ориентированная установка — долгосрочная стабильность",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const c = content[lang as Lang];
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { languages: hrefLangs("/planning") },
  };
}

export default async function PlanningPage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const c = content[l];

  return (
    <>
      {/* Hero */}
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

      {/* Intro */}
      <section className="py-16 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="text-off-white leading-relaxed text-lg">{c.intro}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="space-y-8">
            {c.steps.map((s) => (
              <div key={s.n} className="flex gap-6 glass p-6">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-blue/30 bg-blue/5">
                  <span className="text-sky text-[10px] font-display font-bold tracking-widest">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <h2 className="font-display font-bold text-2xl text-white mb-8">
            {l === "az" ? "Üstünlüklər" : l === "en" ? "Benefits" : "Преимущества"}
          </h2>
          <ul className="space-y-4">
            {c.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2" />
                <span className="text-off-white leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
