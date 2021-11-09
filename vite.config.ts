import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import { injectHtml } from 'vite-plugin-html'
import { resolve } from 'path'

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	return defineConfig({
		plugins: [
			vue(),
			vueJsx(),
			viteCompression(),
			injectHtml({
				injectData: {
					...env,
					htmlWebpackPlugin: null,
				},
			}),
		],
		resolve: {
			alias: {
				//路径别名
				'@': resolve(__dirname, 'src'),
				assets: resolve(__dirname, 'src/assets'),
			},
		},
		server: {
			fs: {
				strict: false,
			},
		},
		build: {
			manifest: true,
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
						return extType == 'css'
							? 'css/[name]-[hash].[ext]'
							: 'images/[name].[ext]'
					},
				},
			},
		},
	})
}
