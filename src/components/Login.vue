<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>



<script>
import { nameRule, passRule } from "../utils/validate.js";
import { setToken, getToken } from "../utils/tokenManage";

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
          this.service.post("/login", this.form).then((res) => {
            if (res.data.status === 200) {
              // set Token
              setToken("token", res.data.token);
              setToken("username", res.data.username);
              // console.log(res);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            } else {
              console.log("failed");
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
  width: 100%;
  height: 100%;
  position: absolute;
  background: #282c34;
  .login-card {
    width: 450px;
    margin: 200px auto;
    .el-card__header {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
