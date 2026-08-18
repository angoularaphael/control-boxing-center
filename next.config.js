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
      { source: '/favicon.ico', destination: '/favicon.svg', permanent: false },
    ];
  },
};

module.exports = nextConfig;
