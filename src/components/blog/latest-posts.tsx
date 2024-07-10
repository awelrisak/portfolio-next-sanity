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
    <section className="space-y-5">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Latest posts</h2>
      <div className="latest-posts">
        {posts.map((post, index) => (
          <article key={post.slug} className="latest-post">
            <Link href={`/blog/${post.slug}`} className="absolute inset-0">
              <span className="sr-only">Click to read {post.title}</span>
            </Link>
            {post.image && (
              <Image
                src={post.image}
                alt="Post cover image"
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />
            )}
            <div className="latest-post__content">
              <h3 className="latest-post__title">{post.title}</h3>
              <p className="latest-post__description">{post.excerpt}</p>
              <div className="latest-post__footer">
                <Moment format="MMMM D, YYYY" date={post.publishedAt} />
                <span>&#x2022;</span>
                <p>{readingTime(post.plainText).text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
