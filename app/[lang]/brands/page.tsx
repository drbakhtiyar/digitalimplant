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

const brands = {
  az: [
    {
      name: "Straumann",
      logo: "/logos/straumann.svg",
      sub: "İsveçrə",
      body: "Straumann 1954-cü ildən bəri implant sənayesinin aparıcı markasıdır. İsveçrə mühəndisliyi və tibbi tədqiqatların birləşimi olan SLActive səthi texnologiyası ilə osseointegrasiya prosesini sürətləndirir. BLX, BL, TL seriyaları ilə geniş klinik vəziyyətlərə cavab verir.",
    },
    {
      name: "Bredent copaSKY",
      logo: "/logos/copasky.png",
      sub: "Almaniya",
      body: "Alman mühandisliyi ilə hazırlanmış Bredent copaSKY sistemi Fast & Fixed konseptinin özəyini təşkil edir. Eyni gündə sabit protez protokolu üçün xüsusi olaraq optimallaşdırılmışdır. SAE səthi texnologiyası möhkəm osseointegrasiya üçün nəzərdə tutulmuşdur.",
    },
    {
      name: "NeoBiotech",
      logo: "/logos/neobiotech.png",
      sub: "Koreya",
      body: "NeoBiotech Cənubi Koreyanın aparıcı implant istehsalçısıdır. IS-III aktiv səthi, müxtəlif sümük növlərini əhatə edən geniş çap diapazonu ilə seçilir. Mürəkkəb klinik vəziyyətlərdə — az sümük hacmi, dar estetik zonalar — etibarlı nəticə verir.",
    },
    {
      name: "MegaGen",
      logo: "/logos/megagen.svg",
      sub: "Koreya",
      body: "MegaGen AnyRidge sistemi müxtəlif sümük növlərini — D1-dən D4-ə qədər — tək dizayn ilə əhatə etmək üçün yaradılmışdır. Unikal konus forması ilə maksimal ilkin sabitlik təmin edir. Ayna səthi cilalama texnologiyası uzunmüddətli sağlamlığı dəstəkləyir.",
    },
  ],
  en: [
    {
      name: "Straumann",
      logo: "/logos/straumann.svg",
      sub: "Switzerland",
      body: "Straumann has been the leading implant brand since 1954. Its SLActive surface technology — a combination of Swiss engineering and medical research — accelerates osseointegration. The BLX, BL and TL series address a wide range of clinical situations.",
    },
    {
      name: "Bredent copaSKY",
      logo: "/logos/copasky.png",
      sub: "Germany",
      body: "The Bredent copaSKY system, designed with German engineering, forms the core of the Fast & Fixed concept. It is specifically optimised for same-day fixed prosthetics. The SAE surface technology is designed for solid osseointegration.",
    },
    {
      name: "NeoBiotech",
      logo: "/logos/neobiotech.png",
      sub: "South Korea",
      body: "NeoBiotech is South Korea's leading implant manufacturer. The IS-III active surface and wide diameter range covering various bone types deliver reliable results in complex clinical situations — low bone volume, narrow aesthetic zones.",
    },
    {
      name: "MegaGen",
      logo: "/logos/megagen.svg",
      sub: "South Korea",
      body: "The MegaGen AnyRidge system is designed to cover multiple bone types — D1 to D4 — with a single design. Its unique conical shape provides maximum initial stability. Mirror-surface polishing technology supports long-term health.",
    },
  ],
  ru: [
    {
      name: "Straumann",
      logo: "/logos/straumann.svg",
      sub: "Швейцария",
      body: "Straumann является лидирующим брендом имплантов с 1954 года. Поверхностная технология SLActive ускоряет оссеоинтеграцию. Серии BLX, BL и TL охватывают широкий спектр клинических ситуаций.",
    },
    {
      name: "Bredent copaSKY",
      logo: "/logos/copasky.png",
      sub: "Германия",
      body: "Система Bredent copaSKY — основа концепции Fast & Fixed. Оптимизирована специально для протоколов фиксированного протеза в день операции.",
    },
    {
      name: "NeoBiotech",
      logo: "/logos/neobiotech.png",
      sub: "Южная Корея",
      body: "NeoBiotech — ведущий производитель имплантов Южной Кореи. Активная поверхность IS-III обеспечивает надёжные результаты в сложных клинических ситуациях.",
    },
    {
      name: "MegaGen",
      logo: "/logos/megagen.svg",
      sub: "Южная Корея",
      body: "Система MegaGen AnyRidge разработана для охвата различных типов кости одним дизайном. Уникальная коническая форма обеспечивает максимальную первичную стабильность.",
    },
  ],
};

const meta = {
  az: { title: "İmplant Markaları | Digital Implant Bakı", desc: "Straumann, Bredent copaSKY, NeoBiotech, MegaGen — Digital Implant klinikasında istifadə olunan premium implant sistemləri." },
  en: { title: "Implant Brands | Digital Implant Baku", desc: "Straumann, Bredent copaSKY, NeoBiotech, MegaGen — premium implant systems used at Digital Implant clinic." },
  ru: { title: "Бренды Имплантов | Digital Implant Баку", desc: "Straumann, Bredent copaSKY, NeoBiotech, MegaGen — премиальные системы имплантов в клинике Digital Implant." },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const m = meta[lang as Lang];
  return { title: m.title, description: m.desc, alternates: { languages: hrefLangs("/brands") } };
}

export default async function BrandsPage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const bs = brands[l];

  const labels = { az: "İmplant Markaları", en: "Implant Brands", ru: "Бренды Имплантов" };
  const titles = { az: "Dünya Lideri İmplant Sistemləri", en: "World Leader Implant Systems", ru: "Мировые Лидеры Имплантации" };

  return (
    <>
      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/6 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionLabel className="justify-center">{labels[l]}</SectionLabel>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">{titles[l]}</h1>
        </div>
      </section>

      <section className="py-16 bg-dark-2">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-8">
          {bs.map((b) => (
            <div key={b.name} className="glass p-8 flex gap-8 items-start">
              <div className="shrink-0 relative w-32 h-12">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  sizes="128px"
                  className="object-contain opacity-70"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display font-bold text-white text-xl">{b.name}</h2>
                  <span className="text-sky text-xs border border-blue/20 px-2 py-0.5">{b.sub}</span>
                </div>
                <p className="text-muted leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
