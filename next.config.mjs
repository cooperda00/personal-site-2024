/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // TODO : old sitemap routes should now direct to the anchor links on /
      // Wildcard everything else to /
      {
        source: '/skills',
        destination: '/#skills',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
