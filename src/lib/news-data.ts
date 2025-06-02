export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  images?: string[];
  date: string;
  author: string;
  category: string;
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Festival Keroncong Tugu 2024 Meriah Digelar di Kampung Tugu",
    description:
      "Festival musik keroncong tradisional Kampung Tugu kembali digelar dengan antusias warga dan wisatawan. Acara ini menampilkan berbagai grup keroncong lokal dan nasional.",
    content: `Festival Keroncong Tugu 2024 telah sukses digelar di Kampung Tugu, Jakarta Utara pada akhir pekan lalu. Acara yang berlangsung selama dua hari ini dihadiri oleh ribuan pengunjung dari berbagai daerah.
  
      Festival ini menampilkan lebih dari 20 grup keroncong dari seluruh Indonesia, dengan fokus utama pada pelestarian musik keroncong khas Tugu yang memiliki ciri khas percampuran budaya Portugis dan lokal.
  
      "Kami sangat bangga bisa menyelenggarakan festival ini kembali setelah beberapa tahun terhenti karena pandemi," ujar Ketua Panitia Festival, Bapak João da Silva.
  
      Selain pertunjukan musik, festival ini juga menampilkan pameran sejarah Kampung Tugu, kuliner khas, dan workshop musik keroncong untuk generasi muda.`,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    date: "2024-01-15",
    author: "Maria Santos",
    category: "Budaya",
    slug: "festival-keroncong-tugu-2024",
  },
  {
    id: "2",
    title: "Renovasi Gereja Tugu Dimulai untuk Pelestarian Warisan Sejarah",
    description:
      "Gereja Tugu yang berusia lebih dari 300 tahun akan direnovasi untuk menjaga kelestariannya sebagai bangunan bersejarah.",
    content: `Proyek renovasi Gereja Tugu, salah satu bangunan bersejarah tertua di Jakarta, resmi dimulai minggu ini. Renovasi ini bertujuan untuk melestarikan arsitektur asli gereja yang dibangun pada abad ke-17.
  
      Tim ahli konservasi dari berbagai institusi terlibat dalam proyek ini untuk memastikan renovasi dilakukan dengan standar internasional pelestarian bangunan bersejarah.
  
      Gereja Tugu merupakan saksi bisu sejarah komunitas Portugis di Jakarta dan menjadi pusat spiritual masyarakat Tugu hingga saat ini.`,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    date: "2024-01-10",
    author: "Pedro Mendes",
    category: "Sejarah",
    slug: "renovasi-gereja-tugu-2024",
  },
  {
    id: "3",
    title: "Workshop Tari Tradisional Tugu untuk Anak-Anak",
    description:
      "Program pelestarian budaya melalui workshop tari tradisional untuk generasi muda Kampung Tugu.",
    content:
      "Workshop tari tradisional Tugu digelar untuk anak-anak sebagai upaya pelestarian budaya...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-08",
    author: "Ana Silva",
    category: "Budaya",
    slug: "workshop-tari-tradisional-tugu",
  },
  {
    id: "4",
    title: "Kuliner Khas Kampung Tugu Raih Penghargaan",
    description:
      "Makanan tradisional Kampung Tugu mendapat pengakuan sebagai warisan kuliner Jakarta.",
    content:
      "Kuliner khas Kampung Tugu berhasil meraih penghargaan sebagai warisan kuliner Jakarta...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-05",
    author: "Carlos Santos",
    category: "Kuliner",
    slug: "kuliner-khas-kampung-tugu-penghargaan",
  },
  {
    id: "5",
    title: "Program Homestay Kampung Tugu Diluncurkan",
    description:
      "Inisiatif baru untuk mengembangkan wisata budaya melalui program homestay di rumah warga.",
    content:
      "Program homestay Kampung Tugu resmi diluncurkan untuk memberikan pengalaman autentik...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-03",
    author: "Isabel Rodrigues",
    category: "Pariwisata",
    slug: "program-homestay-kampung-tugu",
  },
  {
    id: "6",
    title: "Pameran Foto Sejarah Kampung Tugu",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/images/hero.png",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "7",
    title: "Pameran Foto Sejarah Kampung Tugu 7",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/images/image.png",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu-7",
  },
  {
    id: "8",
    title: "Pameran Foto Sejarah Kampung Tugu-8",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/images/dummy-1.jpeg",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu-8",
  },
  {
    id: "9",
    title: "Pameran Foto Sejarah Kampung Tugu-9",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/images/dummy-2.jpeg",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu-9",
  },
  {
    id: "10",
    title: "Pameran Foto Sejarah Kampung Tugu-10",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "11",
    title: "Pameran Foto Sejarah Kampung Tugu-11",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "12",
    title: "Pameran Foto Sejarah Kampung Tugu 12",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "13",
    title: "Pameran Foto Sejarah Kampung Tugu 13",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "14",
    title: "Pameran Foto Sejarah Kampung Tugu 14",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "15",
    title: "Pameran Foto Sejarah Kampung Tugu-15",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/images/hero.png",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
  {
    id: "16",
    title: "Pameran Foto Sejarah Kampung Tugu 16",
    description:
      "Pameran foto dokumenter menampilkan perjalanan sejarah Kampung Tugu dari masa ke masa.",
    content:
      "Pameran foto sejarah Kampung Tugu menampilkan koleksi foto langka dari berbagai periode...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Manuel Costa",
    category: "Sejarah",
    slug: "pameran-foto-sejarah-kampung-tugu",
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((news) => news.id === id);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((news) => news.slug === slug);
}
