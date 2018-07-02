import axios from 'axios'
import { getToken, clearToken } from './token'
import * as antd from 'vue-antd-ui'
import router from '../router'

const service = axios.create({
  baseURL: '/api/v1/',
  timeout: 10000
})

service.interceptors.request.use(config => {
  const token = getToken()

  if (token) {
    config.headers['X-Token'] = token
  }

  return config
})

function isSuccessCode (code) {
  return (code === 200 || code === 1000 || code === '1000')
}

function isAuthErrorCode (code) {
  return code === '1003' || code === '1004'
}

service.interceptors.response.use(
  response => {
    const res = response.data
    const code = res.code

    if (isSuccessCode(code)) {
      return response.data.data
    } else {
      antd.message.error(res.msg)

      if (isAuthErrorCode(code)) {
        clearToken()
        router.push('/login')
      }
    }
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      antd.message.error('请求失败')
    }

    return Promise.reject(error)
  }
)

export default service
