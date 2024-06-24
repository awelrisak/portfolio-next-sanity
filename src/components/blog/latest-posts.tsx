import { hoobal } from "@/assets";
import Image from "next/image";
import readingTime from "reading-time";
import Moment from "../moment";

interface LatestPostsProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  posts: any;
}
export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
        Latest posts
      </h2>
      <div className="latest-posts">
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {posts.map((post: any) => {
          return (
            <article key={post.id} className="latest-post">
              {/* <div className="latest-post__media"> */}
                <Image
                  src={hoobal}
                  alt="Post cover image"
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  // priority={index <= 1}
                />
              {/* </div> */}
              <div className="latest-post__content">
                <h3 className="latest-post__title">{post.title}</h3>
                <p className="latest-post__description">{post.description}</p>
                <div className="latest-post__footer">
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
