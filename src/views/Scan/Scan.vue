<template>
  <div>
    <div>扫描功能测试</div>

    <div><video></video></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    var constraints = {
      video: {
        audio: true,
      },
    };

    // 想要获取一个最接近 1280x720 的相机分辨率
    // const constraints = {  };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        const video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // 总是在最后检查错误
  },
};
</script>

<style>
</style>