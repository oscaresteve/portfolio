import { OGImageRoute } from "astro-og-canvas";

import { PROJECTS } from "../../data/projects";
import { t } from "../../i18n";

type OGPage = { title: string; description: string };

/** Una imagen por pagina: `/og/index.png` y `/og/proyectos/<slug>.png`. */
const pages: Record<string, OGPage> = {
  index: { title: t.hero.name, description: t.hero.subtitle },
  ...Object.fromEntries(
    PROJECTS.map(({ slug }) => [
      `proyectos/${slug}`,
      { title: t.projects.items[slug].title, description: t.projects.items[slug].summary },
    ]),
  ),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
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
