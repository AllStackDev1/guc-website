module.exports = {
  target: 'serverless',
  trailingSlash: true,
  images: {
    domains: ['images.prismic.io']
  },
  webpack: function (config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
}
