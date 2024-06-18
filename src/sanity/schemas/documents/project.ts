import type { Rule, SchemaTypeDefinition } from "sanity";

export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required.")],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      description:
        "A brief summary to catch attention, around 150-160 characters.",
      validation: (rule: Rule) => [
        rule.required().error("Description of the project is required."),
        rule.max(160).warning("Shorter Excerpts are always better for SEO."),
      ],
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "customImage",
    },
    {
      name: "technologies",
      title: "Technologies used",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule: Rule) => [
        rule.required().error("Technologied used is required."),
        rule.min(1).error("Atleast one Technology used is required."),
      ],
    },
    {
      name: "details",
      title: "Details",
      type: "richText",
    },
    {
      name: "sourcecode",
      title: "Source code",
      type: "url",
    },
    {
      name: "previewLink",
      title: "Preview Link",
      type: "url",
    },
  ],
};
