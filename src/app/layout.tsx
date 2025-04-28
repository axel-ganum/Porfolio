import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axel Ganum | Desarrollador Web Freelance",
  description: "Landing pages modernas con Next.js y Tailwind CSS.",
  metadataBase: new URL("https://tusitio.com"), // reemplazalo por tu dominio real cuando lo tengas
  openGraph: {
    title: "Axel Ganum | Desarrollador Web Freelance",
    description: "Landing pages modernas con Next.js y Tailwind CSS.",
    url: "https://tusitio.com",
    siteName: "Axel Ganum Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Axel Ganum Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Ganum | Desarrollador Web Freelance",
    description: "Landing pages modernas con Next.js y Tailwind CSS.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
