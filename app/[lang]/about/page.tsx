import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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
    label: "Digital İmplantologiya",
    title: "Rəqəmsal İmplantologiya nədir?",
    sub: "Ənənəvi implantologiyanın tam rəqəmsal transformasiyası.",
    metaTitle: "Rəqəmsal İmplantologiya Haqqında | Digital Implant Bakı",
    metaDesc: "Rəqəmsal implantologiya ənənəvi yanaşmadan necə fərqlənir? Virtual planlaşdırma, CBCT analiz, rehberli cərrahiyyə.",
    sections: [
      {
        title: "Rəqəmsal İmplantologiya nədir?",
        body: "Rəqəmsal implantologiya — konik şüa tomoqrafiyası (CBCT), rəqəmsal ağız taraması, üç ölçülü planlaşdırma proqramı və cərrahi şablonların bir araya gəlməsindən ibarət inteqrasiya edilmiş yanaşmadır. Bu yanaşmada hər implant cərrahiyyəyə başlamazdan əvvəl tam virtual mühitdə planlaşdırılır, sınaqdan keçirilir və optimallaşdırılır.",
      },
      {
        title: "Niyə Yalnız İmplantologiya?",
        body: "Dr. Bakhtiyar Əliyev 15 ildən artıq müddətdir ki, klinikanı yalnız implantologiyaya həsr edib. Bu ixtisaslaşma ona daha dərin klinik bilgi, daha çox procedural təcrübə və rəqəmsal alətlərə daha dərindən yiyələnmə imkanı verir. Ümumi diş klinikasında implant yan xidmət kimi sunulur; burada isə yeganə fokus implantdır.",
      },
      {
        title: "Prostetik Əsaslı Fəlsəfə",
        body: "Ən yaxşı implant nəticəsi protez nəticəsindən başlayır. Planlaşdırma prosesinin ilk sualı 'İmplantı haraya qoyaq?' deyil, 'Bitmiş protez necə görünməlidir?' — sorusudur. Bu fəlsəfə uzunmüddətli estetik, funksional nəticəni və osseointegrasiya sabitliyini birlikdə optimallaşdırır.",
      },
      {
        title: "Şəffaflıq Prinsip kimi",
        body: "Rəqəmsal planlaşdırma şəffaflığı mümkün edir. Xəstə əməliyyatdan əvvəl virtual simulyasiyanı görür: hər implantın mövqeyini, çoxluğunu, protetik nəticəni. Bu şəffaflıq həm həkim, həm xəstə tərəfindən birgə qərar verilməsini təmin edir — passiv xidmət yox, aktiv ortaqlıq.",
      },
    ],
    creds: [
      "3Shape Sertifikatlı Mütəxəssis — 3Shape Academy",
      "Straumann Partner Klinikası",
      "ITI (International Team for Implantology) üzvü",
      "Avropa Rəqəmsal İmplantologiya Kursları — İsveçrə, Almaniya, İtaliya",
      "15+ il yalnız implantologiya",
      "3100+ implant əməliyyatı",
    ],
  },
  en: {
    label: "Digital Implantology",
    title: "What is Digital Implantology?",
    sub: "The complete digital transformation of traditional implantology.",
    metaTitle: "About Digital Implantology | Digital Implant Baku",
    metaDesc: "How does digital implantology differ from traditional? Virtual planning, CBCT analysis, guided surgery.",
    sections: [
      {
        title: "What is Digital Implantology?",
        body: "Digital implantology is an integrated approach combining cone beam CT (CBCT), digital intraoral scanning, three-dimensional planning software and surgical guides. In this approach, every implant is fully planned, tested and optimised in a virtual environment before surgery begins.",
      },
      {
        title: "Why Only Implantology?",
        body: "Dr. Bakhtiyar Aliyev has dedicated the clinic exclusively to implantology for over 15 years. This specialisation gives him deeper clinical knowledge, greater procedural experience and deeper mastery of digital tools. In a general dental clinic, implants are offered as a side service; here, the single focus is the implant.",
      },
      {
        title: "Prosthetically Driven Philosophy",
        body: "The best implant outcome starts with the prosthetic outcome. The first question in planning is not 'Where do we place the implant?' but 'What should the finished prosthesis look like?' This philosophy optimises long-term aesthetics, function and osseointegration stability together.",
      },
      {
        title: "Transparency as a Principle",
        body: "Digital planning makes transparency possible. Before surgery, the patient sees the virtual simulation: each implant's position, count and prosthetic outcome. This transparency enables joint decision-making between doctor and patient — not passive service, but active partnership.",
      },
    ],
    creds: [
      "3Shape Certified Specialist — 3Shape Academy",
      "Straumann Partner Clinic",
      "ITI (International Team for Implantology) member",
      "European Digital Implantology Courses — Switzerland, Germany, Italy",
      "15+ years exclusively in implantology",
      "3100+ implant procedures",
    ],
  },
  ru: {
    label: "Цифровая Имплантология",
    title: "Что такое Цифровая Имплантология?",
    sub: "Полная цифровая трансформация традиционной имплантологии.",
    metaTitle: "О Цифровой Имплантологии | Digital Implant Баку",
    metaDesc: "Как цифровая имплантология отличается от традиционной? Виртуальное планирование, КТ-анализ, направляемая хирургия.",
    sections: [
      {
        title: "Что такое цифровая имплантология?",
        body: "Цифровая имплантология — интегрированный подход, объединяющий конусно-лучевую КТ, цифровое интраоральное сканирование, трёхмерное планирование и хирургические шаблоны. Каждый имплант полностью планируется в виртуальной среде до начала операции.",
      },
      {
        title: "Почему только имплантология?",
        body: "Д-р Бахтияр Алиев более 15 лет посвящает клинику исключительно имплантологии. Эта специализация даёт более глубокие клинические знания, большой процедурный опыт и мастерство цифровых инструментов.",
      },
      {
        title: "Протетически Ориентированная Философия",
        body: "Лучший результат имплантации начинается с протетического результата. Первый вопрос планирования — не 'Куда ставить имплант?', а 'Как должен выглядеть готовый протез?'",
      },
      {
        title: "Прозрачность как Принцип",
        body: "Цифровое планирование делает возможной прозрачность. Пациент видит виртуальную симуляцию до операции: положение каждого импланта и протетический результат.",
      },
    ],
    creds: [
      "Сертифицированный специалист 3Shape — 3Shape Academy",
      "Клиника-партнёр Straumann",
      "Член ITI (International Team for Implantology)",
      "Европейские курсы по цифровой имплантологии — Швейцария, Германия, Италия",
      "15+ лет исключительно имплантология",
      "3100+ имплантационных операций",
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
    alternates: { languages: hrefLangs("/about") },
  };
}

export default async function AboutPage({ params }: Props) {
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
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Photo + creds */}
            <div>
              <div className="relative w-full aspect-[3/4] overflow-hidden border border-blue/20 mb-6">
                <Image
                  src="/images/dr-bakhtiyar.webp"
                  alt="Dr. Bakhtiyar Aliyev"
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
              <ul className="space-y-2">
                {c.creds.map((cr) => (
                  <li key={cr} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-sky shrink-0 mt-2" />
                    <span className="text-muted text-xs leading-relaxed">{cr}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="lg:col-span-2 space-y-10">
              {c.sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display font-semibold text-white text-xl mb-3">{s.title}</h2>
                  <p className="text-muted leading-relaxed">{s.body}</p>
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
