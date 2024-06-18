import type { Rule } from "sanity";

export const skill = {
  name: "customSkill",
  title: "Skill",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This is the category name, eg: frontend.",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              description: "This is the URL of the skill.",
              options: {
                source: "title",
              },
              validation: (rule: Rule) =>
                rule.required().error("Slug is required to be the tag url."),
            },
            { name: "coverImage", title: "Cover image ", type: "customImage" },

            {
              name: "details",
              title: "Details",
              type: "richText",
            },
          ],
        },
      ],
    },
  ],
};
