<template>
  <div class="view-component view-component__banner" id="Home">
    <div class="mask"></div>
      <img src="https://s1.ax1x.com/2020/04/12/GqNm4g.jpg" class="banner__main-img" />
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      banner_imgs: [
        { image: "https://s1.ax1x.com/2020/04/12/GqYhJH.jpg" },
        { image: "000" }
      ]
    };
  },
  mounted() {
    const _this = this;
    _this.$nextTick(function() {
      // var swiper = new Swiper(".swiper-container", {
      //   autoplay: true,
      //   speed: 1500
      // });
    });
  }
};
</script>
<style lang="less" scoped>
.view-component__banner {
  width: 100%;
  height: 512px;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    background: #f3f3f3;
  }
  .banner__main-img {
    width: 100%;
    height: 512px;
  }
}
</style>
