<template>
  <a-layout
    id="components-layout-demo-side"
    style="min-height: 100vh">
    <SiderMenu />
    <a-layout>
      <GlobalHeader />
      <PageHeader>
        <Breadcrumb />
      </PageHeader>
      <a-layout-content style="margin: 16px;">
        <router-view/>
      </a-layout-content>
      <GlobalFooter />
    </a-layout>
  </a-layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import GlobalFooter from '@/components/GlobalFooter'
import GlobalHeader from '@/components/GlobalHeader'
import SiderMenu from './SiderMenu'
import Breadcrumb from './Breadcrumb'

export default {
  components: {
    PageHeader,
    GlobalHeader,
    GlobalFooter,
    SiderMenu,
    Breadcrumb
  },
  data () {
    return {
      collapsed: false,
      title: this.$route.meta.name || '未家后台'
    }
  },
  metaInfo () {
    return {
      title: this.title
    }
  },
  watch: {
    '$route' (val) {
      this.title = val.meta.name
    }
  }
}
</script>
