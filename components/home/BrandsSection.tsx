import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

const brands = [
  {
    name: "Straumann",
    logo: "/logos/straumann.svg",
    tag: { az: "İsveçrə Mükəmməlliyi", en: "Swiss Excellence", ru: "Швейцарское Качество" },
  },
  {
    name: "Bredent copaSKY",
    logo: "/logos/copasky.png",
    tag: { az: "Fast & Fixed Konsept", en: "Fast & Fixed Concept", ru: "Концепт Fast & Fixed" },
  },
  {
    name: "NeoBiotech",
    logo: "/logos/neobiotech.png",
    tag: { az: "Koreya İnnovasiyası", en: "Korean Innovation", ru: "Корейские Инновации" },
  },
  {
    name: "MegaGen",
    logo: "/logos/megagen.svg",
    tag: { az: "AnyRidge Texnologiyası", en: "AnyRidge Technology", ru: "Технология AnyRidge" },
  },
];

const content = {
  az: { label: "İmplant Markaları", title: "Dünya Lideri Sistemlər", cta: "Bütün markalara bax" },
  en: { label: "Implant Brands", title: "World Leader Systems", cta: "View all brands" },
  ru: { label: "Бренды Имплантов", title: "Мировые Лидеры", cta: "Все бренды" },
};

interface BrandsSectionProps {
  lang: Lang;
}

export default function BrandsSection({ lang }: BrandsSectionProps) {
  const c = content[lang];

  return (
    <section className="py-20 bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">{c.label}</SectionLabel>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            {c.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {brands.map((b) => (
            <div
              key={b.name}
              className="glass p-6 flex flex-col items-center gap-4 hover:border-blue/20 transition-colors"
            >
              <div className="relative w-28 h-10">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  sizes="112px"
                  className="object-contain opacity-60"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p className="text-muted text-[10px] tracking-widest uppercase text-center">
                {b.tag[lang]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${lang}/brands`}
            className="text-sky text-sm font-display font-semibold hover:text-cyan transition-colors"
          >
            {c.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
