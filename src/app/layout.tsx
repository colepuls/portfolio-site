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
  title: "Cole M. Puls — Robotics, Embedded & AI/ML",
  description: "Computer Science student (Mizzou) focused on robotics & autonomy, embedded systems, and AI/ML.",
  keywords: [
    "Cole Puls",
    "Robotics",
    "Embedded Systems",
    "AI/ML",
    "TensorFlow",
    "PyTorch",
    "React Native",
    "Express",
    "Arduino",
    "Fusion 360",
    "ROS2"
  ],
  authors: [{ name: "Cole M. Puls" }],
  openGraph: {
    title: "Cole M. Puls — Robotics, Embedded & AI/ML",
    description: "Computer Science student (Mizzou) focused on robotics & autonomy, embedded systems, and AI/ML.",
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
