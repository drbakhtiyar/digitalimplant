import SectionLabel from "@/components/ui/SectionLabel";
import type { Lang } from "@/lib/i18n";

const content = {
  az: {
    label: "Niyə Rəqəmsal?",
    title: "Ənənəvinin Yox, Rəqəmsalın",
    sub: "Rəqəmsal implantologiya ənənəvi yanaşmadan fərqli olaraq hər addımı virtual mühitdə planlaşdırır, insan səhvini minimuma endirir.",
    reasons: [
      {
        n: "01",
        title: "0.1mm Dəqiqlik",
        body: "3D planlaşdırma və cərrahi şablonlar vasitəsilə implant mövqeyi çalışma modelindəki kimi dəqiq həyata keçirilir. Ənənəvi yanaşmada isə bu tamamilə əl bacarığına bağlıdır.",
      },
      {
        n: "02",
        title: "Virtual Planlaşdırma",
        body: "Əməliyyatdan əvvəl hər implant CBCT məlumatları üzərində virtual olaraq yerləşdirilir. Xəstə cərrahiyyəyə başlamazdan əvvəl nəticəni görür.",
      },
      {
        n: "03",
        title: "Sürətli Bərpa",
        body: "Minimal invaziv texnikalar, dəqiq planlaşdırılmış cərrahi və az travma sayəsində sağalma prosesi daha qısa və rahat keçir.",
      },
    ],
  },
  en: {
    label: "Why Digital?",
    title: "Not Traditional. Digital.",
    sub: "Digital implantology plans every step in a virtual environment, minimizing human error unlike traditional approaches.",
    reasons: [
      {
        n: "01",
        title: "0.1mm Precision",
        body: "Implant position is executed exactly as planned through 3D planning and surgical guides. Traditional methods rely entirely on manual skill.",
      },
      {
        n: "02",
        title: "Virtual Planning",
        body: "Every implant is virtually placed on CBCT data before surgery. The patient sees the outcome before the procedure begins.",
      },
      {
        n: "03",
        title: "Faster Recovery",
        body: "Minimally invasive techniques, precisely planned surgery, and reduced trauma lead to a shorter and more comfortable healing process.",
      },
    ],
  },
  ru: {
    label: "Почему Цифровое?",
    title: "Не Традиционно. Цифрово.",
    sub: "Цифровая имплантология планирует каждый шаг в виртуальной среде, минимизируя человеческий фактор.",
    reasons: [
      {
        n: "01",
        title: "Точность 0,1 мм",
        body: "Положение импланта воспроизводится с точностью по 3D-планированию и хирургическим шаблонам. Традиционные методы зависят от ручного мастерства.",
      },
      {
        n: "02",
        title: "Виртуальное Планирование",
        body: "Каждый имплант виртуально размещается на КТ-данных до операции. Пациент видит результат до начала процедуры.",
      },
      {
        n: "03",
        title: "Быстрое Восстановление",
        body: "Малоинвазивные техники, точно спланированная хирургия и минимальная травма обеспечивают более короткое и комфортное заживление.",
      },
    ],
  },
};

interface WhyDigitalProps {
  lang: Lang;
}

export default function WhyDigital({ lang }: WhyDigitalProps) {
  const c = content[lang];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              {c.title}
            </h2>
            <p className="text-muted leading-relaxed mb-10">{c.sub}</p>

            <div className="space-y-8">
              {c.reasons.map((r) => (
                <div key={r.n} className="flex gap-5">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-blue/30 bg-blue/5">
                    <span className="text-sky text-[10px] font-display font-bold tracking-widest">
                      {r.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-1.5">
                      {r.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative visualization */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-blue/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-sky/8 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-cyan/6" />

              {/* Center glass card */}
              <div className="absolute inset-14 glass flex flex-col items-center justify-center rounded">
                <p className="font-display font-bold text-gradient text-3xl leading-none">0.1</p>
                <p className="text-sky text-[10px] tracking-widest uppercase mt-1">mm</p>
              </div>

              {/* Data points on ring */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue/60 rounded-full"
                  style={{
                    top: `${50 - 48 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
