"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { blogConfig } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { useActiveItem } from "@/hooks/use-active-item";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";
import { NavigationMenuDemo } from "../nav-menu";
const DynamicMenubar = dynamic(() => import("@/components/menubar"));

export function Header() {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const items = blogConfig.mainNav;
  const itemIds = items?.map((item) => slugify(item.title)) || [];

  const active = useActiveItem(itemIds); // TODO: fix this

  return (
    <header className="container sticky top-0  h-16 flex items-center justify-between z-40 bg-background/95 backdrop-blur-xl ">
      <Link href="/" className="flex items-center">
        <span className="font-black text-xl inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {/* NAVBAR  */}

      {/* <NavigationMenuDemo /> */}

      {/* <nav className="hidden gap-6 md:flex">
        {items?.map((item) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "font-bold text-lg  lg:text-xl transition-colors text-foreground/60 hover:text-foreground",
              {
                "text-foreground": item.href.startsWith(`/${segment}`),
                "text-foreground/60": !item.href.startsWith(`/${segment}`),
                // "text-foreground/60": active !== item.title,
                "cursor-not-allowed opacity-80": item.disabled,
              },
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav> */}

      {/* UTILS BUTTONS  */}

      <div className="flex gap-4">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hidden md:inline-flex"
        >
          <Link
            href="https://www.twitter.com/abdirizakafarah"
            target="_blank"
            aria-label="Abdurezak twitter account"
          >
            <Icons.twitter className="size-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://www.github.com/awelrisak"
            target="_blank"
            aria-label="Abdurazak github account"
          >
            <Icons.github className="size-[1.2rem]" />
          </Link>
        </Button>
        <ModeToggle />
        <Button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          variant="outline"
          size="icon"
        >
          {showMobileMenu && <Icons.close className="size-[1.2rem]" />}
          {!showMobileMenu && <Icons.menu className="size-[1.2rem]" />}
          <span className="sr-only">Menu</span>
        </Button>
        {showMobileMenu && items && (
          <DynamicMenubar
            items={items}
            handleClose={() => setShowMobileMenu(!showMobileMenu)}
          />
        )}
      </div>
    </header>
  );
}
