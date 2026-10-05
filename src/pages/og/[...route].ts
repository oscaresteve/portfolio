import { OGImageRoute } from "astro-og-canvas";

import { PROJECTS } from "../../data/projects";
import { LOCALES, ogImageKey, useTranslations } from "../../i18n";

type OGPage = { title: string; description: string };

/** Una imagen por pagina y por idioma: `/og/index.png`, `/og/proyectos/<slug>.png`
 *  y sus equivalentes bajo `/og/en/`. */
const pages: Record<string, OGPage> = Object.fromEntries(
  LOCALES.flatMap((locale) => {
    const t = useTranslations(locale);

    return [
      [ogImageKey(locale), { title: t.hero.name, description: t.hero.subtitle }],
      ...PROJECTS.map(({ slug }) => [
        ogImageKey(locale, slug),
        { title: t.projects.items[slug].title, description: t.projects.items[slug].summary },
      ]),
    ];
  }),
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  // Las claves de `pages` ya son rutas: sin esto la libreria las trata como
  // ficheros de `src/pages` y recorta la extension y el `/index` final.
  getSlug: (route) => `${route}.png`,
  getImageOptions: (_path, page: OGPage) => ({
    title: page.title,
    description: page.description,
    // Los mismos colores y fuentes del sitio: Porcelain, Coffee Bean,
    // Taupe Grey y el filo en Rusted Brown.
    bgGradient: [[251, 251, 244]],
    border: { color: [153, 51, 0], width: 24, side: "inline-start" },
    padding: 96,
    font: {
      title: { size: 84, lineHeight: 1.1, weight: "Bold", color: [26, 17, 16], families: ["Space Grotesk"] },
      description: { size: 40, lineHeight: 1.4, color: [100, 84, 82], families: ["Satoshi"] },
    },
    fonts: ["./src/assets/fonts/og/SpaceGrotesk-Bold.ttf", "./src/assets/fonts/og/Satoshi-Medium.ttf"],
    format: "PNG",
  }),
});
