<template>
  <div class="view-component view-component-part view-component__person-info" id="Introduction">
    <p class="view-component-part-title">资料卡</p>
    <p class="view-component-part-sub-title">© 哥弟工作室，最新更新至03.05（不完整整理）</p>
    <div
      class="person-info__card"
      :class="card_index%2==0?'person-info__card-reverse':''"
      v-for="(item, card_index) in person_info"
      :key="item.name"
    >
      <div class="person-info__card-left">
        <img :src="item.main_photo" class="person-info__card-left-cover" />
      </div>
      <div class="person-info__card-right">
        <p class="card__nickname">
          {{item.nickname}}
          <span class="card__nickname-underline"></span>
        </p>
        <p class="card__name">{{item.name}}</p>
        <ul class="card__detail-list">
          <li
            class="card__detail-list-item"
            v-for="(detail_item, index) in item.detail"
            :key="index"
          >
            <span class="card__detail-list-item-label">{{detail_item.zn_lan}}：</span>
            <span
              class="card__detail-list-item-content"
              v-if="detail_item.en_lan != 'Filmography'"
            >{{detail_item.zn_value || detail_item.value}}</span>
            <ul class="card__detail-list-item-content" v-else>
              <li
                class="card__detail-list-item-content-item"
                v-for="(film, i) in (detail_item.zn_value || detail_item.value)"
                :key="i"
              >{{film}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/servers/axios";
export default {
  data() {
    return {
      person_info: []
    };
  },
  mounted() {
    const _this = this;
    http.get("/info-card.json").then(res => {
      if (res.status == 200) {
        _this.person_info = res.data.data;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.view-component__person-info {
  position: relative;
  .person-info__card {
    width: 1180px;
    height: 512px;
    margin: 0 auto 80px;
    box-shadow: 0 5px 20px rgba(230, 230, 230, 0.7);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background: #f3f3f3;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    &-reverse {
      flex-direction: row-reverse;
    }
    &-left {
      height: 512px;
      width: 409.6px;
      overflow: hidden;
      &-cover {
        width: 100%;
        height: 100%;
        transition: 0.5s all ease-in-out;
      }
    }
    &-right {
      width: calc(100% - 409.6px);
      height: 100%;
      box-sizing: border-box;
      padding: 20px;
      font-size: 18px;
      // overflow-y: scroll;
      .card__name {
        font-size: 24px;
        font-weight: bold;
      }
      .card__nickname {
        font-size: 36px;
        font-weight: bold;
        display: inline-block;
        &-underline {
          width: 0;
          height: 2px;
          background: @second-color;
          display: block;
          border-radius: 2px;
          transition: 0.3s all ease-in-out;
        }
      }
      .card__detail-list {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        &-item {
          width: 350px;
          &-content-item {
            text-indent: 36px;
          }
        }
      }
    }
    &:hover {
      // margin-top: -10px;
      // position: absolute;
      transform: translateY(-20px);
      .person-info__card-left {
        .person-info__card-left-cover {
          transform: scale(1.5);
        }
      }
      .person-info__card-right {
        .card__nickname-underline {
          width: 100%;
        }
      }
    }
  }
}
</style>