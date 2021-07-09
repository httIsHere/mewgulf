<!--
 * @Author: httishere
 * @Date: 2020-04-29 00:38:38
 * @LastEditTime: 2020-04-29 13:35:14
 * @LastEditors: Please set LastEditors
 * @Description: 404 not found page
 * @FilePath: /mewgulf/src/views/NotFound.vue
 -->
<template>
  <div class="container container-not-found">
    <div class="container-inner">
      <img src="~@/static/images/not-found__main-img.png" alt="404" class="not-found__main-img" />
      <p class="not-found__copywriting">PAGE NOT FOUND</p>
      <router-link to="/"><i class="icon icon-back"></i></router-link>
    </div>
    <!-- out flow -->
    <div class="container-bg-deco">
      <div class="container-bg-deco-sub container-bg-deco-sub-0"></div>
      <div class="container-bg-deco-sub container-bg-deco-sub-1"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container-not-found {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(214, 162, 59, 0.12);
  .container-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .not-found__main-img {
      width: 7.058333rem;
      margin: 0 auto;
      display: block;
    }
    .not-found__copywriting {
      font-size: 0.533333rem;
      font-family: ChalkboardSE-Regular, ChalkboardSE;
      font-weight: 400;
      color: rgba(44, 44, 44, 1);
      line-height: 0.758333rem;
      text-align: center;
      margin: 0.916667rem 0;
    }
    .icon-back {
      width: 1rem;
      height: 1rem;
      margin: 0 auto;
      display: block;
      cursor: pointer;
    }
  }
  .container-bg-deco {
    width: 100%;
    height: 1.666667rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(214, 162, 59, 0.3);
    .container-bg-deco-sub {
        width: .833333rem;
        height: .125rem;
        border-radius: .125rem;
        background: #ffffff;
        display: inline-block;
        margin-left: .833333rem;
        margin-top: .416667rem;
        &-1 {
            width: .416667rem;
            margin-left: .416667rem;
        }
    }
  }
}
</style>