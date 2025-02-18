import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netcrest",
  description: "Software development company, web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
