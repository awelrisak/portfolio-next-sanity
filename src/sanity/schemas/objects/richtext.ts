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
      title: "Image",
    },
    {
      type: "customCode",
      title: "Code",
    },
  ],
};
