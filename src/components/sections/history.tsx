/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const historyImages = [
//   {
//     src: "/images/hero.png",
//     alt: "Gereja Tugu - Bangunan bersejarah abad ke-17",
//     caption: "Gereja Tugu - Warisan arsitektur Portugis abad ke-17",
//   },
//   {
//     src: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8c47/live/5be20460-c06a-11ef-9afd-01b1de0b2675.jpg.webp",
//     alt: "Rumah tradisional masyarakat Tugu",
//     caption: "Rumah tradisional dengan arsitektur khas Tugu",
//   },
//   {
//     src: "/placeholder.svg?height=600&width=800",
//     alt: "Pertunjukan musik Keroncong Tugu",
//     caption: "Musik Keroncong Tugu - Tradisi musik yang hidup",
//   },
// ];

// export default function HistorySection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % historyImages.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % historyImages.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + historyImages.length) % historyImages.length
//     );
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="py-16 lg:py-24 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 order-2 lg:order-1">
//             <div>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//                 Tentang <span className="text-primary">Kampung Tugu</span>
//               </h2>

//               <div className="space-y-4 text-muted-foreground leading-relaxed">
//                 <p className="text-base sm:text-lg">
//                   Kampung Tugu adalah sebuah kawasan bersejarah yang terletak di
//                   Jakarta Utara, dikenal sebagai permukiman keturunan Portugis
//                   tertua di Indonesia. Didirikan pada abad ke-17 oleh para budak
//                   Kristen asal Malaka yang dibebaskan oleh VOC, mereka kemudian
//                   menetap di wilayah ini dan membentuk komunitas unik yang
//                   dikenal sebagai Orang Tugu. Jejak sejarah ini masih hidup
//                   dalam budaya, arsitektur, dan tradisi yang diwariskan
//                   turun-temurun.
//                 </p>

//                 <p className="text-base sm:text-lg">
//                   Selama lebih dari tiga abad, Kampung Tugu menjadi pusat
//                   warisan budaya yang langka di tengah modernisasi Jakarta.
//                   Musik Keroncong Tugu, tradisi Rabo-Rabo, dan keberadaan Gereja
//                   Tugu menjadi simbol kuat identitas dan ketahanan budaya
//                   komunitas ini. Kampung Tugu bukan hanya saksi sejarah
//                   kolonial, tetapi juga bukti nyata bagaimana harmoni lintas
//                   budaya dapat tumbuh dan bertahan dalam bingkai lokal yang
//                   hangat.
//                 </p>
//               </div>
//             </div>

//             {/* Call to Action */}
//             {/* <div className="pt-4">
//               <Button
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
//                 size="lg"
//               >
//                 Pelajari Lebih Lanjut
//               </Button>
//             </div> */}
//           </div>

//           {/* Image Slider */}
//           <div className="relative order-1 lg:order-2">
//             <div className="relative overflow-hidden md:mt-16 rounded-2xl shadow-2xl bg-card">
//               {/* Main Image Container */}
//               <div className="relative h-64 sm:h-80 lg:h-96">
//                 {historyImages.map((image, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
//                       index === currentSlide ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     <Image
//                       src={image.src || "/placeholder.svg"}
//                       alt={image.alt}
//                       width={800}
//                       height={600}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                     {/* Image Caption */}
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <p className="text-white text-sm sm:text-base font-medium leading-tight">
//                         {image.caption}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors duration-200 backdrop-blur-sm"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors duration-200 backdrop-blur-sm"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex justify-center space-x-2 mt-6">
//               {historyImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-colors duration-200 ${
//                     index === currentSlide
//                       ? "bg-primary"
//                       : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Auto-play indicator */}
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                 className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
//               >
//                 {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

const historyImages = [
  {
    src: "/images/hero.png",
    alt: "Gereja Tugu - Bangunan bersejarah abad ke-17",
    caption: "Gereja Tugu - Warisan arsitektur Portugis abad ke-17",
  },
  {
    src: "https://lh6.googleusercontent.com/proxy/rhctbrZ5ehfc8aR6S7eUNE57u4c4AUdHOLSrmQEGvwRjiiQBpScgTc1gWoschY2ihuIwP3KlbXtc08sKEbkjNUB1p3jXgTea-Np-3Q3idUcg3i_EuP72EVpM_w4STjZ8ItzGb4KzeLjwsQPE_aalMK6ha1ub",
    alt: "Rumah tradisional masyarakat Tugu",
    caption: "Sejarah Kampung Tugu - Keturunan Portugis di Jakarta Utara",
  },
  {
    src: "https://img.antarafoto.com/cache/1200x800/2025/01/05/tradisi-mandi-mandi-warga-keturunan-portugis-kampung-tugu-1friq-dom.jpg",
    alt: "Pertunjukan musik Keroncong Tugu",
    caption:
      "Tradisi Mandi-Mandi - Ritual tahunan warga keturunan Portugis Kampung Tugu",
    // caption: "Musik Keroncong Tugu - Tradisi musik yang hidup",
  },
];

export default function HistorySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: feature2Ref, inView: feature2InView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setIsAutoPlaying(false);
    }
  };

  return (
    <section ref={feature2Ref} className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={cn(
              "space-y-6 bg-accent px-8 py-6 rounded-lg shadow-2xl order-2 transition-all duration-1000 transform",
              feature2InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            )}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Tentang <span className="text-primary">Kampung Tugu</span>
              </h2>

              <div className="space-y-4 text-white leading-relaxed">
                <p className="text-base sm:text-lg">
                  Kampung Tugu adalah sebuah kawasan bersejarah yang terletak di
                  Jakarta Utara, dikenal sebagai permukiman keturunan Portugis
                  tertua di Indonesia. Didirikan pada abad ke-17 oleh para budak
                  Kristen asal Malaka yang dibebaskan oleh VOC, mereka kemudian
                  menetap di wilayah ini dan membentuk komunitas unik yang
                  dikenal sebagai Orang Tugu. Jejak sejarah ini masih hidup
                  dalam budaya, arsitektur, dan tradisi yang diwariskan
                  turun-temurun.
                </p>

                <p className="text-base sm:text-lg">
                  Selama lebih dari tiga abad, Kampung Tugu menjadi pusat
                  warisan budaya yang langka di tengah modernisasi Jakarta.
                  Musik Keroncong Tugu, tradisi Rabo-Rabo, dan keberadaan Gereja
                  Tugu menjadi simbol kuat identitas dan ketahanan budaya
                  komunitas ini. Kampung Tugu bukan hanya saksi sejarah
                  kolonial, tetapi juga bukti nyata bagaimana harmoni lintas
                  budaya dapat tumbuh dan bertahan dalam bingkai lokal yang
                  hangat.
                </p>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div
            className={cn(
              "relative order-1 transition-all duration-1000 transform",
              feature2InView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            )}
          >
            <Carousel
              setApi={setApi}
              className="w-full shadow-2xl rounded-2xl"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className=" shadow-2xl rounded-2xl">
                {historyImages.map((image, index) => (
                  <CarouselItem key={index} className="rounded-2xl">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card">
                      <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t rounded-2xl from-black/60 via-transparent to-transparent" />

                        {/* Image Caption */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm sm:text-base font-medium leading-tight">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom styled navigation buttons */}
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground border-none shadow-lg backdrop-blur-sm" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground border-none shadow-lg backdrop-blur-sm" />
            </Carousel>

            {/* Dots Indicator */}
            {/* <div className="flex justify-center space-x-2 mt-6">
              {historyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === current - 1
                      ? "bg-white "
                      : "bg-transparent border border-white hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}

            {/* Auto-play indicator */}
            {/* <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-accent-foreground hover:text-secondary hover:scale-105 transition-colors duration-200"
              >
                {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
