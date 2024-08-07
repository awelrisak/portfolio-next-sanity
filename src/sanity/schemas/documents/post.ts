import { Icons } from "@/components/icons";
import moment from "moment";
import type { Rule, SchemaTypeDefinition } from "sanity";

export const post: SchemaTypeDefinition = {
  name: "post",
  title: "Blog",
  type: "document",
  icon: Icons.blog,
  fieldsets: [{ name: "seo", title: "SEO metadata" }],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Make it clear, grab attention, and mention your topic ( make it 50 - 60 characters)",
      fieldset: "seo",
      validation: (rule: Rule) => [
        rule.required().error("Title is required."),
        rule.max(60).warning("Shorter titles are always better for SEO."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "seo",
      description: "This is the URL of the blog.",
      options: {
        source: "title",
      },
      validation: (rule: Rule) =>
        rule.required().error("Slug is required to be the post url."),
    },
    {
      name: "excerpt",
      title: "Description / Excerpt",
      type: "text",
      fieldset: "seo",
      rows: 4,
      description:
        "A brief summary to catch attention, around 150-160 characters.",
      validation: (rule: Rule) => [
        rule
          .required()
          .error("Description of the post is required for the SEO."),
        rule.max(160).warning("Shorter Excerpts are always better for SEO."),
      ],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "text",
      rows: 5,
      fieldset: "seo",
      description:
        "Words that relate to your content, helping people find it when they search online. Separate by (,) commas.",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "customImage",
      fieldset: "seo",
    },
    {
      name: "category",
      title: "Category",
      description:
        "Classify your post under a relevant category to enhance organization and search visibility.",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "Use specific tags to help list related posts and improve discoverability.",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
    {
      name: "author",
      title: "Author(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
      validation: (rule: Rule) => [
        rule.required().error("The Post should have an author(s)"),
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => (new Date()).toISOString(),
      validation: (rule: Rule) => [
        rule.required().error("Published time is required"),
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "richText",
      validation: (rule: Rule) => [
        rule.required().error("Post body is required."),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "coverImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, image, publishedAt }) {
      const formattedDate = moment(publishedAt).format("LLL");
      return {
        title,
        media: image,
        subtitle: formattedDate,
      };
    },
  },
};
