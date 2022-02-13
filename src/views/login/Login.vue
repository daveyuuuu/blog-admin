<template>
  <main class="main">
    <LoginForm />
  </main>
</template>

<script lang="ts" setup>
import LoginForm from './LoginForm.vue';
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url("~@/assets/images/login_bg.jpeg");
  background-size: cover;
}
</style>
