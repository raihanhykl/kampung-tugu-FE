// /lib/seo.ts
interface SEOParams {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: string;
  lang?: "id" | "en";
  alternateUrl?: string; // url versi bahasa lain
}

export function getSEOMetadata({
  title,
  description,
  keywords = [],
  url,
  image,
  lang = "id",
  alternateUrl,
}: SEOParams) {
  const siteName = "Kampung Tugu";
  const ogImage = image || "https://kampungtugu.site/images/hero.png"; // ganti dgn default gambar produk Anda

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: alternateUrl
        ? {
            id: "https://kampungtugu.site" + alternateUrl,
            en: "https://kampungtugu.site" + url.replace("/id", ""),
          }
        : undefined,
    },
  };
}
