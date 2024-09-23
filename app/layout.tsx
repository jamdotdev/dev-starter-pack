import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Dev Starter Pack",
  description: "The essential startup starter kit",
  openGraph: {
    images: [
      {
        url: "https://devstarterpack.io/meta-preview.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://devstarterpack.io/" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
