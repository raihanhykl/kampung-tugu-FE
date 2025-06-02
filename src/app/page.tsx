"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/sections/hero";
import HistorySection from "@/components/sections/history";
import NewsSection from "@/components/sections/news";
import ShopSection from "@/components/sections/shop";
import StorybookSection from "@/components/sections/story-book2";
import VideoProfileSection from "@/components/sections/video-profile";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="history" className="scroll-mt-16 md:scroll-mt-[73px]">
        <HistorySection />
      </div>
      <div id="videoProfile">
        <VideoProfileSection />
      </div>
      <div id="ebook">
        <StorybookSection />
      </div>
      <div id="news">
        <NewsSection />
      </div>
      <div id="shop">
        <ShopSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
