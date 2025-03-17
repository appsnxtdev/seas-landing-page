import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppsNxt Technologies",
  description: "Scaling Business for digital growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Best SaaS for Showroom & Inventory Management | AppsNxt Cloud</title>
        <meta name="description" content="AppsNxt Cloud Solutions offers the best SaaS for showroom management, vehicle inventory tracking, customer lead automation, and sales growth. Try now!" />
        <meta name="keywords" content="showroom management, vehicle inventory software, SaaS CRM, auto dealership CRM, customer lead management" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
