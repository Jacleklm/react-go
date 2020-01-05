const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {

  app.use(proxy('/backend', 
    {
        "target": "http://localhost:3000/",
        "changeOrigin": true,
        "pathRewrite": {
          "^/backend": "/"

         }
    }))
    
    //app.use(proxy(...)) //可以配置多个代理
}