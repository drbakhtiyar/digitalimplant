import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const content = {
  az: {
    label: "Əlaqə",
    title: "Bizimlə Əlaqə",
    sub: "Suallarınız üçün zəng edin, yazın və ya klinikamıza gəlin.",
    metaTitle: "Əlaqə | Digital Implant Bakı",
    metaDesc: "Digital Implant klinikası ilə əlaqə: telefon, WhatsApp, email, ünvan. Bakı, Babək plaza.",
    address: "Babək plaza, Babək prospekti, Bakı, AZ1025",
    hours: [
      { day: "Bazar ertəsi – Cümə", time: "09:00 – 19:00" },
      { day: "Şənbə", time: "10:00 – 15:00" },
      { day: "Bazar", time: "Bağlı" },
    ],
    whatsapp: "WhatsApp ilə yazın",
    mapTitle: "Klinika Yeri",
  },
  en: {
    label: "Contact",
    title: "Contact Us",
    sub: "Call, write or visit our clinic for any questions.",
    metaTitle: "Contact | Digital Implant Baku",
    metaDesc: "Contact Digital Implant clinic: phone, WhatsApp, email, address. Baku, Babek plaza.",
    address: "Babek plaza, Babek avenue, Baku, AZ1025",
    hours: [
      { day: "Monday – Friday", time: "09:00 – 19:00" },
      { day: "Saturday", time: "10:00 – 15:00" },
      { day: "Sunday", time: "Closed" },
    ],
    whatsapp: "Write on WhatsApp",
    mapTitle: "Clinic Location",
  },
  ru: {
    label: "Контакт",
    title: "Свяжитесь с Нами",
    sub: "Позвоните, напишите или приходите в клинику с любыми вопросами.",
    metaTitle: "Контакт | Digital Implant Баку",
    metaDesc: "Контакты клиники Digital Implant: телефон, WhatsApp, email, адрес. Баку, Бабек плаза.",
    address: "Babek plaza, проспект Бабека, Баку, AZ1025",
    hours: [
      { day: "Понедельник – Пятница", time: "09:00 – 19:00" },
      { day: "Суббота", time: "10:00 – 15:00" },
      { day: "Воскресенье", time: "Закрыто" },
    ],
    whatsapp: "Написать в WhatsApp",
    mapTitle: "Местонахождение клиники",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const c = content[lang as Lang];
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { languages: hrefLangs("/contact") },
  };
}

export default async function ContactPage({ params }: Props) {
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
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="glass p-7">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
                        {l === "az" ? "Telefon" : l === "en" ? "Phone" : "Телефон"}
                      </p>
                      <a href="tel:+994105010107" className="text-white font-display font-semibold hover:text-sky transition-colors">
                        +994 10 501 01 07
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/994105010107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-display font-semibold hover:text-sky transition-colors"
                      >
                        {c.whatsapp}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Email</p>
                      <a href="mailto:info@smilebydrbakhtiyar.com" className="text-white font-display font-semibold hover:text-sky transition-colors">
                        info@smilebydrbakhtiyar.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
                        {l === "az" ? "Ünvan" : l === "en" ? "Address" : "Адрес"}
                      </p>
                      <p className="text-white font-semibold">{c.address}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-2">
                        {l === "az" ? "İş Saatları" : l === "en" ? "Working Hours" : "Часы работы"}
                      </p>
                      <div className="space-y-1">
                        {c.hours.map((h) => (
                          <div key={h.day} className="flex gap-3">
                            <span className="text-muted text-sm w-40">{h.day}</span>
                            <span className="text-off-white text-sm font-medium">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mb-4">{c.mapTitle}</p>
              <div className="relative overflow-hidden border border-blue/15 h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=Babek+Plaza+Babek+prospekti+Baku+Azerbaijan&output=embed&z=16&hl=az"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Digital Implant location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
