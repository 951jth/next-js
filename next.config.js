/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

const nextConfig = withAntdLess({
  reactStrictMode: true,
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
