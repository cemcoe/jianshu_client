<template>
  <div class="recommend">
    <div class="post-list" v-if="postList.length" @scroll="onScroll">
      <post-list :postList="postList"></post-list>
    </div>
    <div v-else>
      <loading></loading>
    </div>

    <transition name="fade">
      <alert-tip
        :alertText="alertText"
        @closeTip="closeTip"
        v-if="isShowAlert"
      ></alert-tip>
    </transition>

    <go-writer-button />
  </div>
</template>

<script>
import PostList from "components/content/postList/PostList";
import Loading from "components/common/loading/Loading";
import AlertTip from "components/common/AlertTip/AlertTip";
import GoWriterButton from "components/content/goWriterButton/GoWriterButton";
import { getHomePostList } from "network/post";

import { _throttle } from "@/utils/gloal";

export default {
  name: "HomeRecommend",
  components: {
    PostList,
    Loading,
    GoWriterButton,
    AlertTip,
  },
  data() {
    return {
      postList: [],
      currentPage: 1,
      perPage: 10,
      isShowAlert: true,
      alertText: `
      本项目是一个移动端项目，使用视口在 500px 以内的设备访问以获得更好的访问体验。
      再次提醒，
      网站文章数据由狗屁不通文章生成器生成，
      不具有任何的价值，
      仅供占位测试使用，亦不代表本人观点。
      `,
    };
  },
  methods: {
    closeTip() {
      this.isShowAlert = false;
      // 不展示弹出内容
    },

    async loadmore() {
      // 当前的页数加1
      // 将新页数的数据追加
      // console.log(this.currentPage);
      this.currentPage++;
      const res = await getHomePostList(this.currentPage);
      console.log(
        res,
        "ddddddddddddddddddddddddddddddddddddddddddddddddddd",
        this.currentPage
      );
      if (res.status === 404) {
        this.$toast.show("没有数据了", 2000);
        return;
      } else if (res.status === 200) {
        this.postList.push(...res.data.post);
        this.$toast.show("数据请求成功" + this.currentPage, 2000);
        return;
      }
    },

    onScroll: _throttle(function () {
      // 上拉加载更多
      console.log("页面进行滚动");
      const postList = document.querySelector(".post-list");

      const clientHeight = postList.clientHeight;
      const scrollHeight = postList.scrollHeight;
      const scrollTop = postList.scrollTop;
      console.log(clientHeight, scrollHeight, scrollTop);

      const distance = 220; //距离底部还有220的时候，开始触发；

      if (scrollTop + clientHeight >= scrollHeight - distance) {
        console.log("到底了，开始加载数据");
        // 加载数据
        this.loadmore();
      }
    }, 800),
  },
  async setup() {
      const res = await getHomePostList();
      console.log(res, "ddddddddddddddddddddddddddddddddddddddddddddddddddd");
      if (res.status === 404) {
        // this.$toast.show("没有数据了", 2000);
        return;
      } else if (res.status === 200) {
        this.postList.push(...res.data.post);
        // this.$toast.show("数据请求成功", 2000);
        return;
      }
    },
};
</script>

<style scoped>
.post-list {
  background-color: rgb(243, 243, 243);

  height: calc(100vh - 44px - 49px);
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>