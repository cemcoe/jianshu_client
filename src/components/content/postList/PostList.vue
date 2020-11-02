<template>
  <div>
    <div v-for="post in postList" :key="post._id" class="post">
      <post-item :post="post"></post-item>
    </div>
    <div class="no-data">哇哦，没有数据了。</div>
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  props: {
    postList: {},
  },
  components: {
    PostItem,
  },
  methods: {},
};
</script>

<style scoped>
.no-data {
  background-color: var(--main-bgc-color);
  color: var(--main-text-color);
}
</style>