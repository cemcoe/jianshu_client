<template>
  <div>
    <input id="file" type="file" @change="preview" name="file" />
    <img :src="imgUrl" alt="预览图" />
    <button @click="uploadImg">上传</button>
    <p>图片地址：{{imgUrl}}</p>
  </div>
</template>

<script>
import { uploadImg } from "network/user";
export default {
  data() {
    return {
      imgFile: null,
      imgUrl: "",
    };
  },
  methods: {
    preview(event) {
      // 图片本地预览
      console.log(event.target.files);
      this.imgFile = event.target.files[0];
      // 拿到图片的本地连接
      this.imgUrl = URL.createObjectURL(this.imgFile);
    },
    uploadImg() {
      // 上传图片
      const bodyFormData = new FormData();
      bodyFormData.append("file", this.imgFile);
      // 注意和后端约定好key的名称

      uploadImg(bodyFormData).then((res) => {
        console.log(res);
        this.imgUrl = res.data.url;
        this.$toast.show("图片上传成功");
        // 图片上传成功，将图片在线地址传给需要的组件
        this.$emit('uploadImgEnd', res.data.url)
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>