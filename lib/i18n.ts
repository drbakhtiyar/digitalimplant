export type Lang = "az" | "en" | "ru";
export const langs: Lang[] = ["az", "en", "ru"];
export const langNames: Record<Lang, string> = { az: "AZ", en: "EN", ru: "RU" };
export const defaultLang: Lang = "az";

export const nav: Record<Lang, Record<string, string>> = {
  az: {
    home: "Ana Səhifə",
    about: "Digital İmplantologiya",
    planning: "Rəqəmsal Planlaşdırma",
    guided: "Rehberli Cərrahiyyə",
    shape: "3Shape Studio",
    workflow: "Digital Workflow",
    brands: "İmplant Markaları",
    gallery: "Qalereya",
    faq: "S.S.S",
    blog: "Blog",
    contact: "Əlaqə",
    appointment: "Randevu",
  },
  en: {
    home: "Home",
    about: "Digital Implantology",
    planning: "Digital Planning",
    guided: "Guided Surgery",
    shape: "3Shape Studio",
    workflow: "Digital Workflow",
    brands: "Implant Brands",
    gallery: "Gallery",
    faq: "FAQ",
    blog: "Blog",
    contact: "Contact",
    appointment: "Appointment",
  },
  ru: {
    home: "Главная",
    about: "Цифровая Имплантология",
    planning: "Цифровое Планирование",
    guided: "Направляемая Хирургия",
    shape: "3Shape Studio",
    workflow: "Цифровой Процесс",
    brands: "Бренды",
    gallery: "Галерея",
    faq: "FAQ",
    blog: "Блог",
    contact: "Контакт",
    appointment: "Запись",
  },
};

export const routes: Record<string, string> = {
  about: "about",
  planning: "planning",
  guided: "guided-surgery",
  shape: "3shape",
  workflow: "workflow",
  brands: "brands",
  gallery: "gallery",
  faq: "faq",
  blog: "blog",
  contact: "contact",
  appointment: "appointment",
};

export function hrefLangs(path: string) {
  return {
    az: `https://digitalimplant.az/az${path}`,
    en: `https://digitalimplant.az/en${path}`,
    ru: `https://digitalimplant.az/ru${path}`,
  };
}
