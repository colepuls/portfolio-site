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
  title: "Cole M. Puls",
  description: "Computer Science student at University of Missouri specializing in AI/ML, mobile development, and full-stack engineering.",
  keywords: ["Cole Puls", "Software Engineer", "Computer Science", "AI/ML", "React Native", "Next.js"],
  authors: [{ name: "Cole M. Puls" }],
  openGraph: {
    title: "Cole M. Puls",
    description: "Computer Science student at University of Missouri specializing in AI/ML, mobile development, and full-stack engineering.",
    type: "website",
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
