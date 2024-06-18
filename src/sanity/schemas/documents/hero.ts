import type { Rule, SchemaTypeDefinition } from "sanity";

export const portfolioHero: SchemaTypeDefinition = {
  name: "portfolio_hero",
  title: "Portfolio hero",
  type: "document",
  fields: [
    {
      name: "greeting",
      title: "Greeting",
      type: "string",
    },
    {
      name: "firstName",
      title: "First name",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Name is required.")],
    },
    {
      name: "lastName",
      title: "Last name",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Name is required.")],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => [rule.required().error("Name is required.")],
    },
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
    },
    prepare({ firstName, lastName }) {
      return {
        title: `${firstName} ${lastName}`,
      };
    },
  },
};
