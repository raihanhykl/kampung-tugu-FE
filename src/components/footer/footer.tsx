import Link from "next/link";
import { Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "TikTok",
      href: "https://tiktok.com/@kampungtugu",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kampungtugu",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:info@kampungtugu.id",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6281234567890",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
    },
  ];

  const supportedBy = [
    {
      name: "Pemerintah DKI Jakarta",
      logo: "/placeholder.svg?height=60&width=120",
      alt: "Logo Pemerintah DKI Jakarta",
    },
    {
      name: "Kementerian Pariwisata",
      logo: "/placeholder.svg?height=60&width=120",
      alt: "Logo Kementerian Pariwisata",
    },
    {
      name: "Dinas Kebudayaan",
      logo: "/placeholder.svg?height=60&width=120",
      alt: "Logo Dinas Kebudayaan",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* About Us Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  KT
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">About Us</h3>
            </div>
            <p className="text-muted-foreground leading-normal text-sm sm:text-base line-clamp-4">
              Kampung Tugu adalah sebuah kampung bersejarah yang terletak di
              Semper Barat, Cilincing, Jakarta Utara. Kampung ini dikenal
              sebagai tempat tinggal masyarakat keturunan Portugis yang disebut
              masyarakat Tugu, hasil dari percampuran budaya Portugis dan lokal
              sejak abad ke-17.
            </p>
          </div>

          {/* Visit Us Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Visit Us
            </h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Jalan Raya Tugu No 20,
                <br />
                Kel. Semper Barat,
                <br />
                Kec. Cilincing,
                <br />
                Jakarta Utara
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link
                  href="https://maps.google.com/?q=Kampung+Tugu+Jakarta+Utara"
                  target="_blank"
                >
                  View on Maps
                </Link>
              </Button>
            </div>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Connect With Us
            </h3>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Supported By Section */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-evenly">
          <h3 className="text-lg font-bold text-foreground text-center">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {supportedBy.map((supporter, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-background rounded-lg border border-border hover:shadow-md transition-shadow duration-200"
              >
                <Image
                  src={supporter.logo || "/placeholder.svg"}
                  alt={supporter.alt}
                  width={500}
                  height={500}
                  className="h-10 w-auto sm:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2024 Kampung Tugu. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
