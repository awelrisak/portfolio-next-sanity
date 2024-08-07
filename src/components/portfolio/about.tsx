import type { Service } from "@/types";
import type { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { PortableText } from "../portable-text";

interface AboutProps {
  services: Service[];
  heading: string;
  subheading: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content: any;
}

function ServiceCard({ title, description }: Service) {
  return (
    <div className="w-[250px]">
      <div className="w-full green-pink-gradient p-[1px] rounded-xl shadow-card">
        <div className="bg-tertiary rounded-xl text-center py-5 px-12 min-h-[161px] flex flex-col items-center  justify-evenly ">
          <h3 className="text-xl font-bold ">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export function About({ services, heading, subheading, content }: AboutProps) {
  return (
    <section id="about-me" className="section">
      <div>
        <p className="section-subtext">{subheading}</p>
        <h2 className="section-heading">{heading}</h2>
      </div>

      <PortableText value={content} components={portableTextComponents} />

      {/* <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div> */}
    </section>
  );
}

const portableTextComponents: PortableTextComponents = {
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
    code: ({ children }) => (
      <code className="relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {children}
      </code>
    ),
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
    normal: ({ children }) => (
      <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-3xl leading-7">
        {children}
      </p>
    ),
  },
};
