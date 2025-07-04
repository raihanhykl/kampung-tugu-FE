import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "ichef.bbci.co.uk",
      "lh6.googleusercontent.com",
      "img.antarafoto.com",
      "sub.kampungtugu.site",
    ],
    unoptimized: true,
  },
  // experimental:{

  // },
  // output: "export",
  trailingSlash: true,
};

export default nextConfig;
