<template>
  <div class="container">
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.container {
  height: 44px;
}
.nav-bar {
  display: flex;
  width: 100%;
  height: 44px;
  text-align: center;
  align-items: center;
  background-color: #fff;
}

.left,
.right {
  width: 80px;
}

.center {
  flex: 1;
}
</style>
