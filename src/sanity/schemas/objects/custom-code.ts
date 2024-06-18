import { Icons } from "@/components/icons";

export const customCode = {
  name: "customCode",
  title: "Code",
  type: "object",
  icon: Icons.code,
  fields: [
    {
      name: "file",
      title: "File",
      type: "string",
    },
    {
      name: "code",
      title: "Code",
      type: "code",
    },
  ],
  preview: {
    select: {
      title: "code.code",
    },
  },
};
