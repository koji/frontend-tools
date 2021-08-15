module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  basePath: '',
  reactStrictMode: true,
};
