// app/news/[slug]/page.tsx

export const revalidate = 60;

import { getAllNews } from "@/service/get-news";
import NewsClient from "./NewsClient";

export async function generateStaticParams() {
  const newsList = await getAllNews();

  if (!newsList || !Array.isArray(newsList.data)) {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return newsList.data.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return <NewsClient slug={slug} />;
}
