import type { ImageMetadata } from "astro";
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

import adventure from "../assets/2048adventure.png";
import graphly from "../assets/graphly.png";
import gruasytransportesryp from "../assets/gruasytransportesryp.png";
import solar from "../assets/solar.png";

export type Tag = {
  name: string;
  icon: AstroComponentFactory;
};

export type Project = {
  title: string;
  description: string[];
  link: string;
  github?: string;
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
    title: "Graphly",
    description: [
      "Herramienta personal de visualización de datos que permite crear métricas, registrar entradas y consultar la información mediante gráficos interactivos.",
      "Desarrollada con Next.js y Server Actions para unificar el frontend y el backend en un mismo proyecto. He utilizado Clerk para gestionar la autenticación de forma sencilla y Shadcn/UI para agilizar el desarrollo de la interfaz.",
    ],
    link: "https://graphly.oscaresteve.dev",
    github: "https://github.com/oscaresteve/graphly",
    image: graphly,
    tags: [TAGS.NEXT, TAGS.NEONDB, TAGS.DRIZZLEORM, TAGS.CLERK, TAGS.TAILWIND, TAGS.SHADCN],
  },
  {
    title: "Grúas y transportes RYP",
    description: [
      "Una de las varias páginas web para clientes que desarrollé durante mis prácticas en Grup Apunts.",
      "Se trata de una web corporativa construida con WordPress para ofrecer un desarrollo rápido y un sitio fácil de mantener por parte del cliente.",
    ],
    link: "https://gruasytransportesryp.es",
    image: gruasytransportesryp,
    tags: [TAGS.WORDPRESS],
  },
  {
    title: "Solar",
    description: [
      "Aplicación web para la gestión de plantas solares, desarrollada como proyecto final del ciclo de Desarrollo de Aplicaciones Web en Entorno Cliente.",
      "Construida con Angular debido a la necesidad de ejecutarse íntegramente en el cliente, Tailwind CSS para crear una interfaz modular y mantenible, y Supabase como Backend as a Service (BaaS), evitando así la necesidad de desarrollar y mantener un backend propio.",
    ],
    link: "https://solar.oscaresteve.dev",
    github: "https://github.com/oscaresteve/solar",
    image: solar,
    tags: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CSS, TAGS.HTML],
  },
  {
    title: "2048 Adventure",
    description: [
      "Juego de puzles inspirado en 2048, desarrollado durante el ciclo de Desarrollo de Aplicaciones Web en Entorno Cliente.",
      "Desarrollado con JavaScript Vanilla para profundizar en los fundamentos del lenguaje, Tailwind CSS para el diseño de la interfaz y Supabase para gestionar usuarios y almacenar las puntuaciones del ranking.",
    ],
    link: "https://2048-adventure.oscaresteve.dev",
    github: "https://github.com/oscaresteve/2048-adventure",
    image: adventure,
    tags: [TAGS.JAVASCRIPT, TAGS.VITE, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CSS, TAGS.HTML],
  },
];
