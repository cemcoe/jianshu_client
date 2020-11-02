<template>
  <router-view />
  <main-tab-bar
    v-if="$route.meta.showFooter"
    class="main-tab-bar"
  ></main-tab-bar>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
};
</script>

<style>
</style>
