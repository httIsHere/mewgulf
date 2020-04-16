<template>
  <div class="container container-home">
    <div class="container-inner">
      <title-bar />
      <index-banner />
      <person-info />
      <wedding />
      <time-line />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from "@/components/TitleBar";
import IndexBanner from "@/components/IndexBanner";
import PersonInfo from "@/components/PersonInfo.vue";
import Wedding from "@/components/Wedding";
import TimeLine from "@/components/TimeLine";

export default {
  name: "Home",
  components: {
    TitleBar,
    IndexBanner,
    PersonInfo,
    Wedding,
    TimeLine,
  },
};
</script>
<style lang="less">
.view-component-part {
  padding: 80px 0;
  &-inner {
    width: 1820px;
    margin: 0 auto;
  }
  &-gray {
    background: @bg-color;
  }
  &-title {
    font-size: 36px;
    border-bottom: 5px solid @primary-color;
    // padding: 0 10px;
    // background: linear-gradient(90deg, @primary-color 10%, #ffffff 90%);
    // display: inline-block;
    // color: #ffffff;
    // line-height: 30px;
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
