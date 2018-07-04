<template>
  <div :class="$style.Login">
    <div :class="$style.container">
      <div :class="$style.content">
        <div :class="$style.top">
          <div :class="$style.header">
            <div :class="$style.title">
              后台管理系统
            </div>
          </div>
          <div :class="$style.desc">
            admin 123456
          </div>
        </div>
        <LoginForm />
      </div>
      <GlobalFooter />
    </div>
  </div>
</template>

<script>
import GlobalFooter from '../../components/GlobalFooter'
import LoginForm from './LoginForm'

export default {
  name: 'Login',
  metaInfo: {
    title: '登录'
  },
  components: {
    GlobalFooter,
    LoginForm
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.Login {
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
}

.content {
  padding: 32px 0;
  flex: 1;
}

@media (min-width: @screen-md-min) {
  .container {
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }

  .content {
    padding: 112px 0 24px 0;
  }
}

.top {
  text-align: center;
}

.header {
  height: 44px;
  line-height: 44px;
  a {
    text-decoration: none;
  }
}

.logo {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
}

.title {
  font-size: 33px;
  color: @heading-color;
  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}

.desc {
  font-size: @font-size-base;
  color: @text-color-secondary;
  margin-top: 12px;
  margin-bottom: 40px;
}
</style>
