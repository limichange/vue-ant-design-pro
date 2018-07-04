<template>
  <div :class="$style.GlobalHeader">
    <a-icon
      :class="$style.trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleSideBar"
    />
    <div :class="$style.right">
      <a-dropdown>
        <div :class="$style.action">
          <div :class="$style.account">
            <a-avatar
              :class="$style.avatar"
              size="small"
              icon="user" />
            <span>{{ userInfo.userName }}</span>
          </div>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>
            <ChangePassword />
          </a-menu-item>
          <a-menu-item>
            <span @click="logout">退出登录</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChangePassword from './ChangePassword'

export default {
  name: 'GlobalHeader',
  components: {
    ChangePassword
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.info,
      collapsed: state => state.app.sidebar.collapsed
    })
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" module>
@import "~vue-antd-ui/lib/style/themes/default.less";

.GlobalHeader {
  height: 64px;
  padding: 0 12px 0 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
}

:global {
  .ant-layout {
    min-height: 100vh;
    overflow-x: hidden;
  }
}

.trigger {
  font-size: 20px;
  line-height: 64px;
  height: 64px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  padding: 24px;

  &:hover {
    background: @primary-1;
  }
}

.right {
  float: right;
  height: 100%;
  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    > i {
      font-size: 16px;
      vertical-align: middle;
      color: @text-color;
    }
    &:hover,
    &:global(.ant-popover-open) {
      background: @primary-1;
    }
  }
  .search {
    padding: 0;
    margin: 0 12px;
    &:hover {
      background: transparent;
    }
  }
  .account {
    .avatar {
      margin: 20px 8px 20px 0;
      vertical-align: middle;
    }
  }
}
</style>
