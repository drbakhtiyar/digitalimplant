import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    label: "Həkim",
    name: "Dr. Bakhtiyar Əliyev",
    title: "Digital İmplantologiya üzrə Ekspert",
    bio: "Dr. Bakhtiyar Əliyev 15 ildən artıq müddətdir ki, yalnız implantologiya sahəsində ixtisaslaşmış dişçilik fəaliyyəti aparır. 3000-dən çox uğurlu implant əməliyyatı icra etmiş, Avropa üzrə rəqəmsal implantologiya kurslarını tamamlamış və 3Shape sertifikatlı mütəxəssisdir. Hər planlaşdırma şəxsən özü tərəfindən aparılır — vücudunuza uyğun individual yanaşma isə bu fərqin əsasını təşkil edir.",
    creds: [
      "3Shape Sertifikatlı Mütəxəssis",
      "Straumann Partner Klinikası",
      "İsveçrə, Almaniya, İtaliyada beynəlxalq kurslar",
      "15+ il yalnız implantologiya",
    ],
    cta: "Randevu Al",
    href: "/az/appointment",
  },
  en: {
    label: "The Doctor",
    name: "Dr. Bakhtiyar Aliyev",
    title: "Expert in Digital Implantology",
    bio: "Dr. Bakhtiyar Aliyev has specialized exclusively in implantology for over 15 years. He has completed more than 3,000 successful implant procedures, completed digital implantology courses across Europe, and is a 3Shape-certified specialist. Every planning session is personally conducted by him — the individualized approach tailored to your anatomy is the foundation of the difference.",
    creds: [
      "3Shape Certified Specialist",
      "Straumann Partner Clinic",
      "International courses in Switzerland, Germany, Italy",
      "15+ years exclusively in implantology",
    ],
    cta: "Book Appointment",
    href: "/en/appointment",
  },
  ru: {
    label: "Врач",
    name: "Др. Бахтияр Алиев",
    title: "Эксперт в Цифровой Имплантологии",
    bio: "Д-р Бахтияр Алиев более 15 лет специализируется исключительно на имплантологии. Провёл более 3000 успешных имплантационных операций, прошёл курсы по цифровой имплантологии в Европе и является сертифицированным специалистом 3Shape. Каждое планирование он проводит лично — индивидуальный подход, адаптированный к вашей анатомии, лежит в основе разницы.",
    creds: [
      "Сертифицированный специалист 3Shape",
      "Клиника-партнёр Straumann",
      "Международные курсы в Швейцарии, Германии, Италии",
      "15+ лет исключительно в имплантологии",
    ],
    cta: "Записаться",
    href: "/ru/appointment",
  },
};

interface DoctorSectionProps {
  lang: Lang;
}

export default function DoctorSection({ lang }: DoctorSectionProps) {
  const c = content[lang];

  return (
    <section className="py-24 bg-dark-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 bg-blue/10 blur-2xl" />
              <div className="relative w-64 h-80 overflow-hidden border border-blue/20">
                <Image
                  src="/images/dr-bakhtiyar.webp"
                  alt={c.name}
                  fill
                  sizes="256px"
                  className="object-cover object-top"
                />
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-sky" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-sky" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky" />
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="font-display font-bold text-3xl text-white mb-1">{c.name}</h2>
            <p className="text-sky text-sm tracking-wide mb-6">{c.title}</p>

            <p className="text-muted leading-relaxed mb-8">{c.bio}</p>

            <ul className="space-y-2.5 mb-8">
              {c.creds.map((cr) => (
                <li key={cr} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  <span className="text-off-white text-sm">{cr}</span>
                </li>
              ))}
            </ul>

            <Link
              href={c.href}
              className="inline-flex items-center gap-2 bg-blue hover:bg-blue-light text-white font-display font-semibold text-sm px-7 py-3.5 transition-colors shadow-[0_0_30px_rgba(0,87,255,0.4)]"
            >
              {c.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
