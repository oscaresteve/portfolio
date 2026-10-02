import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import Angular from "../icons/Angular.astro";
import Clerk from "../icons/Clerk.astro";
import Css from "../icons/Css.astro";
import DrizzleOrm from "../icons/DrizzleOrm.astro";
import GitHubIcon from "../icons/GitHub.astro";
import Html from "../icons/Html.astro";
import JavaScript from "../icons/JavaScript.astro";
import NeonDb from "../icons/NeonDb.astro";
import Next from "../icons/Next.astro";
import Shadcn from "../icons/Shadcn.astro";
import Supabase from "../icons/Supabase.astro";
import Tailwind from "../icons/Tailwind.astro";
import Vite from "../icons/Vite.astro";
import WordPress from "../icons/Wordpress.astro";

export type Tag = {
  name: string;
  /** Documentacion oficial. Sin `url` la tecnologia se muestra sin enlace. */
  url?: string;
  icon?: AstroComponentFactory;
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
  TYPESCRIPT: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
  },
  VITE: {
    name: "Vite",
    url: "https://vite.dev",
    icon: Vite,
  },
  REACT: {
    name: "React",
    url: "https://react.dev",
  },
  NEXT: {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: Next,
  },
  ASTRO: {
    name: "Astro",
    url: "https://astro.build",
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
  SYMFONY: {
    name: "Symfony",
    url: "https://symfony.com",
  },
  EXPRESS: {
    name: "Express",
    url: "https://expressjs.com",
  },
  JAVA: {
    name: "Java",
    url: "https://dev.java",
  },
  SPRING_BOOT: {
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
  },
  WORDPRESS: {
    name: "WordPress",
    url: "https://wordpress.org",
    icon: WordPress,
  },
  GIT: {
    name: "Git",
    url: "https://git-scm.com",
  },
  GITHUB: {
    name: "GitHub",
    url: "https://github.com",
    icon: GitHubIcon,
  },
  DOCKER: {
    name: "Docker",
    url: "https://www.docker.com",
  },
  AI_AGENTS: {
    name: "Agentes de IA",
  },
} satisfies Record<string, Tag>;
