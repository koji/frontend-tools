// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: 'default-src fetools.vercel.app',
//   },
// ];

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  basePath: '',
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};
