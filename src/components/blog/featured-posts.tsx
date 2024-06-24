import { hoobal } from "@/assets";
import Image from "next/image";
import readingTime from "reading-time";
import Moment from "../moment";

interface FeaturedPostsProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  posts: any;
}
export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
        Featured posts
      </h2>
      <div className="featured-posts">
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {posts.map((post: any) => {
          return (
            <article key={post.id} className="featured-post">
              <div className="featured-post__media">
                <Image
                  src={hoobal}
                  alt={"post.title"}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="featured-post__content">
                <h3 className="featured-post__title">{post.title}</h3>
                <p className="featured-post__description">{post.description}</p>
                <div className="featured-post__footer">
                  <Moment format="MMMM D, YYYY" date={post.publishedAt} />
                  <span>&#x2022;</span>
                  <p>7 min reading</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
