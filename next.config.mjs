/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Default locale: send the bare root to the Italian site.
      { source: "/", destination: "/it", permanent: false },
    ];
  },
};

export default nextConfig;
