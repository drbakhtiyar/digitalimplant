import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import { posts } from "@/lib/blog/posts";
import SectionLabel from "@/components/ui/SectionLabel";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const meta = {
  az: { title: "Blog | Digital Implant Bakı", desc: "Rəqəmsal implantologiya, 3Shape planlaşdırma, rehberli cərrahiyyə haqqında məqalələr." },
  en: { title: "Blog | Digital Implant Baku", desc: "Articles on digital implantology, 3Shape planning, guided surgery." },
  ru: { title: "Блог | Digital Implant Баку", desc: "Статьи о цифровой имплантологии, планировании 3Shape, направляемой хирургии." },
};

const labels = {
  az: { label: "Blog", title: "Rəqəmsal İmplantologiya Bloqu", readMore: "Oxu" },
  en: { label: "Blog", title: "Digital Implantology Blog", readMore: "Read" },
  ru: { label: "Блог", title: "Блог о Цифровой Имплантологии", readMore: "Читать" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const m = meta[lang as Lang];
  return {
    title: m.title,
    description: m.desc,
    alternates: { languages: hrefLangs("/blog") },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const lb = labels[l];

  return (
    <>
      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/6 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionLabel className="justify-center">{lb.label}</SectionLabel>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">{lb.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-dark-2">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${l}/blog/${post.slug}`}
                className="group glass p-6 flex flex-col hover:border-blue/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sky text-[10px] tracking-widest uppercase border border-blue/20 px-2 py-0.5">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display font-semibold text-white text-base leading-snug mb-3 group-hover:text-sky transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>{post.date}</span>
                  <span className="text-sky font-semibold">{lb.readMore} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
