import { Icons } from "@/components/icons";
import type { StructureBuilder } from "sanity/structure";
import { excludedListTypes } from "./schemas";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      /* BLOG */
      S.listItem()
        .title("Blog")
        .icon(Icons.blog)
        .child(S.documentTypeList("post").title("Blog Posts")),
      /* FILTER BLOG POST */
      S.listItem()
        .title("Filter Blog Posts")
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
      /* SCHEMA TYPES EXCEPT EXCLUDED ONE */
      ...S.documentTypeListItems().filter(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        (listItem) => !excludedListTypes.has(listItem.getId()!),
      ),
      S.divider(),
      /* PORTFOLIO */
      S.listItem()
        .title("Portfolio")
        .icon(Icons.work)
        .child(S.document().schemaType("portfolio").documentId("portfolio")),
    ]);
