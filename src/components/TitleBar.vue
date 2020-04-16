<template>
  <div :class="['view-component view-component__title-bar', black_bar ? 'view-component__title-bar-black' : '']" id="title-bar">
    <div class="view-component__inner">
      <span class="title-bar__logo gradient-text">MewGulf</span>
      <div class="title-bar__tabs">
        <a
          :href="`#${item.id}`"
          :class="[
            'title-bar__tabs-item',
            cur_tab == item.id ? 'title-bar__tabs-item-active' : ''
          ]"
          v-for="item in tabs"
          :key="item.id"
          @click="triggerTab(item)"
          >{{ item.name }}</a
        >
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
          name: "双人介绍",
          id: "Introduction"
        },
        {
          name: "婚礼",
          id: "Wedding"
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
      black_bar: false
    };
  },
  mounted() {
    const _this = this;
    // 监听页面滚动
    this.$nextTick(() => {
      window.addEventListener("scroll", _this.onScroll);
    });
  },
  methods: {
    triggerTab(_tab) {
      // 分发 action
      this.$store.dispatch("triggerTab", _tab);
    },
    onScroll(e) {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let title_bar_height = document
        .getElementById("Home")
        .offsetHeight;
      this.black_bar = scrollTop > title_bar_height;
    }
  },
  computed: {
    cur_tab() {
      return this.$store.getters.getterCurTab;
    }
  }
};
</script>
<style lang="less" scoped>
.view-component__title-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  &-black {
    background: rgba(0, 0, 0, 0.3);
  }
  .view-component__inner {
    height: 100px;
    padding: 0 370px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // box-shadow: 0 10px 50px rgba(230, 230, 230, .5);
    // background: rgba(0, 0, 0, .2);
    color: #ffffff;
    .title-bar__logo {
      font-size: 48px;
      font-weight: bold;
    }
    .title-bar__tabs {
      &-item {
        display: inline-block;
        margin-left: 40px;
        font-family: QingKe;
        cursor: pointer;
        font-size: 24px;
        &-active {
          background: @second-color;
          color: #ffffff;
          padding: 2px 20px;
          border-radius: 50px;
          box-shadow: 0 2px 10px rgba(241, 196, 15, 0.5);
        }
      }
    }
  }
}
</style>
