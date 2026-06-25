import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { nav, routes } from "@/lib/i18n";

const navKeys = ["planning", "guided", "shape", "workflow", "brands", "faq", "blog"];

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = nav[lang];

  return (
    <footer className="bg-dark-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-white text-base tracking-wider mb-2">
              DIGITAL IMPLANT
            </p>
            <p className="text-sky text-xs tracking-[0.3em] uppercase mb-5">
              Rəqəmsal İmplantologiya
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Bakıda rəqəmsal implantologiya. 3Shape Implant Studio ilə planlaşdırma, rehberli cərrahiyyə, statik cərrahi şablonlar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6">Xidmətlər</p>
            <ul className="space-y-3">
              {navKeys.map((key) => (
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
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-6">Əlaqə</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-sky mt-0.5 shrink-0" />
                <span className="text-muted text-sm">Babək plaza, Bakı, AZ1025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-sky shrink-0" />
                <a href="tel:+994105010107" className="text-muted text-sm hover:text-sky transition-colors">
                  +994 10 501 01 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-sky shrink-0" />
                <a href="mailto:info@smilebydrbakhtiyar.com" className="text-muted text-sm hover:text-sky transition-colors">
                  info@smilebydrbakhtiyar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-sky mt-0.5 shrink-0" />
                <div className="text-muted text-sm space-y-0.5">
                  <p>B.e – Cümə: 09:00–19:00</p>
                  <p>Şənbə: 10:00–15:00</p>
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
