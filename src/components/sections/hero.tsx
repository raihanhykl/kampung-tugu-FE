"use client";

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate visitor counter - in real app, this would come from analytics API
      const getVisitorCount = async () => {
        const today = new Date().toDateString();
        const storageKey = `visitors_${today}`;

        let count = localStorage.getItem(storageKey);
        if (!count) {
          const res = await axios.post(
            process.env.NEXT_PUBLIC_POST_VISITOR || ""
          );
          console.log("ini respon post visitor: ", res);
          // count = (Math.floor(Math.random() * 50) + 120).toString();
          if (!res) {
            count = "0";
          }
          count = res.data.data.total_count || "0";
          localStorage.setItem(storageKey, count!.toString());
        }

        const res = await axios.get(process.env.NEXT_PUBLIC_GET_VISITOR || "");
        console.log("ini respon get visitor: ", res);
        // const newCount = Number.parseInt(count) + 1;
        const newCount = res.data.data.total_visitors;
        localStorage.setItem(storageKey, newCount.toString());

        return newCount;
      };

      // const getVisitorCount1 = () =>{
      //   const
      // }

      // Animate counter on load
      const finalCount = await getVisitorCount();
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
    };
    fetchData();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              {/* <span className="block text-accent text-shadow-xs text-shadow-white"> */}
              <span className="block">SELAMAT DATANG</span>
              <span className="block text-accent-foreground mt-2 sm:mt-4">
                DI WEBSITE RESMI KAMPUNG TUGU
              </span>
            </h1>

            {/* Subtitle/Description */}
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-white/90 sm:text-lg md:text-xl lg:text-xl leading-relaxed font-medium">
                Temukan kisah, budaya, dan warisan sejarah yang hidup di tengah
                Jakarta melalui tradisi dan kehidupan masyarakat Tugu
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 sm:mt-12 flex sm:flex-row gap-4 justify-center items-center">
              <Link
                href={"#history"}
                className="bg-accent hover:bg-accent/90 text-primary-foreground px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto"
              >
                Jelajahi Sejarah
              </Link>
              <button className=" border-accent text-accent bg-white border-2 hover:bg-white/90 px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto">
                Tonton Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Counter - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20">
        <div className="bg-accent/90 backdrop-blur-sm border border-accent rounded-lg px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary">
              <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-primary-foreground font-medium">
                Pengunjung Hari Ini
              </p>
              <p className="text-lg sm:text-xl font-bold text-primary-foreground">
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
