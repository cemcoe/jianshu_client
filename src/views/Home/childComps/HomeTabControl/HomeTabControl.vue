<template>
  <div class="tab-control">
    <tab-control :tabObj="tabObj"></tab-control>
  </div>
</template>

<script>
import TabControl from "components/common/tabcontrol/TabControl";
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      // 控制条item
      tabObj: [
        { id: 1, url: "/home" + "/activity", title: "活动" },
        { id: 2, url: "/home" + "/recommend", title: "推荐" },
        { id: 3, url: "/home" + "/topic", title: "专题" },
        { id: 4, url: "/home" + "/serialization", title: "连载" },
      ],
    };
  },
};
</script>

<style scoped>
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: #fff;
  padding: 4px;
}
</style>