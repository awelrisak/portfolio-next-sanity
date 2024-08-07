"use client";
import { structure } from "@/sanity/structure";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema, singletonActions, singletonTypes } from "./src/sanity/schemas";
import { defaultDocumentNodeResolver } from "@/sanity/views";

export default defineConfig({
  basePath: "/admin",
  projectId,
  title: "My site",
  dataset,
  schema,
  document: {
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
  plugins: [
    structureTool({
      title: "Manage",
      structure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
});
