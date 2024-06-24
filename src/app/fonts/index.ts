import localFont from "next/font/local";

const walsheim = localFont({
  src: [
    {
      path: "./assets/GTWalsheim/GTWalsheimProRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/GTWalsheim/GTWalsheimProBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
});

export { walsheim };
