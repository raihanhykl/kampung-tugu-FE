// app/news/[slug]/page.tsx

export const revalidate = 60;

import { getNewsBySlug } from "@/lib/news-data";
// import { getAllNews } from "@/service/get-news";
import NewsClient from "./NewsClient";
import { getSEOMetadata } from "@/lib/seo";

// export async function generateStaticParams() {
//   const newsList = await getAllNews();

//   if (!newsList || !Array.isArray(newsList.data)) {
//     return [];
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return newsList.data.map((item: any) => ({
//     slug: item.slug,
//   }));
// }

export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "Berita tidak ditemukan - Kampung Tugu",
    };
  }

  return getSEOMetadata({
    title: `Kampung Tugu | ${news.title}`,
    description: news.description || "Berita dari Kampung Tugu.",
    keywords: [
      "kampung tugu",
      "Kabar Kampung Tugu",
      news.title,
      "Berita Kampung Tugu",
      "Sejarah Kampung Tugu",
    ],
    url: `https://kampungtugu.site/news/${slug}`,
    image: news.images?.[0]?.url || "https://kampungtugu.site/images/hero.png",
    lang: "id",
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <NewsClient slug={slug} />;
}
