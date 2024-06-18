import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/portfolio/navbar";
import { portfolioConfig } from "@/config/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 container z-40 bg-background/95 backdrop-blur-xl ">
      <div className="flex h-20 items-center justify-between py-5">
        <Navbar items={portfolioConfig.mainNav} />
      </div>
    </header>
  );
}
