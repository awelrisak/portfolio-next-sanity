import type { Rule, SchemaTypeDefinition } from "sanity";

export const portfolioHeroObject: SchemaTypeDefinition = {
  name: "portfolio_hero",
  type: "object",
  fields: [
    {
      name: "greeting",
      title: "Greeting",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Greeting is required.")],
    },
    {
      name: "firstName",
      title: "First name",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("First Name is required.")],
    },
    {
      name: "lastName",
      title: "Last name",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Last Name is required.")],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => [rule.required().error("Description is required.")],
    },
  ],
  
};
