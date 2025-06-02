import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/product-data";
import ProductCard from "../card/product-card";

export default function ShopSection() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="p-8 bg-accent w-[90%] mx-auto rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-primary rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-primary-foreground bg-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Produk Khas <span className="text-primary"> Kampung Tugu</span>
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Temukan berbagai produk unik dan otentik dari Kampung Tugu,
                mulai dari kerajinan tangan, kuliner tradisional, hingga
                souvenir eksklusif yang menjadi ciri khas budaya kami.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                <Link href="/shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Lihat Produk Lainnya
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
