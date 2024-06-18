"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useActiveItem } from "@/hooks/use-active-item";
import { cn } from "@/lib/utils";
import type { MainNavItem } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";
const DynamicMenubar = dynamic(() => import("@/components/portfolio/menubar"));

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function Navbar({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const itemIds = items?.map((item) => slugify(item.title)) || [];

  const active = useActiveItem(itemIds);

  return (
    <div className="flex flex-1 items-center justify-between gap-6 md:gap-10 ">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-black text-xl inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-bold lg:text-xl transition-colors hover:text-foreground/80 ",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",

                item.disabled && "cursor-not-allowed opacity-80",
                {
                  "text-foreground/60": active !== item.title,
                },
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <div className="flex gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://www.github.com/awelrisak" target="_blank">
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
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
          <span className="sr-only">Menu</span>
        </Button>
      </div>
      {showMobileMenu && items && (
        <DynamicMenubar
          items={items}
          handleClose={() => setShowMobileMenu(!showMobileMenu)}
        >
          {children}
        </DynamicMenubar>
      )}
    </div>
  );
}
