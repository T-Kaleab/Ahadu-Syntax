const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md'],
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = withMarkdoc()(nextConfig)