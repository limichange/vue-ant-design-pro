<template>
  <div :class="[
      $style.trendItem,
      {
        [$style.trendItemGrey]: !colorful,
        [$style.reverseColor]: reverseColor && colorful
      }
    ]">
    <span>
      <slot />
    </span>
    <span :class="$style[flag]">
      <a-icon :type="`caret-${flag}`" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Trend',
  props: {
    title: {
      type: String,
      default: ''
    },
    colorful: {
      type: Boolean,
      default: true
    },
    flag: {
      type: String,
      default: ''
    },
    reverseColor: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.trendItem {
  display: inline-block;
  font-size: @font-size-base;
  line-height: 22px;

  .up,
  .down {
    margin-left: 4px;
    position: relative;
    top: 1px;
    i {
      font-size: 12px;
      transform: scale(0.83);
    }
  }
  .up {
    color: @red-6;
  }
  .down {
    color: @green-6;
    top: -1px;
  }

  &.trendItemGrey .up,
  &.trendItemGrey .down {
    color: @text-color;
  }

  &.reverseColor .up {
    color: @green-6;
  }
  &.reverseColor .down {
    color: @red-6;
  }
}
</style>
