import type { Metadata } from "next";
import "./globals.css";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Mohamed Elsayed Farid | Front-End Engineer",
  description: "Portfolio of Mohamed Elsayed Farid, an experienced Front-End Engineer specializing in React, Next.js, and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased dark", "font-sans", geist.variable)}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/30">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
