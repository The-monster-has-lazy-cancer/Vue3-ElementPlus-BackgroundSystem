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
					<el-form ref="form" :model="LoginForm" label-width="auto" :label-position="labelPosition"
						:size="size">
						<el-form-item>
							<el-input v-model="LoginForm.Name" placeholder="请输入账户名">
								<template #prepend>
									<el-button :icon="User" />
								</template>
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-input type="password" v-model="LoginForm.PassWord" placeholder="请输入密码">
								<template #prepend>
									<el-button :icon="Hide" />
								</template>
							</el-input>
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
	import utils from '../../utils/index.js'
	import {
		User,
		Hide
	} from '@element-plus/icons-vue'
	const Copyright = ref('')
	onMounted(() => {
		Copyright.value = '妖怪得懒癌管理系统'
	})


	// 提交框输入大小
	const size = ref('large')
	const labelPosition = ref('right')

	const LoginForm = reactive({
		Name: '',
		PassWord: '',
	})

	function onSubmit() {
		console.log('submit!')
	}
</script>

<style>
	@import url('../../styles/Login/Login.css');
</style>
