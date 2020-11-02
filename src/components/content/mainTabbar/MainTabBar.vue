<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" />
      </template>

      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/following">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/following.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/following_active.svg" />
      </template>

      <template v-slot:item-text>
        <div>关注</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/island">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/island.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/island_active.svg" />
      </template>

      <template v-slot:item-text>
        <div>小岛</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/message">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/message.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/message_active.svg" />
      </template>

      <template v-slot:item-text>
        <div>消息</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" />
      </template>

      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
    
  </tab-bar>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem";
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
