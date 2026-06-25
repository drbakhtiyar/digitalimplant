import Link from "next/link";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    title: "Rəqəmsal İmplant Planlaması üçün Müraciət Edin",
    sub: "Dr. Bakhtiyar Əliyev ilə fərdi konsultasiya üçün randevu götürün. CBCT analiz, virtual planlaşdırma və tam rəqəmsal iş axını.",
    cta: "Randevu Al",
    phone: "+994 10 501 01 07",
  },
  en: {
    title: "Apply for Digital Implant Planning",
    sub: "Book a personal consultation with Dr. Bakhtiyar Aliyev. CBCT analysis, virtual planning and a fully digital workflow.",
    cta: "Book Appointment",
    phone: "+994 10 501 01 07",
  },
  ru: {
    title: "Запишитесь на Цифровое Планирование",
    sub: "Запишитесь на персональную консультацию к Д-р Бахтияру Алиеву. КТ-анализ, виртуальное планирование и полностью цифровой процесс.",
    cta: "Записаться",
    phone: "+994 10 501 01 07",
  },
};

interface CTASectionProps {
  lang: Lang;
}

export default function CTASection({ lang }: CTASectionProps) {
  const c = content[lang];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-blue/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-10 text-center">
        <div className="glass p-12 shadow-[0_0_80px_rgba(0,87,255,0.2)]">
          <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 px-3 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-sky text-[10px] font-display font-semibold tracking-[0.4em] uppercase">
              Digital Implant
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {c.title}
          </h2>
          <p className="text-muted leading-relaxed mb-8">{c.sub}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/${lang}/appointment`}
              className="inline-flex items-center gap-2 bg-blue hover:bg-blue-light text-white font-display font-semibold text-sm px-8 py-4 transition-colors shadow-[0_0_30px_rgba(0,87,255,0.5)]"
            >
              {c.cta}
            </Link>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-sky text-white/70 hover:text-sky font-display font-semibold text-sm px-8 py-4 transition-colors"
            >
              {c.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
