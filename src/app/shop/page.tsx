import React from "react";
import ShopPage from "./structure";
import { getSEOMetadata } from "@/lib/seo";

export const metadata = getSEOMetadata({
  title: "Kampung Tugu | Produk",
  description:
    "Temukan berbagai produk unik dan khas dari Kampung Tugu, sebuah desa bersejarah dengan budaya yang kaya dan tradisi yang terjaga.",
  keywords: [
    "kampung tugu",
    "produk desa",
    "budaya lokal",
    "tradisi",
    "kerajinan tangan",
    "produk khas",
    "desa bersejarah",
    "Indonesia",
  ],
  url: "https://kampungtugu.site/shop",
  image: "https://kampungtugu.site/images/hero.png",
  lang: "id",
});

export default function Page() {
  return (
    <>
      <ShopPage />
    </>
  );
}
