import Navbar from "@/app/components/Navbar/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    <html lang='en'>
      <GoogleAnalytics gaId='AW-577421862' />
      <Toaster />
      <body
        className={`${inter.className} min-w-screen w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
