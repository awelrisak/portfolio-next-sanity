import { StructureBuilder } from "sanity/structure";

function JsonPreview() {
  return <h1>Hello</h1>;
}

export const defaultDocumentNodeResolver = (S: StructureBuilder) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
