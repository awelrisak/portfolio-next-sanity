import { hoobal } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";
import Moment from "../moment";

interface LatestPostsProps {
  // Source: @/sanity/type.ts
  // type: BlogPageQueryResult - latest posts
  posts: {
    slug: string;
    title: string;
    image: string | null;
    excerpt: string;
    plainText: string;
    publishedAt: string;
  }[];
}
export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Latest posts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article key={post.slug} className="relative space-y-3">
            {post.image && (
              <Image
                src={post.image}
                alt="Post cover image"
                width={804}
                height={452}
                className="md:aspect-[4/3]"
              />
            )}
            <div className="space-y-2">
              <h3 className="line-clamp-3 font-bold">
                {post.title}
              </h3>
              <p className="text-sm line-clamp-3 text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="text-sm text-muted-foreground flex gap-2 md:gap-4">
                <Moment format="MMMM D, YYYY" date={post.publishedAt} />
                <span aria-hidden>&#x2022;</span>
                <p>{readingTime(post.plainText).text}</p>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} className="absolute inset-0">
              <span className="sr-only">Click to read {post.title}</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
