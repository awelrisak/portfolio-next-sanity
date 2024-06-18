import type { Rule, SchemaTypeDefinition } from "sanity";

export const experience: SchemaTypeDefinition = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => [rule.required().error("Title is required.")],
    },
    {
      name: "company",
      title: "Company name",
      type: "string",
      validation: (rule: Rule) => [
        rule.required().error("Company is required."),
      ],
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "customImage",
    },
    {
      name: "startDate",
      title: "Started date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule: Rule) => [
        rule.required().error("Started date is required"),
      ],
    },
    {
      name: "endDate",
      title: "Ended date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule: Rule) => [
        rule.required().min(rule.valueOfField("startDate")),
      ],
    },

    {
      name: "details",
      title: "Details",
      type: "richText",
    },
  ],
};
