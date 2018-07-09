<template>
  <div :class="$style.Index">
    <a-card :bordered="false">
      <Trend flag="up">22%</Trend>
      <br>
      <Trend flag="down">2%</Trend>
      <br>
      <Trend flag="down" :colorful="false">2%</Trend>
      <br>
      <Trend flag="down" :reverseColor="false">2%</Trend>
    </a-card>
  </div>
</template>

<script>
import Trend from '@/components/Trend'

export default {
  name: 'Index',
  components: {
    Trend
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
.Index {}
</style>
