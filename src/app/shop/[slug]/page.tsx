import { getAllProducts } from "@/service/get-product";
import ProductClient from "./ProductClient";

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

export async function generateStaticParams() {
  const products = await getAllProducts();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return products.data.map((product: any) => ({
    slug: product.slug,
  }));
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
