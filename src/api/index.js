import axios from 'axios'


const api = axios.create({
	// 你的api地址 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
	baseURL: 'http:********/api/',
	// 请求超时的毫秒数(0 表示无超时时间)
	timeout: 1000 * 3,
	// 自定义请求头
	headers: {
		'X-Custom-Header': 'foobar'
	}
})