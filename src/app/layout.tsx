import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Serif for the product's voice (headlines); sans for UI + meta. Same two faces
// the app uses, so the marketing site is unmistakably the same brand.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "vournal — talk, and it becomes your journal, to-dos & calendar";
const description =
  "A self-structuring voice journal. Speak once and vournal fans it out into a journal entry, to-dos, and calendar events — automatically. It understands English, Arabic, and Lebanese dialect.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "vournal",
  keywords: [
    "voice journal",
    "voice notes to journal",
    "voice to to-do list",
    "AI journal app",
    "Arabic voice notes",
    "Lebanese dialect",
    "voice calendar",
  ],
  // Next auto-wires app/favicon.ico and app/opengraph-image.tsx.
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "vournal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-paper text-ink flex min-h-full flex-col">{children}</body>
    </html>
  );
}
