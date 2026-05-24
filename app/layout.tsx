import type { Metadata } from "next";
import { EB_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farrel Adel Mohammad | Software Engineer",
  description: "Software Engineer specializing in Full Stack development and AI/LLM integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${dmMono.variable} h-full antialiased selection:bg-white selection:text-black`}
    >
      <body className="min-h-full bg-background text-foreground font-mono">
        {children}
      </body>
    </html>
  );
}
