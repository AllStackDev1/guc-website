module.exports = {
  target: 'serverless',
  trailingSlash: true,
  webpack: function (config) {
    config.externals = config.externals || {}
    return config
  }
}
