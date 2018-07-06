import axios from 'axios'
import { getToken } from './token'
import * as antd from 'vue-antd-ui'

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

service.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED') {
      antd.message.error('请求失败')
    }

    return Promise.reject(error)
  }
)

export const get = service.get
export const put = service.put
export const del = service.delete
export const post = service.post
export default service
