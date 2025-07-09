import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kampung Tugu Official Website",
  description:
    "Kampung Tugu adalah sebuah kawasan bersejarah yang terletak di Jakarta Utara, dikenal sebagai permukiman keturunan Portugis tertua di Indonesia. Didirikan pada abad ke-17 oleh para budak Kristen asal Malaka yang dibebaskan oleh VOC, mereka kemudian menetap di wilayah ini dan membentuk komunitas unik yang dikenal sebagai Orang Tugu. Jejak sejarah ini masih hidup dalam budaya, arsitektur, dan tradisi yang diwariskan turun-temurun.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
