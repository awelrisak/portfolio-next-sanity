import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { arimo, walsheim } from "./fonts";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} - portfolio`,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@abdirizakafarah",
  },
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Full-Stack Developer",
    "Web Development",
    "JavaScript developer",
    "React developer",
    "Node.js developer",
    "Next.js developer",
    "Frontend Developer",
    "Backend Developer",
    "API Development",
    "User Interface (UI)",
    "User Experience (UX)",
    "SEO Optimizer",
  ],
  authors: [{ name: "Abdurezak Farah", url: "https://www.cabdirisaaq.com" }],
  creator: "Abdurezak Farah",
  publisher: "Abdurezak Farah",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
      color: "#915eff",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#915EFF",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto "
    >
      <body
        className={cn(
          "min-h-screen bg-background font-serif primary-scrollbar antialiased",
          walsheim.variable,
          arimo.variable,
        )}
      >
        <NextTopLoader
          color="#915EFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TailwindIndicator />
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
