<template>
  <div :class="$style.Index">
    <a-card :bordered="false">
      <MainChart />
    </a-card>
  </div>
</template>

<script>
import MainChart from './MainChart'

export default {
  name: 'Index',
  components: {
    MainChart
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
