<template>
  <transition name="fade-in-down">
    <div
      :class="['view-component view-component__title-bar', black_bar ? 'view-component__title-bar-black' : '']"
      id="title-bar"
      v-show="show_title"
    >
      <div class="view-component__inner">
        <span class="title-bar__logo gradient-text">MewGulf</span>
        <!-- <div class="title-bar__logo img"></div> -->
        <div class="title-bar__tabs">
          <a
            href="javascript:;"
            :class="[
            'title-bar__tabs-item',
            cur_tab == item.id ? 'title-bar__tabs-item-active' : ''
          ]"
            v-for="item in tabs"
            :key="item.id"
            @click="triggerTab(item)"
          >{{ item.name }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Tabs from "@/store/nav";
export default {
  props: ['black'],
  data() {
    return {
      tabs: Tabs,
      black_bar: this.black || false,
      show_title: false
    };
  },
  mounted() {
    this.show_title = true;
    const _this = this;
    // 监听页面滚动
    this.$nextTick(() => {
      window.addEventListener("scroll", _this.onScroll);
    });
  },
  methods: {
    triggerTab(_tab) {
      if(!_tab.router) {
        this.$router.push(`/#${_tab.id}`);
      } else {
        this.$router.push(`/${_tab.id}`)
      }
      // 分发 action
      this.$store.dispatch("triggerTab", _tab.id);
    },
    onScroll(e) {
      let banner = document.getElementById('HomeBanner');
      if(!banner) return;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let banner_height = banner.offsetHeight;
      let title_bar_height = document.getElementById("title-bar").offsetHeight;
      this.black_bar = scrollTop + title_bar_height > banner_height;
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
// title bar fade in down
.fade-in-down-enter-active,
.fade-in-down-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-in-down-enter {
  transform: translateY(-100px);
}
.view-component__title-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100vw;
  height: 100px;
  transition: all 0.5s ease-in-out;
  &-black {
    background: rgba(0, 0, 0, 0.3);
    height: 80px;
  }
  .view-component__inner {
    height: 100%;
    width: 1180px;
    margin: 0 auto;
    // padding: 0 370px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // box-shadow: 0 10px 50px rgba(230, 230, 230, .5);
    // background: rgba(0, 0, 0, .2);
    color: #ffffff;
    .title-bar__logo {
      font-size: 48px;
      font-weight: bold;
      width: 80px;
      height: 53px;
      font-family: fantasy;
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
