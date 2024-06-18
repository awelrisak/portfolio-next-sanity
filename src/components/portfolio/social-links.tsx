import type { SiteConfig } from "@/types";
import Link from "next/link";

interface SocialLinksProps {
  links: SiteConfig["links"];
}

export function SocialLinks({ links }: SocialLinksProps){
  return (
    <div className="flex mt-8 md:mt-10 gap-10 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : ""}
          rel={link.external ? "noreferrer" : ""}
          className="text-muted-foreground hover:text-foreground"
        >
          {link.icon && <link.icon className="size-8 md:size-12" />}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};


