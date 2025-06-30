"use client";

import ReactPlayer from "react-player";

export default function VideoProfileSection() {
  return (
    <section className="pb-16 lg:pb-24 bg-primary to-primary relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Video Container */}
          <div className="bg-accent rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="relative">
              {/* Video Player Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video">
                  <ReactPlayer
                    url="https://youtu.be/ZnfsPdWMX9E?si=vTDP1s_Sig3k3J2X" // Replace with actual video URL
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    muted={true}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12 lg:mt-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Video Profile <br className="block lg:hidden" />{" "}
                <span className="text-primary">Kampung Tugu</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
                  Sebuah persembahan visual yang merekam pesona sejarah Kampung
                  Tugu dari sudut-sudut yang jarang tersorot. Melalui tradisi
                  Rabo-Rabo, Mandi-Mandi, alunan Musik Keroncong Tugu, hingga
                  kisah-kisah sejarah lainnya, video ini menampilkan kekayaan
                  identitas lokal yang terus terjaga dan lestari hingga kini.
                </p>
                <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mt-4">
                  Selamat datang di Kampung Tugu, selamat menjelajah dan
                  merasakan keistimewaannya!
                </p>
              </div>
            </div>
          </div>

          {/* Section Header */}
          {/* <div className="text-center mt-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Video Profile
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
                Video ini memperkenalkan Kampung Tugu sebagai salah satu kampung
                bersejarah di Jakarta Utara yang kaya akan warisan budaya.
                Melalui tradisi unik seperti Rabo-Rabo dan Mandi-Mandi, serta
                musik keroncong khas Tugu, video ini menggambarkan kekayaan
                identitas lokal yang masih hidup hingga kini.
              </p>
              <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mt-4">
                Disajikan secara menarik dan informatif, video ini juga membuka
                ruang kolaborasi bagi pihak-pihak yang ingin lebih mengenal atau
                terlibat dalam pelestarian budaya Kampung Tugu.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
