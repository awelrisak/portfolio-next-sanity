import type { SchemaTypeDefinition } from "sanity";

import { author } from "./documents/author";
import { tag } from "./documents/tag";
import { portfolio } from "./documents/portfolio";
import { post } from "./documents/post";
import { customCode } from "./objects/custom-code";
import { customImage } from "./objects/custom-image";
import { portfolioHeroObject } from "./objects/portfolio/hero";
import { richText } from "./objects/richtext";
import { alert } from "./objects/alert";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
export const singletonTypes = new Set(["portfolio"]);

// SCHEMA TYPES TO EXCLUDE FROM LEFT SIDEBAR
export const excludedListTypes = new Set(["post", "portfolio"]);

//TODO: below are some docs are no longer in use & need to be deleted:

// 1) portfolio_hero
// 2) experience
// 3) skill
// 4) projects
// 5) category
