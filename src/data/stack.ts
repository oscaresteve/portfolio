import { TAGS, type Tag } from "./tags";
import type { UI } from "../i18n";

export type StackAreaId = keyof UI["about"]["stack"];

export type StackArea = {
  id: StackAreaId;
  /** El nombre del area sale de `t.about.stack[id]`. */
  tags: Tag[];
};

export const STACK: StackArea[] = [
  {
    id: "frontend",
    tags: [TAGS.JAVASCRIPT, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.NEXT, TAGS.ANGULAR, TAGS.ASTRO, TAGS.TAILWIND],
  },
  {
    id: "backend",
    tags: [TAGS.SYMFONY, TAGS.EXPRESS, TAGS.JAVA, TAGS.SPRING_BOOT, TAGS.SUPABASE],
  },
  {
    id: "tools",
    tags: [TAGS.GIT, TAGS.GITHUB, TAGS.DOCKER, TAGS.WORDPRESS, TAGS.AI_AGENTS],
  },
];
