import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/sections/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[2000px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Selamat Datang di Kampung Tugu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desa yang kaya akan sejarah, budaya, dan tradisi. Jelajahi keindahan
            dan kearifan lokal yang telah terjaga selama berabad-abad.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
