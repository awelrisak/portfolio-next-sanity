import Link from "next/link";

import { cn } from "@/lib/utils";

import { usePreventScroll } from "@/hooks/use-prevent-scroll";
import type { MainNavItem } from "@/types";

interface MenubarProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  handleClose?: () => void;
}

const Menubar = ({ items, handleClose, children }: MenubarProps) => {
  usePreventScroll();
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handleClose}
      className={cn(
        "md:hidden fixed p-6 inset-0 bg-popover top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto  ",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md animate-in slide-in-from-bottom-80">
        <div className=" flex gap-3  justify-between items-center ">
          <span className="font-semibold px-2">Menu</span>
        </div>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};

Menubar.displayName = "Menubar";

export default Menubar;
