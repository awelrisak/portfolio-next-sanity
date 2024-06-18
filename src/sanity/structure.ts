import { Icons } from "@/components/icons";
import type { StructureBuilder } from "sanity/structure";
import { excludedListTypes } from "./schemas";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Portfolio")
        .icon(Icons.work)
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.listItem()
                .title("Hero")
                .icon(Icons.stars)
                .child(
                  S.document()
                    .schemaType("portfolio_hero")
                    .documentId("portfolio_hero"),
                ),
              S.listItem()
                .title("Experience")
                .icon(Icons.badge)
                .child(S.documentTypeList("experience").title("Experience")),
              S.listItem()
                .title("Projects")
                .icon(Icons.viewCozy)
                .child(S.documentTypeList("project").title("Projects")),
              S.listItem()
                .title("Skills")
                .icon(Icons.ballot)
                .child(S.document().schemaType("skill").documentId("skills")),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Blog")
        .icon(Icons.blog)
        .child(S.documentTypeList("post").title("Blog Posts")),
      S.listItem()
        .title("Filter Posts")
        .icon(Icons.filterList)
        .child(
          S.list()
            .title("Filter Posts")
            .items([
              S.listItem()
                .title("By author")
                .icon(Icons.group)
                .child(
                  S.documentTypeList("author")
                    .title("Filter posts by author")
                    .child((authorId) =>
                      S.documentList()
                        .params({ authorId })
                        .filter('_type == "post" && author._ref == $authorId')
                        .title("Posts"),
                    ),
                ),
              S.listItem().title("By category").icon(Icons.category),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        (listItem) => !excludedListTypes.has(listItem.getId()!),
      ),
    ]);
