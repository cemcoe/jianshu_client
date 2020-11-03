<template>
  <home-header></home-header>
  <router-view></router-view>
</template>

<script>
import HomeHeader from "./childComps/HomeHeader/HomeHeader";

export default {
  components: {
    HomeHeader,
  },
};
</script>

<style>
</style>