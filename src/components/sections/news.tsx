"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { newsData, type NewsItem } from "@/lib/news-data";
import Image from "next/image";
// import { newsData, type NewsItem } from "@/lib/news-data";

function NewsCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="h-48 w-full" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
}

function NewsCardSmallSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-3 p-3">
          <Skeleton className="h-16 w-16 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export default function NewsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setNews(newsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const latestNews = news.slice(news.length - 2, news.length);
  const olderNews = news.slice(0, news.length - 3);

  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 flex justify-center">
            {/* <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wide">
                News
              </span>
            </div> */}
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground bg-accent mx-auto py-4 px-16 rounded-lg inline-block">
              Kabar Terbaru dari{" "}
              <span className="text-primary"> Kampung Tugu</span>
            </h2>
            {/* <p className="text-primary-foreground/90 text-lg mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p> */}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {isLoading ? (
                <>
                  <NewsCardSkeleton />
                  <NewsCardSkeleton />
                </>
              ) : (
                latestNews.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg border-none bg-accent transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={1000}
                          height={800}
                          className="w-full h-64 sm:h-80 object-cover text-primary-foreground"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-primary-foreground/80 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(item.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>5 min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-primary-foreground leading-relaxed mb-4">
                          {truncateText(item.description, 150)}
                          {item.description.length > 150 && (
                            <Link
                              href={`/news/${item.slug}`}
                              className="text-primary hover:text-primary/80 font-medium ml-1"
                            >
                              read more
                            </Link>
                          )}
                        </p>
                        <Link href={`/news/${item.slug}`}>
                          <Button
                            variant="outline"
                            className="group bg-primary text-primary-foreground hover:bg-primary/90 border-none"
                          >
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Older News - Right Side */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary-foreground">
                Berita Lainnya
              </h3>
              <div className="space-y-4 max-h-[1123px] max overflow-auto flex items-center gap-3 md:block pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                {/* <div className="space-y-4 max-h-[1128px] max overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"> */}
                {isLoading ? (
                  <>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <NewsCardSmallSkeleton key={index} />
                    ))}
                  </>
                ) : (
                  <>
                    {olderNews.map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.slug}`}
                        className=" min-w-[300px]"
                      >
                        <Card className="overflow-hidden hover:shadow-md bg-accent w-full h-full transition-shadow duration-300 border-none cursor-pointer md:mb-3">
                          <CardContent className="p-0">
                            <div className="block md:flex gap-3 p-3">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                width={1000}
                                height={800}
                                className="h-full md:h-16 w-full aspect-[16/9] md:w-16 object-cover text-primary-foreground rounded-lg flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1 text-primary-foreground/80 text-xs mb-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{formatDate(item.date)}</span>
                                </div>
                                <h4 className="font-semibold text-primary-foreground text-sm line-clamp-2 mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-primary-foreground/90 text-xs line-clamp-2">
                                  {truncateText(item.description, 80)}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                    {olderNews.length > 0 && (
                      <div className="text-center py-4 w-full">
                        <p className="text-primary-foreground text-sm w-full">
                          Semua berita telah dimuat
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
