<template>
  <div>home</div>
  <router-view></router-view>
</template>

<script>
import { getHomePostList } from "network/post.js";
export default {
  async setup() {
    const data = await getHomePostList();
    console.log(data);
  },
};
</script>

<style>
</style>