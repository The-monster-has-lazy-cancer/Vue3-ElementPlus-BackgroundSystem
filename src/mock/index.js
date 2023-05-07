import ObjMock from 'mockjs'

//登录数据模拟
const Login = ObjMock.mock('api/Login', 'post', (P) => {
	let result = null
	let params = JSON.parse(P.body)
	console.log(P)
	console.log(params)
	if (params.UserName == 'admin' && params.PassWord == 'admin') {
		result = {
			code: 200,
			userRole: 'admin'
		}
	} else {
		result = {
			code: 400,
			userRole: null
		}
	}
	return result
})

export default {
	Login
}