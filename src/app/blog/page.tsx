import { FeaturedPosts } from "@/components/blog/featured-posts";
import { LatestPosts } from "@/components/blog/latest-posts";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "read amazing blogs"
}

export default function Page() {
  return (
    <main className="pt-6 pb-9 container">
      <FeaturedPosts posts={posts.slice(0, 4)} />
      <Separator className="my-12" />
      <LatestPosts posts={posts.slice(0, 6)} />
    </main>
  );
}
