<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">
// English font
@font-face {
  font-family: "Debby";
  src: url(./static/fonts/Debby.ttf);
}
@font-face {
  font-family: "Omega-Sans";
  src: url(./static/fonts/Omega-Sans.ttf);
}
@font-face {
  font-family: "GiantFont";
  src: url(./static/fonts/GiantFont.otf);
}
//  Chinese font
@font-face {
  font-family: "QingKe";
  src: url(./static/fonts/QingKe.ttf);
}

body {
  font-family: Omega-Sans;
  font-size: 81.92px !important;
}
.gradient-text {
  background: linear-gradient(180deg, @primary-color, @second-color);
  -webkit-background-clip: text;
  color: transparent;
}



// 页面布局
.container-has-title{
  padding-top: 307.2px;
}
</style>
