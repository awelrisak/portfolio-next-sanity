import { Icons } from "@/components/icons";

export const customCode = {
  name: "customCode",
  type: "object",
  icon: () => <Icons.code className="size-3.5" />,
  fields: [
    // {
    //   name: "file",
    //   title: "File name",
    //   type: "string",
    // },
    {
      name: "code",
      title: "Code",
      type: "code",
      options: {
        withFilename: true,
      },
    },
  ],
  preview: {
    select: {
      title: "code.code",
    },
  },
};
