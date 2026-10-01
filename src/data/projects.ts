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

import adventure from "../assets/projects/2048-adventure/cover.png";
import graphly from "../assets/projects/graphly/cover.png";
import gruasytransportesryp from "../assets/projects/gruas-y-transportes-ryp/cover.png";
import solar from "../assets/projects/solar/cover.png";

export type Tag = {
  name: string;
  icon: AstroComponentFactory;
};

export type ProjectSlug = keyof typeof t.projects.items;

export type Project = {
  slug: ProjectSlug;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  image: ImageMetadata;
  tags: Tag[];
};

export const TAGS = {
  ANGULAR: {
    name: "Angular",
    icon: Angular,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  HTML: {
    name: "HTML",
    icon: Html,
  },
  CSS: {
    name: "CSS",
    icon: Css,
  },
  SUPABASE: {
    name: "Supabase",
    icon: Supabase,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScript,
  },
  VITE: {
    name: "Vite",
    icon: Vite,
  },
  NEXT: {
    name: "Next",
    icon: Next,
  },
  NEONDB: {
    name: "Neon Db",
    icon: NeonDb,
  },
  DRIZZLEORM: {
    name: "Drizzle ORM",
    icon: DrizzleOrm,
  },
  CLERK: {
    name: "Clerk",
    icon: Clerk,
  },
  SHADCN: {
    name: "Shadcn",
    icon: Shadcn,
  },
  WORDPRESS: {
    name: "WordPress",
    icon: WordPress,
  },
} satisfies Record<string, Tag>;

export const PROJECTS: Project[] = [
  {
    slug: "graphly",
    year: "TODO: año",
    liveUrl: "https://graphly.oscaresteve.dev",
    repoUrl: "https://github.com/oscaresteve/graphly",
    image: graphly,
    tags: [TAGS.NEXT, TAGS.NEONDB, TAGS.DRIZZLEORM, TAGS.CLERK, TAGS.TAILWIND, TAGS.SHADCN],
  },
  {
    slug: "gruas-y-transportes-ryp",
    year: "2026",
    liveUrl: "https://gruasytransportesryp.es",
    image: gruasytransportesryp,
    tags: [TAGS.WORDPRESS],
  },
  {
    slug: "solar",
    year: "TODO: año",
    liveUrl: "https://solar.oscaresteve.dev",
    repoUrl: "https://github.com/oscaresteve/solar",
    image: solar,
    tags: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CSS, TAGS.HTML],
  },
  {
    slug: "2048-adventure",
    year: "TODO: año",
    liveUrl: "https://2048-adventure.oscaresteve.dev",
    repoUrl: "https://github.com/oscaresteve/2048-adventure",
    image: adventure,
    tags: [TAGS.JAVASCRIPT, TAGS.VITE, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CSS, TAGS.HTML],
  },
];
