<template>
  <div
    class="view-component view-component-part view-component-part-gray view-component__wedding"
    id="Wedding"
  >
    <div class="view-component-part-inner">
      <p class="view-component-part-title">婚礼🐼❤️⚽️</p>
      <p class="view-component-part-sub-title">
        我不允许有人没看过这个！
        <span class="created-from">©️ YouTuBe @MewGulf FanMeeting</span>
      </p>
      <div class="wedding__inner">
        <div class="wedding__video-box">
          <div class="mask" v-if="!video_play" @click="playWeddingVideo">
            <i class="icon icon-pause"></i>
            <p class="video-text">快看呀！kswl！</p>
          </div>
          <video
            id="wedding__video"
            class="wedding__video"
            :src="wedding_obj.wedding_video"
            :poster="wedding_obj.wedding_poster"
            :controls="video_play"
          ></video>
        </div>
        <translate-card :content="wedding_translate" type="Q&A" />
        <p class="translate-support">
          中字支持：@喜翻译制组 ->
          <a
            href="https://www.bilibili.com/video/BV1G7411p7gp"
            target="_blank"
            class="resources-link"
            >【泰语中字】Mew&Gulf - 我们的“婚礼” 中字版@喜翻译制组</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import TranslateCard from "@/components/TranslateCard";
export default {
  components: { TranslateCard },
  data() {
    return {
      video_play: false,
      wedding_translate: null,
      wedding_obj: {
        wedding_video: "",
        wedding_poster: "",
      },
    };
  },
  mounted() {
    this.getWeddingTranslate();
  },
  methods: {
    playWeddingVideo() {
      let _wedding_video = document.getElementById("wedding__video");
      _wedding_video.play();
      this.video_play = true;
    },
    getWeddingTranslate() {
      const _this = this;
      _this.$axios.get("wedding-video.json").then((res) => {
        _this.wedding_obj = res.data;
      });
      _this.$axios.get("/wedding-translate.json").then((res) => {
        _this.wedding_translate = res.data;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.view-component__wedding {
  .wedding__inner {
    .wedding__video-box {
      width: 1180px;
      height: 663px;
      margin: 0 auto;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        color: #ffffff;
        .icon-pause {
          width: 120px;
          height: 120px;
          display: block;
        }
        .video-text {
          font-size: 28px;
          margin-top: 20px;
          height: 0;
          opacity: 0;
          overflow: hidden;
          transition: 0.2s all ease-in-out;
        }
        &:hover {
          .video-text {
            height: 40px;
            line-height: 40px;
            opacity: 1;
          }
        }
      }
      .wedding__video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: fill;
        cursor: pointer;
      }
    }
    .translate-support {
      padding: 10px 90px;
    }
  }
}
</style>
