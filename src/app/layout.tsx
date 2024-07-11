import Navbar from "@/app/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo Landing Page",
  description: "LeonardoBySujimoto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-w-screen w-screen overflow-x-hidden`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
