// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lyt71.github.io',
  assetPrefix: '/lyt71.github.io/',
  trailingSlash: true,
};

export default nextConfig;

