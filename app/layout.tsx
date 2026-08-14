import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thanithpol Thiramongkolchai — AI / Data / Full Stack",
  description:
    "Portfolio of Thanithpol Thiramongkolchai, an AI/ML and Data Engineer building intelligent products from data to deployment.",
  metadataBase: new URL("https://thanithpol-portfolio.vercel.app"),
  openGraph: {
    title: "Thanithpol Thiramongkolchai — AI / Data / Full Stack",
    description: "AI/ML, LLM, Data Engineering and product-building portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#06080d] scheme-dark">
      <body>{children}</body>
    </html>
  );
}
