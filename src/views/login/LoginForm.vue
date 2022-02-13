<template>
  <div class="container">
    <h1>Please Login</h1>
    <main>
      <div class="form-control">
        <input type="text" required v-model="loginForm.username" />
        <label ref="accountRef">Account</label>
      </div>

      <div class="form-control">
        <input type="password" required v-model="loginForm.password" />
        <label ref="passwordRef">Password</label>
      </div>

      <button class="btn" @click="onLogin">Login</button>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref, reactive } from 'vue';
import { userLogin } from '@/apis/login';

const loginForm = reactive({
  username: '',
  password: ''
});

const onLogin = () => {
  userLogin(loginForm).then((res: any) => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
};

const accountRef = ref();
const passwordRef = ref();
const domRefs = [
  accountRef,
  passwordRef
];

const mountAnimationDom = (dom: HTMLElement) => {
  const newChildren = dom.innerText
    .split('')
    .map((char, index) => {
      return `<span style="transition-delay: ${index * 50}ms">${char}</span>`;
    })
    .join('');

  dom.innerHTML = newChildren; // eslint-disable-line no-param-reassign
};
const mountAllAnimation = (toMounted: Ref[]) => {
  toMounted.forEach(dom => {
    mountAnimationDom(dom.value);
  });
};
onMounted(() => {
  mountAllAnimation(domRefs);
});
</script>

<style lang="scss">
.container {
  background-color: rgb(0 0 0 / 40%);
  padding: 20px 40px;
  border-radius: 5px;

  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }

  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 300px;

    label {
      color: #fff;
      position: absolute;
      top: 15px;
      left: 0;
      pointer-events: none;

      span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      color: #fff;

      &:focus,
      &:valid {
        outline: 0;
        border-bottom-color: lightblue;

        + label {
          span {
            color: lightblue;
            transform: translateY(-30px);
          }
        }
      }
    }
  }

  .btn {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background: lightblue;
    padding: 15px;
    font-size: 16px;
    border: 0;
    border-radius: 5px;

    &:focus {
      outline: 0;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
