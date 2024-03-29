import type { Metadata } from "next";
import "./globals.css";
import { figTree } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Blog View Card",
  description: "Generated by Karim Ayman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figTree.variable} `}>{children}</body>
    </html>
  );
}
