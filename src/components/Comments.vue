<!--
 * @Author: your name
 * @Date: 2021-07-08 17:22:34
 * @LastEditTime: 2021-07-08 17:50:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mewgulf/src/components/Comments.vue
-->
<template>
  <div class="container">
    <title-bar :black="true" />
    <div id="vcomments"></div>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
export default {
  components: { TitleBar },
  mounted() {
    this.$store.dispatch('triggerTab', 'comments');
    new Valine({
      el: "#vcomments",
      appId: "Jtbd8x46oJeODEjXS12IQLA1-gzGzoHsz",
      appKey: "0SU3Kdg3JBRFS4q3vGxRCJHc",
    });
  },
};
</script>
<style lang="less" scoped>
#vcomments {padding-top: 100px;}
</style>