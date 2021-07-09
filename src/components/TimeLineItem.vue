<template>
  <div
    class="view-component view-component__timeline-item"
    :class="'card-style-' + index % 3"
  >
    <div :class="['timeline-item__content', cover ? 'timeline-item__content-with-cover' : '']">
      <pre v-html="content"></pre>
      <!-- <p v-html="content"></p> -->
    </div>
    <!-- <div class="timeline-item__cover" v-if="cover">
      <img v-if="cover" :src="cover" class="timeline-item__cover-img" />
    </div> -->
  </div>
</template>
<script>
export default {
  props: ["index", "content", "cover"]
};
</script>
<style lang="less" scoped>
.view-component__timeline-item {
  padding: 40px;
  background: @card-color;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 500px;
  z-index: 1;
  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .15);
  }
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent @card-color transparent transparent;
    position: absolute;
    top: 10px;
    left: -20px;
    z-index: 2;
  }
  &.card-style-1 {
    background: @card-color2;
    &::before {
      border-color: transparent @card-color2 transparent transparent;
    }
  }
  &.card-style-2 {
    background: @card-color3;
    &::before {
      border-color: transparent @card-color3 transparent transparent;
    }
  }
  .timeline-item__content {
  pre {
    font-size: 20px;
    white-space: pre-line;
  }
    &-with-cover {
      width: calc(100% - 90px);
    }
  }
  .timeline-item__cover {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
