import { message } from 'antd'
import axios from 'axios'

axios.defaults.baseURL = 'http://121.196.236.94:8080/api/v1'
// axios.defaults.baseURL = 'https://mock.apifox.cn/m1/2162389-0-default/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    console.log(error)
    if (error.response.status === 401) {
      // console.log(window)
      message.error('登录过期，请重新登录')
      // window.history.replaceState(null, '', '/login')
      // setTimeout(() => {
      //   // window.location.href = '/login'
      // }, 1000)
    }
    return Promise.reject(error)
  },
)

export const http = {
  get: <T extends {}>(path: string) => {
    return axios.get<T>(path, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDI2MywiZXhwIjoxNjY5MzI3NDc1fQ.-SbZ0-4J1rvUNQAazZ-IHH5cUS-s8gu7lkGWhFJD8gE'}`,
      },
    })
  },
  post: <T extends {}>(path: string, data: T) => {
    return axios.post<T>(path, data)
  },
  patch: () => {},
  delete: () => {},
}
