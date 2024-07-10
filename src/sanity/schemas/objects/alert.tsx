import { Icons } from "@/components/icons";

export const alert = {
  name: "alert",
  title: "Alert",
  type: "object",
  icon: () => <Icons.badgeAlert className="size-3.5" />,
  fields: [
    {
      type: "string",
      name: "type",
      title: "Alert type",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Destructive", value: "destructive" },
        ],
      },
    },
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
      rows: 3,
    },
  ],
};
