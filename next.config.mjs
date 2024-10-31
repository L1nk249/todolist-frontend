const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel.live; frame-src 'self'; connect-src 'self' https://*.vercel.live; style-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;