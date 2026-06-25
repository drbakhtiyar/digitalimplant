"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScanLine,
  Crosshair,
  Monitor,
  GitMerge,
  Activity,
  Layers,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    label: "Xidmətlər",
    title: "Rəqəmsal İmplantologiya Xidmətləri",
    sub: "Hər xidmət virtual planlaşdırma əsasında həyata keçirilir.",
    services: [
      {
        key: "planning",
        icon: ScanLine,
        title: "Rəqəmsal Planlaşdırma",
        desc: "CBCT məlumatları əsasında 3Shape Implant Studio ilə hər implantın virtual olaraq dəqiq yerləşdirilməsi.",
        href: "/az/planning",
      },
      {
        key: "guided",
        icon: Crosshair,
        title: "Rehberli Cərrahiyyə",
        desc: "Statik cərrahi şablonlar vasitəsilə 0.1mm dəqiqliklə planlaşdırılmış implant yerləşdirməsi.",
        href: "/az/guided-surgery",
      },
      {
        key: "shape",
        icon: Monitor,
        title: "3Shape İmplant Studio",
        desc: "Dünyada ən çox istifadə edilən rəqəmsal implant planlaşdırma proqramı ilə prostetik əsaslı cərrahiyyə.",
        href: "/az/3shape",
      },
      {
        key: "workflow",
        icon: GitMerge,
        title: "Digital Workflow",
        desc: "Konsultasiyadan protezə qədər tam rəqəmsal iş axını — sürətli, dəqiq və şəffaf.",
        href: "/az/workflow",
      },
      {
        key: "cbct",
        icon: Activity,
        title: "CBCT Analiz",
        desc: "Konik şüa tomoqrafiyası ilə sümük sıxlığı, hacmi və anatomik strukturların hərtərəfli qiymətləndirilməsi.",
        href: "/az/planning",
      },
      {
        key: "allon4",
        icon: Layers,
        title: "All-on-4 / Full Arch",
        desc: "Tam çənə rehabilitasiyası üçün rəqəmsal planlaşdırılmış All-on-4 protokolu ilə eyni gündə sabit protez.",
        href: "/az/workflow",
      },
    ],
  },
  en: {
    label: "Services",
    title: "Digital Implantology Services",
    sub: "Every service is performed based on virtual planning.",
    services: [
      {
        key: "planning",
        icon: ScanLine,
        title: "Digital Planning",
        desc: "Precise virtual placement of each implant with 3Shape Implant Studio based on CBCT data.",
        href: "/en/planning",
      },
      {
        key: "guided",
        icon: Crosshair,
        title: "Guided Surgery",
        desc: "Planned implant placement with 0.1mm accuracy via static surgical guides.",
        href: "/en/guided-surgery",
      },
      {
        key: "shape",
        icon: Monitor,
        title: "3Shape Implant Studio",
        desc: "Prosthetically-driven surgery with the world's most widely used digital implant planning software.",
        href: "/en/3shape",
      },
      {
        key: "workflow",
        icon: GitMerge,
        title: "Digital Workflow",
        desc: "Fully digital workflow from consultation to prosthetics — fast, precise, and transparent.",
        href: "/en/workflow",
      },
      {
        key: "cbct",
        icon: Activity,
        title: "CBCT Analysis",
        desc: "Comprehensive evaluation of bone density, volume, and anatomical structures via cone beam CT.",
        href: "/en/planning",
      },
      {
        key: "allon4",
        icon: Layers,
        title: "All-on-4 / Full Arch",
        desc: "Same-day fixed prosthetics with digitally planned All-on-4 protocol for full arch rehabilitation.",
        href: "/en/workflow",
      },
    ],
  },
  ru: {
    label: "Услуги",
    title: "Услуги Цифровой Имплантологии",
    sub: "Каждая услуга выполняется на основе виртуального планирования.",
    services: [
      {
        key: "planning",
        icon: ScanLine,
        title: "Цифровое Планирование",
        desc: "Точное виртуальное размещение каждого импланта с 3Shape Implant Studio на основе данных КТ.",
        href: "/ru/planning",
      },
      {
        key: "guided",
        icon: Crosshair,
        title: "Направляемая Хирургия",
        desc: "Установка имплантов с точностью 0,1 мм через статические хирургические шаблоны.",
        href: "/ru/guided-surgery",
      },
      {
        key: "shape",
        icon: Monitor,
        title: "3Shape Implant Studio",
        desc: "Протетически ориентированная хирургия с наиболее используемым программным обеспечением.",
        href: "/ru/3shape",
      },
      {
        key: "workflow",
        icon: GitMerge,
        title: "Цифровой Процесс",
        desc: "Полностью цифровой рабочий процесс от консультации до протезирования.",
        href: "/ru/workflow",
      },
      {
        key: "cbct",
        icon: Activity,
        title: "Анализ КТ",
        desc: "Комплексная оценка плотности и объёма кости и анатомических структур.",
        href: "/ru/planning",
      },
      {
        key: "allon4",
        icon: Layers,
        title: "All-on-4 / Full Arch",
        desc: "Несъёмный протез в день операции с цифровым планированием по протоколу All-on-4.",
        href: "/ru/workflow",
      },
    ],
  },
};

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const c = content[lang];

  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">{c.label}</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            {c.title}
          </h2>
          <p className="text-muted max-w-md mx-auto">{c.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={s.href}
                  className="group block glass p-7 hover:border-blue/30 hover:shadow-[0_0_40px_rgba(0,87,255,0.15)] transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 bg-blue/10 border border-blue/20 flex items-center justify-center mb-5 group-hover:bg-blue/20 transition-colors">
                    <Icon size={18} className="text-sky" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
