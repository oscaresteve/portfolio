import type { GetStaticPaths, ImageMetadata } from "astro";

import type { UI } from "../i18n";
import { TAGS, type Tag } from "./tags";

import graphlyDashboard from "../assets/projects/graphly/graphly-dashboard.png";
import graphlyLogin from "../assets/projects/graphly/graphly-login.png";
import graphlyCreateMetric from "../assets/projects/graphly/graphly-create-metric.png";
import graphlyRegisterToday from "../assets/projects/graphly/graphly-register-today.png";
import graphlyRegisterPast from "../assets/projects/graphly/graphly-register-past.png";
import graphlyEditPast from "../assets/projects/graphly/graphly-edit-past.png";
import graphlyMetric from "../assets/projects/graphly/graphly-metric.png";
import graphlyMetricCustomRange from "../assets/projects/graphly/graphly-metric-custom-range.png";
import graphlySettings from "../assets/projects/graphly/graphly-settings.png";

import rypInicio from "../assets/projects/gruas-y-transportes-ryp/ryp-inicio.png";
import rypSobreNosotros from "../assets/projects/gruas-y-transportes-ryp/ryp-sobre-nosotros.png";
import rypComoTrabajamos from "../assets/projects/gruas-y-transportes-ryp/ryp-como-trabajamos.png";
import rypContacto from "../assets/projects/gruas-y-transportes-ryp/ryp-contacto.png";

import solarHome from "../assets/projects/solar/solar-home.png";
import solarPlantas from "../assets/projects/solar/solar-plantas.png";
import solarPlanta from "../assets/projects/solar/solar-planta.png";
import solarNuevoRegistro from "../assets/projects/solar/solar-nuevo-registro.png";
import solarRegistros from "../assets/projects/solar/solar-registros.png";
import solarEditarPlanta from "../assets/projects/solar/solar-editar-planta.png";
import solarMapa from "../assets/projects/solar/solar-mapa.png";
import solarFavoritos from "../assets/projects/solar/solar-favoritos.png";
import solarCuenta from "../assets/projects/solar/solar-cuenta.png";

export type ProjectSlug = keyof UI["projects"]["items"];

export type Project = {
  slug: ProjectSlug;
  liveUrl?: string;
  repoUrl?: string;
  image: ImageMetadata;
  tags: Tag[];
  /** Capturas del proyecto. La descripcion de cada una sale de
   *  `t.projects.items[slug].shots`, emparejada por posicion. */
  shots?: ImageMetadata[];
};

export const PROJECTS: Project[] = [
  {
    slug: "graphly",
    liveUrl: "https://graphly.oscaresteve.dev",
    repoUrl: "https://github.com/oscaresteve/graphly",
    image: graphlyDashboard,
    tags: [TAGS.NEXT, TAGS.NEONDB, TAGS.DRIZZLEORM, TAGS.CLERK, TAGS.TAILWIND, TAGS.SHADCN],
    shots: [
      graphlyLogin,
      graphlyDashboard,
      graphlyRegisterToday,
      graphlyMetric,
      graphlyMetricCustomRange,
      graphlyRegisterPast,
      graphlyEditPast,
      graphlyCreateMetric,
      graphlySettings,
    ],
  },
  {
    slug: "gruas-y-transportes-ryp",
    liveUrl: "https://gruasytransportesryp.es",
    image: rypInicio,
    tags: [TAGS.WORDPRESS],
    shots: [rypSobreNosotros, rypComoTrabajamos, rypContacto],
  },
  {
    slug: "solar",
    liveUrl: "https://solar.oscaresteve.dev",
    repoUrl: "https://github.com/oscaresteve/solar",
    image: solarHome,
    tags: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CSS, TAGS.HTML],
    shots: [
      solarPlantas,
      solarPlanta,
      solarNuevoRegistro,
      solarRegistros,
      solarEditarPlanta,
      solarMapa,
      solarFavoritos,
      solarCuenta,
    ],
  },
];

/** Las paginas de proyecto de cada idioma recorren los mismos proyectos. */
export const projectPaths = (() =>
  PROJECTS.map((project) => ({ params: { slug: project.slug }, props: { project } }))) satisfies GetStaticPaths;
