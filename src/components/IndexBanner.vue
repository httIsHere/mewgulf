<template>
  <div class="view-component view-component__banner">
    <div class="mask"></div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in banner_imgs"
          :key="index"
        >
          {{ index }}
          <img :src="item.image" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      banner_imgs: [{ images: "..." }, { images: "000" }]
    };
  },
  mounted() {
    const _this = this;
    _this.$nextTick(function() {
      // swiper 4.4.1 -> 3.4.2语法修改
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        speed: 800,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        pagination: ".swiper-pagination"
      });
    });
  }
};
</script>
<style lang="less" scoped>
.view-component__banner {
  width: 100%;
  height: 2048px;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    background: #f3f3f3;
  }
}
</style>
