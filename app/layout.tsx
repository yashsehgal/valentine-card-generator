import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentine Card Generator",
  description: "Simple & Beautiful Card generator for your loved one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
