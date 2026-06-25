import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import { getMedicalBusinessSchema } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyDigital from "@/components/home/WhyDigital";
import ThreeShapeFeature from "@/components/home/ThreeShapeFeature";
import BrandsSection from "@/components/home/BrandsSection";
import DoctorSection from "@/components/home/DoctorSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const meta = {
  az: {
    title: "Digital Implant Bakı — Rəqəmsal İmplantologiya Dr. Bakhtiyar Əliyev",
    description:
      "Bakıda rəqəmsal implantologiya. 3Shape Implant Studio, rehberli cərrahiyyə və CBCT planlaşdırma ilə hər implant virtual olaraq planlaşdırılır. Dr. Bakhtiyar Əliyev.",
  },
  en: {
    title: "Digital Implant Baku — Digital Implantology Dr. Bakhtiyar Aliyev",
    description:
      "Digital implantology in Baku. Every implant is virtually planned with 3Shape Implant Studio, guided surgery and CBCT planning. Dr. Bakhtiyar Aliyev.",
  },
  ru: {
    title: "Digital Implant Баку — Цифровая Имплантология Dr. Bakhtiyar Aliyev",
    description:
      "Цифровая имплантология в Баку. Каждый имплант виртуально планируется с 3Shape Implant Studio, направляемой хирургией и КЛКТ. Д-р Бахтияр Алиев.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const m = meta[lang as Lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      languages: hrefLangs(""),
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://digitalimplant.az/${lang}`,
      siteName: "Digital Implant",
      locale: lang,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;

  const schema = getMedicalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero lang={l} />
      <Services lang={l} />
      <WhyDigital lang={l} />
      <ThreeShapeFeature lang={l} />
      <BrandsSection lang={l} />
      <DoctorSection lang={l} />
      <TestimonialsSection lang={l} />
      <CTASection lang={l} />
    </>
  );
}
