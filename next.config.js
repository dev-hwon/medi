module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://clinic.medivalue.co.kr'
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    appDir: true,
  }
};