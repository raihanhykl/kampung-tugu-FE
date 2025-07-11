/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Product, formatPrice, getProductBySlug } from "@/lib/product-data";
import {
  Share2,
  Check,
  ArrowLeft,
  ShoppingBag,
  Store,
  PhoneIcon as WhatsappIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function ProductClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_GET_IMAGES || "https://sub.kampungtugu.site/api";
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselApi = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      const productItem = await getProductBySlug(slug);
      if (isMounted) {
        setProduct(productItem || null);
        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Skeleton className="h-80 w-full rounded-lg bg-primary" />
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-20 rounded-md bg-primary" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4 bg-primary" />
          <Skeleton className="h-6 w-1/4 bg-primary" />
          <Skeleton className="h-4 w-1/2 bg-primary" />
          <div className="space-y-2 pt-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-4 w-full bg-primary" />
            ))}
          </div>
          <div className="pt-4 space-y-3">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-10 w-full bg-primary" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-muted-foreground mb-6">
          Produk yang Anda cari tidak tersedia.
        </p>
        <Button onClick={() => router.push("/shop")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Toko
        </Button>
      </div>
    );
  }

  function normalizeWhatsappNumber(raw: string): string {
    const cleaned = raw.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      return "62" + cleaned.slice(1);
    }
    if (cleaned.startsWith("62")) {
      return cleaned;
    }
    return "";
  }

  // Pemakaian:
  const whatsappNumber = normalizeWhatsappNumber(product.store.whatsapp);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan produk ${
    product.name
  } seharga ${formatPrice(product.price)}. Apakah masih tersedia?`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="p-0 h-auto hover:text-foreground hover:bg-transparent"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Gambar Produk */}
        <div className=" ">
          <Carousel
            className="w-full"
            setApi={(api: CarouselApi) => {
              carouselApi.current = api;
              api?.on("select", () => {
                setSelectedIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl cursor-pointer">
                          <Image
                            src={imageBaseUrl + image.url || "/placeholder.svg"}
                            alt={`${product.name} - Image ${index + 1}`}
                            className="w-full h-80 object-cover"
                            width={800}
                            height={600}
                          />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <Image
                        src={imageBaseUrl + image.url || "/placeholder.svg"}
                        alt={`Detail ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary" />
            <CarouselNext className="hover:bg-primary" />
          </Carousel>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${
                    index === selectedIndex ? "border-primary" : ""
                  }`}
                  onClick={() => carouselApi.current?.scrollTo(index)}
                >
                  <Image
                    src={imageBaseUrl + image.url || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className={cn(
                      "w-20 h-20 object-cover rounded-md border border-border cursor-pointer hover:border-primary",
                      selectedIndex === index && "border-primary"
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Produk */}
        <div className=" lg:ml-7">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
            {product.name}
          </h1>

          <div className="flex items-center justify-between my-4">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-gray-100 hover:text-black"
              onClick={handleShare}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Tersalin!
                </>
              ) : (
                <>
                  <Share2 className="mr-2 h-4 w-4" />
                  Bagikan
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Store className="h-4 w-4" />
            <span>Dijual oleh {product.store.store_name}</span>
          </div>

          <div className="rounded-lg p-4 mb-6">
            <h3 className="font-medium text-foreground mb-2">
              Deskripsi Produk
            </h3>
            <p className="text-foreground/80 whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full bg-primary text-white" size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full hover:bg-gray-100 hover:text-black"
              size="lg"
              onClick={() => router.push("/shop")}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Lihat Produk Lainnya
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
