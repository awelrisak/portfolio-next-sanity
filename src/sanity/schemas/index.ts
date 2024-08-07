import { Icons } from "@/components/icons";
import type { SchemaTypeDefinition } from "sanity";

import { author } from "./documents/author";
import { featured } from "./documents/featured";
import { portfolio } from "./documents/portfolio";
import { post } from "./documents/post";
import { tag } from "./documents/tag";
import { customCode } from "./objects/custom-code";
import { customImage } from "./objects/custom-image";
import { richText } from "./objects/richtext";
import { callout } from "./objects/callout";
import { category } from "./documents/category";

type SchemaType = { types: SchemaTypeDefinition[]; templates: any };

export const schema: SchemaType = {
  types: [
    featured,
    post,
    author,
    category,
    tag,
    portfolio,

    /* OBJECTS */
    richText,
    customImage,
    customCode,
    callout,
    //Porfolio objects
  ],
  templates: (prev: any, context: any) => {
    const newTeplates = [
      {
        id: "post-by-author",
        title: "Post by author",
        description: "Post by spacific author",
        schemaType: "post",
        parameters: [
          {
            name: "authorId",
            type: "string",
          },
        ],
        value: (params: any) => ({
          author: [{ _type: "reference", _ref: params.authorId }],
        }),
      },
      {
        id: "post-by-tag",
        title: "Post by tag",
        description: "Post by a spisific author",
        schemaType: "post",
        parameters: [
          {
            name: "tagId",
            type: "string",
          },
        ],
        value: (params: any) => ({
          tags: [{ _type: "reference", _ref: params.tagId }],
        }),
      },
    ];
    return [...prev, ...newTeplates];
  },
};

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);
export const singletonTypes = new Set([portfolio.name, featured.name]);

// SCHEMA TYPES TO EXCLUDE FROM LEFT SIDEBAR
export const excludedListTypes = new Set([
  featured.name,
  post.name,
  portfolio.name,
]);

//TODO: below are some docs are no longer in use & need to be deleted:

// 1) portfolio_hero
// 2) experience
// 3) skill
// 4) projects
// 5) category
