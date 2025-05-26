"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "HISTORY", href: "/history" },
  { name: "VIDEO PROFILE", href: "/video-profile" },
  { name: "STORYBOOK", href: "/storybook" },
  { name: "ANIMATION", href: "/animation" },
  { name: "SHOP", href: "/shop" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg">
              {/* <span className="text-lg font-bold text-primary-foreground">
                KT
              </span> */}
              <Image
                src="/icon/logo-nobg.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-16 w-16"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">
                Kampung Tugu
              </h1>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-lg font-bold text-foreground">
                Kampung Tugu
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mx-3 my-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <span className="text-sm font-bold text-primary-foreground">
                        KT
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground">
                      Kampung Tugu
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
