"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

const content = {
  az: { label: "Rəylər", title: "Xəstə Rəyləri", fallback: "Google rəyləri tezliklə əlavə olunacaq." },
  en: { label: "Reviews", title: "Patient Reviews", fallback: "Google reviews will be added soon." },
  ru: { label: "Отзывы", title: "Отзывы Пациентов", fallback: "Отзывы Google скоро будут добавлены." },
};

interface TestimonialsProps {
  lang: Lang;
}

export default function TestimonialsSection({ lang }: TestimonialsProps) {
  const c = content[lang];
  const [status, setStatus] = useState<"loading" | "ok" | "fallback">("loading");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (data.fallback || !data.reviews?.length) {
          setStatus("fallback");
        } else {
          setReviews(data.reviews.slice(0, 3));
          setStatus("ok");
        }
      })
      .catch(() => setStatus("fallback"));
  }, []);

  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">{c.label}</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">{c.title}</h2>
        </div>

        {status === "loading" && (
          <div className="grid sm:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="glass p-6 animate-pulse">
                <div className="flex gap-1 mb-4">
                  {[0,1,2,3,4].map((s) => <div key={s} className="w-4 h-4 bg-white/5 rounded" />)}
                </div>
                <div className="h-3 bg-white/5 rounded mb-2 w-3/4" />
                <div className="h-3 bg-white/5 rounded mb-2" />
                <div className="h-3 bg-white/5 rounded w-5/6" />
                <div className="mt-6 h-3 bg-white/5 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {status === "fallback" && (
          <div className="text-center py-12">
            <div className="flex justify-center gap-1 mb-4">
              {[0,1,2,3,4].map((i) => <Star key={i} size={18} className="text-white/15 fill-white/15" />)}
            </div>
            <p className="text-muted text-sm">{c.fallback}</p>
          </div>
        )}

        {status === "ok" && (
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="glass p-6">
                <div className="flex gap-1 mb-4">
                  {[0,1,2,3,4].map((s) => (
                    <Star key={s} size={14} className="text-sky fill-sky" />
                  ))}
                </div>
                <p className="text-off-white text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue/20 border border-blue/30 flex items-center justify-center text-sky text-xs font-display font-bold">
                    {r.author[0]}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{r.author}</p>
                    <p className="text-muted text-[10px]">{r.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
