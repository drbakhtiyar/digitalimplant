import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import type { Lang } from "@/lib/i18n";
import { langs } from "@/lib/i18n";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      languages: {
        az: `https://digitalimplant.az/az`,
        en: `https://digitalimplant.az/en`,
        ru: `https://digitalimplant.az/ru`,
      },
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang as Lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Lang} />
      <WhatsAppButton />
    </div>
  );
}
