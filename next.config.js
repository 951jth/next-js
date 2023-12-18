/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

const nextConfig = withAntdLess({
  reactStrictMode: false,
  swcMinify: true,
  // lessVarsFilePathAppendToEndOfContent: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
