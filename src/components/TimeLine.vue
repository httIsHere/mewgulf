<template>
  <div class="view-component view-component-part view-component__time-line">
    <div class="time-line__inner">
      <p class="view-component-part-title">时间线</p>
      <p class="view-component-part-sub-title">
        整理这块真的心怦怦跳，很多时间线参考超话的各位秃头小湾仔，首页只展示2020的时间线，需要更前面的时间线可使用地址栏输入年份+月份查看，
        <a
          href="https://weibo.com/p/10080855e24c2cfcbcd685dbb9222b51360e15"
          target="_blank"
          class="created-from"
          >©️ MewGulf超话</a
        >
      </p>

      <div class="time-line__content">
        <template v-if="timeline_obj">
          <Timeline
            v-for="(_month, index) in timeline_obj.slice(0, 2)"
            :key="_month.month"
          >
            <p class="time-line__month">· {{ _month.month }} ·</p>
            <TimelineItem
              v-for="(_event, _index) in _month.events"
              :key="_event.date"
            >
              <p class="time-line__date">{{ _event.date }}</p>
              <timeline-item-slot
                :content="_event.content"
                :cover="_event.imgs[0]"
                :yellow="(index + _index) % 2 != 0"
              />
            </TimelineItem>
          </Timeline>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineItemSlot from "@/components/TimeLineItem";
export default {
  components: { TimelineItemSlot },
  data() {
    return {
      timeline_obj: null
    };
  },
  mounted() {
    this.getTimelineData();
  },

  methods: {
    getTimelineData() {
      const _this = this;
      _this.$axios.get("/time-line.json").then(res => {
        _this.timeline_obj = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.time-line__content {
  padding: 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .time-line__month {
    font-size: 36px;
    margin-bottom: 15px;
    color: @second-color;
  }
}
.time-line__date {
  position: absolute;
  top: 40px;
  left: -90px;
  font-size: 18px;
}
</style>
