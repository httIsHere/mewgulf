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
body {
  font-size: 24px;
  font-family: Omega-Sans;
}
li {
  list-style: none;
}
a , a:hover{
  color: unset;
}
.icon-pause {
  background: url(/assets/wedding/media-pause.png);
  background-size: 100% 100%;
}
.created-from, .translate-support {
  color: @normal-color;
  .resources-link {
    text-decoration: underline;
  }
}
</style>