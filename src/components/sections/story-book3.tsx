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
        <div className="bg-accent px-1 py-4 md:px-16 md:py-8 rounded-lg w-full shadow-2xl">
          <div className="flex flex-col justify-center items-start mx-auto px-4 gap-2">
            <div className="mx-auto text-start mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
                Buku Cerita Animasi <br className="block lg:hidden" />{" "}
                <span className="text-primary">Kampung Tugu</span>
              </h2>{" "}
              <p className="text-sm text-primary-foreground/80 mt-1 text-start">
                *geser buku untuk melihat halaman selanjutnya
              </p>
            </div>
          </div>
          <div ref={containerRef} className=" mx-auto px-0 md:px-4">
            {pageSize.width > 0 && (
              <HTMLFlipBook
                width={pageSize.width}
                height={pageSize.height}
                style={{ margin: "0 auto" }}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                maxShadowOpacity={0.5}
                size="stretch"
                minWidth={150}
                maxWidth={600}
                minHeight={300}
                maxHeight={1900}
                showCover={true}
                mobileScrollSupport={true}
                className="flipbook-container"
              >
                {/* Contoh halaman */}
                {Array.from({ length: 24 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-full h-full flex justify-center items-center text-white text-4xl font-bold`}
                  >
                    {/* {gradient} */}
                    <Image
                      key={index + 1}
                      src={`/storybook/${index + 1}.webp`}
                      alt={`Halaman ${index + 1}`}
                      width={1385}
                      height={1968}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </div>
          <div className="text-center mt-8 mx-auto px-4 md:px-0 max-w-4xl">
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              Buku Cerita Animasi Sejarah Kampung Tugu hadir sebagai jendela
              seru untuk mengenal budaya dan sejarah Kampung Tugu lewat cara
              yang menyenangkan. Dengan ilustrasi penuh warna dan cerita yang
              hangat, buku ini mengajak pembaca menyusuri jejak kehidupan
              masyarakat Tugu dari tradisi, musik keroncong, hingga kisah
              leluhur yang membentuk identitas kampung ini.
              <br /> <br />
              Penasaran seperti apa serunya? Yuk, buka halamannya dan temukan
              cerita yang mungkin belum pernah kamu dengar sebelumnya!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipBook;
