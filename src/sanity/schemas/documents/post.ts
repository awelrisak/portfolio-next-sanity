import { Icons } from "@/components/icons";
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
      initialValue: () => new Date().toISOString(),
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
    {
      name: "categories",
      title: "Categories",
      type: "array",
      description:
        "Keywords related to your post to categorize and improve searchability.",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "publishedAt",
    },
  },
};