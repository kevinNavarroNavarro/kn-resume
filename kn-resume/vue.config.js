const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    liveReload: true,
    allowedHosts: 'all',
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        poll: 1000,
        ignored: /node_modules/
      }
    },
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  }
})
