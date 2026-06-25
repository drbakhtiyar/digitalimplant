import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    label: "Digital Workflow",
    title: "Tam Rəqəmsal İş Axını",
    sub: "Konsultasiyadan bitmiş protezə qədər hər addım rəqəmsal.",
    metaTitle: "Rəqəmsal İmplant Workflow Bakı | Digital Implant",
    metaDesc: "Tam rəqəmsal implant iş axını: konsultasiya, CBCT, planlaşdırma, cərrahi şablon, əməliyyat, protez. Bakı.",
    steps: [
      { n: "01", title: "Konsultasiya & Qiymətləndirmə", body: "İlk vizitdə intraoral müayinə, sağlamlıq tarixi və protetik gözləntilərin müzakirəsi aparılır. Rəqəmsal planlaşdırma üçün lazım olan məlumatlar toplanır." },
      { n: "02", title: "CBCT Tomoqrafiya", body: "Konik şüa tomoqrafiyası ilə çənənin tam üç ölçülü görüntüsü əldə edilir. Sümük sıxlığı, həcmi, anatomik xüsusiyyətlər qiymətləndirilir." },
      { n: "03", title: "Rəqəmsal Tarama", body: "İntraoral skaner ilə diş modelinin rəqəmsal izi alınır. Bu model tomoqrafiya məlumatı ilə birləşdirilir." },
      { n: "04", title: "Virtual Planlaşdırma", body: "3Shape Implant Studio proqramında hər implantın mövqeyi, bucağı, dərinliyi və protezə nisbəti hesablanır. Xəstə nəticəni virtual olaraq görür." },
      { n: "05", title: "Şablon İstehsalı", body: "Planlaşdırılmış mövqe STL faylına çevrilir. Biouyğun materialdan 3D çap ilə dəqiq cərrahi şablon hazırlanır." },
      { n: "06", title: "Cərrahi Müdaxilə", body: "Şablon vasitəsilə implant planlaşdırılmış mövqedə dəqiq yerləşdirilir. Minimal invaziv protokol tətbiq edilir." },
      { n: "07", title: "Osseointegrasiya", body: "İmplant sümüklə birləşmə dövrü — adətən 2–4 ay — boyunca prostin implanla inteqrasiyası baş verir." },
      { n: "08", title: "Protez Mərhələsi", body: "Osseointegrasiya tamamlandıqdan sonra rəqəmsal olaraq hazırlanmış daimi protez yerləşdirilir. Funksional və estetik nəticə müəyyən edilir." },
    ],
  },
  en: {
    label: "Digital Workflow",
    title: "Fully Digital Workflow",
    sub: "Every step from consultation to finished prosthesis — digital.",
    metaTitle: "Digital Implant Workflow Baku | Digital Implant",
    metaDesc: "Fully digital implant workflow: consultation, CBCT, planning, surgical guide, surgery, prosthetics. Baku.",
    steps: [
      { n: "01", title: "Consultation & Assessment", body: "Intraoral examination, health history and prosthetic expectations are discussed at the first visit. Data required for digital planning is gathered." },
      { n: "02", title: "CBCT Scan", body: "A complete 3D image of the jaw is obtained via cone beam CT. Bone density, volume and anatomical features are evaluated." },
      { n: "03", title: "Digital Scan", body: "A digital impression of the tooth model is taken with an intraoral scanner and merged with the CT data." },
      { n: "04", title: "Virtual Planning", body: "The position, angle, depth and prosthetic relationship of each implant are calculated in 3Shape Implant Studio. The patient sees the result virtually." },
      { n: "05", title: "Guide Fabrication", body: "The planned position is converted to an STL file. A precise surgical guide is 3D-printed from biocompatible material." },
      { n: "06", title: "Surgical Procedure", body: "The implant is precisely placed at the planned position via the guide. A minimally invasive protocol is applied." },
      { n: "07", title: "Osseointegration", body: "The implant-to-bone integration period — typically 2–4 months — allows full osseointegration." },
      { n: "08", title: "Prosthetic Phase", body: "After osseointegration, the digitally fabricated permanent prosthesis is placed. Functional and aesthetic result is achieved." },
    ],
  },
  ru: {
    label: "Цифровой Процесс",
    title: "Полностью Цифровой Процесс",
    sub: "Каждый шаг от консультации до готового протеза — цифровой.",
    metaTitle: "Цифровой Процесс Имплантации Баку | Digital Implant",
    metaDesc: "Полностью цифровой процесс имплантации: консультация, КТ, планирование, шаблон, операция, протез. Баку.",
    steps: [
      { n: "01", title: "Консультация и Оценка", body: "На первом визите проводится интраоральный осмотр, изучается история здоровья и обсуждаются протетические ожидания." },
      { n: "02", title: "КТ-сканирование", body: "С помощью конусно-лучевой КТ получается полное 3D-изображение челюсти. Оцениваются плотность, объём кости и анатомические особенности." },
      { n: "03", title: "Цифровое Сканирование", body: "Цифровой отпечаток зубной модели снимается интраоральным сканером и объединяется с данными КТ." },
      { n: "04", title: "Виртуальное Планирование", body: "В 3Shape Implant Studio рассчитываются положение, угол, глубина и протетическое соотношение каждого импланта." },
      { n: "05", title: "Изготовление Шаблона", body: "Запланированное положение преобразуется в STL-файл. 3D-печатается точный хирургический шаблон из биосовместимого материала." },
      { n: "06", title: "Хирургическое Вмешательство", body: "Имплант точно устанавливается в запланированное положение через шаблон с применением малоинвазивного протокола." },
      { n: "07", title: "Оссеоинтеграция", body: "Период интеграции импланта с костью — обычно 2–4 месяца." },
      { n: "08", title: "Протетический Этап", body: "После оссеоинтеграции устанавливается цифровой постоянный протез. Достигается функциональный и эстетический результат." },
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
    alternates: { languages: hrefLangs("/workflow") },
  };
}

export default async function WorkflowPage({ params }: Props) {
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
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">{c.title}</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">{c.sub}</p>
        </div>
      </section>

      <section className="py-16 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-blue/15" />
            <div className="space-y-6">
              {c.steps.map((s) => (
                <div key={s.n} className="flex gap-6 pl-2">
                  <div className="relative shrink-0 w-8 h-8 flex items-center justify-center border border-blue/40 bg-dark-2 z-10">
                    <span className="text-sky text-[9px] font-display font-bold tracking-wider">{s.n}</span>
                  </div>
                  <div className="glass p-5 flex-1">
                    <h3 className="font-display font-semibold text-white text-base mb-1.5">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
