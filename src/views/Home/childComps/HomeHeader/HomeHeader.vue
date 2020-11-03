<template>
  <div class="container">
    <nav-bar>
      <template #left>
        <a href="https://github.com/cemcoe/jianshu_client">cemcoe</a>
      </template>

      <template #center>
        <router-link to="/search">
          <button>搜索感兴趣的内容</button>
        </router-link>
      </template>

      <template #right>
        
        <div>
          <router-link :to="'/login'" replace class="login"
            >登录|注册</router-link
          >
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "HomeHeader",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container >>> .login {
  font-size: 14px;
}
.container >>> img {
  width: 26px;
  height: 26px;
  /* border-radius: 50%; */
  border-radius: 4px;
}

.container >>> button {
  width: 90%;
  border: 0px;
  border-radius: 6px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  background-color: rgb(243, 237, 237);
  font-size: 12px;
  letter-spacing: 2px;
}
</style>