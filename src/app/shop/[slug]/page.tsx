// import { getAllProducts } from "@/service/get-product";

export const revalidate = 60;
import { getSEOMetadata } from "@/lib/seo";
import ProductClient from "./ProductClient";
import { getProductBySlug } from "@/lib/product-data";

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   const products = await getAllProducts();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return products.data.map((product: any) => ({
//     slug: product.slug,
//   }));
// }
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk tidak ditemukan - Kampung Tugu",
    };
  }

  return getSEOMetadata({
    title: `Kampung Tugu | ${product.name}`,
    description: product.description || "Produk unik dari Kampung Tugu.",
    keywords: [
      "kampung tugu",
      "produk desa",
      product.name,
      "kerajinan tangan",
      "produk khas",
    ],
    url: `https://kampungtugu.site/shop/${slug}`,
    image:
      product.images?.[0]?.url || "https://kampungtugu.site/images/hero.png",
    lang: "id",
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <ProductClient slug={slug} />
        </div>
      </div>
    </div>
  );
}
