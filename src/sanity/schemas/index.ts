import type { SchemaTypeDefinition } from "sanity";

import { author } from "./documents/author";
import { featured } from "./documents/featured";
import { portfolio } from "./documents/portfolio";
import { post } from "./documents/post";
import { tag } from "./documents/tag";
import { alert } from "./objects/alert";
import { customCode } from "./objects/custom-code";
import { customImage } from "./objects/custom-image";
import { portfolioHeroObject } from "./objects/portfolio/hero";
import { richText } from "./objects/richtext";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    featured,
    post,
    author,
    tag,
    portfolio,

    /* OBJECTS */
    richText,
    customImage,
    customCode,
    alert,
    //Porfolio objects
    portfolioHeroObject,
  ],
};

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);
export const singletonTypes = new Set(["portfolio", "featured"]);

// SCHEMA TYPES TO EXCLUDE FROM LEFT SIDEBAR
export const excludedListTypes = new Set(["featured", "post", "portfolio"]);

//TODO: below are some docs are no longer in use & need to be deleted:

// 1) portfolio_hero
// 2) experience
// 3) skill
// 4) projects
// 5) category
