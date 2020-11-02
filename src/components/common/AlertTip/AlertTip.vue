<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{ alertText }}</p>
      <button class="confrim" @click="closeTip">确认</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    alertText: String,
  },

  methods: {
    closeTip() {
      // 分发自定义事件(事件名: closeTip)
      this.$emit("closeTip");
    },
  },
};
</script>

<style scoped>
.alert_container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 233;
}
.tip_text_container {
  position: fixed;
  width: 80%;
  /* height: 100px;  */
  /* background-color: #000; */
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* box-shadow: 4px 4px 6px rgb(228, 225, 225); */

  /* overflow-x: scroll; */
}

.tip_text {
  padding: 10px;
  line-height: 22px;
}
</style>
