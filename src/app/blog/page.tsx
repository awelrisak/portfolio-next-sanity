import { FeaturedPosts } from "@/components/blog/featured-posts";
import { LatestPosts } from "@/components/blog/latest-posts";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import type { BlogPageQueryResult } from "@/sanity/types";
import type { Metadata } from "next";
import { groq } from "next-sanity";

export const metadata: Metadata = {
  title: "Blog",
  description: "read amazing blogs",
};

interface BlogPageProps {
  searchParams: {
    tag?: string | string[];
  };
}

async function getBlogPageData(): Promise<BlogPageQueryResult> {
  const blogPageQuery = groq`
     {
      "featuredPosts": *[_type == "featured"][0].posts[]->{
         "slug": slug.current,
          title,
          "image": coverImage.asset->url,
          excerpt,
         "plainText": pt::text(body),
         publishedAt
      },
      "latestPosts": *[_type == "post"][0..5] | order(publishedAt desc){
          "slug": slug.current,
          title,
          "image": coverImage.asset->url,
          excerpt,
         "plainText": pt::text(body),
         publishedAt
      }
    }
  `;

  const blogPageData = await client.fetch(blogPageQuery);

  return blogPageData;
}

export default async function Page({ searchParams }: BlogPageProps) {
  const { featuredPosts, latestPosts } = await getBlogPageData();

  return (
    <main className="pt-6 pb-9 container primary-scrollbar">
      {featuredPosts && <FeaturedPosts posts={featuredPosts} />}
      <Separator className="my-12" />
      {latestPosts && <LatestPosts posts={latestPosts} />}
    </main>
  );
}
