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
    label: "3Shape İmplant Studio",
    title: "3Shape İmplant Studio ilə Rəqəmsal Planlaşdırma",
    sub: "Dünyada ən geniş yayılmış rəqəmsal implant planlaşdırma proqramı.",
    metaTitle: "3Shape Implant Studio Bakı | Digital Implant",
    metaDesc: "3Shape Implant Studio ilə rəqəmsal implant planlaşdırması. Bakıda CBCT analiz, virtual cərrahiyyə, prostetik planlaşdırma.",
    intro: "3Shape Implant Studio dünyanın aparıcı rəqəmsal implant planlaşdırma proqramıdır. CBCT tomoqrafiya məlumatları, intraoral skan nəticələri və protez dizaynı bir platformada birləşdirilir. Bu inteqrasiya sayəsində hər implant əməliyyatdan əvvəl tam şəkildə simulyasiya edilir.",
    features: [
      { title: "CBCT İnteqrasiyası", body: "DICOM formatında tomoqrafiya məlumatları birbaşa proqrama yüklənir. Sümük sıxlığı, anatomik strukturlar və kanallar avtomatik analiz edilir." },
      { title: "Prostetik Əsaslı Yanaşma", body: "Planlaşdırma prostetik nəticədən başlayır. Protezin forması müəyyən edildikdən sonra implantın ideal mövqeyi hesablanır. Bu yanaşma uzunmüddətli estetik və funksional nəticəni təmin edir." },
      { title: "Virtual Cərrahiyyə Simulyasiyası", body: "Hər implant üçün virtual yerləşdirmə simulyasiyası aparılır. Bucaq, dərinlik, qonşu dişlərə və sümük kənarına məsafə dəqiq ölçülür." },
      { title: "Avtomatik Analiz Alətləri", body: "Sümük hacmi ölçümü, sinir kanalına məsafə hesablaması, estetik zona analizi — bunların hamısı proqram tərəfindən avtomatik həyata keçirilir." },
      { title: "STL İxracı", body: "Planlaşdırılmış implant mövqeyi STL faylına ixrac edilir. Bu fayl cərrahi şablonun 3D çapı üçün birbaşa istifadə olunur." },
      { title: "Əməkdaşlıq İmkanı", body: "Planlaşdırma nəticəsi rəqəmsal olaraq ortopedik mütəxəssislə paylaşıla bilir. Bu, implantologiya ilə protezin tam sinxronizasiyasını təmin edir." },
    ],
  },
  en: {
    label: "3Shape Implant Studio",
    title: "Digital Planning with 3Shape Implant Studio",
    sub: "The world's most widely used digital implant planning software.",
    metaTitle: "3Shape Implant Studio Baku | Digital Implant",
    metaDesc: "Digital implant planning with 3Shape Implant Studio in Baku. CBCT analysis, virtual surgery, prosthetic planning.",
    intro: "3Shape Implant Studio is the world's leading digital implant planning software. CBCT data, intraoral scan results and prosthetic design are combined in one platform. Every implant procedure is fully simulated before surgery.",
    features: [
      { title: "CBCT Integration", body: "DICOM format CT data is loaded directly into the software. Bone density, anatomical structures and canals are automatically analysed." },
      { title: "Prosthetically Driven Approach", body: "Planning starts with the prosthetic outcome. Once the prosthesis shape is defined, the ideal implant position is calculated. This approach ensures long-term aesthetic and functional results." },
      { title: "Virtual Surgery Simulation", body: "A virtual placement simulation is run for each implant. Angle, depth, distance to adjacent teeth and bone margin are measured precisely." },
      { title: "Automated Analysis Tools", body: "Bone volume measurement, nerve canal distance calculation, aesthetic zone analysis — all performed automatically by the software." },
      { title: "STL Export", body: "The planned implant position is exported as an STL file, used directly for 3D printing of the surgical guide." },
      { title: "Collaboration Feature", body: "The planning result can be shared digitally with the prosthodontist, ensuring full synchronisation between implantology and prosthetics." },
    ],
  },
  ru: {
    label: "3Shape Implant Studio",
    title: "Цифровое Планирование с 3Shape Implant Studio",
    sub: "Самое распространённое в мире ПО для цифрового планирования имплантов.",
    metaTitle: "3Shape Implant Studio Баку | Digital Implant",
    metaDesc: "Цифровое планирование имплантов с 3Shape Implant Studio в Баку.",
    intro: "3Shape Implant Studio — ведущее мировое ПО для цифрового планирования имплантов. Данные КТ, результаты интраорального сканирования и дизайн протеза объединяются в одной платформе.",
    features: [
      { title: "Интеграция КТ", body: "Данные КТ в формате DICOM загружаются прямо в ПО. Плотность кости, анатомические структуры и каналы анализируются автоматически." },
      { title: "Протетически Ориентированный Подход", body: "Планирование начинается с протетического результата. После определения формы протеза рассчитывается идеальное положение импланта." },
      { title: "Виртуальная Хирургическая Симуляция", body: "Для каждого импланта проводится виртуальная симуляция установки с точным измерением угла, глубины и расстояний." },
      { title: "Автоматизированные Инструменты", body: "Измерение объёма кости, расчёт расстояния до нервного канала, анализ эстетической зоны — всё автоматически." },
      { title: "Экспорт STL", body: "Запланированное положение импланта экспортируется в STL-файл для 3D-печати хирургического шаблона." },
      { title: "Функция Совместной Работы", body: "Результат планирования можно цифровым способом передать ортопеду для полной синхронизации." },
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
    alternates: { languages: hrefLangs("/3shape") },
  };
}

export default async function ThreeShapePage({ params }: Props) {
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
          <p className="text-off-white leading-relaxed text-lg mb-12">{c.intro}</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {c.features.map((f) => (
              <div key={f.title} className="glass p-6">
                <h3 className="font-display font-semibold text-white text-base mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
