<template>
  <div class="container container-home">
    <div class="container-inner">
      <!-- header -->
      <Row class="part-nav">
        <Col class="site-logo" span="12">
          <div class="logo-inner">MewGulf</div>
        </Col>
        <Col class="site-nav" span="12">
          <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
              <Icon type="md-people" />
              双人介绍
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-alarm" />
              时间线
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-planet-outline" />
              QQ Love
            </MenuItem>
          </Menu>
        </Col>
      </Row>
      <!-- head banner -->
      <Row class="part-banner"></Row>
      <!-- introduction and work -->
      <Row class="introduction"></Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="less" scoped>
.site-logo {
  height: 60px;
  padding-left: 60px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #dcdee2;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .logo-inner {
    line-height: 60px;
    font-size: 48px;
  }
}
</style>
