import type { ImageMetadata } from "astro";

import { t } from "../i18n";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import Angular from "../icons/Angular.astro";
import Clerk from "../icons/Clerk.astro";
import Css from "../icons/Css.astro";
import DrizzleOrm from "../icons/DrizzleOrm.astro";
import Html from "../icons/Html.astro";
import JavaScript from "../icons/JavaScript.astro";
import NeonDb from "../icons/NeonDb.astro";
import Next from "../icons/Next.astro";
import Shadcn from "../icons/Shadcn.astro";
import Supabase from "../icons/Supabase.astro";
import Tailwind from "../icons/Tailwind.astro";
import Vite from "../icons/Vite.astro";
import WordPress from "../icons/Wordpress.astro";

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

export type Tag = {
  name: string;
  url: string;
  icon: AstroComponentFactory;
};

export type ProjectSlug = keyof typeof t.projects.items;

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

export const TAGS = {
  ANGULAR: {
    name: "Angular",
    url: "https://angular.dev",
    icon: Angular,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: Tailwind,
  },
  HTML: {
    name: "HTML",
    url: "https://developer.mozilla.org/docs/Web/HTML",
    icon: Html,
  },
  CSS: {
    name: "CSS",
    url: "https://developer.mozilla.org/docs/Web/CSS",
    icon: Css,
  },
  SUPABASE: {
    name: "Supabase",
    url: "https://supabase.com",
    icon: Supabase,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
    icon: JavaScript,
  },
  VITE: {
    name: "Vite",
    url: "https://vite.dev",
    icon: Vite,
  },
  NEXT: {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: Next,
  },
  NEONDB: {
    name: "Neon",
    url: "https://neon.com",
    icon: NeonDb,
  },
  DRIZZLEORM: {
    name: "Drizzle ORM",
    url: "https://orm.drizzle.team",
    icon: DrizzleOrm,
  },
  CLERK: {
    name: "Clerk",
    url: "https://clerk.com",
    icon: Clerk,
  },
  SHADCN: {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    icon: Shadcn,
  },
  WORDPRESS: {
    name: "WordPress",
    url: "https://wordpress.org",
    icon: WordPress,
  },
} satisfies Record<string, Tag>;

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
