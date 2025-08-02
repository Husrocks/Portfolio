/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'export',
  trailingSlash: true,
  // Dynamically set base path based on repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio'}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio'}` : '',
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

export default nextConfig;
