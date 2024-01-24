import { ThemeProvider } from "@/components/themeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draw Mate",
  description: "Draw Names for Gift Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute="class" defaultTheme="system">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
