<template>
	<div class="LoginContainer">
		<div class="Login">
			<div class="L-left-Logo">
				<img src="../../../public/static/img/System-Logo.png" alt="我是个logo">
			</div>
			<div class="L-right-Form">
				<div class="LoginTitle">
					妖怪系统登录
				</div>
				<div class="Logincontent">
					<el-form ref="form" :model="LoginForm" label-width="auto" :label-position="labelPosition" :size="size">
						<el-input v-model="LoginForm.UserName" prefix-icon="User" placeholder="请输入账户名" />
						<br>
						<br>
						<el-input type="password" v-model="LoginForm.PassWord" prefix-icon="Lock" placeholder="请输入密码" />
						<!-- 记住密码 -->
						<el-checkbox v-model="rememberSysUser">记住账户密码</el-checkbox>
						<el-form-item>
							<el-button type="primary" class="LoginSubmit" @click="SubmitLogin">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
		<div class="footer">
			&copy;&nbsp;{{Copyright}}&nbsp;&nbsp;{{utils.Year}}
			<div v-show="false" style="position: fixed;bottom: 0;right: 0;">
				<el-radio-group v-model="size" label="size control">
					<el-radio-button label="large">large</el-radio-button>
					<el-radio-button label="default">default</el-radio-button>
					<el-radio-button label="small">small</el-radio-button>
				</el-radio-group>
				<el-radio-group v-model="labelPosition" label="position control">
					<el-radio-button label="left">Left</el-radio-button>
					<el-radio-button label="right">Right</el-radio-button>
					<el-radio-button label="top">Top</el-radio-button>
				</el-radio-group>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	// import {ElLoading} from 'element-plus'
	import utils from '../../utils/index.js'
	import {
		Base64
	} from 'js-base64'
	import {
		useRouter
	} from 'vue-router'
	import axios from 'axios';
	const Copyright = ref('')
	onMounted(() => {
		Copyright.value = '妖怪得懒癌管理系统'
		//-----------------检测是否保存密码--------------------
		let userid = localStorage.getItem('MonsterUserID')
		if (userid) {
			LoginForm.UserName = localStorage.getItem('MonsterUserID');
			LoginForm.PassWord = Base64.decode(localStorage.getItem('MonsterUserPassWord')); // base64解密
			//SubmitLogin()
		}
	})

	// 提交框输入大小
	const size = ref('large')
	const labelPosition = ref('right')

	//-------------登录账户密码设置及登录---------------
	const router = useRouter()
	const rememberSysUser = ref(true)
	const LoginForm = reactive({
		UserName: '',
		PassWord: '',
	})
	const SubmitLogin = () => {
		axios.post('api/Login', LoginForm).then((e) => {
			if (e.data.code == 200) {
				router.push('Index')
				rememberUser()
				utils.showSuccess('登陆成功,欢迎使用!')
			} else {
				utils.showWarning('账户或密码错误!')
			}
		}).catch((e) => {
			console.log(JSON.stringify(e))
		})
		// console.log(import.meta.env.VITE_BASE_API)
	}
	//记住账户密码
	const rememberUser = () => {
		if (rememberSysUser.value) {
			let password = Base64.encode(LoginForm.PassWord); // base64加密
			localStorage.setItem('MonsterUserID', LoginForm.UserName);
			localStorage.setItem('MonsterUserPassWord', password);
		} else {
			localStorage.removeItem('MonsterUserID')
			localStorage.removeItem('MonsterUserPassWord')
		}
	}
</script>

<style>
	@import url('../../styles/Login/Login.css');
</style>