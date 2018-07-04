<script>
export default {
  name: 'App',
  render () {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
</script>

<style lang="less">
#app, body, html {
  height: 100%;
}
</style>
