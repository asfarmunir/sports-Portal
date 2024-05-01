/** @type {import('next').NextConfig} */
const nextConfig = {

    //  async rewrites() {
    //     return [
    //       {
    //         source: '/api/:path*',
    //         destination: 'https://api.example.com/:path*',
    //       },
    //     ]
    //   },
    images: {
    remotePatterns: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};
export default nextConfig;
