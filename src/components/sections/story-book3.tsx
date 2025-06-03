// components/FlipBook.tsx
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

type PageSize = {
  width: number;
  height: number;
};

const FlipBook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageSize, setPageSize] = useState<PageSize>({ width: 0, height: 0 });

  const aspectRatio = 1385 / 1968;
  const gradients = [
    <Image
      key={1}
      src="/story-book/1.jpg"
      alt="halaman 1"
      width={1385}
      height={1968}
    />,
    <Image
      key={2}
      src="/story-book/2.jpg"
      alt="halaman 2"
      width={1385}
      height={1968}
    />,
    <Image
      key={3}
      src="/story-book/3.jpg"
      alt="halaman 3"
      width={1385}
      height={1968}
    />,
    <Image
      key={4}
      src="/story-book/4.jpg"
      alt="halaman 4"
      width={1385}
      height={1968}
    />,
    <Image
      key={5}
      src="/story-book/5.jpg"
      alt="halaman 5"
      width={1385}
      height={1968}
    />,
    <Image
      key={6}
      src="/story-book/6.jpg"
      alt="halaman 6"
      width={1385}
      height={1968}
    />,
  ];

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const width = containerWidth;
      const height = containerWidth / aspectRatio;
      setPageSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className="bg-primary w-full flex items-center justify-center px-4 md:px-24">
        <div className="bg-accent px-8 py-4 md:px-16 md:py-8 rounded-lg shadow-lg w-full">
          <div className="flex flex-col justify-center items-start mx-auto px-4 gap-2">
            <div className="mx-auto text-start mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
                Story Book <br className="block lg:hidden" />{" "}
                <span className="text-primary">Kampung Tugu</span>
              </h2>{" "}
              <p className="text-sm text-primary-foreground/80 mt-1 text-start">
                *geser buku untuk melihat halaman selanjutnya
              </p>
            </div>
          </div>
          <div ref={containerRef} className=" mx-auto px-4">
            {pageSize.width > 0 && (
              <HTMLFlipBook
                width={pageSize.width}
                height={pageSize.height}
                style={{ margin: "0 auto" }}
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
                maxShadowOpacity={0.5}
                size="stretch"
                minWidth={200}
                maxWidth={600}
                minHeight={300}
                maxHeight={1900}
                showCover={false}
                mobileScrollSupport={true}
                className="flipbook-container"
              >
                {/* Contoh halaman */}
                {gradients.map((gradient, index) => (
                  <div
                    key={index}
                    className={`w-full h-full flex justify-center items-center text-white text-4xl font-bold`}
                  >
                    {gradient}
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </div>
          <div className="text-center mt-8 mx-auto max-w-4xl">
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              Storybook animation ini mengangkat sejarah dan budaya unik Kampung
              Tugu, kampung keturunan Portugis di Jakarta Utara. Melalui visual
              menarik dan narasi ringan, animasi ini memperkenalkan tradisi,
              musik, serta nilai kebersamaan yang tetap lestari hingga kini.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipBook;
