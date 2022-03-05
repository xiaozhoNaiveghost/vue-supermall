module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 起别名
        "assets": '@/assets',
        "common": '@/common',
        "commponents": '@/components',
        "network": '@/network',
        "views": '@/views',
      }
    }
  }
}