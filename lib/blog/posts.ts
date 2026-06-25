import type { Lang } from "@/lib/i18n";

export interface BlogPost {
  slug: string;
  lang: Lang;
  category: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  isoDate: string;
  readTime: string;
}

export const posts: BlogPost[] = [
  {
    slug: "3shape-implant-studio-planlasdirma",
    lang: "az",
    category: "Rəqəmsal Planlaşdırma",
    title: "3Shape Implant Studio ilə Rəqəmsal İmplant Planlaşdırması",
    excerpt:
      "3Shape Implant Studio proqramı ilə virtual cərrahiyyə, prostetik əsaslı planlaşdırma və cərrahi şablon yaradılması — addım-addım izah.",
    metaTitle: "3Shape Implant Studio ilə Rəqəmsal Planlaşdırma | Digital Implant Bakı",
    metaDescription:
      "3Shape Implant Studio ilə rəqəmsal implant planlaşdırması necə aparılır? Virtual cərrahiyyə, CBCT inteqrasiyası və prostetik planlaşdırma haqqında ətraflı bələdçi.",
    keywords: [
      "3Shape Implant Studio",
      "rəqəmsal implant planlaşdırması",
      "virtual cərrahiyyə",
      "cərrahi şablon Bakı",
      "CBCT planlaşdırma",
    ],
    date: "20 İyun 2026",
    isoDate: "2026-06-20",
    readTime: "7 dəq",
  },
  {
    slug: "straumann-all-on-4-derhal-yukleme",
    lang: "az",
    category: "İmplant Sistemləri",
    title: "Straumann All-on-4 və Dərhal Yükləmə",
    excerpt:
      "Straumann All-on-4 protokolu ilə tam çənə rehabilitasiyası, dərhal yükləmənin üstünlükləri və rəqəmsal planlaşdırmanın rolu.",
    metaTitle: "Straumann All-on-4 Dərhal Yükləmə | Digital Implant Bakı",
    metaDescription:
      "Straumann All-on-4 ilə tam çənə rehabilitasiyası. Dərhal yükləmə nədir, kimə uyğundur və rəqəmsal planlaşdırma niyə vacibdir?",
    keywords: [
      "Straumann All-on-4",
      "dərhal yükləmə Bakı",
      "tam çənə implant",
      "All-on-4 Bakı",
      "full arch rehabilitasiya",
    ],
    date: "22 İyun 2026",
    isoDate: "2026-06-22",
    readTime: "8 dəq",
  },
  {
    slug: "bredent-copasky-fast-fixed",
    lang: "az",
    category: "İmplant Sistemləri",
    title: "Bredent copaSKY Fast & Fixed Konsepti",
    excerpt:
      "Bredent copaSKY Fast & Fixed konsepti ilə eyni gündə sabit protez. Bu yanaşmanın üstünlükləri, göstərişləri və rəqəmsal iş axını.",
    metaTitle: "Bredent copaSKY Fast & Fixed | Digital Implant Bakı",
    metaDescription:
      "Bredent copaSKY Fast & Fixed konsepti nədir? Eyni gündə sabit protez, anında yükləmə protokolu və bu yanaşmanın xəstələr üçün faydaları.",
    keywords: [
      "Bredent copaSKY",
      "Fast Fixed konsept",
      "eyni gündə implant Bakı",
      "bredent implant",
      "full arch Bakı",
    ],
    date: "25 İyun 2026",
    isoDate: "2026-06-25",
    readTime: "6 dəq",
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((p) => [p.slug, p])
);
