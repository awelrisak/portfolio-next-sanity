import localFont from "next/font/local";
import {Arimo} from "next/font/google"

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
  variable: "--font-walsheim",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export { walsheim, arimo };
