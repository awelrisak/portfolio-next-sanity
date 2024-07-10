import Image from "next/image";
import readingTime from "reading-time";
import Moment from "../moment";
import Link from "next/link";

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
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
        Featured posts
      </h2>
      <div className="featured-posts">
        {posts.map((post) => (
            <article key={post.slug} className="featured-post">
              <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">Click to read {post.title}</span>
              </Link>
              <div className="featured-post__media">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={`${post.title}cover image`}
                    fill
                    className="object-cover rounded-sm"
                  />
                )}
              </div>
              <div className="featured-post__content">
                <h3 className="featured-post__title">{post.title}</h3>
                <p className="featured-post__description">{post.excerpt}</p>
                <div className="featured-post__footer">
                  <Moment format="MMMM D, YYYY" date={post.publishedAt} />
                  <span>&#x2022;</span>
                  <p>{readingTime(post.plainText).text}</p>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}
