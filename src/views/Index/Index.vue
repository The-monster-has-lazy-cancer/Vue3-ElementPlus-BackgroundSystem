<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="none">
				<Menu></Menu>
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script setup>
	import {
		onMounted
	} from 'vue'
	import utils from '../../utils/index.js'
	import Menu from './Menu/Menu.vue'
	onMounted(() => {
		
	})
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	.common-layout,
	.el-container {
		width: 100vw;
		height: 100vh;
	}
</style>