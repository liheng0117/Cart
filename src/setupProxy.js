const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/app', {
      target: 'http://vueshop.glbuys.com',
      changeOrigin: true,
      pathRewrite: {
        '^/app': '',
      },
    })
  )
}
