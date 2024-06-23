import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/shared/navbar/navbar";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Keep - Complex Reuseable Components.",
  description: "Build with Next Js, TypeScript, Tailwind CSS & Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
