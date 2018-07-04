<template>
  <a-form
    id="LoginForm"
    :auto-form-create="autoFormCreate"
    class="login-form">
    <a-form-item
      :field-decorator-options="formItemOptions.username"
      field-decorator-id="username">
      <a-input
        autocomplete="username"
        size="large"
        placeholder="用户名">
        <a-icon
          slot="prefix"
          class="icon"
          type="user" />
      </a-input>
    </a-form-item>
    <a-form-item
      :field-decorator-options="formItemOptions.password"
      field-decorator-id="password">
      <a-input
        autocomplete="current-password"
        size="large"
        type="password"
        placeholder="密码">
        <a-icon
          slot="prefix"
          class="icon"
          type="lock" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        :loading="loading"
        size="large"
        type="primary"
        html-type="submit"
        class="login-form-button"
        @click="check">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      formItemOptions: {
        username: {
          rules: [{
            required: true,
            message: '请输入用户名'
          }]
        },
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
    check  () {
      this.form.validateFields(err => {
        if (!err) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.form.getFieldsValue())
            .then(() => {
              this.$message.success('登录成功')
              this.$router.push({ path: '/' })
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
    autoFormCreate (form) {
      this.form = form
    }
  }
}
</script>

<style>
#LoginForm.login-form {
  max-width: 368px;
  margin: 0 auto;
}
#LoginForm .login-form-forgot {
  float: right;
}
#LoginForm .login-form-button {
  width: 100%;
}

#LoginForm .icon {
  color: rgba(0, 0, 0, .25);
}
</style>
