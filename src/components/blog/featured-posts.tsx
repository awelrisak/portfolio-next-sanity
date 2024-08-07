import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";
import Moment from "../moment";

interface FeaturedPostsProps {
  // Source: @/sanity/type.ts
  // type: BlogPageQueryResult - featured posts
  posts: {
    slug: string;
    title: string;
    image: string | null;
    excerpt: string;
    plainText: string;
    publishedAt: string;
  }[];
}
export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const firstPost = posts[0];
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
        Featured posts
      </h2>
      <div className="md:flex md:gap-x-14 space-y-14 md:space-y-0">
        {/* BLOG LAYOUT ONE  */}
        <article className="flex-1 relative space-y-4">
          {firstPost.image && (
            <Image
              src={firstPost.image}
              alt={`${firstPost.title} cover image`}
              width={804}
              height={402}
              className=""
            />
          )}
          <div className="space-y-3">
            <div className="flex space-x-2 text=sm text-muted-foreground">
              <Moment format="MMMM D, YYYY" date={firstPost.publishedAt} />
              <span aria-hidden>&#x2022;</span>
              <p>{readingTime(firstPost.plainText).text}</p>
            </div>
            <h3 className="font-bold capitalize text-3xl">{firstPost.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {firstPost.excerpt}
            </p>
          </div>
          <Link href={`/blog/${firstPost.slug}`} className="absolute inset-0">
            <span className="sr-only">Click to read {firstPost.title}</span>
          </Link>
        </article>
        <div className=" flex-1 space-y-6">
          {posts.slice(1).map((post) => (
            // BLOG LAYOUT 2
            <article key={post.slug} className="relative flex gap-6">
              {post.image && (
                <Image
                  src={post.image}
                  alt="Post cover image"
                  width={804}
                  height={403}
                  className="rounded-md size-20 md:size-32"
                />
              )}
              <div className="flex flex-col gap-y-2 justify-center">
                <h3 className="capitalize line-clamp-2">{post.title}</h3>
                <p className="max-md:hidden text-sm line-clamp-3 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex space-x-2 text-sm text-muted-foreground">
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
      </div>
    </section>
  );
}
