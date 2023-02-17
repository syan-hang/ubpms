<template>
	<div class="login">
		<el-card class="login-card">
			<div slot="header" class="clearfix">
				<img src="../assets/logo.png" class="logo" />
				<span class="title">通用后台管理系统</span>
			</div>
			<el-form label-width="80px" :model="form" ref="form" :rules="rules" class="form">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="form.username" class="input"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input
						type="password"
						v-model="form.password"
						class="input"
						@keyup.native.enter="login('form')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login('form')" class="button">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
import { nameRule, passRule } from "../utils/validate.js";
import { setToken, getToken } from "../utils/tokenManage";
import { login } from "../api/api.js";

export default {
	data() {
		return {
			form: {
				username: "",
				password: "",
			},
			rules: {
				username: [{ validator: nameRule, trigger: "blur" }],
				password: [{ validator: passRule, trigger: "blur" }],
			},
		};
	},
	methods: {
		login(form) {
			this.$refs[form].validate((valid) => {
				if (valid) {
					// console.log(this.form);
					// login request
					login(this.form).then((res) => {
						if (res.data.status === 200) {
							// set Token
							setToken("token", res.data.token);
							setToken("username", res.data.username);
							// console.log(res);
							this.$message({ message: res.data.message, type: "success" });
							this.$router.push("/home");
						} else {
							console.log("login failed");
						}
					});
					console.log(getToken("token"));
				} else {
					console.error(this.form);
				}
			});
		},
	},
};
</script>

<style lang="scss">
.login {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f0f0f0;
	font-family: "Arial";
	.login-card {
		width: 450px;
		margin: 0 auto;
		padding: 30px;
		border-radius: 10px;
		background-color: #fff;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
		.el-card__header {
			display: flex;
			align-items: center;
			font-size: 28px;
			.logo {
				height: 40px;
				margin-right: 10px;
			}
		}
		.form {
			margin-top: 30px;
			margin-right: 50px;
			.el-form-item__label {
				font-size: 16px;
				color: #666;
			}
			.input {
				height: 40px;
				border-radius: 4px;
			}
			.button {
				height: 40px;
				border-radius: 4px;
				margin-top: 20px;
				width: 100%;
			}
		}
	}
}
</style>
