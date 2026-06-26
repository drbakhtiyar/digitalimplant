import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import { posts, postsBySlug } from "@/lib/blog/posts";
import CTASection from "@/components/home/CTASection";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of langs) {
    for (const post of posts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = postsBySlug[slug];
  if (!post) return {};
  const l = (langs.includes(lang as Lang) ? lang : "az") as Lang;
  return {
    title: post.metaTitle[l],
    description: post.metaDescription[l],
    keywords: post.keywords[l],
    alternates: { languages: hrefLangs(`/blog/${slug}`) },
    openGraph: {
      title: post.metaTitle[l],
      description: post.metaDescription[l],
      type: "article",
      publishedTime: post.isoDate,
    },
  };
}

const articleContent: Record<Lang, Record<string, React.ReactNode>> = {
  az: {
    "3shape-implant-studio-planlasdirma": (
      <>
        <p>3Shape Implant Studio rəqəmsal implantologiyanın mərkəzindədir. Proqram CBCT tomoqrafiya məlumatlarını — DICOM formatında — birbaşa qəbul edir və həkimə implant mövqeyini, bucağını, dərinliyini üç ölçülü mühitdə tam nəzarətlə planlaşdırmaq imkanı verir.</p>
        <h2>Prostetik Əsaslı Planlaşdırma</h2>
        <p>3Shape Implant Studio-nun ən əhəmiyyətli xüsusiyyəti prostetik əsaslı yanaşmasıdır. Ənənəvi yanaşmada implant mövqeyi sümük vəziyyətinə görə seçilir, protez sonradan uyğunlaşdırılmağa çalışılır. 3Shape-də prosedur tam tərsinədir: əvvəlcə bitmiş protezin forması — ideal dişin mövqeyi — müəyyən edilir. Sonra bu ideal nəticəyə çatmaq üçün implantın düzgün mövqeyi hesablanır.</p>
        <h2>CBCT + Skan İnteqrasiyası</h2>
        <p>Proqram CBCT məlumatlarını intraoral skaner (iTero, Trios) tərəfindən alınan rəqəmsal diş modeli ilə birləşdirir. Bu superimposition adlanan proses sayəsində həkim eyni ekranda həm sümük strukturunu, həm dişin formasını, həm də gələcək protezi görür. Bu birləşmiş görüntü planlaşdırmanın dəqiqliyini kəskin artırır.</p>
        <h2>Virtual Cərrahiyyə Simulyasiyası</h2>
        <p>Hər implant üçün virtual yerləşdirmə simulyasiyası aparılır. Həkim implantın qonşu dişlərə məsafəsini, sinir kanalına yaxınlığını, sümük kənarına marjinini real vaxt rejimində görür. Xəstə bu simulyasiyanı müzakirə zamanı birgə görür, qərar prosesinin iştirakçısına çevrilir.</p>
        <h2>Cərrahi Şablon İxracı</h2>
        <p>Planlaşdırma tamamlandıqdan sonra implant mövqeyi STL faylına ixrac edilir. Bu fayl 3D printer vasitəsilə biouyğun polimerdən dəqiq cərrahi şablona çevrilir. Şablondakı metal bələdçi tüplər cərrahiyyə zamanı implant mühərrikinin düzgün bucaq və dərinlikdə qalmasını təmin edir.</p>
        <h2>Nəticə</h2>
        <p>3Shape Implant Studio yalnız bir proqram deyil — rəqəmsal implantologiyanın iş axınının fəlsəfəsidir. Hər planlaşdırma sessiyasında həkim, xəstə və protez texniki tam sinxronlaşdırılmış qərarlar qəbul edir. Nəticə: daha dəqiq, daha az travmalı, daha uzunmüddətli implant müalicəsi.</p>
      </>
    ),
    "straumann-all-on-4-derhal-yukleme": (
      <>
        <p>Straumann All-on-4 protokolu tam dişsizliyin müalicəsini köklü şəkildə dəyişdirdi. Bu yanaşmada yalnız dörd implantle bütün çənə tam sabit protezlə bərpa edilir — həm xərc, həm cərrahiyyə mürəkkəbliyi, həm də sağalma müddəti əhəmiyyətli dərəcədə azalır.</p>
        <h2>Dərhal Yükləmə nədir?</h2>
        <p>Ənənəvi protokolda implant yerləşdirildikdən sonra 3–6 ay gözlənilir. Dərhal yükləmə protokolunda isə implant yerləşdirildiyi gün müvəqqəti protez bağlanır. Xəstə əməliyyat günündən sabit dişlərlə evə gedir.</p>
        <h2>Straumann BLX Sistemi</h2>
        <p>Straumann BLX implant sistemi dərhal yükləmə üçün xüsusi olaraq optimallaşdırılmışdır. BLX-nin konvergen dizaynı yerləşdirmə anında yüksək ilkin sabitlik əldə etmək üçün nəzərdə tutulmuşdur. Bu ilkin sabitlik dərhal yükləmənin mümkün olması üçün minimum tələbdir.</p>
        <h2>Rəqəmsal Planlaşdırmanın Rolu</h2>
        <p>All-on-4-də rəqəmsal planlaşdırma sadəcə üstünlük yox, zərurətdir. Dörd implantın düzgün bucağı (arxa iki implant 30–45° əyilir) birbaşa sabit protezin keyfiyyətini müəyyən edir. 3Shape Implant Studio-da hər implantın mövqeyi virtual olaraq müəyyən edilir; cərrahi şablon bu planı dəqiq həyata keçirir.</p>
        <h2>Nəticə</h2>
        <p>Straumann All-on-4 + rəqəmsal planlaşdırma kombinasiyası tam çənə rehabilitasiyasında ən yüksək effektivlik nisbətini təmin edir. Xəstə eyni günlük sabit protezlə ayrılır, uzunmüddətli nəticə isə dəqiq rəqəmsal planlaşdırmanın əsasına söykənir.</p>
      </>
    ),
    "bredent-copasky-fast-fixed": (
      <>
        <p>Bredent copaSKY Fast &amp; Fixed konsepti Almaniyanın Bredent Medical şirkəti tərəfindən hazırlanmış inteqrasiya edilmiş bir sistemdir — implant, abutment, protez materialı və protokol vahid sistemin hissələridir. Əsas məqsəd eyni gündə sabit protez.</p>
        <h2>copaSKY İmplant Sistemi</h2>
        <p>copaSKY implantı SAE (sandblasted acid-etched) səthi ilə yüksək osseointegrasiya potensialına malikdir. Konvergen dizaynı yüksək ilkin sabitliyi əldə etməyə imkan verir — bu dərhal yükləmə üçün əsas şərtdir.</p>
        <h2>Fast &amp; Fixed Protokolu</h2>
        <p>4–6 copaSKY implantı yerləşdirilir, angulated multi-unit abutmentlər ilə paralel çıxış oxları yaradılır, sonra hazır köprü protezi bağlanır. Xəstə əməliyyatdan eyni gün sabit dişlərlə çıxır.</p>
        <h2>Rəqəmsal İş Axını ilə İnteqrasiya</h2>
        <p>3Shape Implant Studio proqramı copaSKY implant kitabxacanı dəstəkləyir — virtual planlaşdırma birbaşa bu sistemin implantları üzərindən aparılır. Cərrahi şablon dəqiq mövqeyi, bucağı və dərinliyi planlaşdırılmış dəyərlərdə verir.</p>
        <h2>Nəticə</h2>
        <p>Bredent copaSKY Fast &amp; Fixed konsepti rəqəmsal iş axını ilə birləşdirildikdə hər implantın mövqeyi əvvəlcədən dəqiq hesablanır. Nəticə: eyni gün sabit protez, uzunmüddətli stabillik.</p>
      </>
    ),
  },
  en: {
    "3shape-implant-studio-planlasdirma": (
      <>
        <p>3Shape Implant Studio sits at the heart of digital implantology. The software accepts CBCT data directly in DICOM format, allowing the clinician to plan each implant&rsquo;s position, angle and depth with full precision in a three-dimensional environment.</p>
        <h2>Prosthetically Driven Planning</h2>
        <p>The most important feature of 3Shape Implant Studio is its prosthetically driven approach. In traditional implantology the implant position is chosen based on bone availability and the prosthesis is adapted afterward. In 3Shape the process is reversed: the shape of the finished prosthesis — the ideal tooth position — is defined first. Only then is the optimal implant position calculated to achieve that result.</p>
        <h2>CBCT + Scan Integration</h2>
        <p>The software merges CBCT data with a digital dental model captured by an intraoral scanner (iTero, Trios). This superimposition process lets the clinician see bone structure, tooth shape and future prosthesis on a single screen simultaneously — dramatically improving planning accuracy.</p>
        <h2>Virtual Surgical Simulation</h2>
        <p>A virtual placement simulation is run for every implant. The clinician sees the distance to adjacent teeth, proximity to the nerve canal, and bone margin in real time. The patient views this simulation during the consultation and becomes an active participant in the decision.</p>
        <h2>Surgical Guide Export</h2>
        <p>Once planning is complete, the implant position is exported as an STL file. This file is 3D-printed into a precise surgical guide from biocompatible polymer. The metal sleeves inside the guide keep the drill at the planned angle and depth throughout surgery.</p>
        <h2>Conclusion</h2>
        <p>3Shape Implant Studio is more than software — it is the philosophy of a digital implantology workflow. In every planning session the surgeon, patient and lab technician make fully synchronized decisions. The result: more precise, less traumatic, longer-lasting implant treatment.</p>
      </>
    ),
    "straumann-all-on-4-derhal-yukleme": (
      <>
        <p>The Straumann All-on-4 protocol fundamentally changed the treatment of full edentulism. With just four implants, an entire jaw can be restored with a fixed prosthesis — significantly reducing cost, surgical complexity and recovery time.</p>
        <h2>What Is Immediate Loading?</h2>
        <p>In the traditional protocol, 3–6 months are spent waiting for osseointegration before the prosthesis is made. In the immediate loading protocol, a temporary prosthesis is attached on the day of surgery. The patient leaves the clinic with fixed teeth the same day.</p>
        <h2>The Straumann BLX System</h2>
        <p>The Straumann BLX implant was specifically optimized for immediate loading. Its convergent design is engineered to achieve high primary stability (insertion torque) at the moment of placement — a prerequisite for same-day loading.</p>
        <h2>The Role of Digital Planning</h2>
        <p>In All-on-4, digital planning is not an advantage but a necessity. The correct angle of four implants (the two posterior implants are typically tilted 30–45°) directly determines the quality and load distribution of the fixed prosthesis. Without CBCT analysis this calculation cannot be made accurately. In 3Shape Implant Studio each position is virtually determined; the surgical guide executes the plan precisely.</p>
        <h2>Conclusion</h2>
        <p>The combination of Straumann All-on-4 and digital planning delivers the highest effectiveness ratio in full-arch rehabilitation. The patient leaves with a same-day fixed prosthesis, and the long-term outcome is built on the foundation of precise digital planning.</p>
      </>
    ),
    "bredent-copasky-fast-fixed": (
      <>
        <p>The Bredent copaSKY Fast &amp; Fixed concept is an integrated system developed by Germany&rsquo;s Bredent Medical — implant, abutment, prosthetic material and protocol are all parts of a single unified system. The core objective: a fixed prosthesis on the same day.</p>
        <h2>The copaSKY Implant System</h2>
        <p>The copaSKY implant has a high osseointegration potential through its SAE (sandblasted acid-etched) surface. Its convergent design enables high primary stability at placement — the fundamental requirement for immediate loading. Conventional and angulated abutment options allow flexible planning in full-arch protocols.</p>
        <h2>The Fast &amp; Fixed Protocol</h2>
        <p>4–6 copaSKY implants are placed, parallel exit axes are created with angulated multi-unit abutments, and the bridge prosthesis is secured. The patient leaves the same day with fixed teeth.</p>
        <h2>Integration with the Digital Workflow</h2>
        <p>The greatest strength of the copaSKY system is its full integration with the digital workflow. 3Shape Implant Studio supports the copaSKY implant library — virtual planning is carried out directly on this system&rsquo;s implants. The surgical guide delivers the exact position, angle and depth at planned values.</p>
        <h2>Conclusion</h2>
        <p>When the Bredent copaSKY Fast &amp; Fixed concept is combined with a digital workflow, every implant position is precisely calculated in advance. The surgical day executes the plan. The result: a same-day fixed prosthesis with long-term stability.</p>
      </>
    ),
  },
  ru: {
    "3shape-implant-studio-planlasdirma": (
      <>
        <p>3Shape Implant Studio находится в центре цифровой имплантологии. Программа принимает данные КЛКТ напрямую в формате DICOM и позволяет врачу планировать положение, угол и глубину каждого импланта с полной точностью в трёхмерной среде.</p>
        <h2>Протетически Ориентированное Планирование</h2>
        <p>Важнейшая особенность 3Shape Implant Studio — протетически ориентированный подход. В традиционной имплантологии положение импланта выбирается исходя из состояния кости, а протез адаптируется позже. В 3Shape процедура прямо противоположная: сначала определяется форма готового протеза — идеальное положение зуба. Затем рассчитывается оптимальное положение импланта для достижения этого результата.</p>
        <h2>Интеграция КЛКТ и Скана</h2>
        <p>Программа объединяет данные КЛКТ с цифровой моделью зубов, полученной интраоральным сканером (iTero, Trios). Этот процесс суперимпозиции позволяет врачу видеть на одном экране структуру кости, форму зуба и будущий протез одновременно — точность планирования резко возрастает.</p>
        <h2>Виртуальная Хирургическая Симуляция</h2>
        <p>Для каждого импланта проводится виртуальная симуляция установки. Врач видит в реальном времени расстояние до соседних зубов, близость к нервному каналу и костный край. Пациент видит эту симуляцию во время консультации и становится активным участником принятия решений.</p>
        <h2>Экспорт Хирургического Шаблона</h2>
        <p>После завершения планирования положение импланта экспортируется в STL-файл. Из него 3D-принтером из биосовместимого полимера изготавливается точный хирургический шаблон. Металлические втулки внутри шаблона удерживают сверло на запланированном угле и глубине в течение всей операции.</p>
        <h2>Вывод</h2>
        <p>3Shape Implant Studio — это не просто программа, это философия рабочего процесса цифровой имплантологии. На каждом сеансе планирования врач, пациент и зубной техник принимают полностью синхронизированные решения. Результат: более точное, менее травматичное и более долгосрочное лечение имплантами.</p>
      </>
    ),
    "straumann-all-on-4-derhal-yukleme": (
      <>
        <p>Протокол Straumann All-on-4 коренным образом изменил лечение полной адентии. Всего четыре импланта позволяют восстановить всю челюсть несъёмным протезом — значительно снижая стоимость, сложность операции и время восстановления.</p>
        <h2>Что такое Немедленная Нагрузка?</h2>
        <p>В традиционном протоколе после установки импланта ждут 3–6 месяцев до завершения остеоинтеграции. При немедленной нагрузке временный протез фиксируется в день операции. Пациент уходит из клиники с несъёмными зубами в тот же день.</p>
        <h2>Система Straumann BLX</h2>
        <p>Имплант Straumann BLX специально оптимизирован для немедленной нагрузки. Его конвергентный дизайн обеспечивает высокую первичную стабильность (момент завинчивания) в момент установки — необходимое условие для нагрузки в тот же день.</p>
        <h2>Роль Цифрового Планирования</h2>
        <p>В All-on-4 цифровое планирование — не преимущество, а необходимость. Правильный угол четырёх имплантов (задние два наклоняются на 30–45°) напрямую определяет качество и распределение нагрузки несъёмного протеза. Без КТ-анализа этот расчёт невозможно выполнить точно. В 3Shape Implant Studio положение каждого импланта определяется виртуально; хирургический шаблон реализует план с точностью.</p>
        <h2>Вывод</h2>
        <p>Комбинация Straumann All-on-4 и цифрового планирования обеспечивает наивысший показатель эффективности при реабилитации всей дуги. Пациент уходит с несъёмным протезом в тот же день, а долгосрочный результат строится на основе точного цифрового планирования.</p>
      </>
    ),
    "bredent-copasky-fast-fixed": (
      <>
        <p>Концепция Bredent copaSKY Fast &amp; Fixed — это интегрированная система, разработанная германской компанией Bredent Medical: имплант, абатмент, протетический материал и протокол являются частями единой системы. Основная цель — несъёмный протез в тот же день.</p>
        <h2>Имплант copaSKY</h2>
        <p>Имплант copaSKY обладает высоким потенциалом остеоинтеграции благодаря поверхности SAE (пескоструйная обработка + кислотное травление). Конвергентный дизайн обеспечивает высокую первичную стабильность при установке — фундаментальное требование для немедленной нагрузки.</p>
        <h2>Протокол Fast &amp; Fixed</h2>
        <p>Устанавливаются 4–6 имплантов copaSKY, с помощью угловых multi-unit абатментов создаются параллельные оси выхода, затем фиксируется мостовидный протез. Пациент уходит с несъёмными зубами в день операции.</p>
        <h2>Интеграция с Цифровым Рабочим Процессом</h2>
        <p>3Shape Implant Studio поддерживает библиотеку имплантов copaSKY — виртуальное планирование ведётся напрямую на имплантах этой системы. Хирургический шаблон обеспечивает точное положение, угол и глубину в соответствии с запланированными значениями.</p>
        <h2>Вывод</h2>
        <p>Концепция Bredent copaSKY Fast &amp; Fixed в сочетании с цифровым рабочим процессом позволяет заранее точно рассчитать положение каждого импланта. День операции реализует план. Результат: несъёмный протез в тот же день с долгосрочной стабильностью.</p>
      </>
    ),
  },
};

export default async function BlogArticlePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const post = postsBySlug[slug];
  if (!post) notFound();
  const l = lang as Lang;

  const articleBody = articleContent[l][slug];
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  const backLabels = { az: "← Bloga qayıt", en: "← Back to blog", ru: "← Назад в блог" };
  const relatedLabels = { az: "Digər Məqalələr", en: "Related Articles", ru: "Другие Статьи" };
  const readLabels = { az: "Oxu →", en: "Read →", ru: "Читать →" };

  return (
    <>
      <section className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/6 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-10">
          <Link href={`/${l}/blog`} className="text-muted text-sm hover:text-sky transition-colors block mb-8">
            {backLabels[l]}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sky text-[10px] tracking-widest uppercase border border-blue/20 px-2 py-0.5">
              {post.category[l]}
            </span>
            <span className="text-muted text-xs">{post.date[l]}</span>
            <span className="text-muted text-xs">·</span>
            <span className="text-muted text-xs">{post.readTime[l]}</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {post.title[l]}
          </h1>
          <p className="text-muted text-lg leading-relaxed">{post.excerpt[l]}</p>
        </div>
      </section>

      <article className="py-12 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="space-y-5 leading-relaxed [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-white [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-muted [&_p]:text-base [&_p]:leading-relaxed">
            {articleBody}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-dark">
          <div className="max-w-3xl mx-auto px-5 lg:px-10">
            <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-8">{relatedLabels[l]}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${l}/blog/${rp.slug}`}
                  className="glass p-5 hover:border-sky/30 transition-colors group"
                >
                  <span className="text-sky text-[10px] tracking-widest uppercase border border-blue/20 px-2 py-0.5">
                    {rp.category[l]}
                  </span>
                  <h3 className="font-display font-semibold text-white text-sm mt-3 mb-2 leading-snug group-hover:text-sky transition-colors">
                    {rp.title[l]}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-4">{rp.excerpt[l]}</p>
                  <span className="text-sky text-xs font-semibold">{readLabels[l]}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection lang={l} />
    </>
  );
}
