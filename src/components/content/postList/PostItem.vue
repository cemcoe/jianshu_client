<template>
  <div class="post-item">
    <router-link :to="postUrl">
      <div class="title">
        <span>{{ post.title }}</span>
      </div>
    </router-link>

    <section class="abstract">
      <!-- 文章中没有图片 -->
      <div class="no-pic" v-if="imgsLinkLength === 0">
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">{{ post.abstract }}</div>
          </div>
        </router-link>
      </div>

      <!-- 文章中有一张图片 -->
      <div class="one-pic" v-if="imgsLinkLength === 1">
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">
              {{ post.abstract }}
            </div>
            <img v-lazy="imgs[0]" alt="imgs" />
            <!-- 文章中有{{imgs.length}}张图片 -->
          </div>
        </router-link>
      </div>

      <!-- 文章中的图片超过三张 -->

      <div class="more-pic" v-if="imgsLinkLength >= 3">
        <router-link :to="postUrl">
          <div class="content">
            <img v-for="img in imgs" v-lazy="img" alt="img" />
          </div>
        </router-link>
      </div>
    </section>

    <div class="meta">
      <span>
        <router-link :to="authorUrl" class="nickname font10px">{{
          post.author.name
        }}</router-link>
      </span>

      <span class="creat-date font10px">{{ createDate }}</span>
      <span class="font10px">{{ post.viewcount }} 阅读</span>
      <span class="font10px">{{ post.commentcount }} 评论</span>
      <span class="font10px">0赞</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
  },
  computed: {
    postUrl() {
      return "/p/" + this.post._id;
    },
    authorUrl() {
      return "/u/" + this.post.author._id;
    },
    createDate() {
      return this.post.createdAt.split("T")[0];
    },
    imgsLinkLength() {
      return this.post.imgsLink.length;
    },
    imgs() {
      // 1 => 1
      // 2 => 1
      // 3 => 3
      // 4 => 3
      if (this.post.imgsLink.length <= 2) {
        // 取其中一项
        return this.post.imgsLink.slice(0, 1);
      } else if (this.post.imgsLink.length >= 3) {
        // 取前三项
        return this.post.imgsLink.slice(0, 3);
      }
    },
  },
};
</script>

<style scoped>
.post-item {
  padding: 16px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  background-color: #fff;
}
.title span {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
}
.abstract .text {
  font-size: 14px;
  color: rgb(97, 101, 105);
  /* margin-top: 12px;
  margin-bottom: 12px; */
  line-height: 28px;
  /* 多行文本截断 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.one-pic .content {
  display: flex;
  justify-content: space-between;
}

.one-pic .text {
  padding-right: 10px;
}

.one-pic img {
  width: 33%;
  /* padding-left: 10px; */
  border-radius: 6px;
}

.more-pic .content {
  display: flex;
  justify-content: space-between;
}
.more-pic .content img {
  width: 33%;
  border-radius: 6px;
}
.meta {
  color: #c7c4c4;
  padding-right: 12px;
  /* font-size: 12px; */
}

/* // 10px小字体 */
.font10px {
  display: inline-block;
  font-size: 12px;
  transform: scale(0.83, 0.83);
  *font-size: 10px;
}

.meta span {
  padding-right: 12px;
}
</style>