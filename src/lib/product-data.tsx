import { getAllProducts } from "@/service/get-product";

export interface Image {
  id: number;
  url: string;
  alt: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: Image[];
  store: {
    store_name: string;
    whatsapp: string;
  };
  category: string;
  slug: string;
  is_featured: boolean;
}

export const productCategories = [
  "Kerajinan Tangan",
  "Kuliner",
  "Pakaian",
  "Aksesoris",
  "Souvenir",
  "Musik",
];

// export const productData: Product[] = [
//   {
//     id: "1",
//     name: "Miniatur Gereja Tugu",
//     description:
//       "Miniatur Gereja Tugu yang dibuat dengan detail tinggi dari kayu jati berkualitas. Ukiran halus menggambarkan arsitektur khas bangunan bersejarah ini dengan skala 1:50. Cocok sebagai pajangan atau souvenir eksklusif yang menggambarkan warisan budaya Kampung Tugu.",
//     price: 350000,
//     images: [
//       "/images/hero.png",
//       "/placeholder.svg?height=400&width=400",
//       "/images/hero.png",
//     ],
//     store: {
//       name: "Galeri Kerajinan Tugu",
//       whatsapp: "6281234567890",
//     },
//     category: "Kerajinan Tangan",
//     slug: "miniatur-gereja-tugu",
//     featured: true,
//   },
//   {
//     id: "2",
//     name: "Kue Kering Gula Aren",
//     description:
//       "Kue kering tradisional dengan cita rasa khas gula aren Kampung Tugu. Dibuat dengan resep turun temurun menggunakan bahan-bahan alami berkualitas. Kemasan berisi 20 kue kering yang cocok untuk oleh-oleh atau camilan sehari-hari.",
//     price: 75000,
//     images: [
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     store: {
//       name: "Dapur Nyonya Tugu",
//       whatsapp: "6281234567891",
//     },
//     category: "Kuliner",
//     slug: "kue-kering-gula-aren",
//     featured: true,
//   },
//   {
//     id: "3",
//     name: "Kaos Keroncong Tugu",
//     description:
//       "Kaos dengan desain eksklusif bertema musik keroncong khas Tugu. Terbuat dari bahan katun combed 30s yang nyaman dipakai. Tersedia dalam berbagai ukuran dari S hingga XXL dengan warna hitam dan putih.",
//     price: 120000,
//     images: [
//       "/placeholder.svg?height=400&width=400",
//       "/placeholder.svg?height=400&width=400",
//     ],
//     store: {
//       name: "Tugu Merchandise",
//       whatsapp: "6281234567892",
//     },
//     category: "Pakaian",
//     slug: "kaos-keroncong-tugu",
//     featured: true,
//   },
//   {
//     id: "4",
//     name: "Gelang Etnik Tugu",
//     description:
//       "Gelang etnik dengan motif khas Kampung Tugu yang menggambarkan perpaduan budaya Portugis dan lokal. Terbuat dari tali tenun dan manik-manik kayu dengan aksen logam. Ukuran adjustable yang cocok untuk pria dan wanita.",
//     price: 85000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Aksesori Tugu",
//       whatsapp: "6281234567893",
//     },
//     category: "Aksesoris",
//     slug: "gelang-etnik-tugu",
//     featured: true,
//   },
//   {
//     id: "5",
//     name: "Gantungan Kunci Rebana",
//     description:
//       "Gantungan kunci berbentuk rebana mini, alat musik tradisional yang sering digunakan dalam pertunjukan musik di Kampung Tugu. Terbuat dari kuningan dengan detail ukiran yang halus.",
//     price: 45000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Souvenir Kampung Tugu",
//       whatsapp: "6281234567894",
//     },
//     category: "Souvenir",
//     slug: "gantungan-kunci-rebana",
//     featured: true,
//   },
//   {
//     id: "6",
//     name: "CD Album Keroncong Tugu",
//     description:
//       "Album musik keroncong khas Tugu yang berisi 12 lagu tradisional. Dibawakan oleh musisi asli Kampung Tugu dengan aransemen yang otentik. Termasuk booklet berisi lirik dan sejarah singkat setiap lagu.",
//     price: 95000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Tugu Music Store",
//       whatsapp: "6281234567895",
//     },
//     category: "Musik",
//     slug: "cd-album-keroncong-tugu",
//     featured: true,
//   },
//   {
//     id: "7",
//     name: "Tas Tenun Motif Tugu",
//     description:
//       "Tas tenun dengan motif khas Kampung Tugu yang dibuat dengan teknik tenun tradisional. Bahan berkualitas dengan lapisan dalam yang tahan air. Ukuran sedang yang cocok untuk kegiatan sehari-hari.",
//     price: 175000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Tenun Tugu",
//       whatsapp: "6281234567896",
//     },
//     category: "Aksesoris",
//     slug: "tas-tenun-motif-tugu",
//     featured: true,
//   },
//   {
//     id: "8",
//     name: "Dodol Betawi",
//     description:
//       "Dodol Betawi khas Kampung Tugu dengan cita rasa manis yang khas. Dibuat dengan bahan alami tanpa pengawet. Kemasan 250 gram yang praktis untuk oleh-oleh atau suguhan tamu.",
//     price: 55000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Dapur Nyonya Tugu",
//       whatsapp: "6281234567891",
//     },
//     category: "Kuliner",
//     slug: "dodol-betawi",
//     featured: true,
//   },
//   {
//     id: "9",
//     name: "Lukisan Kampung Tugu",
//     description:
//       "Lukisan cat air yang menggambarkan pemandangan Kampung Tugu dengan detail yang indah. Dibuat oleh seniman lokal dengan ukuran 30x40 cm. Sudah termasuk bingkai kayu sederhana.",
//     price: 450000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Galeri Seni Tugu",
//       whatsapp: "6281234567897",
//     },
//     category: "Kerajinan Tangan",
//     slug: "lukisan-kampung-tugu",
//     featured: true,
//   },
//   {
//     id: "10",
//     name: "Topi Anyaman Bambu",
//     description:
//       "Topi tradisional yang terbuat dari anyaman bambu dengan motif khas Kampung Tugu. Ringan dan nyaman dipakai untuk melindungi dari panas matahari. Ukuran adjustable yang cocok untuk berbagai ukuran kepala.",
//     price: 65000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Kerajinan Bambu Tugu",
//       whatsapp: "6281234567898",
//     },
//     category: "Aksesoris",
//     slug: "topi-anyaman-bambu",
//     featured: true,
//   },
//   {
//     id: "11",
//     name: "Kopi Tugu",
//     description:
//       "Kopi bubuk premium dengan biji pilihan dari perkebunan sekitar Kampung Tugu. Memiliki aroma khas dan rasa yang kuat. Kemasan 250 gram yang praktis untuk dinikmati di rumah.",
//     price: 85000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Dapur Nyonya Tugu",
//       whatsapp: "6281234567891",
//     },
//     category: "Kuliner",
//     slug: "kopi-tugu",
//     featured: false,
//   },
//   {
//     id: "12",
//     name: "Replika Alat Musik Keroncong",
//     description:
//       "Replika alat musik keroncong mini yang menjadi ciri khas musik Kampung Tugu. Dibuat dengan detail yang akurat dan bisa digunakan sebagai hiasan. Set terdiri dari 3 alat musik berbeda.",
//     price: 275000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Tugu Music Store",
//       whatsapp: "6281234567895",
//     },
//     category: "Souvenir",
//     slug: "replika-alat-musik-keroncong",
//     featured: false,
//   },
//   {
//     id: "13",
//     name: "Buku Sejarah Kampung Tugu",
//     description:
//       "Buku yang berisi sejarah lengkap Kampung Tugu dari masa kolonial hingga sekarang. Dilengkapi dengan foto-foto langka dan cerita dari penduduk lokal. Hardcover 200 halaman dengan kualitas cetak premium.",
//     price: 150000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Toko Buku Tugu",
//       whatsapp: "6281234567899",
//     },
//     category: "Souvenir",
//     slug: "buku-sejarah-kampung-tugu",
//     featured: false,
//   },
//   {
//     id: "14",
//     name: "Selendang Tenun Tugu",
//     description:
//       "Selendang tenun dengan motif khas Kampung Tugu yang dibuat dengan teknik tenun tradisional. Bahan katun berkualitas tinggi dengan ukuran 50x180 cm. Tersedia dalam berbagai pilihan warna.",
//     price: 125000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Tenun Tugu",
//       whatsapp: "6281234567896",
//     },
//     category: "Pakaian",
//     slug: "selendang-tenun-tugu",
//     featured: false,
//   },
//   {
//     id: "15",
//     name: "Patung Kayu Musisi Keroncong",
//     description:
//       "Patung kayu yang menggambarkan musisi keroncong khas Kampung Tugu. Dibuat dari kayu jati dengan detail ukiran yang halus. Tinggi 25 cm, cocok sebagai pajangan atau souvenir eksklusif.",
//     price: 320000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Galeri Kerajinan Tugu",
//       whatsapp: "6281234567890",
//     },
//     category: "Kerajinan Tangan",
//     slug: "patung-kayu-musisi-keroncong",
//     featured: false,
//   },
//   {
//     id: "16",
//     name: "Kue Cubit Gula Merah",
//     description:
//       "Kue cubit dengan cita rasa gula merah khas Kampung Tugu. Lembut dan manis, dibuat dengan resep tradisional turun temurun. Kemasan berisi 20 kue cubit yang cocok untuk camilan.",
//     price: 45000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Dapur Nyonya Tugu",
//       whatsapp: "6281234567891",
//     },
//     category: "Kuliner",
//     slug: "kue-cubit-gula-merah",
//     featured: false,
//   },
//   {
//     id: "17",
//     name: "Kalung Manik Tugu",
//     description:
//       "Kalung dengan manik-manik khas Kampung Tugu yang menggambarkan perpaduan budaya Portugis dan lokal. Terbuat dari manik-manik kayu dan batu dengan aksen logam. Panjang 45 cm dengan pengait aman.",
//     price: 95000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Aksesori Tugu",
//       whatsapp: "6281234567893",
//     },
//     category: "Aksesoris",
//     slug: "kalung-manik-tugu",
//     featured: false,
//   },
//   {
//     id: "18",
//     name: "Poster Vintage Kampung Tugu",
//     description:
//       "Poster vintage yang menggambarkan Kampung Tugu pada era 1950-an. Dicetak pada kertas berkualitas tinggi dengan ukuran A2. Cocok untuk dekorasi rumah atau kantor.",
//     price: 85000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Galeri Seni Tugu",
//       whatsapp: "6281234567897",
//     },
//     category: "Souvenir",
//     slug: "poster-vintage-kampung-tugu",
//     featured: false,
//   },
//   {
//     id: "19",
//     name: "Gitar Mini Keroncong",
//     description:
//       "Gitar mini keroncong yang merupakan replika alat musik tradisional Kampung Tugu. Ukuran 1/4 dari gitar keroncong asli, bisa dimainkan dengan 4 senar. Cocok untuk koleksi atau souvenir.",
//     price: 275000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Tugu Music Store",
//       whatsapp: "6281234567895",
//     },
//     category: "Musik",
//     slug: "gitar-mini-keroncong",
//     featured: false,
//   },
//   {
//     id: "20",
//     name: "Dompet Kulit Motif Tugu",
//     description:
//       "Dompet kulit asli dengan ukiran motif khas Kampung Tugu. Dibuat dengan kulit sapi berkualitas tinggi dan jahitan yang rapi. Memiliki 6 slot kartu, 2 kompartemen uang, dan 1 slot koin.",
//     price: 195000,
//     images: ["/placeholder.svg?height=400&width=400"],
//     store: {
//       name: "Kerajinan Kulit Tugu",
//       whatsapp: "6281234567900",
//     },
//     category: "Aksesoris",
//     slug: "dompet-kulit-motif-tugu",
//     featured: false,
//   },
// ];

// async function fetchProductData(): Promise<Product[]> {
//   try {
//     const data = await getAllProducts();
//     if (data.status === "OK") {
//       return data.data as Product[];
//     }
//     throw new Error("Failed to fetch product data");
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return [];
//   }
// }

// let productData: Product[] = [];

// (async () => {
//   productData = await fetchProductData();
// })();

export const productData: Product[] = await getAllProducts()
  .then((data) => {
    // console.log("Fetched product data:", data.data[0].images[0]);
    if (data.status === "OK") {
      return data.data as Product[];
    }
    throw new Error("Failed to fetch product data");
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
    return [];
  });

export function getProductBySlug(slug: string): Product | undefined {
  return productData.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productData?.filter((product) => product.is_featured == true);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
