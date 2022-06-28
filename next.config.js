/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

const nextConfig = withAntdLess({
  images: {
    loader: "imgix",
    path: "https://workerxstaging.s3.ap-south-1.amazonaws.com/",
    domains: ["workerxstaging.s3.ap-south-1.amazonaws.com"],
  },
  lessVarsFilePath: "./stylesheet/less/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  reactStrictMode: true,

  webpack(config) {
    return config;
  },
});

module.exports = nextConfig;
