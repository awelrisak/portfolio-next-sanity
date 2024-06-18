import localFont from "next/font/local";

const geistSans = localFont({
	src: "./assets/GeistVF.woff",
	variable: "--font-geist-sans",
});
const geistMono = localFont({
	src: "./assets/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export { geistMono, geistSans };
