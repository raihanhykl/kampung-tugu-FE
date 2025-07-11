import { getAllProducts } from "@/service/get-product";

export interface Image {
  id: number;
  url: string;
  alt: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: Image[];
  store: {
    store_name: string;
    whatsapp: string;
  };
  category: string;
  slug: string;
  is_featured: boolean;
}

export const productCategories = [
  "Kerajinan Tangan",
  "Kuliner",
  "Pakaian",
  "Aksesoris",
  "Souvenir",
  "Musik",
];

export const productData: Product[] = await getAllProducts()
  .then((data) => {
    if (data.status === "OK") {
      return data.data as Product[];
    }
    throw new Error("Failed to fetch product data");
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
    return [];
  });

export function getProductBySlug(slug: string): Product | undefined {
  return productData.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productData?.filter((product) => product.is_featured == true);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
