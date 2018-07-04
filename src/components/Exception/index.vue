<template>
  <div :class="$style.Exception">
    Exception
  </div>
</template>

<script>
import typeConfig from './typeConfig'
console.log(typeConfig)

export default {
  name: 'Exception',
  props: {
    pageType: {
      type: String,
      default: '404'
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
.Exception {}
</style>
