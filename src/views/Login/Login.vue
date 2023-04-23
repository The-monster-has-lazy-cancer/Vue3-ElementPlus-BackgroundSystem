<template>
	<div class="LoginContainer">
		<div class="Login">
			<div class="L-left-Logo">
				<img src="../../../public/static/img/System-Logo.png" alt="">
			</div>
			<div class="L-right-Form">
				
			</div>
		</div>
		<div class="footer">
			&copy;{{Copyright}}
		</div>
	</div>
</template>

<script setup>
	import {ref,reactive,onMounted} from 'vue'
	import utils from '../../utils/index.js'
	// var date = new Date()
	// var year = date.getFullYear()
	const Copyright = ref('')
	onMounted(()=>{
		Copyright.value =utils.Year+'妖怪得懒癌'
	})
</script>

<style scoped="scoped">
	.LoginContainer{
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: #000000;
	}
	.footer{
		color: #fff;
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0;
		
	}
	.LoginContainer .Login{
		display:flex;
		width: 35rem;
		height: 25rem;
		position: absolute;
		left: 50%;
		bottom:50%;
		transform:translate(-50%,50%);
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
	}
	.LoginContainer .L-left-Logo{
		flex: 4;
		height: 100%;
	}
	.LoginContainer .L-left-Logo img{
		width: 12.5rem;
		height: 12.5rem;
		border-radius: 50%;
		border: 1px solid #f2f2f2;
		box-shadow: #f2f2f2 2px 2px 6px,#fff 2px 2px -6px;
	}
	.LoginContainer .L-right-Form{
		flex: 6;
		height: 100%;
		background-color: antiquewhite;
		}
</style>