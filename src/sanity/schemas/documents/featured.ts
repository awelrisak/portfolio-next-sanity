import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const featured: SchemaTypeDefinition = {
  type: "document",
  name: "featured",
  title: "Featured",
  icon: Icons.star,
  fields: [
    {
      name: "posts",
      title: "Featured Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Featured posts are required"),
        rule.unique().error("Featured posts should be unique"),
      ],
    },
    {
      name: "categories",
      title: "Featured Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule: Rule) => [
        rule.required().error("Featured categories are required"),
        rule.unique().error("Featured categories should be unique"),
      ],
    },
  ],

  preview: {
    prepare(){
      return {
        title: "Featured"
      }
    }
  }
};
