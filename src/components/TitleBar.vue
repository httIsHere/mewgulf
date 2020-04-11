<template>
  <div class="view-component view-component__title-bar">
    <div class="view-component__inner">
      <span class="title-bar__logo gradient-text">MewGulf</span>
      <div class="title-bar__tabs">
        <span :class="['title-bar__tabs-item', cur_tab == item.id ? 'title-bar__tabs-item-active' : '']" v-for="(item) in tabs" :key="item.id" @click="triggerTab(item)">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "首页",
          id: "Home"
        },
        {
          name: "婚礼",
          id: "Wedding"
        },
        {
          name: "双人介绍",
          id: "Introduction"
        },
        {
          name: "时间线",
          id: "Time-Line"
        },
        {
          name: "网恋实录",
          id: "QQ-Love"
        },
        {
          name: "行程",
          id: "Scheduling"
        },
        {
          name: "资源汇总",
          id: "Resources"
        }
      ],
    };
  },
  methods: {
      triggerTab(_tab) {
          // 分发 action
          this.$store.dispatch('triggerTab', _tab)
      }
  },
  computed: {
      cur_tab() {
          return this.$store.getters.getterCurTab
      }
  }
};
</script>
<style lang="less" scoped>
.view-component__title-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .view-component__inner {
        height: 307.2px;
        padding: 0 947.2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // box-shadow: 0 10px 50px rgba(230, 230, 230, .5);
        // background: rgba(0, 0, 0, .2);
        color: #ffffff;
        .title-bar__logo {
            font-size: 184.32px;
            font-weight: bold;
        }
        .title-bar__tabs{
            &-item {
                display: inline-block;
                margin-left: 200px;
                font-family: QingKe;
                cursor: pointer;
                &-active {
                    background: @second-color;
                    color: #ffffff;
                    padding: 15px 50px;
                    border-radius: 70px;
                    box-shadow: 0 5px 20px rgba(241, 196, 15, .5);
                }
            }
        }
    }
}
</style>
