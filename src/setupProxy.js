const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // change this into localhost when testing on computer
      target: 'https://courxive.herokuapp.com',
      changeOrigin: true,
    })
  );
};