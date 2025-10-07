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

const siteUrl = "https://konishi-transport.jp"; // 本番環境のURLに置き換えてください

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "小西運送株式会社 | クリーンでハイテクな物流 | 三重県四日市市",
  description:
    "三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。一般貨物輸送、重量物輸送、特殊輸送に対応。",
  keywords: [
    "運送会社",
    "物流",
    "四日市市",
    "三重県",
    "環境配慮",
    "エコドライブ",
    "一般貨物輸送",
    "重量物輸送",
    "特殊輸送",
    "小西運送",
  ],
  authors: [{ name: "小西運送株式会社" }],
  creator: "小西運送株式会社",
  publisher: "小西運送株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "小西運送株式会社",
    title: "小西運送株式会社 | クリーンでハイテクな物流 | 三重県四日市市",
    description:
      "三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "小西運送株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "小西運送株式会社 | クリーンでハイテクな物流 | 三重県四日市市",
    description:
      "三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
