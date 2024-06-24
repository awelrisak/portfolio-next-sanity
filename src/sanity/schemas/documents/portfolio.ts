import { Icons } from "@/components/icons";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const portfolio: SchemaTypeDefinition = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: Icons.work,
  groups: [
    { name: "hero", title: "Hero section" },
    { name: "skills", title: "Skills section" },
  ],
  fields: [
    {
      name: "hero",
      title: "Hero section",
      type: "portfolio_hero",
      group: "hero",
    },
    {
      name: "title",
      title: "title",
      type: "string",
      group: "skills",
    },
    {
      name: "text",
      title: "text",
      type: "string",
      group: "skills",
    },
  ],
  // preview: {
  //   select: {
  //     firstName: "firstName",
  //     lastName: "lastName",
  //   },
  //   prepare({ firstName, lastName }) {
  //     return {
  //       title: `${firstName} ${lastName}`,
  //     };
  //   },
  // },
};
