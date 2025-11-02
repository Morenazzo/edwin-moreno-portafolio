import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edwin Moreno | Strategic Innovation Leader | AI & Partnerships",
  description: "Purpose-driven innovator helping organizations navigate exponential technologies. Expert in AI-powered innovation platforms, strategic partnerships, and building high-impact ventures.",
  keywords: ["Edwin Moreno", "Innovation Leader", "AI", "Partnerships", "Exponential Technologies", "Business Innovation", "Strategic Innovation"],
  authors: [{ name: "Edwin Moreno" }],
  openGraph: {
    title: "Edwin Moreno | Strategic Innovation Leader",
    description: "Exponential Innovation Projects for a Better World",
    url: "https://edwinmoreno.com",
    siteName: "Edwin Moreno Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Moreno | Strategic Innovation Leader",
    description: "Exponential Innovation Projects for a Better World",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
