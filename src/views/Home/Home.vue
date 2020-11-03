<template>
  <home-header></home-header>
  <home-tab-control></home-tab-control>
  <router-view></router-view>
</template>

<script>
import HomeHeader from "./childComps/HomeHeader/HomeHeader";
import HomeTabControl from "./childComps/HomeTabControl/HomeTabControl";

export default {
  components: {
    HomeHeader,
    HomeTabControl,
  },
};
</script>

<style>
</style>