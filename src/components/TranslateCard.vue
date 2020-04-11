<template>
  <div class="view-component view-component__translate-card">
    <div class="translate-card__inner">
      <template v-if="type='Q&A'">
        <div class="translate-card__QA" :class="index%2!=0?'translate-card__QA-o':''" v-for="(item, index) in content" :key="index">
          <p class="translate-card__Q-content"><span class="translate-card__Q-content-deco">> </span>{{item.question}}</p>
          <p
            class="translate-card__dialog"
            :class="i%2==0?'translate-card__dialog-o':''"
            v-for="(_item, i) in item.answer"
            :key="i"
          >{{_item}}</p>
        </div>
      </template>
      <template v-else>
        <p
          class="translate-card__dialog"
          :class="index%2==0?'translate-card__dialog-o':''"
          v-for="(item, index) in content"
          :key="index"
        >{{item}}</p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content", "type"]
};
</script>
<style lang="less" scoped>
.view-component__translate-card{
    width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px;
    position: relative;
    margin-top: 20px;
    font-size: 19px;
    line-height: 1.8;
    &::before {
        content: '';
        width: 350px;
        height: 3px;
        background: @second-color;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
    }
    
    &::after {
        content: '';
        width: 750px;
        height: 3px;
        background: @second-color;
        border-radius: 5px;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .translate-card__QA + .translate-card__QA {
        margin-top: 10px;
    }
    .translate-card__QA-o {
        // text-align: right;
    }
    .translate-card__Q-content{
        font-size: 22px;
        font-weight: bold;
        &-deco {
            color: @second-color;
        }
    }
}
</style>