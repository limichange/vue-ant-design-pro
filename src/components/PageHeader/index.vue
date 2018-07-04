<template>
  <div :class="$style.PageHeader">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.PageHeader {
  background: @component-background;
  padding: 0 32px 0 32px;
  border-bottom: @border-width-base @border-style-base @border-color-split;
}
</style>
