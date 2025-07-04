"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowUpDown, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import {
  productData,
  productCategories,
  formatPrice,
} from "@/lib/product-data";
import type { Product } from "@/lib/product-data";
import ProductCard from "@/components/card/product-card";

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg bg-accent">
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Find min and max price from products
  const minPrice = 0;
  const maxPrice = 500000;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(async () => {
      const product = await productData;
      setProducts(product);
      setFilteredProducts(product);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort products
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default is featured
        result.sort((a, b) =>
          a.is_featured === b.is_featured ? 0 : a.is_featured ? -1 : 1
        );
    }

    setFilteredProducts(result);
  }, [products, searchQuery, sortOption, priceRange, selectedCategories]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSortOption("featured");
    setPriceRange([minPrice, maxPrice]);
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link
              href="/"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Home className="h-3.5 w-3.5 mr-1" />
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">Shop</span>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Produk Kampung Tugu
            </h1>
            <p className="text-muted-foreground">
              Jelajahi berbagai produk khas Kampung Tugu yang dibuat dengan
              keterampilan dan tradisi turun-temurun.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Cari produk..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Urutkan" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">
                    Harga: Rendah ke Tinggi
                  </SelectItem>
                  <SelectItem value="price-desc">
                    Harga: Tinggi ke Rendah
                  </SelectItem>
                  <SelectItem value="name-asc">Nama: A-Z</SelectItem>
                  <SelectItem value="name-desc">Nama: Z-A</SelectItem>
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filter Produk</SheetTitle>
                    <SheetDescription>
                      Sesuaikan pencarian produk Anda
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-6 space-y-6">
                    {/* Price Range Filter */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-foreground">
                        Rentang Harga
                      </h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={[minPrice, maxPrice]}
                          min={minPrice}
                          max={maxPrice}
                          step={10000}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {formatPrice(priceRange[0])}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {formatPrice(priceRange[1])}
                        </span>
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-foreground">Kategori</h3>
                      <div className="space-y-2">
                        {productCategories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(category, checked === true)
                              }
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <SheetFooter className="flex flex-row justify-between sm:justify-between">
                    <Button variant="outline" onClick={resetFilters}>
                      Reset Filter
                    </Button>
                    <SheetClose asChild>
                      <Button>Terapkan Filter</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Filter Tags */}
          {(searchQuery ||
            selectedCategories.length > 0 ||
            priceRange[0] > minPrice ||
            priceRange[1] < maxPrice) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {searchQuery && (
                <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm flex items-center">
                  <span className="mr-1">Pencarian:</span>
                  <span className="font-medium">{searchQuery}</span>
                  <button className="ml-2" onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}

              {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm flex items-center">
                  <span className="mr-1">Harga:</span>
                  <span className="font-medium">
                    {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </span>
                  <button
                    className="ml-2"
                    onClick={() => setPriceRange([minPrice, maxPrice])}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}

              {selectedCategories.map((category) => (
                <div
                  key={category}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <span className="mr-1">Kategori:</span>
                  <span className="font-medium">{category}</span>
                  <button
                    className="ml-2"
                    onClick={() => handleCategoryChange(category, false)}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              <button
                className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                onClick={resetFilters}
              >
                Reset Semua
              </button>
            </div>
          )}

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Tidak ada produk ditemukan
              </h3>
              <p className="text-muted-foreground mb-6">
                Coba ubah filter atau kata kunci pencarian Anda untuk menemukan
                produk yang Anda cari.
              </p>
              <Button onClick={resetFilters}>Reset Filter</Button>
            </div>
          )}

          {/* Results Count */}
          {!isLoading && filteredProducts.length > 0 && (
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Menampilkan {filteredProducts.length} dari {products.length}{" "}
              produk
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
