import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { langs, hrefLangs } from "@/lib/i18n";
import { posts, postsBySlug } from "@/lib/blog/posts";
import SectionLabel from "@/components/ui/SectionLabel";
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
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { languages: hrefLangs(`/blog/${slug}`) },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.isoDate,
    },
  };
}

const articleContent: Record<string, React.ReactNode> = {
  "3shape-implant-studio-planlasdirma": (
    <>
      <p>
        3Shape Implant Studio rəqəmsal implantologiyanın mərkəzindədir. Proqram CBCT tomoqrafiya məlumatlarını — DICOM formatında — birbaşa qəbul edir və həkimə implant mövqeyini, bucağını, dərinliyini üç ölçülü mühitdə tam nəzarətlə planlaşdırmaq imkanı verir.
      </p>
      <h2>Prostetik Əsaslı Planlaşdırma</h2>
      <p>
        3Shape Implant Studio-nun ən əhəmiyyətli xüsusiyyəti prostetik əsaslı yanaşmasıdır. Ənənəvi yanaşmada implant mövqeyi sümük vəziyyətinə görə seçilir, protez sonradan uyğunlaşdırılmağa çalışılır. 3Shape-də prosedur tam tərsinədir: əvvəlcə bitmiş protezin forması — ideal dişin mövqeyi — müəyyən edilir. Sonra bu ideal nəticəyə çatmaq üçün implantın düzgün mövqeyi hesablanır.
      </p>
      <h2>CBCT + Skan İnteqrasiyası</h2>
      <p>
        Proqram CBCT məlumatlarını intraoral skaner (məsələn, iTero, Trios) tərəfindən alınan rəqəmsal diş modeli ilə birləşdirir. Bu superimposition adlanan proses sayəsində həkim eyni ekranda həm sümük strukturunu, həm dişin formasını, həm də gələcək protezi görür. Bu birləşmiş görüntü planlaşdırmanın dəqiqliyini kəskin artırır.
      </p>
      <h2>Virtual Cərrahiyyə Simulyasiyası</h2>
      <p>
        Hər implant üçün virtual yerləşdirmə simulyasiyası aparılır. Həkim implantın qonşu dişlərə məsafəsini, sinir kanalına yaxınlığını, sümük kənarına marjinini real vaxt rejimində görür. Hər parametr dəqiqdir — varsayım yoxdur. Xəstə bu simulyasiyanı müzakirə zamanı birgə görür, suallarını verir, qərar prosesinin iştirakçısına çevrilir.
      </p>
      <h2>Cərrahi Şablon İxracı</h2>
      <p>
        Planlaşdırma tamamlandıqdan sonra implant mövqeyi STL faylına ixrac edilir. Bu fayl 3D printer vasitəsilə biouyğun polimerdən dəqiq cərrahi şablona çevrilir. Şablondakı metal bələdçi tüplər cərrahiyyə zamanı implant mühərrikinin düzgün bucaq və dərinlikdə qalmasını təmin edir.
      </p>
      <h2>Nəticə</h2>
      <p>
        3Shape Implant Studio yalnız bir proqram deyil — rəqəmsal implantologiyanın iş axınının fəlsəfəsidir. Hər planlaşdırma sessiyasında həkim, xəstə və protez texniki bir-biri ilə tam sinxronlaşdırılmış qərarlar qəbul edir. Nəticə: cərrahiyyəyə qədər artıq bilinen, daha dəqiq, daha az travmalı, daha uzunmüddətli implant müalicəsi.
      </p>
    </>
  ),
  "straumann-all-on-4-derhal-yukleme": (
    <>
      <p>
        Straumann All-on-4 protokolu tam dişsizliyin müalicəsini köklü şəkildə dəyişdirdi. Bu yanaşmada yalnız dörd implantle bütün çənə tam sabit protezlə bərpa edilir — həm xərc, həm cərrahiyyə mürəkkəbliyi, həm də sağalma müddəti əhəmiyyətli dərəcədə azalır.
      </p>
      <h2>Dərhal Yükləmə nədir?</h2>
      <p>
        Ənənəvi implant protokolunda implant yerləşdirildikdən sonra 3–6 ay gözlənilir, osseointegrasiya tamamlandıqdan sonra protez hazırlanır. Dərhal yükləmə protokolunda isə implant yerləşdirildiyi gün müvəqqəti protez bağlanır. Xəstə əməliyyat günündən sabit dişlərlə evə gedir.
      </p>
      <h2>Straumann BLX Sistemi</h2>
      <p>
        Straumann BLX implant sistemi dərhal yükləmə üçün xüsusi olaraq optimallaşdırılmışdır. BLX-nin konvergen dizaynı yerləşdirmə anında yüksək ilkin sabitlik (insert torque) əldə etmək üçün nəzərdə tutulmuşdur. Bu ilkin sabitlik dərhal yükləmənin mümkün olması üçün minimum tələbdir.
      </p>
      <h2>Rəqəmsal Planlaşdırmanın Rolu</h2>
      <p>
        All-on-4 protokolunda rəqəmsal planlaşdırma sadəcə üstünlük yox, zərurətdir. Dörd implantın düzgün bucağı (adətən arxa iki implant 30–45° əyilir) birbaşa sabit protezin keyfiyyətini, davamlılığını və yük bölüşdürməsini müəyyən edir. CBCT analiz olmadan bu hesablama dəqiq aparıla bilməz. 3Shape Implant Studio-da hər implantın mövqeyi, bucağı, dərinliyi virtual olaraq müəyyən edilir; cərrahi şablon isə bu planı cərrahiyyədə dəqiq həyata keçirir.
      </p>
      <h2>Kimə Uyğundur?</h2>
      <p>
        Bütün dişlərini itirmiş, çıxarılması planlanmış çoxlu dişi olan, az sümük həcmi səbəbindən konvensional implantasiyaya uyğun olmayan xəstələr üçün uyğundur. Sümük köçürülməsinə ehtiyac olmadan — çünki arxa implantların əyilmiş mövqeyi sümük çatışmazlığını keçir — əməliyyat daha az travmalı keçir.
      </p>
      <h2>Nəticə</h2>
      <p>
        Straumann All-on-4 + rəqəmsal planlaşdırma kombinasiyası tam çənə rehabilitasiyasında ən yüksək effektivlik nisbətini təmin edir. Xəstə eyni günlük sabit protezlə ayrılır, uzunmüddətli nəticə isə dəqiq rəqəmsal planlaşdırmanın əsasına söykənir.
      </p>
    </>
  ),
  "bredent-copasky-fast-fixed": (
    <>
      <p>
        Bredent copaSKY Fast & Fixed konsepti Almaniyanın Bredent Medical şirkəti tərəfindən hazırlanmış inteqrasiya edilmiş bir sistemdir — implant, abutment, protez materialı və protokol vahid sistemin hissələridir. Əsas məqsəd eyni gündə sabit protez — həm müvəqqəti, həm daimi.
      </p>
      <h2>copaSKY İmplant Sistemi</h2>
      <p>
        copaSKY implantı SAE (sandblasted acid-etched) səthi ilə yüksək osseointegrasiya potensialına malikdir. Konvergen dizaynı yüksək ilkin sabitliyi əldə etməyə imkan verir — bu dərhal yükləmə üçün əsas şərtdir. Konvensional və angulated (əyilmiş) abutment seçimləri Full Arch protokollarında çevik planlaşdırmaya imkan verir.
      </p>
      <h2>Fast & Fixed Protokolu</h2>
      <p>
        Fast & Fixed — full arch (tam çənə) rehabilitasiyasının eyni gün tamamlanmasını nəzərdə tutan protokoldur. 4–6 copaSKY implantı yerləşdirilir, angulated multi-unit abutmentlər ilə paralel çıxış oxları yaradılır, sonra hazır köprü protezi bağlanır. Xəstə əməliyyatdan eyni gün sabit dişlərlə çıxır.
      </p>
      <h2>Rəqəmsal İş Axını ilə İnteqrasiya</h2>
      <p>
        Bredent copaSKY sisteminin ən güclü tərəfi rəqəmsal iş axını ilə tam inteqrasiyasıdır. 3Shape Implant Studio proqramı copaSKY implant kitabxacanı dəstəkləyir — virtual planlaşdırma birbaşa bu sistemin implantları üzərindən aparılır. Cərrahi şablon dəqiq mövqeyi, bucağı və dərinliyi planlaşdırılmış dəyərlərdə verir.
      </p>
      <h2>Göstərişlər</h2>
      <p>
        Full edentulous (tam dişsiz) xəstələr, çoxlu diş itkisi ilə üzləşmiş xəstələr, az sümük hacmi olan xəstələr bu protokolun əsas adresatlarıdır. Rəqəmsal planlaşdırma sayəsində sümük köçürülməsinə ehtiyac qalmadan uğurlu nəticə əldə etmək mümkündür.
      </p>
      <h2>Nəticə</h2>
      <p>
        Bredent copaSKY Fast & Fixed konsepti — tam çənə rehabilitasiyasının ən effektiv yollarından biridir. Rəqəmsal iş axını ilə birləşdirildikdə hər implantın mövqeyi əvvəlcədən dəqiq hesablanır, cərrahi gün isə artıq planı icra edir. Nəticə: eyni gün sabit protez, uzunmüddətli stabillik.
      </p>
    </>
  ),
};

export default async function BlogArticlePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!langs.includes(lang as Lang)) notFound();
  const post = postsBySlug[slug];
  if (!post) notFound();
  const l = lang as Lang;

  const articleBody = articleContent[slug];

  const backLabels = { az: "← Bloga qayıt", en: "← Back to blog", ru: "← Назад в блог" };

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
              {post.category}
            </span>
            <span className="text-muted text-xs">{post.date}</span>
            <span className="text-muted text-xs">·</span>
            <span className="text-muted text-xs">{post.readTime}</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <article className="py-12 bg-dark-2">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 prose-custom">
          <div className="space-y-5 text-off-white leading-relaxed [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-white [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-muted [&_p]:text-base [&_p]:leading-relaxed">
            {articleBody}
          </div>
        </div>
      </article>

      <CTASection lang={l} />
    </>
  );
}
