<template>
  <div class="tab">
    <div class="tab-item" v-for="item in tabObj" :key="item.id">
      <router-link :to="item.url" replace>
        <div class="title">{{ item.title }}</div>
        <div class="under-line"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import TabControlItem from "./TabControlItem";
// 传来一个对象数组，渲染tabcontrol

export default {
  props: {
    tabObj: {},
  },
  components: {
  },
};
</script>

<style scoped>
.tab {
  display: flex;
}
.tab-item {
  flex: 1;
  text-align: center;
  /* border-bottom: 1px solid rgb(235, 5, 235); */
  /* padding-top: 4px; */
}

.tab-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

}

.tab-item a .title {
  margin-bottom: 6px;
  margin-top: 6px;
  font-size: 14px;
  /* text-shadow: 0 0 14px #000; */
  letter-spacing: 4px;

}

.tab-item a .under-line {
  width: 16px;
  height: 2px;
  background-color: transparent;
  border-radius: 100px;
}

.router-link-exact-active .title {
  /* border-bottom: 4px solid #f40; */
  color:  rgb(8, 8, 8);
  font-weight: 700;
}

.tab-item .router-link-exact-active .under-line {
  background-color: rgb(240, 23, 23);
}
</style>