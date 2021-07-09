<template>
  <div class="view-component view-component-part view-component__time-line">
    <div class="view-component-part-inner time-line__inner">
      <div class="time-line__main-activities">
        <img :src="banner_img" class="main-activities__bg" />
        <p class="view-component-part-title">时间线</p>
        <p class="view-component-part-sub-title">
          整理这块真的心怦怦跳，很多时间线参考超话的各位秃头小湾仔，默认展示最近3个月的时间线，部分时间线参考自超话的小姐妹们
          <a href="http://weibo.com/5700976763/IBmPN9yaW" class="refer-from"
            >@Lavenderairs</a
          >
          <a href="http://weibo.com/6469067700/IzMFDx7y4" class="refer-from"
            >@·小糖快跑</a
          >
          <a href="http://weibo.com/6982117834/IxnLVbKHa" class="refer-from"
            >@柳橙汁要全塘</a
          >
          <a href="http://weibo.com/3800067056/IBdalyPeY" class="refer-from"
            >@凉栀mie</a
          >
          <a
            href="https://weibo.com/p/10080855e24c2cfcbcd685dbb9222b51360e15"
            target="_blank"
            class="created-from"
            >©️ MewGulf超话</a
          >
        </p>
      </div>
      <!-- <DatePicker type="month" placeholder="Select year" size="large"></DatePicker> -->
      <div
        :class="[
          'time-line__content',
          timeline_fold ? 'time-line__content-fold' : '',
        ]"
        id="timeline-box"
      >
        <template v-if="timeline_obj">
          <Timeline
            v-for="(_month, index) in timeline_list"
            :key="_month.month"
          >
            <p class="time-line__month">· {{ _month.month }} ·</p>
            <TimelineItem
              v-for="(_event, _index) in _month.events"
              :key="_event.date"
            >
              <div
                class="timeline-main-dot"
                slot="dot"
                v-if="_event.love"
              ></div>
              <p class="time-line__date">{{ _event.date }}</p>
              <timeline-item-slot
                :content="_event.content"
                :cover="_event.imgs && _event.imgs[0]"
                :index="index + _index"
              />
            </TimelineItem>
          </Timeline>
        </template>
        <div
          class="time-line__content-fold-tip"
          v-if="timeline_fold"
          @click="triggerFoldTimeline(false)"
        >
          <span class="time-line__content-fold-tip-text"
            >点击查看全部<Icon type="ios-arrow-down" color="#d8c04b"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineItemSlot from "@/components/TimeLineItem";
import banner_img from "@/static/images/main-activity-bg.jpg";
export default {
  components: { TimelineItemSlot },
  data() {
    return {
      banner_img,
      timeline_obj: null,
      timeline_fold: false,
    };
  },
  computed: {
    timeline_list() {
      let months = {},
        _list = [];
      this.timeline_obj.forEach((item) => {
        let _date = item.date.slice(0, 6);
        if (!months[_date] && Object.keys(months).length >= 3) {
          return;
        } else if (!months[_date]) {
          months[_date] = {
            month: `${_date.slice(0, 4)}-${_date.slice(4, 6)}`,
            events: [],
          };
          months[_date].events.push(item);
        } else {
          months[_date].events.push(item);
        }
      });
      Object.keys(months).forEach((item) => {
        _list.push(months[item]);
      });
      return _list;
    },
  },
  mounted() {
    this.getTimelineData();
  },

  methods: {
    getTimelineData() {
      const _this = this;
      _this.$axios.get("/time-line.json").then((res) => {
        _this.timeline_obj = res.data;
        setTimeout(function () {
          _this.$nextTick(function () {
            let _height = document.getElementById("timeline-box").offsetHeight;
            _this.timeline_fold = _height >= 800;
          });
        }, 1000);
      });
    },
    triggerFoldTimeline(_fold) {
      this.timeline_fold = _fold;
    },
  },
};
</script>
<style lang="less" scoped>
.view-component-part {padding-top: unset; padding-bottom: 50px;}
.view-component-part-inner {
  width: unset;
}
.time-line__main-activities {
  width: 100vw;
  height: 35.885vw;
  position: relative;
  color: #ffffff;
  box-sizing: border-box;
  padding: 250px;
  z-index: 0;
  .main-activities__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.view-component-part-sub-title {
  color: #ffffff;
}
.time-line__content {
  background: #ffffff;
  border-radius: 10px;
  width: 1700px;
  margin: -250px auto 0;
  padding: 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  &-fold {
    height: 1180px;
    overflow: hidden;
  }
  .time-line__month {
    font-size: 36px;
    margin-bottom: 45px;
    color: @second-color;
    text-align: center;
  }
  &-fold-tip {
    width: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0)),
      color-stop(70%, #fff)
    );
    background: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 70%);
    padding: 200px 0 100px 0;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 24px;
    z-index: 10;
    &-text {
      cursor: pointer;
    }
  }
}
.time-line__date {
  position: absolute;
  top: -20px;
  // right: 15px;
  font-size: 18px;
}
</style>
