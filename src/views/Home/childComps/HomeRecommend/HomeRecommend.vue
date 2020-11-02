<template>
  <div>
    {{ state.postList }}
  </div>
</template>

<script>
import { reactive } from "vue";
import { getHomePostList } from "network/post";

export default {
  setup() {
    const state = reactive({
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
    });

    async function getData() {
      state.postList = await getHomePostList();
    }

    getData();

    return {
      state,
    };
  },
};
</script>
