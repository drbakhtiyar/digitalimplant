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
    label: "Rehberli Cərrahiyyə",
    title: "Rehberli Cərrahiyyə",
    sub: "Statik cərrahi şablonlar vasitəsilə 0.1mm dəqiqliklə implant yerləşdirməsi.",
    metaTitle: "Rehberli Cərrahiyyə Bakı | Digital Implant",
    metaDesc: "Statik cərrahi şablonlarla dəqiq implant yerləşdirməsi. Bakıda rehberli implant cərrahiyyəsi.",
    sections: [
      {
        title: "Rehberli Cərrahiyyə nədir?",
        body: "Rehberli cərrahiyyə — rəqəmsal planlaşdırma əsasında hazırlanan xüsusi şablonların köməkliyi ilə implantın öncədən müəyyən edilmiş mövqeyə dəqiqliklə yerləşdirilməsi prosedurudur. Şablon xəstənin diş modeli üzərindən hazırlanır və cərrahiyyə zamanı sabit nöqtə rolunu oynayır.",
      },
      {
        title: "Cərrahi Şablon Necə Hazırlanır?",
        body: "Virtual planlaşdırma tamamlandıqdan sonra implantın mövqeyi STL faylına ixrac edilir. Bu fayl biouyğun polimer materialdan 3D çap ilə hazırlanmış cərrahi şablona çevrilir. Şablonda hər bir implant üçün metal bələdçi tüp mövcuddur — bu tüplər implant mühərrikinin düzgün açı və dərinliyini təmin edir.",
      },
      {
        title: "Şablonsuz Cərrahiyyədən Fərqi",
        body: "Şablonsuz — yəni ənənəvi — cərrahiyyədə yerləşdirmə mövqeyi tamamilə həkimin vizual qiymətləndirməsinə əsaslanır. Rehberli cərrahiyyədə isə bucaq, dərinlik və üfüqi mövqe öncədən rəqəmsal olaraq müəyyən edilmiş olur. Bu fərq xüsusilə estetik bölgələrdə, All-on-4 protokollarda və mürəkkəb anatomiyalarda kritik əhəmiyyət daşıyır.",
      },
      {
        title: "Minimal İnvaziv Protokol",
        body: "Rehberli cərrahiyyə texnikası kəsiksiz protokollara — yəni tikişsiz əməliyyata — imkan verir. Şablon dəqiq yerləşdirmənin mövqeyini göstərir, buna görə böyük kəsilərə ehtiyac qalmır. Nəticədə ağrı minimuma enir, sağalma prosesi sürətlənir, şişkinlik azalır.",
      },
    ],
    benefits: [
      "0.1mm dəqiqlik — plana millimikin onda biri qədər uyğunluq",
      "Sinir və damar kanallarından əmin məsafənin qorunması",
      "Kəsiksiz (flapless) protokol ilə az travma",
      "Estetik bölgələrdə optimal yerləşdirmə",
      "All-on-4 protokolunda həlledici dəqiqlik",
    ],
  },
  en: {
    label: "Guided Surgery",
    title: "Guided Surgery",
    sub: "Implant placement with 0.1mm accuracy via static surgical guides.",
    metaTitle: "Guided Surgery Baku | Digital Implant",
    metaDesc: "Precise implant placement with static surgical guides. Guided implant surgery in Baku.",
    sections: [
      {
        title: "What is Guided Surgery?",
        body: "Guided surgery is the procedure of precisely placing an implant at a pre-determined position using specially made guides based on digital planning. The guide is fabricated from the patient's tooth model and acts as a fixed reference during surgery.",
      },
      {
        title: "How is the Surgical Guide Made?",
        body: "Once virtual planning is complete, the implant position is exported to an STL file. This file is used to 3D-print a surgical guide from biocompatible polymer. The guide contains metal sleeves for each implant that ensure the correct angle and depth.",
      },
      {
        title: "Difference from Freehand Surgery",
        body: "In freehand — traditional — surgery, placement relies entirely on the surgeon's visual assessment. In guided surgery, the angle, depth and horizontal position are pre-determined digitally. This difference is critical especially in aesthetic zones, All-on-4 protocols and complex anatomy.",
      },
      {
        title: "Minimally Invasive Protocol",
        body: "Guided surgery technique enables flapless protocols — surgery without incisions. The guide shows the exact placement position, so large incisions are unnecessary. The result: minimal pain, faster healing, less swelling.",
      },
    ],
    benefits: [
      "0.1mm accuracy — match to plan within one tenth of a millimetre",
      "Safe distance from nerves and vascular canals maintained",
      "Flapless protocol — less trauma",
      "Optimal placement in aesthetic zones",
      "Critical accuracy in All-on-4 protocol",
    ],
  },
  ru: {
    label: "Направляемая Хирургия",
    title: "Направляемая Хирургия",
    sub: "Установка импланта с точностью 0,1 мм через статические хирургические шаблоны.",
    metaTitle: "Направляемая Хирургия Баку | Digital Implant",
    metaDesc: "Точная установка имплантов со статическими хирургическими шаблонами в Баку.",
    sections: [
      {
        title: "Что такое направляемая хирургия?",
        body: "Направляемая хирургия — процедура точной установки импланта в заранее определённую позицию с помощью специальных шаблонов, созданных на основе цифрового планирования.",
      },
      {
        title: "Как изготавливается хирургический шаблон?",
        body: "После завершения виртуального планирования положение импланта экспортируется в STL-файл. Из этого файла 3D-печатается хирургический шаблон из биосовместимого полимера с металлическими втулками для каждого импланта.",
      },
      {
        title: "Отличие от традиционной хирургии",
        body: "В традиционной хирургии установка полностью зависит от визуальной оценки хирурга. При направляемой хирургии угол, глубина и горизонтальное положение определяются цифровым способом заранее.",
      },
      {
        title: "Малоинвазивный протокол",
        body: "Техника направляемой хирургии позволяет применять безлоскутные протоколы — операцию без разрезов. Результат: минимальная боль, быстрое заживление, меньше отёка.",
      },
    ],
    benefits: [
      "Точность 0,1 мм — соответствие плану до десятой доли миллиметра",
      "Безопасное расстояние от нервных и сосудистых каналов",
      "Безлоскутный протокол — меньше травмы",
      "Оптимальное положение в эстетических зонах",
      "Критическая точность в протоколе All-on-4",
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
    alternates: { languages: hrefLangs("/guided-surgery") },
  };
}

export default async function GuidedSurgeryPage({ params }: Props) {
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
        <div className="max-w-3xl mx-auto px-5 lg:px-10 space-y-10">
          {c.sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display font-semibold text-white text-xl mb-3">{s.title}</h2>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-dark">
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
