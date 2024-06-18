import type { SchemaTypeDefinition } from "sanity";
export const skill: SchemaTypeDefinition = {
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Skills",
      // readOnly: true,
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "customSkill" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
