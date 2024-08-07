
import { Icons } from "@/components/icons";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Abdurezak",
  shortName: "Abdi",
  description: "I'm a skilled full-stack developer building modern web applications. Expertise in React, Node.js, Next.js for interactive UIs, scalable backends, and SEO-friendly websites.",
  url: "http://localhost:3000/", //TODO: FIX URL
  logo: Icons.logo,
  links: [
    {
      name: "Email",
      href: "mailto:abdurazak.awil1@gmail.com",
      icon: Icons.mail,
      external: true,
    },
    {
      name: "X",
      href: "https://www.twitter.com/abdirizakafarah",
      icon: Icons.twitter,
      external: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/abdurazaak.awil",
      icon: Icons.facebook,
      external: true,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awelrisak",
      icon: Icons.instagram,
      external: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/254799992045",
      icon: Icons.whatsapp,
      external: true,
    },
  ],
};
