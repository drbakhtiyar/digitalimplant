"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog/posts";
import type { Lang } from "@/lib/i18n";

const placeholders: Record<Lang, string> = {
  az: "Məqalə axtar...",
  en: "Search articles...",
  ru: "Поиск статей...",
};

const readLabels: Record<Lang, string> = {
  az: "Oxu",
  en: "Read",
  ru: "Читать",
};

const noResultsLabels: Record<Lang, string> = {
  az: "Nəticə tapılmadı.",
  en: "No results found.",
  ru: "Результаты не найдены.",
};

interface Props {
  posts: BlogPost[];
  lang: Lang;
}

export default function BlogSearch({ posts, lang }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query, posts]);

  return (
    <div>
      <div className="relative mb-10">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholders[lang]}
          className="w-full bg-dark-3 border border-white/10 text-white placeholder:text-muted text-sm pl-11 pr-4 py-3 outline-none focus:border-sky/50 transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted text-center py-12">{noResultsLabels[lang]}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="glass p-6 flex flex-col hover:border-sky/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sky text-[10px] tracking-widest uppercase border border-blue/20 px-2 py-0.5">
                  {post.category}
                </span>
                <span className="text-muted text-xs">{post.readTime}</span>
              </div>
              <h2 className="font-display font-semibold text-white text-sm leading-snug mb-3 group-hover:text-sky transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-xs leading-relaxed flex-1 mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted text-xs">{post.date}</span>
                <span className="text-sky text-xs font-display font-semibold">{readLabels[lang]} →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
