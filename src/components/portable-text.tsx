import { urlForImage } from "@/sanity/lib/image";
import {
  type PortableTextComponents,
  type PortableTextProps,
  PortableText as PortableTextReact,
  toPlainText,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function PortableText({ ...props }: PortableTextProps) {
  return <PortableTextReact components={portableTextComponents} {...props} />;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
      />
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-medium underline underline-offset-4"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
    number: ({ children }) => <li className="mt-2">{children}</li>,
  },
  block: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    normal: ({ children }: any) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h1: ({ children, value }: any) => (
      <h1
        id={slugify(toPlainText(value))}
        className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      >
        {children}
      </h1>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h2: ({ children, value }: any) => (
      <h2
        id={slugify(toPlainText(value))}
        className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      >
        {children}
      </h2>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h3: ({ children, value }: any) => (
      <h3
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h4: ({ children, value }: any) => (
      <h4
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h5: ({ children, value }: any) => (
      <h5
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      >
        {children}
      </h5>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    h6: ({ children, value }: any) => (
      <h6
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      >
        {children}
      </h6>
    ),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    blockquote: ({ children, value }: any) => (
      <blockquote
        id={slugify(toPlainText(value))}
        className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
      >
        {children}
      </blockquote>
    ),
  },
};
