import { Icons } from "@/components/icons";
import { excludedListTypes } from "./schemas";
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      /* FEATURED */
      S.listItem()
        .title("Featured")
        .icon(Icons.star)
        .child(S.document().schemaType("featured").documentId("featured")),
      /* DIVIDER */
      S.divider(),
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
                .icon(Icons.users)
                .child(
                  S.documentTypeList("author")
                    .title("Filter posts by author")
                    .child((authorId) =>
                      S.documentList()
                        .params({ authorId })
                        .filter('_type == "post" && $authorId in author[]._ref')
                        .title("Posts by author")
                        .initialValueTemplates([
                          S.initialValueTemplateItem("post-by-author", {
                            authorId,
                          }),
                        ])
                    )
                ),
              S.listItem()
                .title("By tags")
                .icon(Icons.tags)
                .child(
                  S.documentTypeList("tag")
                    .title("filter posts by tags")
                    .child((tagId) =>
                      S.documentTypeList("post")
                        .params({ tagId, type: "post" })
                        .filter("_type == $type && $tagId in tags[]._ref")
                        .title("Posts by tags")
                        .initialValueTemplates([
                          S.initialValueTemplateItem("post-by-tag", { tagId }),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),
      /* SCHEMA TYPES EXCEPT EXCLUDED ONE */
      ...S.documentTypeListItems().filter(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        (listItem) => !excludedListTypes.has(listItem.getId()!)
      ),
      S.divider(),
      /* PORTFOLIO */
      S.listItem()
        .title("Portfolio")
        .icon(Icons.briefcase)
        .child(S.document().schemaType("portfolio").documentId("portfolio")),
    ]);
