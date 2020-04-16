<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">
@font-face {
  font-family: "Omega-Sans";
  src: url(./static/fonts/Omega-Sans.ttf);
}
@font-face {
  font-family: Debby;
  src: url(./static/fonts/Debby.ttf);
}
@font-face {
  font-family: Flamingo-54;
  src: url(./static/fonts/Flamingo-54.ttf);
}
body,
pre {
  font-size: 24px;
  font-family: Omega-Sans;
  padding: 0;
  margin: 0;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
li {
  list-style: none;
}
a,
a:hover {
  color: unset;
}
.icon-pause {
  background: url(http://assets-cdn.lanqb.com/eyuschool/index-video-item-media-pause.png);
  background-size: 100% 100%;
}
.created-from,
.translate-support {
  color: @normal-color;
  .resources-link {
    text-decoration: underline;
  }
}
.ivu-timeline-item {
  padding-bottom: 20px;
}
.ivu-timeline-item-tail {
  border-width: 2px;
  left: 10px;
}
.ivu-timeline-item-head {
  width: 20px;
  height: 20px;
  position: relative;
}
.ivu-timeline-item-content {
  padding: 5px 10px 10px 40px;
  font-size: 20px;
  top: -15px;
}
.timeline-main-dot {
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 120%;
    background-color: pink;
    border-radius: 10px 10px 0 0;
  }
  &::before {
    transform: rotate(45deg);
    left: 80%;
  }
  &::after {
    transform: rotate(-45deg);
    right: -25%;
  }
}
.refer-from {
  color: #1dabdd;
  display: inline-block;
  margin: 0 5px;
  &:hover {
    color: #1dabdd;
    opacity: 0.5;
  }
}
</style>
