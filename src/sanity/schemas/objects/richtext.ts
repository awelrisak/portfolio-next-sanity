import { Icons } from "@/components/icons";

export const richText = {
  name: "richText",
  title: "Richtext",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          {
            title: "Strong",
            value: "strong",
          },
          {
            title: "Emphasis",
            value: "em",
          },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
      },
    },
    {
      type: "customImage",
    },
    {
      type: "customCode",
    },
  ],
};
