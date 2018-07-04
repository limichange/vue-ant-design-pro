<template>
  <div
    :style="{ width }"
    :class="$style.FooterToolbar">
    <div :class="$style.left">
      <slot name="left" />
    </div>
    <div :class="$style.right">
      <slot name="right" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterToolbar',
  data () {
    return {
      width: '100%'
    }
  },
  watch: {
    '$store.state.app.sidebar.collapsed' () {
      this.resizeFooterToolbar()
    }
  },
  mounted () {
    this.resizeFooterToolbar()
    window.addEventListener('resize', this.resizeFooterToolbar)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeFooterToolbar)
  },
  methods: {
    resizeFooterToolbar () {
      const sider = document.querySelectorAll('.ant-layout-sider')[0]
      const width = `calc(100% - ${sider.style.width})`
      if (this.width !== width) {
        this.width = width
      }
    }
  }
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.FooterToolbar {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 56px;
  line-height: 56px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  background: #fff;
  border-top: 1px solid @border-color-split;
  padding: 0 24px;
  z-index: 9;
  transition: all .2s;

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  button + button {
    margin-left: 8px;
  }
}
</style>
