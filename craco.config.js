const path = require('path')

module.exports = {
  webpack: {
    alias: {
      // @ 表示src文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}