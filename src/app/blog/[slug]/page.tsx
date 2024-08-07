import Moment from "@/components/moment";
import { PortableText } from "@/components/portable-text";
import TOC from "@/components/toc";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { jsonLd } from "@/lib/utils/json-ld";
import { client } from "@/sanity/lib/client";
import type { PostPageQueryResult } from "@/sanity/types";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime from "reading-time";
import type { BlogPosting } from "schema-dts";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostPageData(slug: string) {
  const postPageQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    category-> {
      name,
      "slug": slug.current
    },
    tags[]->{
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
    "keywords": string::split(keywords, ","),
    _updatedAt,

    "relatedPosts": *[
      _type == "post"
      && _id != ^._id 
      && count(tags[@._ref in ^.^.tags[]._ref]) > 0
    ]{
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      publishedAt,
      "plainText": pt::text(body)
    },

    "recentPosts": *[
      _type == "post" 
      && _id != ^._id
      && !(_id in *[
          _type == "post"
          && _id != ^.^._id 
          && count(tags[@._ref in ^.^.^.tags[]._ref]) > 0
        ]._id)
      ] | order(publishedAt desc)[0..5]{
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      publishedAt,
      "plainText": pt::text(body)
    }
  }
  `;

  return client.fetch<PostPageQueryResult>(postPageQuery, { slug });
  
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostPageData(slug);

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
      images: post.coverImage || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage || undefined,
      creator: post.author[0].twitter || undefined,
    },
    keywords: post.keywords,
  };
}

export default async function Page({ params: { slug } }: PostPageProps) {
  const post = await getPostPageData(slug);

  if (!post) return;

  const postJsonLd = jsonLd<BlogPosting>({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}#BlogPosting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}/`,
    },
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    url: `${siteConfig.url}/blog/${post.slug}/`,
    author: post.author.map((author) => ({
      "@type": "Person",
      "@id": `http://www.twitter.com/${author.twitter}`,
      name: author.name,
    })),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    ...(post.coverImage && {
      image: {
        "@type": "ImageObject",
        "@id": post.coverImage,
        url: post.coverImage,
        height: "2170",
        width: "2400",
      },
    }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#post-body"],
    },
    keywords: post.keywords || undefined,
    articleBody: post.plainText,
  });

  const postTagsSearchParams = post.tags
    ?.map((tag) => `tag=${tag.slug}`)
    .join("&");

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: postJsonLd }}
      />
      <main className="relative container pb-7 md:pb-0  md:h-[calc(100vh-5rem)] md:flex lg:gap-x-10">
        <div className="hidden relative h-full lg:flex flex-col overflow-y-auto lg:w-[210px] primary-scrollbar">
          <h2 className="sticky top-0 bg-background font-semibold">
            On this page:
          </h2>
          <section className="my-5 ml-auto flex flex-col gap-y-5 w-[180px]">
            <TOC headings={post.headings} />
          </section>
        </div>

        <article
          id="post-body"
          className="pb-7 h-full flex-1 overflow-auto md:px-7 primary-scrollbar"
        >
          {post.category && (
            <p className="mb-2 text-sm text-muted-foreground space-x-2">
              <span>Blog</span>
              <span>&#x2022;</span>
              <Link
                href={`/blog?category=${post.category.slug}`}
                className="font-medium hover:underline underline-offset-4"
              >
                {post.category.name}
              </Link>
            </p>
          )}
          <h1 className="inline-block font-bold text-4xl leading-tight lg:text-5xl">
            {post?.title}
          </h1>
          {post.author && (
            <div className="mt-4 flex space-x-4">
              {post.author.map((author) => (
                <Link
                  key={author.slug}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2"
                  target="_blank"
                >
                  {author.image && (
                    <div className="relative size-10 rounded-full">
                      <Image
                        src={author.image}
                        alt={`${author.name} image`}
                        fill
                        className="object-fit rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-left text-sm leading-tight">
                    <p className="font-medium">{author.name}</p>
                    <p className="text-[12px] text-muted-foreground">
                      <Moment format="MMMM DD, YYYY" date={post.publishedAt} />
                      <span className="mx-1.5" aria-hidden>
                        &#x2022;
                      </span>
                      <span>{readingTime(post.plainText).text}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {post.coverImage && (
            <Image
              src={post?.coverImage}
              alt={`${post?.title} cover image`}
              width={720}
              height={405}
              className="my-8 rounded-md border bg-muted transition-colors"
              priority
            />
          )}

          {post?.body && <PortableText value={post.body} />}
        </article>

        <Separator className="md:hidden my-12" />

        <aside className="h-full md:w-[280px] px-3 pb-5 space-y-11 overflow-y-auto scrollbar scrollbar-stable scrollbar-w-2.5 scrollbar-thumb-muted">
          {post.relatedPosts.length > 0 && (
            <PostsList
              title="also read"
              link={{
                text: "See more",
                href: `/blog${
                  postTagsSearchParams ? `?${postTagsSearchParams}` : ""
                }`,
              }}
              posts={post.relatedPosts}
            />
          )}
          {post.recentPosts.length > 0 && (
            <PostsList
              title="most recent"
              link={{
                text: "See more",
                href: "/blog",
              }}
              posts={post.recentPosts}
            />
          )}
        </aside>
      </main>
    </>
  );
}

// Source: ./src/app/sanity/type.ts
// type: PostPageQueryResult - recentPosts / reletedPosts
type PostList = {
  title: string;
  slug: string;
  coverImage: string | null;
  publishedAt: string;
  plainText: string;
};

interface PostsListProps {
  title: string;
  link?: {
    text: string;
    href: string;
  };
  posts: PostList[];
}

function PostsList({ title, link, posts }: PostsListProps) {
  return (
    <section className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="capitalize text-lg font-bold text-balance">{title}</h2>
        {link && posts.length > 5 && (
          <Link href={link.href} className="text-sm">
            {link.text} &rarr;
          </Link>
        )}
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

interface PostListItemProps {
  post: PostList;
}

function PostListItem({ post }: PostListItemProps) {
  return (
    <article key={post.slug} className="relative w-full flex gap-4">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt="Post cover image"
          height={25}
          width={25}
          className="size-14 rounded-lg"
        />
      )}
      <section className="space-y-2">
        <h3 className="text-sm line-clamp-2">{post.title}</h3>
        <p className="text-xs text-muted-foreground">
          <Moment format="MMMM D YYYY" date={post.publishedAt} />
          <span className="mx-2" aria-hidden>
            &#x2022;
          </span>
          <span>{readingTime(post.plainText).text}</span>
        </p>
      </section>
      <Link href={`/blog/${post.slug}`} className="absolute inset-0">
        <span className="sr-only">Read {post.title}</span>
      </Link>
    </article>
  );
}
