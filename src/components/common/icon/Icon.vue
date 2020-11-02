<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconLink"></use>
    </svg>
  </div>
</template>

<script>
import "./iconfont";
export default {
  props: {
    name: {
      // 二维码
      // #iconcode
      // 箭头 上 up
      // #iconarrow-up
      // 箭头 下 down
      // #iconarrow-down
      // 箭头 右 right
      // #iconarrow-right
      // 箭头 左 left
      // #iconarrow-left
      // 目录
      // #iconmulu
      // 地址
      // #iconlocation
      // 搜索
      // #iconsearch
      // 设置
      // #iconsetting
      // 返回
      // #iconback
      // 分享
      // #iconshare
      // 点赞
      // #iconlike
      // 评论
      // #iconcomment
      // 更多
      // #iconmore
      // 写
      // #iconwrite
      // 扫一扫
      // #iconscann
    },
  },
  computed: {
    iconLink() {
      return `#icon${this.name}`;
    },
  },
};
</script>

<style scoped>
/* icon */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>