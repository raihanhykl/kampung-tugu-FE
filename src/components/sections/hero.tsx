"use client";

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor counter - in real app, this would come from analytics API
    const getVisitorCount = () => {
      // Get today's date as key
      const today = new Date().toDateString();
      const storageKey = `visitors_${today}`;

      // Get existing count or start from random base number
      let count = localStorage.getItem(storageKey);
      if (!count) {
        // Start with a realistic base number for a village website
        count = (Math.floor(Math.random() * 50) + 120).toString(); // 120-170 base visitors
        localStorage.setItem(storageKey, count.toString());
      }

      // Increment by 1 for this visit
      const newCount = Number.parseInt(count) + 1;
      localStorage.setItem(storageKey, newCount.toString());

      return newCount;
    };

    // Animate counter on load
    const finalCount = getVisitorCount();
    let currentCount = 0;
    const increment = Math.ceil(finalCount / 50);

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= finalCount) {
        currentCount = finalCount;
        clearInterval(timer);
      }
      setVisitorCount(currentCount);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Kampung Tugu Heritage Village"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">SELAMAT DATANG</span>
              <span className="block text-accent mt-2 sm:mt-4">
                WEBSITE RESMI KAMPUNG TUGU
              </span>
            </h1>

            {/* Subtitle/Description */}
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-white/90 sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">
                Temukan kisah, budaya, dan warisan sejarah yang hidup di tengah
                Jakarta melalui tradisi dan kehidupan masyarakat Tugu
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto">
                Jelajahi Sejarah
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto">
                Tonton Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Counter - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20">
        <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary">
              <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Pengunjung Hari Ini
              </p>
              <p className="text-lg sm:text-xl font-bold text-foreground">
                {visitorCount.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
