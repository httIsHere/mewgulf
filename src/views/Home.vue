<template>
  <div class="container container-home">
    <div class="container-inner">
      mewgulf
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonInfo from '@/components/PersonInfo.vue'

export default {
  name: 'Home',
  components: {
    PersonInfo
  }
}
</script>
<style lang="less" scoped>
.site-logo {
  height: 60px;
  padding-left: 60px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #dcdee2;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .logo-inner {
    line-height: 60px;
    font-size: 48px;
  }
}
</style>
