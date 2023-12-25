import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src') // @代替src
    }
  },
  define: {
    'process.env': {}
  },
  server: {
    port: 9527,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'http://10.11.32.179:8080', //
        target: 'https://tbt-dev.lab.zjvis.net/api', // demo server
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})
