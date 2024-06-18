import type { SchemaTypeDefinition } from "sanity";

import { author } from "./documents/author";
import { category } from "./documents/category";
import { experience } from "./documents/experience";
import { portfolioHero } from "./documents/hero";
import { post } from "./documents/post";
import { project } from "./documents/project";
import { skill } from "./documents/skill";
import { customCode } from "./objects/custom-code";
import { customImage } from "./objects/custom-image";
import { richText } from "./objects/richtext";
import { skill as skillObject } from "./objects/skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    portfolioHero,
    experience,
    project,
    skill,
    customImage,
    richText,
    customCode,
    skillObject,
  ],
};

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);
export const singletonTypes = new Set(["portfolio_hero", "skill"]);
export const excludedListTypes = new Set([
  "post",
  "portfolio_hero",
  "skill",
  "experience",
  "project",
]);
