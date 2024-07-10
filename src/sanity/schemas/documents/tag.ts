import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const tag: SchemaTypeDefinition = {
  name: "tag",
  title: "Tag",
  icon: Icons.tags,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Tag name is required."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule: Rule) => [
        rule.required().error("Category slug is required."),
      ],
    },
  ],
};
