import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post Not Found",
};

export default function PostNotFoundPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center space-y-3">
      <h2 className="font-bold text-3xl md:text-5xl">Not Found!</h2>
      <p className="text-muted-foreground">Could not find requested resource</p>

      <Button variant="ghost">
        <Link href="/blog">View all posts</Link>
        <Icons.chevronRight />
      </Button>
    </main>
  );
}
