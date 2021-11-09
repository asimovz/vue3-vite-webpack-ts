const config = api => {
	api.cache(true)
	const presets = [
		'@babel/preset-env',
		[
			'@babel/preset-typescript', // 引用Typescript插件
			{
				isTSX: true, // 支持tsx
				allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
			},
		],
	]

	const plugins = ['@vue/babel-plugin-jsx']
	return {
		presets,
		plugins,
	}
}

module.exports = config
