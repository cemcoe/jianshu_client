<template>
  <div class="container">
    <div class="panel">
      <a
        href="javascript:;"
        :class="{ on: isDisappear }"
        @click="isDisappear = true"
        >登录|去注册</a
      >
      <a
        href="javascript:;"
        :class="{ on: !isDisappear }"
        @click="isDisappear = false"
        >注册|去登录</a
      >
    </div>

    <div :class="{ on: isDisappear }" class="login">
      <form>
        <div>
          <input placeholder="用户名" type="text" v-model="name" />
        </div>
        <div>
          <input placeholder="密码" type="password" v-model="password" />
        </div>
        <button
          class="sign-in-button"
          type="button"
          @click="loginClick"
          :disabled="!rightUserNameAndPass"
        >
          <span id="sign-in-loading"></span>
          登录
        </button>
      </form>
      <p>账号：cemcoe:cemcoe</p>
      <p>账号：robot:robot</p>
    </div>

    <div :class="{ on: !isDisappear }" class="register">
      <form>
        <div>
          <input placeholder="用户名" type="text" v-model="name" />
        </div>
        <div>
          <input placeholder="密码" type="password" v-model="password" />
        </div>
        <button class="sign-in-button" type="button" @click="registerClick">
          <span id="sign-in-loading"></span>
          注册
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { login, register } from "network/user";

export default {
  data() {
    return {
      name: "",
      password: "",
      isDisappear: false, // 默认展示登录对话框
    };
  },
  methods: {
    loginClick() {
      login(this.name, this.password).then((res) => {
        // console.log(res);
        // // 将token保存到本地
        // window.sessionStorage.setItem("token", res.token);
        // // 登录成功跳转到首页
        // this.$router.push("/");

        console.log(res);
        if (res.status === 200) {
          this.$store.commit("set_token", res.data.token);
          // 将token信息保存到vuex和localStorage
          this.$store.commit("setUser", res.data.user);
          // 用户关注列表持久化存储
          this.$store.dispatch("listfollowingUser");
          if (this.$store.state.token) {
            this.$toast.show("登录成功", 2000);
            this.$router.push("/");
          }
        } else if (res.status === 401) {
          // console.log(res.message);
          this.$toast.show("登录失败", 2000);
        }
      });
    },

    registerClick() {
      register(this.name, this.password).then((res) => {
        if (res.status === 200) {
          console.log("注册成功，请登录", 2000);
        } else if (res.status === 409) {
          console.log("注册失败", 2000);
        }
      });
    },
  },

  computed: {
    // 前端检查是否符合规范
    rightUserNameAndPass() {
      // 这里先检查是否为空
      return this.name && this.password;
    },
  },
};
</script>

<style scoped>
.container {
  /* min-width: 300px; */
  /* background-color: #000; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 30px;
}

input {
  border: 0px;
  border-radius: 20px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  margin-bottom: 10px;
  background-color: rgb(243, 237, 237);
  /* border: 1px solid #ccc; */
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.on {
  color: green;
  display: none;
}
</style>