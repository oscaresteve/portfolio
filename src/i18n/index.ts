import { getRelativeLocaleUrl } from "astro:i18n";

import es from "./es.json";
import en from "./en.json";

export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/** La forma de los textos la fija el castellano; `en.json` debe cumplirla. */
export type UI = typeof es;

const TRANSLATIONS: Record<Locale, UI> = { es, en };

/** Normaliza `Astro.currentLocale`, que se declara opcional, a un idioma soportado. */
export const getLocale = (value?: string | null): Locale =>
  LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;

/** Los textos del idioma actual: `const t = useTranslations(Astro.currentLocale)`. */
export const useTranslations = (value?: string | null): UI => TRANSLATIONS[getLocale(value)];

/** Segmento de la ruta de proyectos en cada idioma. Astro no traduce rutas, asi
 *  que esta tabla y las carpetas de `src/pages` deben decir lo mismo. */
const PROJECTS_SEGMENT: Record<Locale, string> = { es: "proyectos", en: "projects" };

/** Ids de las secciones de la portada, destino de los anclas del menu. */
export const SECTIONS: Record<Locale, { projects: string; experience: string; about: string }> = {
  es: { projects: "proyectos", experience: "experiencia", about: "sobre-mi" },
  en: { projects: "projects", experience: "experience", about: "about" },
};

// `getRelativeLocaleUrl` saca de la configuracion el prefijo de idioma y la
// barra final, asi que `prefixDefaultLocale` y `trailingSlash` se deciden solo
// en `astro.config.mjs`.
export const homeUrl = (locale: Locale, section?: string) =>
  `${getRelativeLocaleUrl(locale)}${section ? `#${section}` : ""}`;

export const projectUrl = (locale: Locale, slug: string) =>
  getRelativeLocaleUrl(locale, `${PROJECTS_SEGMENT[locale]}/${slug}`);

const stripSlashes = (path: string) => path.replace(/^\/|\/$/g, "");

/** Clave de la imagen Open Graph dentro de `src/pages/og/[...route].ts`: la
 *  ruta de la pagina sin barras, con `index` para cada portada. */
export const ogImageKey = (locale: Locale, slug?: string) =>
  stripSlashes(slug ? projectUrl(locale, slug) : `${homeUrl(locale)}index`);

export const ogImageUrl = (locale: Locale, slug?: string) => `/og/${ogImageKey(locale, slug)}.png`;
