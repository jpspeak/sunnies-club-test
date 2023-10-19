// /** @type {import('next').NextConfig} */

// const isDev = process.env.NODE_ENV !== 'production'

// const withPWA = require('@imbios/next-pwa')({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   exclude: [
//     // add buildExcludes here
//     ({ asset, compilation }) => {
//       if (
//         asset.name.startsWith('server/') ||
//         asset.name.match(
//           /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
//         )
//       ) {
//         return true
//       }
//       if (isDev && !asset.name.startsWith('static/runtime/')) {
//         return true
//       }
//       return false
//     }
//   ]
// })

// module.exports = withPWA({
//   // next.js config
//   images: {
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com'
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn.shopify.com'
//       }
//     ]
//   },
//   reactStrictMode: false
// })

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'umbra-digital.sgp1.digitaloceanspaces.com'
      }
    ]
  },
  reactStrictMode: false
}
