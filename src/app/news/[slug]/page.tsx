// app/news/[slug]/page.tsx

export const revalidate = 60;

// import { getAllNews } from "@/service/get-news";
import NewsClient from "./NewsClient";

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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <NewsClient slug={slug} />;
}
