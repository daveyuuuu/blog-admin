<template>
  <main class="main">
    <el-form :model="loginForm" label-width="120px" class="login-form">
      <el-form-item label="用户名" class="form-label">
        <el-input v-model="loginForm.username"> </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" :show-password="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const loginForm = reactive({
  username: 'admin',
  password: 'admin',
});
const onSubmit = () => {
  console.log('loginForm', loginForm);
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('~@/assets/images/login_bg.jpeg');
  background-size: cover;

  .login-form {
    width: 400px;
    margin: 0 auto;
    height: 100px;
    color: #fff;
    transform: translate(-15%, -10%);
  }
}
</style>
