import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images : {
    remotePatterns:[
      {
        protocol : 'https',
        hostname : 'yangpa.azurewebsites.net/'
      }
    ]
  }
};

export default nextConfig;
