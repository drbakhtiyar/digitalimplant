import type { Lang } from "@/lib/i18n";

export interface BlogPost {
  slug: string;
  category: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  metaTitle: Record<Lang, string>;
  metaDescription: Record<Lang, string>;
  keywords: Record<Lang, string[]>;
  date: Record<Lang, string>;
  isoDate: string;
  readTime: Record<Lang, string>;
}

export const posts: BlogPost[] = [
  {
    slug: "3shape-implant-studio-planlasdirma",
    category: {
      az: "Rəqəmsal Planlaşdırma",
      en: "Digital Planning",
      ru: "Цифровое Планирование",
    },
    title: {
      az: "3Shape Implant Studio ilə Rəqəmsal İmplant Planlaşdırması",
      en: "Digital Implant Planning with 3Shape Implant Studio",
      ru: "Цифровое Планирование Имплантов с 3Shape Implant Studio",
    },
    excerpt: {
      az: "3Shape Implant Studio proqramı ilə virtual cərrahiyyə, prostetik əsaslı planlaşdırma və cərrahi şablon yaradılması — addım-addım izah.",
      en: "Virtual surgery, prosthetically driven planning and surgical guide creation with 3Shape Implant Studio — a step-by-step guide.",
      ru: "Виртуальная хирургия, протетически ориентированное планирование и создание хирургического шаблона с 3Shape Implant Studio — пошаговое объяснение.",
    },
    metaTitle: {
      az: "3Shape Implant Studio ilə Rəqəmsal Planlaşdırma | Digital Implant Bakı",
      en: "Digital Implant Planning with 3Shape Implant Studio | Digital Implant Baku",
      ru: "Цифровое Планирование с 3Shape Implant Studio | Digital Implant Баку",
    },
    metaDescription: {
      az: "3Shape Implant Studio ilə rəqəmsal implant planlaşdırması necə aparılır? Virtual cərrahiyyə, CBCT inteqrasiyası və prostetik planlaşdırma haqqında ətraflı bələdçi.",
      en: "How is digital implant planning done with 3Shape Implant Studio? Detailed guide on virtual surgery, CBCT integration and prosthetic planning.",
      ru: "Как проводится цифровое планирование имплантов в 3Shape Implant Studio? Подробное руководство по виртуальной хирургии, интеграции КТ и протетическому планированию.",
    },
    keywords: {
      az: ["3Shape Implant Studio", "rəqəmsal implant planlaşdırması", "virtual cərrahiyyə", "cərrahi şablon Bakı", "CBCT planlaşdırma"],
      en: ["3Shape Implant Studio", "digital implant planning", "virtual surgery", "surgical guide Baku", "CBCT planning"],
      ru: ["3Shape Implant Studio", "цифровое планирование имплантов", "виртуальная хирургия", "хирургический шаблон Баку", "КТ планирование"],
    },
    date: { az: "20 İyun 2026", en: "20 June 2026", ru: "20 Июня 2026" },
    isoDate: "2026-06-20",
    readTime: { az: "7 dəq", en: "7 min", ru: "7 мин" },
  },
  {
    slug: "straumann-all-on-4-derhal-yukleme",
    category: {
      az: "İmplant Sistemləri",
      en: "Implant Systems",
      ru: "Системы Имплантов",
    },
    title: {
      az: "Straumann All-on-4 və Dərhal Yükləmə",
      en: "Straumann All-on-4 and Immediate Loading",
      ru: "Straumann All-on-4 и Немедленная Нагрузка",
    },
    excerpt: {
      az: "Straumann All-on-4 protokolu ilə tam çənə rehabilitasiyası, dərhal yükləmənin üstünlükləri və rəqəmsal planlaşdırmanın rolu.",
      en: "Full-arch rehabilitation with the Straumann All-on-4 protocol, the advantages of immediate loading and the role of digital planning.",
      ru: "Реабилитация всей дуги по протоколу Straumann All-on-4, преимущества немедленной нагрузки и роль цифрового планирования.",
    },
    metaTitle: {
      az: "Straumann All-on-4 Dərhal Yükləmə | Digital Implant Bakı",
      en: "Straumann All-on-4 Immediate Loading | Digital Implant Baku",
      ru: "Straumann All-on-4 Немедленная Нагрузка | Digital Implant Баку",
    },
    metaDescription: {
      az: "Straumann All-on-4 ilə tam çənə rehabilitasiyası. Dərhal yükləmə nədir, kimə uyğundur və rəqəmsal planlaşdırma niyə vacibdir?",
      en: "Full-arch rehabilitation with Straumann All-on-4. What is immediate loading, who is it suitable for and why is digital planning essential?",
      ru: "Реабилитация всей дуги с Straumann All-on-4. Что такое немедленная нагрузка, кому подходит и почему необходимо цифровое планирование?",
    },
    keywords: {
      az: ["Straumann All-on-4", "dərhal yükləmə Bakı", "tam çənə implant", "All-on-4 Bakı", "full arch rehabilitasiya"],
      en: ["Straumann All-on-4", "immediate loading Baku", "full arch implant", "All-on-4 Baku", "full arch rehabilitation"],
      ru: ["Straumann All-on-4", "немедленная нагрузка Баку", "полная дуга имплант", "All-on-4 Баку", "реабилитация всей дуги"],
    },
    date: { az: "22 İyun 2026", en: "22 June 2026", ru: "22 Июня 2026" },
    isoDate: "2026-06-22",
    readTime: { az: "8 dəq", en: "8 min", ru: "8 мин" },
  },
  {
    slug: "bredent-copasky-fast-fixed",
    category: {
      az: "İmplant Sistemləri",
      en: "Implant Systems",
      ru: "Системы Имплантов",
    },
    title: {
      az: "Bredent copaSKY Fast & Fixed Konsepti",
      en: "Bredent copaSKY Fast & Fixed Concept",
      ru: "Концепция Bredent copaSKY Fast & Fixed",
    },
    excerpt: {
      az: "Bredent copaSKY Fast & Fixed konsepti ilə eyni gündə sabit protez. Bu yanaşmanın üstünlükləri, göstərişləri və rəqəmsal iş axını.",
      en: "A fixed prosthesis on the same day with the Bredent copaSKY Fast & Fixed concept. Advantages, indications and the digital workflow.",
      ru: "Несъёмный протез в тот же день с концепцией Bredent copaSKY Fast & Fixed. Преимущества, показания и цифровой рабочий процесс.",
    },
    metaTitle: {
      az: "Bredent copaSKY Fast & Fixed | Digital Implant Bakı",
      en: "Bredent copaSKY Fast & Fixed | Digital Implant Baku",
      ru: "Bredent copaSKY Fast & Fixed | Digital Implant Баку",
    },
    metaDescription: {
      az: "Bredent copaSKY Fast & Fixed konsepti nədir? Eyni gündə sabit protez, anında yükləmə protokolu və bu yanaşmanın xəstələr üçün faydaları.",
      en: "What is the Bredent copaSKY Fast & Fixed concept? Same-day fixed prosthesis, immediate loading protocol and patient benefits.",
      ru: "Что такое концепция Bredent copaSKY Fast & Fixed? Несъёмный протез в тот же день, протокол немедленной нагрузки и преимущества для пациентов.",
    },
    keywords: {
      az: ["Bredent copaSKY", "Fast Fixed konsept", "eyni gündə implant Bakı", "bredent implant", "full arch Bakı"],
      en: ["Bredent copaSKY", "Fast Fixed concept", "same day implant Baku", "bredent implant", "full arch Baku"],
      ru: ["Bredent copaSKY", "Fast Fixed концепт", "имплант в тот же день Баку", "bredent имплант", "полная дуга Баку"],
    },
    date: { az: "25 İyun 2026", en: "25 June 2026", ru: "25 Июня 2026" },
    isoDate: "2026-06-25",
    readTime: { az: "6 dəq", en: "6 min", ru: "6 мин" },
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((p) => [p.slug, p])
);
