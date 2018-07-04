<template>
  <div :class="$style.ChangePassword">
    <a-modal
      v-model="modalVisible"
      :width="360"
      title="修改密码"
      @ok="ok">
      <a-form :auto-form-create="autoFormCreate">
        <a-form-item>
          <a-input
            v-model="oldPassword"
            type="password"
            placeholder="旧密码"/>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model="newPassword"
            type="password"
            placeholder="新密码"/>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model="newPasswordConfirm"
            type="password"
            placeholder="确认新密码"/>
        </a-form-item>
      </a-form>
    </a-modal>
    <span
      @click="openModal">
      修改密码
    </span>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      form: {},
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      modalVisible: false,
      formItemOptions: {
        password: {
          rules: [{
            required: true,
            message: '请输入密码'
          }]
        }
      }
    }
  },
  methods: {
    openModal () {
      this.modalVisible = true
    },
    ok () {
      if (this.newPassword !== this.newPasswordConfirm) {
        this.$message.error('两次密码不一致')
        return
      }

      this.$store.dispatch('user/changePassword', {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      }).then(() => {
        this.modalVisible = false
      })
    },
    autoFormCreate (form) {
      this.form = form
    }
  }
}
</script>

<style lang="less" module>
.ChangePassword {}
</style>
