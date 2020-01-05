const express = require('express')
const bodyParser = require('body-parser')
const proxy = require('http-proxy-middleware')
const querystring = require('querystring')
const proxyConfig = require('./proxy.cofig')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpackDevServer.config')
const project = require('../config/project.config')


const app = express()

// make http proxy middleware setting
const createProxySetting = function (url) {
  return {
    target: url,
    changeOrigin: true,
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    onProxyReq: function (proxyReq, req) {
      if (req.method === 'POST' && req.body) {
        const bodyData = querystring.stringify(req.body)
        proxyReq.write(bodyData)
      }
    }
  }
}

// ------------------------------------
// Apply Webpack HMR Middleware 小组中间层的配置
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
// webpack_hmr
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr'
}))

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// proxy
proxyConfig.forEach(function (item) {
   app.use(item.url, proxy(createProxySetting(item.target)))
})

// eg: http://127.0.0.1:3000/back_end/oppor => http://10.2.0.1:8352/back_end/oppor 

module.exports = app.listen(project.server_port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = project.server_host + ':' + project.server_port
  console.log('Listening at ' + uri + '\n')
})