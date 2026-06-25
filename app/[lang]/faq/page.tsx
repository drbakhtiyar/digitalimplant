import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import { getFAQSchema } from "@/lib/schema";
import SectionLabel from "@/components/ui/SectionLabel";
import AccordionList from "@/components/faq/AccordionList";
import CTASection from "@/components/home/CTASection";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const faqData = {
  az: {
    label: "Tez-tez Soruşulan Suallar",
    title: "S.S.S.",
    metaTitle: "Tez-tez Soruşulan Suallar | Digital Implant Bakı",
    metaDesc: "Rəqəmsal implantologiya haqqında ən çox soruşulan suallar: planlaşdırma, cərrahiyyə, implant markaları, qiymət, rehberli cərrahiyyə.",
    items: [
      { q: "Rəqəmsal implant planlaşdırması nədir?", a: "Rəqəmsal implant planlaşdırması CBCT tomoqrafiya məlumatları əsasında 3Shape Implant Studio proqramında hər implantın virtual olaraq yerləşdirilməsidir. Əməliyyatdan əvvəl hər şeyin dəqiqliklə planlaşdırılması həm nəticənin daha yaxşı olmasını, həm də prosedurdan sonra sürətli sağalmanı təmin edir." },
      { q: "İmplant əməliyyatı ağrılıdır?", a: "Yerli anesteziya altında aparılan prosedur zamanı ağrı hiss olunmur. Rəqəmsal planlaşdırma sayəsində minimal invaziv texnika tətbiq olunur, bu da əməliyyatdan sonrakı ağrı və şişkinliyi minimuma endirir." },
      { q: "CBCT tomoqrafiya vacibdir?", a: "Rəqəmsal planlaşdırma üçün mütləqdir. CBCT sümük sıxlığını, həcmini, sinir kanallarını və anatomik strukturları üç ölçüdə göstərir. Bu məlumat olmadan dəqiq planlaşdırma mümkün deyil." },
      { q: "Prosedur nə qədər vaxt aparır?", a: "İlk konsultasiya, CBCT analiz və planlaşdırma 1–2 vizit ərzində tamamlanır. Birbaşa cərrahiyyə adətən 30–60 dəqiqə çəkir. Osseointegrasiya dövrü 2–4 aydır, sonra protez mərhələsi başlayır." },
      { q: "All-on-4 protokolu kimə uyğundur?", a: "Bütün dişlərini itirmiş və ya çıxarılma ehtimalı olan xəstələr All-on-4 protokolundan yararlanır. Rəqəmsal planlaşdırma All-on-4-ün ən kritik komponentidir — implantların düzgün açısı birbaşa eyni günlük protezin keyfiyyətinə təsir edir." },
      { q: "Hansı implant markalarından istifadə edirsiniz?", a: "Klinikanımızda Straumann, Bredent copaSKY, NeoBiotech və MegaGen sistemlərindən istifadə edirik. Hər xəstə üçün sümük xüsusiyyətləri, klinik vəziyyət və protez planına uyğun olaraq optimal sistem seçilir." },
      { q: "Rehberli cərrahiyyə nədir?", a: "Rehberli cərrahiyyə virtual planlaşdırma əsasında hazırlanmış xüsusi şablonlar vasitəsilə implantın dəqiq mövqeyə yerləşdirilməsidir. Şablon 3D çap ilə hazırlanır və 0.1mm dəqiqlik təmin edir." },
      { q: "İmplant nə qədər davam edir?", a: "Düzgün qulluq və müntəzəm diş həkimi ziyarəti ilə implantlar onilliklər boyu xidmət edə bilər. Straumann klinik araşdırmalarına görə 10 illik uğur nisbəti 98%-dən yuxarıdır." },
      { q: "Rəqəmsal planlaşdırmanın ənənəvi yanaşmadan fərqi nədir?", a: "Ənənəvi yanaşmada cərrah implantı əl bacarığına əsaslanaraq yerləşdirir. Rəqəmsal yanaşmada isə mövqe, bucaq və dərinlik əvvəlcədən hesablanır. Bu fərq xüsusilə mürəkkəb vəziyyətlərdə, çoxlu implantlarda və estetik bölgələrdə kritik əhəmiyyət daşıyır." },
      { q: "Randevu necə götürə bilərəm?", a: "Saytdakı randevu formasını dolduraraq və ya +994 10 501 01 07 nömrəsinə zəng edərək randevu götürə bilərsiniz. WhatsApp: +994 10 501 01 07." },
    ],
  },
  en: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    metaTitle: "FAQ | Digital Implant Baku",
    metaDesc: "Most frequently asked questions about digital implantology: planning, surgery, implant brands, guided surgery.",
    items: [
      { q: "What is digital implant planning?", a: "Digital implant planning is the virtual placement of each implant in 3Shape Implant Studio based on CBCT data. Planning everything precisely before surgery leads to better outcomes and faster recovery." },
      { q: "Is the implant procedure painful?", a: "No pain is felt during the procedure under local anaesthesia. The minimally invasive technique enabled by digital planning minimises post-operative pain and swelling." },
      { q: "Is CBCT scanning necessary?", a: "It is essential for digital planning. CBCT shows bone density, volume, nerve canals and anatomical structures in three dimensions. Precise planning is not possible without this data." },
      { q: "How long does the procedure take?", a: "The initial consultation, CBCT analysis and planning are completed within 1–2 visits. The surgery itself typically takes 30–60 minutes. The osseointegration period is 2–4 months." },
      { q: "Who is suitable for the All-on-4 protocol?", a: "Patients who have lost all teeth or are facing full extraction can benefit from All-on-4. Digital planning is the most critical component — the correct angle of the implants directly affects the quality of the same-day prosthesis." },
      { q: "Which implant brands do you use?", a: "We use Straumann, Bredent copaSKY, NeoBiotech and MegaGen systems. The optimal system is selected based on bone characteristics, clinical situation and prosthetic plan." },
      { q: "What is guided surgery?", a: "Guided surgery is the precise placement of an implant at a planned position via special guides made from virtual planning. The guide is 3D-printed and ensures 0.1mm accuracy." },
      { q: "How long do implants last?", a: "With proper care and regular dental visits, implants can last for decades. Straumann clinical studies report a 10-year success rate above 98%." },
      { q: "What is the difference from traditional implantology?", a: "In traditional implantology the surgeon places the implant based on manual skill. In digital implantology the position, angle and depth are pre-calculated. This difference is critical especially in complex cases." },
      { q: "How can I book an appointment?", a: "Fill out the appointment form on this website or call +994 10 501 01 07. WhatsApp: +994 10 501 01 07." },
    ],
  },
  ru: {
    label: "FAQ",
    title: "Часто Задаваемые Вопросы",
    metaTitle: "FAQ | Digital Implant Баку",
    metaDesc: "Самые частые вопросы о цифровой имплантологии: планирование, хирургия, бренды, направляемая хирургия.",
    items: [
      { q: "Что такое цифровое планирование имплантов?", a: "Цифровое планирование — виртуальное размещение каждого импланта в 3Shape Implant Studio на основе данных КТ. Точное планирование перед операцией обеспечивает лучший результат и более быстрое восстановление." },
      { q: "Больно ли делать имплант?", a: "Во время процедуры под местной анестезией боль не ощущается. Малоинвазивная техника, обеспечиваемая цифровым планированием, минимизирует послеоперационную боль и отёк." },
      { q: "Обязательно ли КТ-сканирование?", a: "Оно необходимо для цифрового планирования. КТ показывает плотность, объём кости, нервные каналы и анатомические структуры в трёх измерениях." },
      { q: "Сколько времени занимает процедура?", a: "Первичная консультация, анализ КТ и планирование завершаются за 1–2 визита. Сама операция занимает 30–60 минут. Период оссеоинтеграции — 2–4 месяца." },
      { q: "Кому подходит протокол All-on-4?", a: "Пациенты, потерявшие все зубы, могут воспользоваться All-on-4. Цифровое планирование — самый критический компонент этого протокола." },
      { q: "Какие бренды имплантов вы используете?", a: "Мы используем Straumann, Bredent copaSKY, NeoBiotech и MegaGen. Оптимальная система подбирается индивидуально." },
      { q: "Что такое направляемая хирургия?", a: "Направляемая хирургия — точная установка импланта через шаблоны из виртуального планирования. Шаблон 3D-печатается и обеспечивает точность 0,1 мм." },
      { q: "Как долго служат импланты?", a: "При правильном уходе — десятилетиями. Показатель успеха за 10 лет по данным Straumann превышает 98%." },
      { q: "Отличие от традиционной имплантологии?", a: "При традиционной хирург устанавливает имплант вручную. При цифровой — положение, угол и глубина рассчитываются заранее." },
      { q: "Как записаться на приём?", a: "Заполните форму записи на сайте или позвоните по номеру +994 10 501 01 07. WhatsApp: +994 10 501 01 07." },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const c = faqData[lang as Lang];
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { languages: hrefLangs("/faq") },
  };
}

export default async function FAQPage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const c = faqData[l];

  const schema = getFAQSchema(c.items.map((i) => ({ question: i.q, answer: i.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/6 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionLabel className="justify-center">{c.label}</SectionLabel>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">{c.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <AccordionList items={c.items} />
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
