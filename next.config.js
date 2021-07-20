const optimizedImages = require('next-optimized-images')

module.exports = optimizedImages({
  target: 'serverless',
  trailingSlash: true,

  webpack: config => {
    config.externals = config.externals || {}
    return config
  }
})
