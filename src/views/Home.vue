<template>
  <div class="container container-home">
    <div class="container-inner">
      <!-- 顶部导航条 -->
      <title-bar />
      <!-- index banner -->
      <index-banner />
      <person-info />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from "@/components/TitleBar.vue";
import PersonInfo from "@/components/PersonInfo.vue";
import IndexBanner from "@/components/IndexBanner.vue";

export default {
  name: "Home",
  components: {
    PersonInfo,
    TitleBar,
    IndexBanner
  }
};
</script>
