// const server = 'http://localhost:3000'
// const proxy = {
// 	'/api': { //  在开发环境中（dev），当去请求api目录的时候
// 		target: server,
// 		changeOrigin: true, // 是否跨域
//     // secure: true,
//     pathRewrite: { //  希望把路径做一个替换
// 			'^/api': '/', //  一旦请求的地址是以/app开头的，那么就替换请求到...中
// 		},
// 	},
// }

const domain = 'http://localhost:3000'

const proxy = [
  {
    url: '/back_end/*',
    target: domain,
  }
]

module.exports = proxy

