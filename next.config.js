module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cloud-tech.s3.ap-south-1.amazonaws.com",
      "of8wybu5c3.execute-api.ap-south-1.amazonaws.com"
    ]
  },
  async redirects() {
    return [
      {
        source: '/article/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
