const BASE = "https://digitalimplant.az";

export function getMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    name: "Digital Implant — Dr. Bakhtiyar Aliyev",
    description:
      "Bakıda rəqəmsal implantologiya mərkəzi. 3Shape Implant Studio ilə planlaşdırma, rehberli cərrahiyyə.",
    url: BASE,
    telephone: "+994105010107",
    email: "info@smilebydrbakhtiyar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babek prospekti, Babək plaza",
      addressLocality: "Bakı",
      addressCountry: "AZ",
      postalCode: "AZ1025",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4093,
      longitude: 49.8671,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "15:00",
      },
    ],
    medicalSpecialty: "Dentistry",
    availableService: [
      { "@type": "MedicalProcedure", name: "Rəqəmsal İmplant Planlaşdırması" },
      { "@type": "MedicalProcedure", name: "Rehberli Cərrahiyyə" },
      { "@type": "MedicalProcedure", name: "3Shape Implant Studio" },
      { "@type": "MedicalProcedure", name: "Statik Cərrahi Şablonlar" },
    ],
  };
}

export function getMedicalServiceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    procedureType: "Surgical",
    status: "EventScheduled",
    provider: {
      "@type": "Dentist",
      name: "Digital Implant — Dr. Bakhtiyar Aliyev",
      url: BASE,
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function getArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: "az",
    author: {
      "@type": "Physician",
      name: "Dr. Bakhtiyar Aliyev",
      medicalSpecialty: "Implantology",
    },
    publisher: {
      "@type": "Dentist",
      name: "Digital Implant",
      url: BASE,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
