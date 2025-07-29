import  { Metadata } from "next";
import Link from "next/link";
import { Inter, Open_Sans } from "next/font/google";
import { Command } from "lucide-react";
import { motion } from "motion/react";
import "./globals.css";
import Navbar from "@/components/ui/navbar"

const inter = Inter({
  subsets: ["latin"],
});

const opensans = Open_Sans({
  subsets: ['latin']
});

  export const metadata: Metadata = {
    title: "MG",
    description: "Magudesh's Portfolio",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative max-w-[1440px] mx-auto`}
      > 
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
