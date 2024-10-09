import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const Plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soeifa Education",
  description:
    "The Digital emotionally intelligent Teaching Assistant that lets teachers be in more than one place at a time to scale collaborative and group-based learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Plus.className} antialiased  bg-bg`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
