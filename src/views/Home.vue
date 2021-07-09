<!--
 * @Author: your name
 * @Date: 2020-04-22 00:31:12
 * @LastEditTime: 2021-07-09 10:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mewgulf/src/views/Home.vue
 -->
<template>
  <transition name="fade-in">
    <div class="container container-home" v-show="page_enter">
      <div class="container-inner">
        <title-bar />
        <index-banner />
        <!-- 个人简介 -->
        <person-info />
        <!-- 婚礼 -->
        <wedding />
        <!-- <time-line /> -->
        <!-- <online-interaction /> -->
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import TitleBar from "@/components/TitleBar";
import IndexBanner from "@/components/IndexBanner";
import PersonInfo from "@/components/PersonInfo.vue";
import Wedding from "@/components/Wedding";
import TimeLine from "@/components/TimeLine";
import OnlineInteraction from "@/components/OnlineInteraction";

export default {
  name: "Home",
  components: {
    TitleBar,
    IndexBanner,
    PersonInfo,
    Wedding,
    TimeLine,
    OnlineInteraction
  },
  data(){
    return {
      page_enter: false
    }
  },
  mounted() {
    this.page_enter = true
  }
};
</script>
<style lang="less">
.view-component-part {
  padding: 80px 0;
  &-inner {
    width: 100vw;
    margin: 0 auto;
  }
  &-gray {
    background: @bg-color;
  }
  &-title {
    font-size: 36px;
    border-bottom: 5px solid @primary-color;
    text-align: center;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  &-sub-title {
    padding: 20px 0 40px 0;
    font-size: 22px;
    color: #999999;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
}
.yellow-card {
  background: @card-color2;
}
</style>
