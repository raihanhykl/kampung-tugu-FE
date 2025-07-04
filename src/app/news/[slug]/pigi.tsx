"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar, User, Share2, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getNewsBySlug, type NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog";

function NewsDetailSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-12 w-full" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_GET_IMAGES || "https://sub.kampungtugu.site/api";

  useEffect(() => {
    const timer = setTimeout(() => {
      const newsItem = getNewsBySlug(params.slug as string);
      setNews(newsItem || null);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.slug]);

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

  const formatDate = (dateString: string) => {
    // Convert date string to Date object
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <NewsDetailSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Berita Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-6">
            Berita yang Anda cari tidak tersedia.
          </p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Berita
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(news.updated_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Oleh {news.author}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Tersalin!
                  </>
                ) : (
                  <>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              width={1000}
              height={800}
              src={imageBaseUrl + news.images[0].url || "/placeholder.svg"}
              alt={news.title}
              className="w-full h-full object-contain aspect-video rounded-2xl shadow-lg"
              //   className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {news.description}
                </p>
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {news.content}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Images */}
          {news.images && news.images.length > 1 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Galeri Foto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {news.images.slice(1).map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger>
                      <Image
                        key={index}
                        src={imageBaseUrl + image.url || "/placeholder.svg"}
                        alt={`${news.title} - Foto ${index + 2}`}
                        width={1000}
                        height={800}
                        className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <Image
                        src={imageBaseUrl + image.url || "/placeholder.svg"}
                        alt={`${news.title} - Foto ${index + 2}`}
                        width={1000}
                        height={800}
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Diterbitkan pada {formatDate(news.updated_at)} oleh{" "}
                  {news.author}
                </p>
              </div>
              <Button variant="outline" onClick={handleShare}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    URL Tersalin!
                  </>
                ) : (
                  <>
                    <Share2 className="mr-2 h-4 w-4" />
                    Bagikan Artikel
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
