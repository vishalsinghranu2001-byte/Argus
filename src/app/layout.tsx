import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter substitutes for "Vanilla Sans" per DESIGN.md. Variable font covers
// weights 300–700, so no explicit `weight` array is needed.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Argus — Email ticketing that lives in your inbox",
  description:
    "Argus turns your shared support inbox into a tracked ticketing system — automatic ticket numbers, measured response times, and full accountability. Built on Google Workspace, no per-agent fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
