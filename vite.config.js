import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
//mode代表运行环境
//loadEnv在congfig中加载环境变量
//测试拉取
export default({mode})=>{
	const env = loadEnv(mode,process.cwd())
	return defineConfig({
	  plugins: [vue()],
	  server:{
		  proxy:{
			  '/api':{
				  target:env.VITE_BASE_API,//需要跳转的请求地址
				  changeOrigin:true,
				  rewrite:(path)=>path.replace('/\^/api/','')//  /API代表跳转的请求地址,后续请求只需要写对应的接口地址
			  }
		  }
	  },
	  base:'./',	//base中添加./解决iis发布网站在虚拟目录下面加载文件到到主域名根目录下的问题
	  
	})
} 
