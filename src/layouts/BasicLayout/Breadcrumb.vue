<template>
  <div :class="$style.Breadcrumb">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        v-for="item in levelList"
        v-if="item.meta.name"
        :key="item.path">
        <span class="no-redirect">
          {{ (item.meta.name) }}
        </span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.update()
    }
  },
  created () {
    this.update()
  },
  methods: {
    update () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [
          {
            path: '/',
            meta: {
              name: '首页'
            }
          },
          ...matched
        ]
      }
      this.levelList = matched
    }
  }
}
</script>

<style lang="less" module>
.Breadcrumb {}
</style>
