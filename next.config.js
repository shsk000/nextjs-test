/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { bootstrap } = require("global-agent");
process.env.GLOBAL_AGENT_HTTP_PROXY = "http://172.23.240.1:8866";
bootstrap();

module.exports = nextConfig;
