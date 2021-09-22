// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: 'default-src fetools.vercel.app',
//   },
// ];

const withPWA = require('next-pwa');

module.exports = withPWA({
  // pwa
  images: {
    domains: ['images.ctfassets.net'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  basePath: '',
  reactStrictMode: true,
  pwa: { dest: 'public' }, // pwa
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
});
