/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import type { ReactNode } from "react";

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = React.forwardRef<
  HTMLDivElement,
  { children: ReactNode; number: number }
>(({ children, number }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white shadow-lg"
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
});
Page.displayName = "Page";

export default function StorybookSection() {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages] = useState(10);

  const nextPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  const resetBook = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(0);
    }
  };

  // const onFlip = (e: any) => {
  //   setCurrentPage(e.data);
  // };

  // Generate gradient backgrounds for pages
  const gradients = [
    "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500",
    "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600",
    "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500",
    "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500",
    "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
    "bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600",
    "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
    "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
    "bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600",
    "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600",
  ];

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-primary-foreground rounded-full"></div>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Storybook Animation
            </h2>
          </div>

          {/* E-book Container */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative flex justify-center">
              <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <HTMLFlipBook
                  width={960} // 16:9 ratio with height = 540
                  height={540}
                  style={{}}
                  size="stretch"
                  startPage={0}
                  drawShadow={true}
                  flippingTime={1000}
                  usePortrait={true}
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  minWidth={315}
                  maxWidth={2000}
                  minHeight={420}
                  maxHeight={1500}
                  maxShadowOpacity={0.5}
                  showCover={false}
                  mobileScrollSupport={true}
                  className="shadow-2xl rounded-xl overflow-hidden"
                >
                  {gradients.map((gradient, index) => (
                    <div
                      key={index}
                      className={`w-full h-full ${gradient} flex justify-center items-center text-white text-4xl font-bold`}
                    >
                      Page {index + 1}
                    </div>
                  ))}
                </HTMLFlipBook>
              </div>
              {/* <div style={{ width: "400px", height: "225px" }}>
                <HTMLFlipBook
                  ref={flipBook}
                  width={400}
                  height={225}
                  style={{}}
                  size="stretch"
                  minWidth={280}
                  maxWidth={400}
                  minHeight={157}
                  maxHeight={225}
                  maxShadowOpacity={0.5}
                  showCover={true}
                  mobileScrollSupport={false}
                  onFlip={onFlip}
                  className="shadow-2xl mx-auto"
                  startPage={0}
                  drawShadow={true}
                  flippingTime={600}
                  usePortrait={false}
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                >
                  <Page number={0}>
                    <div className="bg-gradient-to-br from-accent via-secondary to-primary w-full h-full flex items-center justify-center relative">
                      <div className="text-center text-white p-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                          Kampung Tugu
                        </h1>
                        <p className="text-lg sm:text-xl opacity-90">
                          Warisan Budaya Portugis
                        </p>
                        <div className="mt-8 w-16 h-1 bg-white mx-auto"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 text-white/70 text-sm">
                        Cover
                      </div>
                    </div>
                  </Page>

                  {gradients.map((gradient, index) => (
                    <Page key={index + 1} number={index + 1}>
                      <div
                        className={`${gradient} w-full h-full flex items-center justify-center relative`}
                      >
                        <div className="text-center text-white p-8">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                            Halaman {index + 1}
                          </h3>
                          <p className="text-base sm:text-lg opacity-90 max-w-md">
                            Konten cerita tentang sejarah dan budaya Kampung
                            Tugu akan ditampilkan di halaman ini.
                          </p>
                        </div>
                        <div className="absolute bottom-4 right-4 text-white/70 text-sm">
                          {index + 1} / {totalPages}
                        </div>
                      </div>
                    </Page>
                  ))}
                </HTMLFlipBook>
              </div> */}

              <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8">
                <Button
                  onClick={prevPage}
                  size="lg"
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-none backdrop-blur-sm rounded-full w-12 h-12 p-0"
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8">
                <Button
                  onClick={nextPage}
                  size="lg"
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-none backdrop-blur-sm rounded-full w-12 h-12 p-0"
                  disabled={currentPage >= totalPages}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-primary-foreground/80 text-sm">
                Halaman {currentPage + 1} dari {totalPages + 1}
              </div>
              <Button
                onClick={resetBook}
                size="sm"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <div className="bg-accent rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-foreground mb-6">
                  Tentang Storybook
                </h3>
                <p className="text-lg sm:text-xl text-accent-foreground/90 leading-relaxed max-w-4xl mx-auto">
                  Storybook animation ini mengangkat sejarah dan budaya unik
                  Kampung Tugu, kampung keturunan Portugis di Jakarta Utara.
                  Melalui visual menarik dan narasi ringan, animasi ini
                  memperkenalkan tradisi, musik, serta nilai kebersamaan yang
                  tetap lestari hingga kini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
