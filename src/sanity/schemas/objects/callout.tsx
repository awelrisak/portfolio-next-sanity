import { Icons } from "@/components/icons";
import type { ObjectDefinition, Rule } from "sanity";

export const callout: ObjectDefinition = {
  name: "callout",
  type: "object",
  icon: () => <Icons.badgeAlert className="size-4" />,
  fields: [
    {
      type: "string",
      name: "type",
      title: "Callout type",
      initialValue: "info",
      options: {
        list: [
          { title: "Success", value: "success" },
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Destructive", value: "destructive" },
        ],
      },
      validation: (rule: Rule) => [
        rule.required().error("Alert type is required."),
      ],
    },
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [  {title: 'Normal', value: 'normal'}]
        },
      ],
      validation: (rule: Rule) => [
        rule.required().error("Alert description is required."),
      ],
    },
  ],
  preview: {
    select: {
      title: "type",
      subtitle: "description",
    },
  },
};
