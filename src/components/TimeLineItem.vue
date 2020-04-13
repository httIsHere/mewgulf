<template>
  <div
    class="view-component view-component__timeline-item"
    :class="yellow ? 'yellow-card' : ''"
  >
    <div class="timeline-item__content">
      <pre>{{ content }}</pre>
    </div>
    <div class="timeline-item__cover">
      <img v-if="cover" :src="cover" class="timeline-item__cover-img" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["yellow", "content", "cover"]
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
  }
  &.yellow-card {
    background: @card-color2;
    &::before {
      border-color: transparent @card-color2 transparent transparent;
    }
  }
  pre {
    font-size: 20px;
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
