const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    liveReload: true,
    allowedHosts: 'all',
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
      options: {
        poll: 100,
        ignored: /node_modules/,
        usePolling: true,
        interval: 100,
        binaryInterval: 300
      }
    },
    client: {
      webSocketURL: 'ws://localhost:8080/ws',
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      watch: true
    },
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  },
  configureWebpack: {
    watchOptions: {
      poll: 100,
      ignored: /node_modules/
    }
  }
})
