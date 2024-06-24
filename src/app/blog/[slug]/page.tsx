import Moment from "@/components/moment";
import PortableText from "@/components/portable-text";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function getData(slug: string): Promise<any> {
  const query = `
  {
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      "slug": slug.current,
      name
    },
    author[]->{
    name,
    twitter,
    "image": image.asset->url,
    "slug": slug.current
    },
    "plainText": pt::text(body),
    "keywords": string::split(keywords, ",")
  },

  "recentPosts": *[_type == "post" ] | order(publishedAt desc)[0..5] {
     title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    "plainText": pt::text(body)
  },

  "relatedPosts": *[
     _type == "post"
     && count(tags[@._ref in ^.^.post.tags[]._ref]) > 0
   ] | order(publishedAt desc)[0..5] {
     title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    "plainText": pt::text(body)
  }
  
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params: { slug },
}: PostPageProps): Promise<Metadata> {
  const { post } = await getData(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/post/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: post.coverImage,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: post.author[0].twitter,
    },
    keywords: post.keywords,
  };
}

export default async function Page({ params: { slug } }: PostPageProps) {
  const { post, recentPosts, relatedPosts } = await getData(slug);
  return (
    <main className="relative container  md:h-[calc(100vh-5rem)] md:flex">
      <ScrollArea className="bg-slate-800 h-full min-w-[250px]" />
      <article className="h-full flex-1 max-w-5xl overflow-auto px-3 scrollbar-thin scrollbar-stable">
        <div className="text-muted-foreground">
          <span>Published on</span> &nbsp;
          <span>
            <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
          </span>
          &nbsp;
          <span>&#x2022;</span>
          &nbsp;
          <span>{readingTime(post?.plainText || "").text}</span>
        </div>
        <h1 className="mt-2 inline-block font-bold text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {post.author.length && (
          <div className="mt-4 flex space-x-4">
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {post.author.map((author: any) => (
              <Link
                key={author.slug}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
                target="_blank"
              >
                <Image
                  src={author.image}
                  alt={`${author.name} image`}
                  width={42}
                  height={42}
                  className="rounded-full bg-muted"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium">{author.name}</p>
                  <p className="text-[12px] text-muted-foreground">
                    @{author.twitter}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
        <Image
          src={post.coverImage}
          alt={`${post.title} cover image`}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
        <PortableText value={post?.body} />
      </article>
      <ScrollArea className="bg-gray-800 h-full min-w-80" />
    </main>
  );
}
