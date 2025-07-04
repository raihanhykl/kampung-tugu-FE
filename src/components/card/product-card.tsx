import Link from "next/link";
import { PhoneIcon as WhatsappIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/product-data";
import type { Product } from "@/lib/product-data";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_GET_IMAGES || "https://sub.kampungtugu.site/api";
  const whatsappLink = `https://wa.me/${
    // product.price
    product.store.whatsapp
  }?text=Halo, saya tertarik dengan produk ${
    product.name
  } seharga ${formatPrice(product.price)}. Apakah masih tersedia?`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-primary-foreground">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={imageBaseUrl + product.images[0].url || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 md:h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {product.category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-foreground line-clamp-1">
              {product.name}
            </h3>
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="text-sm text-foreground/80 mb-2">
            Toko:{" "}
            <span className="font-medium">{product.store.store_name}</span>
          </p>
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
            {truncateText(product.description, 100)}
            {product.description.length > 100 && (
              <Link
                href={`/shop/${product.slug}`}
                className="text-primary hover:text-primary/80 font-medium ml-1"
              >
                Lihat Lengkap
              </Link>
            )}
          </p>
          <div className="flex flex-col gap-2">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto py-2 flex-1"
              size="sm"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-4 w-4" />
                Order Sekarang
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto py-2 flex-1 hover:bg-gray-200/40 hover:text-foreground"
              size="sm"
            >
              <Link href={`/shop/${product.slug}`}>Lihat Detail</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
