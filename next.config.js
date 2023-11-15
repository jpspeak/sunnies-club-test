/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

const withPWA = require('@imbios/next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true
      }
      if (isDev && !asset.name.startsWith('static/runtime/')) {
        return true
      }
      return false
    }
  ]
})

module.exports = withPWA({
  // next.js config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'umbra-digital.sgp1.digitaloceanspaces.com'
      }
    ]
  },
  async redirects() {
    return [
      process.env.MAINTENANCE_MODE === '1'
        ? {
            source: '/((?!maintenance).*)',
            destination: '/maintenance.html',
            permanent: false
          }
        : ({
            source: '/',
            destination: '/dashboard',
            permanent: true
          },
          {
            source: '/maintenance.html',
            destination: '/dashboard',
            permanent: true
          })
    ]
  },
  reactStrictMode: false
})
