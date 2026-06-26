import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { nav, routes } from "@/lib/i18n";

const serviceKeys = ["planning", "guided", "shape", "workflow"];
const pageKeys = ["brands", "gallery", "faq", "blog", "about", "contact"];

const footerLabels: Record<Lang, { services: string; pages: string; contact: string }> = {
  az: { services: "Xidmətlər", pages: "Səhifələr", contact: "Əlaqə" },
  en: { services: "Services", pages: "Pages", contact: "Contact" },
  ru: { services: "Услуги", pages: "Страницы", contact: "Контакты" },
};

const footerDesc: Record<Lang, string> = {
  az: "Bakıda rəqəmsal implantologiya. 3Shape Implant Studio ilə planlaşdırma, rehberli cərrahiyyə, statik şablonlar.",
  en: "Digital implantology in Baku. Planning with 3Shape Implant Studio, guided surgery, static surgical guides.",
  ru: "Цифровая имплантология в Баку. Планирование с 3Shape Implant Studio, направляемая хирургия, статические шаблоны.",
};

const hoursLabel: Record<Lang, { weekdays: string; sat: string }> = {
  az: { weekdays: "B.e – Cümə", sat: "Şənbə" },
  en: { weekdays: "Mon – Fri", sat: "Saturday" },
  ru: { weekdays: "Пн – Пт", sat: "Суббота" },
};

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = nav[lang];
  const lb = footerLabels[lang];

  return (
    <footer className="bg-dark-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display font-bold text-white text-base tracking-wider mb-1.5">
              DIGITAL IMPLANT
            </p>
            <p className="text-sky text-xs tracking-[0.3em] uppercase mb-5">
              Rəqəmsal İmplantologiya
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {footerDesc[lang]}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6">{lb.services}</p>
            <ul className="space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={`/${lang}/${routes[key] ?? key}`}
                    className="text-muted text-sm hover:text-sky transition-colors"
                  >
                    {t[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6">{lb.pages}</p>
            <ul className="space-y-3">
              {pageKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={`/${lang}/${routes[key] ?? key}`}
                    className="text-muted text-sm hover:text-sky transition-colors"
                  >
                    {t[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6">{lb.contact}</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-sky mt-0.5 shrink-0" />
                <span className="text-muted text-sm leading-snug">
                  Babək plaza,<br />Bakı, AZ1025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-sky shrink-0" />
                <a href="tel:+994105010107" className="text-muted text-sm hover:text-sky transition-colors">
                  +994 10 501 01 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="text-sky shrink-0" />
                <a href="mailto:info@smilebydrbakhtiyar.com" className="text-muted text-sm hover:text-sky transition-colors break-all">
                  info@smilebydrbakhtiyar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={13} className="text-sky mt-0.5 shrink-0" />
                <div className="text-muted text-sm space-y-0.5">
                  <p>{hoursLabel[lang].weekdays}: 09:00–19:00</p>
                  <p>{hoursLabel[lang].sat}: 10:00–15:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-white/25 tracking-wide">
          <p>© 2026 Digital Implant — Dr. Bakhtiyar Aliyev. Bütün hüquqlar qorunur.</p>
          <p>Bakı, Azərbaycan · digitalimplant.az</p>
        </div>
      </div>
    </footer>
  );
}
