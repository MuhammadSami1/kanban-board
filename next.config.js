/** @type {import('next').NextConfig} */
const nextConfig = {
  // Learn SVGR configuration it is used to convert SVG to React components
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  },

  // also for SVGR
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        type: 'javascript/auto',
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        type: 'javascript/auto',
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    )

    // Modify the file loader rule to ignore

    return config
  },
  reactStrictMode: false,
  images: {
    domains: ['cdn.shopify.com'], // add the url of images here in case you want to use them in the app
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
