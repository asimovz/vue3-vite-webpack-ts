import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import { resolve } from 'path'

export default ({ command, mode }) => {
  const { VITE_APP_API, VITE_STATIC_URL, VITE_APP_TITLE } = loadEnv(mode, process.cwd())

  return defineConfig({
    base: VITE_STATIC_URL,
    plugins: [
      vue(),
      vueJsx(),
      viteCompression(),
      injectHtml({
        injectData: {
          VITE_APP_API,
          VITE_APP_TITLE,
          htmlWebpackPlugin: null,
        },
      }),
    ],
    resolve: {
      alias: {
        //路径别名
        '@': resolve(__dirname, './src'),
        'assets': resolve(__dirname, './src/assets'),
      },
    },
    css: {
      // modules: {
      //   localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
      // },
      preprocessorOptions: {
        // scss: { additionalData: `@import "@/styles/vars.scss";` },
        // less: {
        //   javascriptEnabled: true,
        //   additionalData: `@import "@/styles/default.less";`
        // }
      },
    },

    server: {
      port: 4000,
      fs: {
        strict: false,
      },
    },
    build: {
      manifest: false,
      cssCodeSplit: true,
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: ext => {
            let extType = ext.name.split('.')[1]
            return extType == 'css' ? 'css/[name]-[hash].[ext]' : 'images/[name].[ext]'
          },
        },
      },
    },
  })
}
