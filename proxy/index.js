const httpProxy = require('http-proxy');
const http = require('follow-redirects').http;
const url = require('url');

const proxy = httpProxy.createProxyServer({
  target:'http://target.com:1984',
  cookieDomainRewrite: 'target.com',
  changeOrigin: true,
});

// proxy.on('proxyReq', function(proxyReq, req, res, options) {
//     proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
// });

proxy.on('proxyRes', function (proxyRes, req, res) {
  const initialHost = req.headers.referer;
  const parsedUrl = url.parse(proxyRes.headers.location);
  const path = parsedUrl.path.substring(1);

  proxyRes.headers.location = initialHost + path;
});



http.createServer(function (req, res) {
  proxy.web(req, res);
}).listen(1983);