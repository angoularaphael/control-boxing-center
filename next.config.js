/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'control-boxing-center.vercel.app' }],
        destination: 'https://control.boxingcenter.fr/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
