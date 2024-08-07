import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const portfolio: SchemaTypeDefinition = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: Icons.briefcase,
  groups: [
    { name: "hero", title: "Hero section" },
    { name: "about", title: "About section" },
    { name: "experience", title: "Experince section" },
    { name: "skills", title: "Skills section" },
  ],
  fields: [
    {
      name: "hero",
      title: "Hero section",
      type: "object",
      fields: [
        {
          name: "greeting",
          title: "Greeting",
          type: "string",
          validation: (rule: Rule) => [
            rule.required().error("Greeting is required."),
          ],
        },
        {
          name: "firstName",
          title: "First name",
          type: "string",
          validation: (rule: Rule) => [
            rule.required().error("First Name is required."),
          ],
        },
        {
          name: "lastName",
          title: "Last name",
          type: "string",
          validation: (rule: Rule) => [
            rule.required().error("Last Name is required."),
          ],
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 7,
          validation: (rule: Rule) => [
            rule.required().error("Description is required."),
          ],
        },
      ],
      group: "hero",
    },
    {
      name: "about",
      title: "About section",
      group: "about",
      type: "object",
      fields: [
        {
          type: "string",
          name: "heading",
          title: "Heading",
          validation: (rule: Rule) => [
            rule.required().error("Heading is required."),
          ],
        },
        {
          type: "string",
          name: "subheading",
          title: "Subheading",
          validation: (rule: Rule) => [
            rule.required().error("Subheading is required."),
          ],
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
            },
          ],
          validation: (rule: Rule) => [
            rule.required().error("Description is required."),
          ],
        },
      ],
    },
    {
      name: "experience",
      title: "Experience section",
      group: "experience",
      type: "object",
      fields: [
        {
          type: "string",
          name: "heading",
          title: "Heading",
          validation: (rule: Rule) => [
            rule.required().error("Heading is required."),
          ],
        },
        {
          type: "string",
          name: "subheading",
          title: "Subheading",
          validation: (rule: Rule) => [
            rule.required().error("Subheading is required."),
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      firstName: "hero.firstName",
      lastName: "hero.lastName",
    },
    prepare({ firstName, lastName }) {
      return {
        title: `${firstName} ${lastName}`,
      };
    },
  },
};
