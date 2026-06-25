"use client";

import { useState, use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/home/CTASection";
import { notFound } from "next/navigation";
import { langs } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  service: z.string().min(1),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const content = {
  az: {
    label: "Randevu",
    title: "Randevu Al",
    sub: "Formu doldurun, ən qısa zamanda sizinlə əlaqə saxlayacağıq.",
    namePh: "Ad Soyad",
    phonePh: "+994 XX XXX XX XX",
    servicePh: "Xidmət seçin",
    msgPh: "Qeydlər (isteğe bağlı)",
    services: [
      "Rəqəmsal Planlaşdırma",
      "Rehberli Cərrahiyyə",
      "3Shape İmplant Studio",
      "All-on-4 / Full Arch",
      "CBCT Analiz",
      "Konsultasiya",
    ],
    submit: "Randevu Göndər",
    sending: "Göndərilir...",
    success: "Sorğunuz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
    errors: {
      name: "Ad ən az 2 hərf olmalıdır",
      phone: "Düzgün telefon nömrəsi daxil edin",
      service: "Xidmət seçin",
    },
  },
  en: {
    label: "Appointment",
    title: "Book Appointment",
    sub: "Fill in the form and we will contact you as soon as possible.",
    namePh: "Full Name",
    phonePh: "+994 XX XXX XX XX",
    servicePh: "Select service",
    msgPh: "Notes (optional)",
    services: [
      "Digital Planning",
      "Guided Surgery",
      "3Shape Implant Studio",
      "All-on-4 / Full Arch",
      "CBCT Analysis",
      "Consultation",
    ],
    submit: "Send Request",
    sending: "Sending...",
    success: "Your request has been received. We will contact you shortly.",
    errors: {
      name: "Name must be at least 2 characters",
      phone: "Enter a valid phone number",
      service: "Please select a service",
    },
  },
  ru: {
    label: "Запись",
    title: "Записаться на Приём",
    sub: "Заполните форму, и мы свяжемся с вами в ближайшее время.",
    namePh: "Имя Фамилия",
    phonePh: "+994 XX XXX XX XX",
    servicePh: "Выберите услугу",
    msgPh: "Примечания (необязательно)",
    services: [
      "Цифровое Планирование",
      "Направляемая Хирургия",
      "3Shape Implant Studio",
      "All-on-4 / Full Arch",
      "КТ-Анализ",
      "Консультация",
    ],
    submit: "Отправить Запрос",
    sending: "Отправка...",
    success: "Ваш запрос принят. Мы свяжемся с вами в ближайшее время.",
    errors: {
      name: "Имя должно содержать минимум 2 символа",
      phone: "Введите корректный номер телефона",
      service: "Выберите услугу",
    },
  },
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function AppointmentPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;

  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const c = content[l];

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

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
        <div className="max-w-xl mx-auto px-5 lg:px-10">
          {submitted ? (
            <div className="glass p-10 text-center shadow-[0_0_60px_rgba(0,87,255,0.2)]">
              <div className="w-14 h-14 bg-blue/20 border border-blue/40 flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-sky" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
              <p className="text-white font-display font-semibold text-lg">{c.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 space-y-5">
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder={c.namePh}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue/60 text-white placeholder:text-muted text-sm px-4 py-3 outline-none transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{c.errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone")}
                  placeholder={c.phonePh}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue/60 text-white placeholder:text-muted text-sm px-4 py-3 outline-none transition-colors"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{c.errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <select
                  {...register("service")}
                  className="w-full bg-dark border border-white/10 focus:border-blue/60 text-white text-sm px-4 py-3 outline-none transition-colors"
                >
                  <option value="">{c.servicePh}</option>
                  {c.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-400 text-xs mt-1">{c.errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  placeholder={c.msgPh}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue/60 text-white placeholder:text-muted text-sm px-4 py-3 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue hover:bg-blue-light disabled:opacity-60 text-white font-display font-semibold text-sm py-4 transition-colors shadow-[0_0_30px_rgba(0,87,255,0.4)]"
              >
                {sending ? c.sending : c.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <CTASection lang={l} />
    </>
  );
}
