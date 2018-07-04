<template>
  <div :class="$style.GlobalFooter">
    <div :class="$style.copyright">
      Copyright
      <i class="anticon anticon-copyright" />
      {{ new Date().getFullYear() }} 技术部出品
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.GlobalFooter {
  padding: 0 16px;
  margin: 48px 0 24px 0;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: @text-color-secondary;
      transition: all 0.3s;

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:hover {
        color: @text-color;
      }
    }
  }

  .copyright {
    color: @text-color-secondary;
    font-size: @font-size-base;
  }
}
</style>
